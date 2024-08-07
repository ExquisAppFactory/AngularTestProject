import {Column, Entity } from "typeorm";

type InvoiceStatus = 'Paid' | 'Ongoing' | 'Unpaid'| 'Unavailable'

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn('uuid')
    invoiceId: string;

    @Column()
    amount: string;

    @Column()
    status: string;
    
    @Column()
    subject: string;
}