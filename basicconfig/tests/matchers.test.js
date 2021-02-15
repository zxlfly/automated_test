// toBe()：严格相等相当于===
test('tobe',()=>{
    expect('tobe').toBe('tobe')
})
// toEqual()：内容相等，就可以通过测试
test('toEqual',()=>{
    const a ={x:1}
    expect(a).toEqual({x:1})
})
// - toBeNull()：只匹配null值
test('tonull',()=>{
    const a =null
    expect(a).toBeNull()
})
// - toBeUndefined()：匹配undefined
test('toBeUndefined',()=>{
    const a = undefined   
    expect(a).toBeUndefined()
})
// - toBeDefined()：只要定义过了，都可以匹配成功
test('toBeDefined',()=>{
    const a = '1'  
    expect(a).toBeDefined()
})
// - toBeTruthy()：真假匹配器，真的时候可以通过
test('toBeTruthy',()=>{
    const a = true
    expect(a).toBeTruthy()
})
// - toBeFalsy()：真假匹配器，假的时候可以通过
test('toBeFalsy',()=>{
    const a = false
    expect(a).toBeFalsy()
})
// - toBeGreaterThan()：大于传入的数值，就可以通过测试
test('toBeGreaterThan',()=>{
    const a = 10
    //a 得大于9
    expect(a).toBeGreaterThan(9)
})
// - toBeLessThan()：少于一个数字时，就可以通过测试。
test('toBeLessThan',()=>{
    const a = 8
    //a 得小于9
    expect(a).toBeLessThan(9)
})
// - toBeGreaterThanOrEqual()：大于等于期待数字时，可以通过测试
test('toBeGreaterThanOrEqual',()=>{
    const a = 10
    expect(a).toBeGreaterThanOrEqual(10)
})
// - toBeLessThanOrEqual()：小于等于期待数字时，可以通过测试
test('toBeLessThanOrEqual',()=>{
    const a = 10
    expect(a).toBeLessThanOrEqual(10)
})
// - toBeCloseTo()：消除JavaScript浮点精度错误的匹配器
test('toBeCloseTo',()=>{
    const one = 0.1
    const two = 0.2
    expect(one + two).toBeCloseTo(0.3)
})
// - toMatch()：字符串包含匹配器
test('toMatch',()=>{
   const a = '1,2,3,4,9'
    expect(a).toMatch('9')
})
// - toContain()：数组的匹配器
test('toContain',()=>{
    const arr=['a','s','d']
    const data = new Set(arr)
    expect(data).toContain('a')
})
// - toThrow()：异常进行处理的匹配器
const returnErrorFunc = ()=>{
    throw new Error('this is a new error')
}
test('toThrow匹配器',()=>{
    // toThrow 带参数的时候就需要抛出的和参数一样
    expect(returnErrorFunc).toThrow('this is a new error')
})
// - not：相反，取反
test('toThrow匹配器',()=>{
    expect(()=>{}).not.toThrow()
})