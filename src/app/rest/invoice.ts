export interface Invoice {
    id: string,
    creationDate: Date,
    completionDate: Date,
    paymentDeadline: Date,
    grandTotal : number,
    incoming : boolean,
    outgoing : boolean,
    partnersId : number,
    categoriesId : number
}