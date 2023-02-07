import Employee from "./Employee"

class Engineer extends Employee {
    github: string

    constructor(name:string, id:number|string, email:string, github:string) {
        super(name, id, email)
        this.github = github
    }
    getGithub():string {
        return this.github
    }
    getRole():string {
        return "Engineer"
    }
}
export default Engineer 