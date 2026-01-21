console.log("we are testing");
let username:String = "apple"; //explicitly declaring or external declaration.
//let username="apple"; //implicitly declaring.

console.log(username);

//Any type.
let name:any; //any datatype it will take.
name="apple";
name=true;
name=76;
console.log(typeof(name)); //type of last assigned value.

let cityname:String|Number|boolean; // union.
cityname="apple";
cityname=89;
cityname=true;
console.log(typeof(cityname)); //will give type of last assigned value.

const apple:{color:String,price:Number,discount:Boolean}={
    color:"red",
    price:90,
    discount:true
};//object type
console.log("fruit color:",apple.color);
console.log("fruit price:",apple.price);
console.log("fruit discount",apple.discount);

//Declaration of array in ts.
let cities = ["Pune","Chennai","Mumbai","Banglore"];
//cities=[10,20,30,40];
// cities[1]=55; will give error as implicitly it is raking it as a string.
cities[1]="Noida";

//shortand notation.
let city:string[]|number[]=["Pune","Chennai","Mumbai","Banglore"];
//city[1]=10;
city=[10,20,30,40]; //city takes both string and number. because it is explicitly declared.

//Generic notation.
let countries: Array<string|number>=["India","USA",50,60];
console.log(countries);
console.log(typeof(countries));
countries[1]=80;
console.log(countries);

//Any Type.
let dname:Array<any>=["Ajay",60,"Amit",70,true,{city:"pune"}];
console.log(dname);

//Tuple Declaration.--- A tuple is a typed array with a pre-defined length and types for each index
let empdetails:[string,number]=["Amit",90];//has fixed length of 2.
console.log(empdetails);
/*
empdetails[0]=90;
empdetails[1]="shi"

above lines gives error as tuple is immutable and we cannot change the type of indexed value in tuple.
*/


/*
Function return types in Ts.

1. void -- return nothing.
2. retutn type.
*/
function studentName(name:String):void{
    console.log("student name is:",name)

}
studentName("Anmol");

function addnumbers(a:number,b:number){
    return a+b;
}
console.log(addnumbers(6,7));

/* Special type.
1. any
2. undefined
3. never
*/

//undefined.
let stadium: undefined;
//stadium="kolkata"; gives error as stadium is set as undefined.
console.log(stadium);

//never type-- The never type represents the type of values that never occur or should never occur.
//When to use never: For functions that will never return a value
function failedtoConnect():never{
    throw new Error("connection failed.")
}
const DBconnection=()=>{
    try{
        console.log("DB connected");

    }
    catch(error){
        failedtoConnect()
    }
}
DBconnection();

//Arrow function.

//before arrow function.
function add(a:number,b:number){
    return a+b;
}
add(23,34);

console.log("Normal Function:",add(90,30));
//short code with arrow function.
let add1=(a:number, b:number)=>a+b;
console.log("Arrow function:",add1(20,30));
