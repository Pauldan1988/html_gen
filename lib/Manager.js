import Employee from "./Employee.js"

class Manager extends Employee{
    officeNumber

    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return "Manager"
    }
    
}
export default Manager