const today= new Date();
document.write(today);

document.write(today.getUTCDate());//get current date
document.write(today.getMonth()+1);//get current month. month starts from 0,1,2...
document.write(today.getFullYear());// get current year

//console.log(today.getTime());
document.write(today.getHours());
document.write(today.getMinutes());

//set date
today.setDate(26);
document.write(today);

//set hour
today.setHours(9);
today.setMonth(10);
document.write(today);

//Math Functions
const calculation=Math.min(10,60)
document.write(" min calculation:"+calculation);

const maxcalculation=Math.max(10,60)
document.write(" min calculation:"+maxcalculation);


// OBJECTS IN JS.
const test=["apple","mango","grapes",true,66];
document.write(test[2]); //op: grapes.

const capitals={
    india:"new delhi",
    maharashtra:"mumbai",
    up:"lucknow",

    location: function(){
        return ("I work in: "+this.maharashtra);
    }



}
document.write(capitals.india);
document.write(capitals.location);

capitals.maharashtra = "pune";
document.write(capitals.maharashtra);