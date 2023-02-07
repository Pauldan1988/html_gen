//@ts-check
import Intern from "../lib/Intern"

const Wendy = new Intern("Wendy", 400, "Wendy@gmail.com", "ASU")

test("Employee has name", () => {
    expect(Wendy.name).toBe("Wendy")
    expect(Wendy.id).toBe(400);
    expect(Wendy.email).toBe("Wendy@gmail.com");
    expect(Wendy.school).toBe("ASU");
})  