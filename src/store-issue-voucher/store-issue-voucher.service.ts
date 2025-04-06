import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateStoreIssueVoucherDto } from './dto/create-store-issue-voucher.dto';
import { UpdateStoreIssueVoucherDto } from './dto/update-store-issue-voucher.dto';

@Injectable()
export class StoreIssueVoucherService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStoreIssueVoucherDto) {
    return await this.prisma.storeIssueVoucher.create({ data });
  }

  async findAll() {
    return await this.prisma.storeIssueVoucher.findMany({
      include: {
       
        total: true,
      },
    });
  }

  async findOne(id: number) {
    const voucher = await this.prisma.storeIssueVoucher.findUnique({
      where: { id },
      include: {
      
      StoreIssueVoucherItem:true,
      total:true

      },
    });

    console.log(voucher)
    if (!voucher) {
      throw new NotFoundException('Store Issue Voucher not found');
    }
    return voucher;
  }

  async update(id: number, data: UpdateStoreIssueVoucherDto) {
    return await this.prisma.storeIssueVoucher.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.storeIssueVoucher.delete({
      where: { id },
    });
  }
}
