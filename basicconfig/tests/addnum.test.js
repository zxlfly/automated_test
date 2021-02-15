const {addnum1,addnum2} = require("../src/addnum.js")
test('addnum1-1',()=>{
    expect(addnum1(1)).toBe(2)
})
test('addnum2-1',()=>{
    expect(addnum2(1)).toBe(3)
})