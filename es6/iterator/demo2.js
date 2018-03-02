var obj = {
  data: [1,2,3],
  [Symbol.iterator](){
    let index = 0;
    let _this = this;
    return {
      next(){
        if(index<_this.data.length){
          console.log(_this.data[index])
          return {
            done: false,
            value: _this.data[index++]
          }
        }else{
          return {
            done: true,
            value: undefined
          }
        }
      }
    }
  }
};
var a = obj[Symbol.iterator]();
console.log(a.next())
a.next()
a.next()
for(item of obj){
  console.log(item)
}