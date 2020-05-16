export class Reimbursement {

    reimb_id: number | null;
    amount: number;
    submitted: Date;
    resolved: Date | null;
    description: string;
    author_id: number;
    resolver_id: number;
    reimb_status_id: string;
    reimb_type_id: string;

    constructor (reimb_id: number | null, amount: number, submitted: Date, resolved: Date | null, description: string, author_id: number, resolver_id: number, reimb_status_id: string, reimb_type_id: string){
        this.amount = amount;
        this.submitted = submitted;
        this.description = description;
        this.author_id = author_id;
        this.reimb_type_id = reimb_type_id;
        this.resolver_id = resolver_id;
        this.reimb_status_id = reimb_status_id;
        this.reimb_id = reimb_id || null;
        this.resolved = resolved || null;
    }
}