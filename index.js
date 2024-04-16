// toggle
function toggle() {
    var button =document.querySelector(".toggle-button");
if(button.innerHTML==='Toggle Off'){
    button.innerHTML='Toggle On';
} else{
    button.innerHTML ='Toogle Off';
}

}

// VALIDATE PHONE NUMBER REGEX
function validate() {
    var text1 =document.getElementById("Phone1").value;
    var text2 =document.getElementById("email").value;
     
    // phone number validation
    var regx1= /^\d{11}$/; 
    // email validation
    var regex2 =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,10})$/
// var regx = /[7-9]\d{9}/;
// var regx =/EOO/;
if(regx1.test(text1)&&regex2.test(text2))
{
    document.getElementById("Ph2").innerHTML="Valid";
    document.getElementById("Ph2").style.visibility="visible"
    document.getElementById("Ph2").style.color="green";
    
    document.getElementById("Em2").innerHTML="Valid";
    document.getElementById("Em2").style.visibility="visible"
    document.getElementById("Em2").style.color="green";



}else{
    document.getElementById("Ph2").innerHTML="Invalid";
    document.getElementById("Ph2").style.visibility="visible"
    document.getElementById("Ph2").style.color="red";

    document.getElementById("Em2").innerHTML="Invalid";
    document.getElementById("Em2").style.visibility="visible"
    document.getElementById("Em2").style.color="red";

}

}






// under function
// name function example
//  function greet(name1, name2){
//     console.log(`i love u ${name1} and ${name2}`)
//  }
// greet("george", "tunde")
 
// annonymous function they are declare without a name, they are call back function or immediately invoked
//  const talk = function(name) {
// console.log(`hello ${name}`)   this is similar to console.log("hello" +name)
//  }
// talk("micheal")

// Arrow function: they have concise syntax, they are annonymous by default. does not need the return statement
// const greetings = (name) => `Hello ${name}`
// greetings("funmi")

// Function hoisting declaring a function before calling it

// OBJECT ORIENTATION PROGRAMMING (OOP): based on object(contain data), organize code into objects that interacts with each other, object contains method 
// class==> Object ==> instances of that class.
// inheritance allows you to inherit properties and methods of another class, it promotes codes reuse


// const Asia = {
//     country: ['china', 'north k', 'south k', 'japan'],
//     language:['mandarin', 'japanese', 'sk', 'nk', ]
// }
// Polymorphism allow Object of different class to be tretaed as object of a common super class 
// its allow for flexibility and extensibility of your software design  


// Inheritance and Prototypes 
// prototypes allow objects to inherit properties and object from another class,
// inheritance allow you to be able to inherit properties and methods from another class and it allow us to resuse create heirachy in classes
// const person={
//     great(){
//         console.log('hello')
//     }

// }
// const John = object.create(person)
// John.great()

// OBJECT DESTRUCTURING

// const person = {
//     firstname: 'tunde',
//     lastname: 'jude',
//     age: 30,
//     address: {
//         city: "new york",
//         country: "USA",
//         Area: function(){
//            return console.log("this is" +Area)
//             // return `${this.city}, ${this.country}`
//         }

//        }


//  }
// // is the same as

// //   DESTRUCTURING assignment
// const {firstname, lastname, age,address:{city,country,Area}} = person;
// console.log(firstname)
// console.log(lastname)
// console.log(city)



// JSON Practice

// when converting jason to string 
// const state = {

//     lagos: "ikeja",
//     Adamawa: "Umahai",
//     Kaduna: "Zaria"
// }


// const statestrngfy = JSON.stringify(state)
// console.log(statestrngfy)


// converting nested JSON TO String
// const employee = {
//     name: "Alice",
//     age: 25,
//     department: {
//         name: "Engineering",
//         location: "New York"
//     },
//     projects: ["Project 1", "Project 2"]
// }
// const Estrgnfy= JSON.stringify(employee)
// console.log(Estrgnfy)

// STORING DATA LOCALLY WITH JASON
// localStorage.setItem("person","Estrgnfy")
// GETTING DATA LOCALLY WITH JASON
// const storejsnstring = localStorage.getItem('person') 
// advisable we use key
// CONVERTING JASON STRING BACK TO OBJECT(OREGINAL FORMAT)
// const storePerson = JSON.parse(Estrgnfy)
// console.log(storePerson, "retrieved")


// REGEX

// Pattern and METACHARACTER
// const regex = /^hello/
// console.log(regex.test("hello world"))

// GROUPING AND CAPTURING
//  we want to match a date format "YYYY-MM-DD"

// const regex2 = /(\d{4})-(\d{2})-(\d{2})/

// const dateStr = "2024-04-07"

// const match = dateStr.match(regex2);
// console.log(match)
// if (match){
//     const [fullDate, year,month, day] =match
//     console.log("FullDate: ",fullDate);
//     console.log("Year: ",year);
//     console.log("Month: ",month);
//     console.log("Day: ",day);

// }else{
//     console.log("Invalid Date Format");

// }

// QUANTIFIER AND CHARACTER CLASS
// const regex3 = /\d\w+/
// console.log(regex3.test("abc123"))





// let  slideIndex =0;
// showSlides();

// function showSlides(){
//     let slides=document.getElementsByClassName("slide fade");
//     for(let i=0; i<slides.length;i++){
//         slides[i].computedStyleMap.display = "none";
//     }
//     slideIndex++;
//     if(slideIndex>slides.length){slideIndex=1}
//     slides[slideIndex-1].computedStyleMap.display ="block";
//     setTimeout(showSlides,2000); //change image every two seconds
// }





