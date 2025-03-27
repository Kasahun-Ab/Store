import { Injectable } from '@nestjs/common';
import { ReferanceSccService } from 'src/reference-scc/reference-scc.service';
import { GrnItemService } from 'src/grnitem/grnitem.service';
import { GrnService } from 'src/good-reciving-note/good-reciving-note.service';
import { StockInService } from 'src/stock-in/stock-in.service';
import { SccService } from 'src/scc/scc.service';
import { StockBalanceService } from 'src/stock-balance/stock-balance.service';
import { CreateAddtostockDto } from './dto/create-addtostock.dto';

@Injectable()
export class AddtostockService {
    constructor(
        private scc:SccService,
        private ref:ReferanceSccService,
        private grn:GrnService,
        private stockIn:StockInService,
        private stockBalance:StockBalanceService,
    ) {}



    
  async create(createAddtostockDto:CreateAddtostockDto ) {
  
    //find  the grn by the  id that passed  from the  controller
    const grn = await this.grn.findOne(createAddtostockDto.id);
  
    if (!grn) {
    throw new Error('Grn not found');
     }
  console.log(grn)

    //check if the grn is approved
     if(
        grn.approvement?.checked_by_id===null && 
        grn.approvement?.received_by_id===null && 
        grn.approvement?.prepared_by_id===null
    ){
        throw new Error('Grn is not approved');
     }




        for (let i = 0; i < grn.grn_items.length; i++) {

            const element = grn.grn_items[i];
            
            const scc = await this.scc.findbyIyemName(element.item.name);
         
            if (!scc) {
                throw new Error('Scc not found');
            }
            const ref = await this.ref.create({
                scc_id: scc.id,
                date: new Date(),
                grn_id: grn.id,
                iv_id: null,
                unit_measurement_id: element.unit_measurement_id,
                stock_in_key: null,
                stock_out_key: null,
                stock_balance_key: null
            });

       const last_total_stockBalance=await this.stockBalance.findbyLastStockBalance();

               
       if(!last_total_stockBalance){
// if the stock balance is empty
        const stockIn = await this.stockIn.create({
            ref_key: ref.id,
            quantity: element.quantity_received,
            unit_price: element.unit_price,
            total_price: element.total_item_price,
        });
            const stockBalance=     await this.stockBalance.create({
                    unit_price: element.unit_price,
                    quantity: element.quantity_received,
                    last_stock_balance:true,
                    ref_key: ref.id,
                    total_price: element.total_item_price,
                 }) 

                 return stockBalance
                } 


                ///if the stock balance is not empty

            const stockIn = await this.stockIn.create({
                ref_key: ref.id,
                quantity: element.quantity_received,
                unit_price: element.unit_price,
                total_price: element.total_item_price,
            });


            const new_stockBalance_=await this.stockBalance.create(
                
                {   unit_price: element.unit_price ,
                    quantity: last_total_stockBalance.quantity+element.quantity_received,
                    last_stock_balance:true,
                    ref_key: ref.id,
                    total_price: element.total_item_price,
                }
            
            );
            
   const  update_stockBalance=await this.stockBalance.update(last_total_stockBalance.id,{
     last_stock_balance:false,
        }
    )
}

    //find the grn item by the 
    
return "sock in and stock balance created successfully"
  }

}
