var Person = function({
  name,
  sex,
  age
}) {
  if(this instanceof Person){
    this.name = name
    this.sex = sex
    this.age = age
  }else{
    return new Person({
      name,
      sex,
      age
    })
  }
}
var a=new Person({name:'shibin',sex:'boy',age:'10'})
console.log(a.name)
console.log(a.age)
console.log(a.sex)
var b= Person({name:'shibin',sex:'boy',age:'10'})
console.log(b.name)
console.log(b.age)
console.log(b.sex)
