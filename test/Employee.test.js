const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");


test( "Is Employee an object", () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});


test('can we set name property?', ()=>{
    const name = "Andy";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})


test('can we set id property?', ()=>{
    const id = 10;
    const e = new Employee("John Doe", id );
    expect(e.id).toBe(id);
})

test('can we set email property?', ()=>{
    const email = 'test@test.com';
    const e = new Employee("John Doe", 200, email );
    expect(e.email).toBe(email);
})


test('get name using getName()', ()=>{
    const testVal = 'Luis';
    const e = new Employee(testVal);
    expect(e.getName()).toBe(testVal)
})


test('get id using getId()', ()=>{
    const testVal = 70;
    const e = new Employee('April', testVal);
    expect(e.getId()).toBe(testVal)
})

test('get email using getEmail()', ()=>{
    const testVal = 'email@test.com';
    const e = new Employee('April', 600, testVal);
    expect(e.getEmail()).toBe(testVal)
})