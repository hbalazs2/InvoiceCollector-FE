export interface Invoice {
    id: string,
    creationDate: Date,
    completionDate: Date,
    paymentDeadline: Date,
    grandTotal : number,
    isIncoming : boolean,
    isOuGoing : boolean,
    partnersId : number,
    categoriesId : number
}