// javascrpt variables

var fullname='Krishila poudel';
let address='kathmandu,Nepal';
const bloodgroup='A+';

console.log('fullname:',fullname);
console.log('address:',address);
console.log('bloodgroup:',bloodgroup);

// data types

let name='Krishila'; //string
let age=18; //number
let isstudent=false; //boolean
let hoobies=['coding','Traveling','cooking']; //array

console.log(hoobies[0]);

let user={
    name:'Krishila',
    age:18,
    isstudent:false,
    hoobies:['coding','Traveling','cooking'],
}; //object

console.log(user['name']);
console.log(user.age);

//function
function greet(name){
    console.log('Welcome',name);
}
greet('krishila');

//dom manipulation

const headingElementById=document.getElementById('heading-2');
console.log('headingElement by id',headingElementById);

const headingElementByQuery = document.querySelector("#heading-2");
console.log('headingElement by Query',headingElementByQuery);

headingElementByQuery.textContent='Get element by query selector';
headingElementByQuery.style.color='blue';

const buttonElement=document.querySelector('.btn');

buttonElement.addEventListener('click',function(){
    alert('button clicked');
    console.log('button clicked');
})
