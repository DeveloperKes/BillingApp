export interface InvoiceDetailPayload {
    productId: number,
    quantity: number,
    notes: string
}

export interface InvoiceDetail {
    id: number,
    invoiceId: number,
    productId: number,
    productName: string,
    quantity: number,
    unitPrice: number,
    subTotalPrice: number,
    notes: string
}