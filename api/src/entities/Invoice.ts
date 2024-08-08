import {Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export type InvoiceStatus = 'Paid' | 'Ongoing' | 'Unpaid'| 'Unavailable'

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn('uuid')
    invoiceId: string;

    @Column()
    userId: string;

    @Column()
    amount: string;

    @Column()
    status: string;
    
    @Column()
    subject: string;
}