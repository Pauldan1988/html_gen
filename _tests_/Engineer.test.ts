//@ts-check
import Engineer from "../lib/Engineer"

const Jacob = new Engineer("Jacob", 200, "Jacob235@gmail.com", "Jacob235")

test("Employee has name", () => {
    expect(Jacob.name).toBe("Jacob")
    expect(Jacob.id).toBe(200);
    expect(Jacob.email).toBe("Jacob235@gmail.com");
    expect(Jacob.github).toBe("Jacob235")
})  