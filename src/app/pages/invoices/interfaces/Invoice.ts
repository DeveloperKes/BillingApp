import { InvoiceDetail } from "./InvoiceDetail";

export interface InvoicePayload {
    clientId: number;
    invoiceNumber: number;
    invoiceDetails: InvoiceDetail[]
}