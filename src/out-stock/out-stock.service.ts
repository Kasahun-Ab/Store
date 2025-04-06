import { Injectable } from '@nestjs/common';
import { CreateOutStockDto } from './dto/create-out-stock.dto';
import { PrismaService } from 'prisma/prisma.service';
import { SrnService } from 'src/srn/srn.service';
import { ReferanceSccService } from 'src/reference-scc/reference-scc.service';
import { SccService } from 'src/scc/scc.service';
import { StockBalanceService } from 'src/stock-balance/stock-balance.service';
import { StockOutService } from 'src/stock-out/stock-out.service';

@Injectable()
export class OutStockService {
  constructor(private prisma: PrismaService,
    private srn:SrnService,
    private stockout:StockOutService,
    private last_stock_balance:StockBalanceService,
    private ref:ReferanceSccService,
    private scc:SccService
  ){}

 async  create(createOutStockDto: CreateOutStockDto,) {
   
    const srn =  await this.srn.findOne(createOutStockDto.id);

    if(!srn){
      return 'Item not found';
    }


    if (srn.approvement.checked_by_id === null && srn.approvement.prepared_by_id === null && srn.approvement.received_by_id === null) {
      return 'SRN not yet approved';
    }
  
  
    for  (
    let i = 0; i < srn.srn_items.length; i++
  ){
    const element = srn.srn_items[i];
         
    // const scc = await this.scc.findbyIyemName(element.item.name);
    
  //   if (!scc) {
  //     throw new Error('Scc not found');
  // }

  // const ref = await this.ref.create({
  //     scc_id: scc.id,
  //     date: new Date(),
  //     grn_id: null,
  //     iv_id: srn.id,
  //     unit_measurement_id: element.unit_measurement_id,
  //     stock_in_key: null,
  //     stock_out_key: null,
  //     stock_balance_key: null
  // });

  const last_stock_balance= await this.last_stock_balance.findbyLastStockBalance();
  
  if( last_stock_balance===null ){
    throw Error("there are no stock balance");
  }
 

  if (last_stock_balance.quantity>0 && last_stock_balance.quantity>=element.quantity){

    const stock_out= await  this.stockout.create(
      {
      unit_price:last_stock_balance.unit_price ,
  
      quantity:last_stock_balance.quantity-element.quantity,
      ref_key: 2,
      total_price: last_stock_balance.unit_price*element.quantity
      }
    )

    return "Stock out Successfully"
  }



throw Error("The  stock Quantity Zero or  less than with SRN quantity")


  }


  



    return 'This action adds a new outStock';


  }

 
}
