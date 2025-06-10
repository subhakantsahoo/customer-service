import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../entities/customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Customer> {
    return this.customerService.findOne(+id);
  }

  @Post()
  create(@Body() customer: Partial<Customer>): Promise<Customer> {
    return this.customerService.create(customer);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() customer: Partial<Customer>): Promise<Customer> {
    return this.customerService.update(+id, customer);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.customerService.remove(+id);
  }

  @Post('checkout')
  checkout(@Body() orderData: any): Promise<any> {
    return this.customerService.checkout(orderData);
  }

  @Get('orders/history')
  getOrderHistory(@Param('customerId') customerId: string): Promise<any> {
    return this.customerService.getOrderHistory(customerId);
  }
}
