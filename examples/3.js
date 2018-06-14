function SuperClass(id){
  this.books=['javascript','css','html']
  this.id=id
}
SuperClass.prototype.getBooks=function(){
  console.log(this.books)
}
// var SubClass=function(){}
//  SubClass.prototype=new SuperClass()
// var class1=new SubClass()
// var class2=new SubClass()
// class1.books.push('设计模式')
// console.log(class2.books)
function SubClass(){
  SuperClass.call(this,'123')
}
SubClass.prototype=new SuperClass()
var class1=new SubClass()
var class2=new SubClass()
class2.getBooks()
class1.books.push('设计模式')
console.log(class1.books)
console.log(class2.books)
console.log(class2.id)
