//@ts-check
import Employee from "../lib/Employee"

const Phil = new Employee("Phil", 300, "Phil1224@gmail.com")

test("Employee has name", () => {
    expect(Phil.name).toBe("Phil")
})
test("Employee has an ID", () => {
    expect(Phil.id).toBe(300);
})
test("Employee has an E-Mail", () => {
    expect(Phil.email).toBe("Phil1224@gmail.com");
})