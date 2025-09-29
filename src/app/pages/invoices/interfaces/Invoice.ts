import { InvoiceDetail, InvoiceDetailPayload } from "./InvoiceDetail";

export interface InvoicePayload {
    clientId: number;
    invoiceNumber: number;
    invoiceDetails: InvoiceDetailPayload[]
}

export interface Invoice {
    id: number,
    invoiceDate: Date,
    clientName: string,
    clientType: string,
    invoiceNumber: number,
    totalItems: number,
    subTotalAmount: number,
    taxAmount: number,
    totalAmount: number,
    invoiceDetails: InvoiceDetail[]
}