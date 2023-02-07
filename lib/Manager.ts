import Employee from "./Employee"

class Manager extends Employee{
    officeNumber:number|string

    constructor(name:string, id:number|string, email:string, officeNumber:number|string) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole():string {
        return "Manager"
    }
    
}
export default Manager  