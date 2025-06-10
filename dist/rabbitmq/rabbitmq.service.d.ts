import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
export declare class RabbitMQService implements OnModuleInit, OnModuleDestroy {
    private connection;
    private channel;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
