export class Reimbursement {

    id: number | null;
    amount: number;
    submitted: Date;
    resolved: Date | null;
    description: string;
    author: number;
    resolver: number | null;
    status: string;
    type: string;

    constructor (amount: number, submitted: Date, description: string, author: number, status: string, type: string){
        this.id = null;
        this.amount = amount;
        this.submitted = submitted;
        this.resolved = null;
        this.description = description;
        this.author = author;
        this.type = type;
        this.resolver = null;
        this.status = status;
    }
}