import { CustomerService } from '../services/customer.service';
import { Customer } from '../entities/customer.entity';
export declare class CustomerController {
    private readonly customerService;
    constructor(customerService: CustomerService);
    findAll(): Promise<Customer[]>;
    findOne(id: string): Promise<Customer>;
    create(customer: Partial<Customer>): Promise<Customer>;
    update(id: string, customer: Partial<Customer>): Promise<Customer>;
    remove(id: string): Promise<void>;
}
