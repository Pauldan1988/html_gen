//@ts-check
import Employee from "../lib/Employee"

const Phil = new Employee("Phil", 300, "Phil@gmail.com")

test("Employee has name", () => {
    expect(Phil.name).toBe("Phil") 
    expect(Phil.id).toBe(300);
    expect(Phil.email).toBe("Phil@gmail.com");
})  