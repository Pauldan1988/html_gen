import Employee from "./Employee.js"

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
export default Intern   