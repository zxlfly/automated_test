import {fetchData,fetchDataPromise} from "../fetchs"
// 回到函数的方式
// 保证我们的回调已经完成了,必须加入一个done方法
test('fetchData', (done) => {
    fetchData((data) => {
        expect(data).toEqual({ data: 6666 })
        done()
    })
})
// promise的方式
// 需要一个return
test('fetchDataPromise', () => {
    return  fetchDataPromise().then((response)=>{
        expect(response).toEqual({ data: 6666 })
    })
})
// async...await...
test('fetchDataPromise', async()=>{
    const response  = await fetchDataPromise()
    expect(response).toEqual({
        data: 6666
    })
})
test('fetchDataPromise2', async()=>{
    //resolves把现有对象转换成Promise对象，
    //toMatchObject 匹配对象中的属性
    await expect(fetchDataPromise()).resolves.toMatchObject({
        data: 6666
    })
})
