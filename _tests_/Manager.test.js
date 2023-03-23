//@ts-check
const Manager = require("../lib/Manager.cjs")

const William = new Manager("William", 100, "William@gmail.com", 1005)

test("Employee has name", () => {
    expect(William.name).toBe("William")
    expect(William.id).toBe(100);
    expect(William.email).toBe("William@gmail.com");
    expect(William.officeNumber).toBe(1005);
}) 