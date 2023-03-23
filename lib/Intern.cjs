const Employee = require("./Employee.cjs")

class Intern extends Employee{
    school

    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }
    
}
module.exports = Intern 
// export default Intern