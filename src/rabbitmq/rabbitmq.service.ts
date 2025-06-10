import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as amqp from 'amqplib';
import { CustomerService } from '../services/customer.service';

@Injectable()
export class RabbitMQService implements OnModuleInit, OnModuleDestroy {
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  constructor(private readonly customerService: CustomerService) {}

  async onModuleInit() {
    this.connection = await amqp.connect('amqp://localhost');
    this.channel = await this.connection.createChannel();
    await this.channel.assertExchange('order_exchange', 'fanout', { durable: true });

    const q = await this.channel.assertQueue('', { exclusive: true });
    await this.channel.bindQueue(q.queue, 'order_exchange', '');

    this.channel.consume(q.queue, async (msg) => {
      if (msg !== null) {
        const order = JSON.parse(msg.content.toString());
        console.log('Received order:', order);
        // Update customer order history here
        await this.customerService.checkout(order);
        this.channel.ack(msg);
      }
    });
  }

  async onModuleDestroy() {
    await this.channel.close();
    await this.connection.close();
  }
}
