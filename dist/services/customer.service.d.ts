import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<Customer>);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(customer: Partial<Customer>): Promise<Customer>;
    update(id: number, customer: Partial<Customer>): Promise<Customer>;
    remove(id: number): Promise<void>;
}
