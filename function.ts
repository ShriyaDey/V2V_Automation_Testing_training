function user():number{
    return a;
}
let a=60;
console.log(user());

//function expression.
const addnum=function(c:number,d:number){
    return c+d;
}
addnum(55,65);

//optional parameters. -- declared with ? this means optional parameter.

const product=(title:string,price:number,discount?:boolean)=>{
    return `the product is ${title} and price is ${price} and discount is ${discount}`
}
product("milk",34,true); // can pass discount parameter or can leave.
console.log(product("flower",89));