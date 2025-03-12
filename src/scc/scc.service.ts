import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateSccDto } from './dto/create-scc.dto';
import { UpdateSccDto } from './dto/update-scc.dto';
import { Scc } from '@prisma/client';

@Injectable()
export class SccService {
  constructor(private prisma: PrismaService) {}

  // Create a new SCC item
  async create(createSccDto: CreateSccDto): Promise<Scc> {
    return this.prisma.scc.create({
      data: {...createSccDto},
    });
  }

  // Get all SCC items
  async findAll(): Promise<Scc[]> {
    return this.prisma.scc.findMany();
  }

  // Get a single SCC item by ID
  async findOne(id: number): Promise<Scc> {
    const sccItem = await this.prisma.scc.findUnique({ where: { id } });
    if (!sccItem) {
      throw new NotFoundException(`SCC item with ID ${id} not found`);
    }
    return sccItem;
  }

  // Update an SCC item by ID
  async update(id: number, updateSccDto: UpdateSccDto): Promise<Scc> {
    const existingItem = await this.prisma.scc.findUnique({ where: { id } });
    if (!existingItem) {
      throw new NotFoundException(`SCC item with ID ${id} not found`);
    }

    return this.prisma.scc.update({
      where: { id },
      data: {
        ...updateSccDto,
      },
    });
  }

  // Delete an SCC item by ID
  async remove(id: number): Promise<Scc> {
    const existingItem = await this.prisma.scc.findUnique({ where: { id } });
    if (!existingItem) {
      throw new NotFoundException(`SCC item with ID ${id} not found`);
    }

    return this.prisma.scc.delete({ where: { id } });
  }
}