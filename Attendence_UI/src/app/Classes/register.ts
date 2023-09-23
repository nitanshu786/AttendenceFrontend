export class Register {
    username:string;
    email:string;
    confirm:string;
    passwordHash:any;

    constructor() {
       this.username="";
       this.email="" ;
       this.confirm="";
       this.passwordHash="";
    }
}
