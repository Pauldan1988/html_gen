class Employee{
    name: string
    id: number|string
    email: string

    constructor(name:string, id:number|string, email:string) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName():string {
        return this.name
    }
    getId():number|string {
        return this.id
    }
    getEmail():string {
        return this.email
    }
    getRole():string {
        return "Employee"
    }

}
export default Employee  