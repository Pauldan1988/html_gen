//@ts-check
const Engineer = require("../lib/Engineer.cjs")



test("Employee has name", () => {
    let engineer = new Engineer("Jacob", 200, "Jacob235@gmail.com", "Jacob235")
    
    
    
    expect(engineer.name).toBe("Jacob")
    expect(engineer.id).toBe(200);
    expect(engineer.email).toBe("Jacob235@gmail.com");
    expect(engineer.github).toBe("Jacob235")
})  

