const name = 'zhangsan';
const age = '14';
const sex = 'male';

let options = {
	name,
	age,
	sex: 'female',
	getName(){
		return this.name
	},
	getAge: function(){
		return this.age
	},
	getSex: ()=>this.sex,
	getRealSex: ()=>options.sex
};
var add = ()=>this;
console.log(options.getName())
console.log(options.getAge())
console.log(options.getSex())
console.log(options.getRealSex())


const person = {
    name: 'tom',
    getName: function() {
        return () => this.name
    }
}
console.log(person.getName()())

/*

箭头函数中没有this，指向undefined
 */