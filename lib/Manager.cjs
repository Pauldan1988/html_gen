const Employee = require("./Employee.cjs")

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
module.exports = Manager
// export default Manager