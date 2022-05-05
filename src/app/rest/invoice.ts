export interface Invoice {
    id: string,
    creationDate: Date,
    completionDate: Date,
    paymentDeadline: Date,
    grandTotal : number,
    incoming : boolean,
    outgoing : boolean,
    partnerName : string,
    category : string
}