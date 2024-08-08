import { Request, Response } from 'express';
import { ResponseService } from "../helper";
import { createInvoice, deleteInvoiceById, getInvoiceById, getInvoices, updateInvoiceById } from "./invoice.service";

const responseService = new ResponseService();

export const createInvoiceController = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId as string;
    try {
        const { subject, amount } = req.body;

        if (!subject || !amount) {
            throw new Error("Field cannot be empty");
        }

        await createInvoice({
            userId: userId,
            amount: amount,
            status: "Unpaid",
            subject: subject
        });

        responseService.resolve(res, "Created successfully", null, 201);
    } catch (error: any) {
        responseService.reject(res, error);
    }
};

export const getInvoicesController = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId as string;
    try {
        const invoices = await getInvoices(userId);

        responseService.resolve(res, "Retrieved successfully", invoices, 200);
    } catch (error: any) {
        responseService.reject(res, error);
    }
};

export const getInvoiceByIdController = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId as string;
    const { invoiceId } = req.params;
    try {
        const invoice = await getInvoiceById({ invoiceId, userId });
        responseService.resolve(res, "Retrieved successfully", invoice, 200);
    } catch (error: any) {
        responseService.reject(res, error);
    }
};

export const updateInvoiceController = async (req: Request, res: Response): Promise<void> => {
    const { invoiceId } = req.params;
    const userId = req.user?.userId as string;
    const { amount, status, subject } = req.body;
    try {
        await updateInvoiceById({
            invoiceId: invoiceId,
            userId: userId,
            amount: amount,
            status: status,
            subject: subject
        });

        responseService.resolve(res, "Successful", null, 200);
    } catch (error: any) {
        responseService.reject(res, error);
    }
};

export const deleteInvoiceController = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId as string;
    const { invoiceId } = req.params;
    try {
        await deleteInvoiceById({ invoiceId, userId });
        responseService.resolve(res, "Deleted successfully", null, 200);
    } catch (error: any) {
        responseService.reject(res, error);
    }
};
