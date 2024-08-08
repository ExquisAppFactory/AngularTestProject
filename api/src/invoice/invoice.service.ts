import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Invoice, InvoiceStatus } from "../entities/Invoice";

const invoiceRepository: Repository<Invoice> =
  AppDataSource.getRepository(Invoice);

interface InvoiceDto {
  userId: string;
  amount: string;
  status: InvoiceStatus;
  subject: string;
}

interface UpdateInvoiceDto extends InvoiceDto {
  invoiceId: string;
}

export const createInvoice = async (invoiceDetails: InvoiceDto) => {
  try {
    const newInvoice = new Invoice();
    newInvoice.amount = invoiceDetails.amount;
    newInvoice.status = invoiceDetails.status;
    newInvoice.subject = invoiceDetails.subject;
    newInvoice.userId = invoiceDetails.userId;

    await invoiceRepository.save(newInvoice);
  } catch (error) {
    throw new Error(error);
  }
};

export const getInvoices = async (userId: string) => {
  return await invoiceRepository.find({ where: { userId } });
};

export const getInvoiceById = async ({
  invoiceId,
  userId,
}: {
  invoiceId: string;
  userId: string;
}) => {
  return await invoiceRepository.findOne({ where: { invoiceId, userId } });
};

export const updateInvoiceById = async (invoiceDetails: UpdateInvoiceDto) => {
 try{ const { userId, subject, status, amount, invoiceId } = invoiceDetails;
  const existingInvoice = await getInvoiceById({ userId, invoiceId });
  if (!existingInvoice) {
    throw new Error(`invoice not found`);
  }
  existingInvoice.amount = amount;
  existingInvoice.status = status;
  existingInvoice.subject = subject;
  await invoiceRepository.update(invoiceId, existingInvoice);
} catch(error){
    throw new Error(error)
}
};

export const deleteInvoiceById = async ({
  invoiceId,
  userId,
}: {
  invoiceId: string;
  userId: string;
}) => {
    try {
        const invoice = await getInvoiceById({invoiceId, userId})
        await invoiceRepository.delete(invoice)
    } catch (error) {
        throw new Error(error)
    }

};
