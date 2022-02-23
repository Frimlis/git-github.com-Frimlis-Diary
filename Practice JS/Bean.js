function beanCounting(bean,whatCount) {
    let numberBean = 0;
    let count = 0;
while (bean.length>=numberBean) {
 if (bean[numberBean]===whatCount) {
     count=count+1;
 }
    numberBean=numberBean+1;    
}
return count;
}
console.log(beanCounting('BarBarbarBbBB','B'))