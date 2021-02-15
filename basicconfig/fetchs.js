export const fetchData = (fn)=>{
    setTimeout(() => {
        fn({ data: 6666 })
    }, 1000)
}
export const fetchDataPromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({ data: 6666 })
        }, 1000)
    })
}