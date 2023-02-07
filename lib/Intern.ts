import Employee from "./Employee"

class Intern extends Employee{
    school:string

    constructor(name:string, id:number|string, email:string, school:string) {
        super(name, id, email)
        this.school = school
    }
    getSchool():string {
        return this.school
    }
    getRole():string {
        return "Intern"
    }
    
}
export default Intern   