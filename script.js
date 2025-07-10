// Data Type
// 1 String e.g 'Hello World'
// 2 Number e.g 2, 4.5
// 3 Int    e.g whole number (integer)
// 4 Float  e.g a number with a point
// 5 Boolean e.g true or false
// 6 Big Int e.g big numbers (13613645748613873197378386)
// 7 Object  e.g let car={name:'camry'color:'yellow'}
// 8 Array   e.g let fruit=['mango','carrot']


// How not to create a variable

// 2name='david'
// -name='david'
// 223='david'
// name$='david'

// How to create a variable
// name='david'
// name2='leye'
// Name='david' Pascal casing 
// name_='amaka'
// _name='friday'
// firstName='Eric' Camel casing
// Number=2
// is_valid=true
// __init__=true Dunder variable

// Declaring variables
// var name='david'
// alert(Name)

// var Name='Leye'
// alert(Name)

// let school='lasop'
// alert(lasop)

// school='las'
// alert(school)

// const pie=3.142


// Outputting javascript
// alert()
// document.write()
// document.getElementById()
// console.log()


// Let fruit='Mango'
// document.write(fruit)

// let pres='Bola Ahmed Tinubu'
// console.log(pres)
// document.getElementById('lasop').innerHTML=pres

// let question=prompt('what is your name?')
// document.getElementById('lasop').innerHTML=question


// let addition=4+4+5
// console.log(addition)
// document.getElementById('lasop').innerHTML=addition

// let gender='Male'
// let gen=typeof(gender)
// console.log(gender)

// let m=45
// let n=typeof(m)
// console.log(n)

// let is_student=true
// let check=typeof(is_student)
// console.log(check)


// String Concatenation - This is a method of joining strings and variables
// let firstName='John'
// let lastName='Doe'
// let age=32
// let profile='My name is ' + firstName + ' ' + lastName + '. I am ' + age + 'year old'
// document.getElementById('lasop').innerHTML=profile


// let club='Liverpool'
// let names='Mohammed'
// let namez='Sallah'
// let number=7
// let player=names + ' ' + namez + ' wears jersey number ' + number + ' for ' + club
// console.log(player)


// Louis Hamilton Mercedez Formula    Louis Hamilton drives a Mercedez Benz car in Formula 1 race   h3


// let sport='Formula 1 Race'
// let names='Louis'
// let namez='Hamilton'
// let car='Mercedez Benz'
// let player=names + ' ' + namez + ' drives a ' + car + ' car in ' + sport
// console.log(player)
// document.getElementById('man').innerHTML=player


// // Length of a character
// let school='Lagos School of Programming'
// let schools= school.length
// console.log(schools)


// Template literals
// let applicantFirstname='Spongebob'
// let applicantLastname='Squarepant'
// let lang='Javascript'
// let year=12
// let applicantProfile=`The name of the applicant is ${applicantFirstname} ${applicantLastname}. He is a ${lang} developer. He has ${year} years experience`
// document.getElementById('lasop').innerHTML=applicantProfile


// index and indexof
// let animal='HIPPOPOTAMUS'
// console.log(animal[5])

// animal=animal.indexOf('p')
// schools='Lagos School of Programming'
// let pro=schools.indexOf('o')
// let pros=schools.indexOf('o',6)
// console.log(pro)
// console.log(pros)


// let tweet=prompt('input your tweet')
// let tweetlength=tweet.length
// console.log(tweetlength)
// let message=`you have written ${tweet}. You have ${200 - tweetlength} characters remaining`
// document.getElementById('lasop').innerHTML=message


// let man='ezekiel'
// let men=man.toUpperCase()
// console.log(men);

// let street='OBAFALABI'
// let streets=street.toLowerCase()
// console.log(streets)

// slice method
// animal='Monkey'
// let anim=animal.slice(0,2)
// console.log(anim)


// let stud='Philomena'
// let studs=stud.slice(0,5)
// console.log(studs)

// let animals='Hippopotamus'
// let anims=animals.slice(3,8)
// console.log(anims)


// let guest=prompt('Input your name')
// let guests=guest.slice(0,1)
// let firstletter=guests.toUpperCase()
// let guestz=guest.slice(1,guest.length)
// let remletters=guestz.toLowerCase()
// fullname=firstletter+remletters
// message=`You are welcome ${fullname}`
// document.getElementById('lasop').innerHTML=message


// Numbers
let x=7;
let y=5;

console.log(x+y)
console.log(x*y)
console.log(x-y)
console.log(x**y)
console.log(x/y)
console.log(x%y)

// let text =
// `The quick brown fox
// jumps over
// the lazy dog`
// document.getElementById('lasop').innerHTML=text


// Increment and Decrement
x=x+1
x++
x +=1
x -=3
x--
x *=2
x /=2
console.log(x)


y=(8+9)*2+3**2
y=17*2+9
console.log(y)

// B - Bracket
// FE - Functional Evaluation (raise to power)
// D - Division
// M - Multiplication
// A - Addition
// S - Subtraction

// P - Parenthesis
// E - Evaluation
// D - Division
// M - Multiplication
// A - Addition
// S - Subtraction


// Comparison operators

x=5
y=8
console.log(x=5)
console.log(y==8)
console.log(y=='8')
console.log(x===5)
console.log(x==='5')
console.log(x>y)
console.log(x<y)
console.log(x<=y)
console.log(x>=y)
console.log(x!=y)
console.log(y!=x)
console.log(!(y!=x))

console.log(x===5 || x===9)
console.log(x===5 && x===9)
console.log(!(x===5 && x===9))


// control flow

// Conditional statement
// Ternary operation
// Switch case


// let attendee=prompt('How old are you?')
// attendee=Number(attendee)
// if(attendee <18){
//     console.log('You are too young to party')
// }

// else if (attendee>=18 && attendee <=21){
//     console.log('You can enter the party but you cannot drink')
// }

// else if (attendee >21 && attendee <=65){
//     console.log('You can enter the party and drink anything')
// }

// else{
//     console.log('You are too old to party')
// }


// var number=prompt('Enter your number')
// number=Number(number)
// let result;

// if(number % 2===0 && number % 3===0){
//     result=`${number} is divisible by 2 and 3`
// }
// else if(number % 2===0) {
//     result=`${number} is divisible by 2`
// }
// else if(number % 3===0) {
//     result=`${number} is divisible by 3`
// }
// else{
//     result=`${number} is not divisible by 2 nor 3`
// }
// document.getElementById('lasop').innerHTML=result


// var number=prompt('Input your scores')
// number=Number(number)
// let results;

// if(number >=70){
//     results=`${number} = A, You passed`
// }
// else if(number >=60){
//     results=`${number} = B, You passed`
// }
// else if(number >=50){
//     results=`${number} = C, You passed`
// }
// else if(number >=40){
//     results=`${number} = D, You failed`
// }
// else if(number >=30){
//     results=`${number} = E, You failed`
// }
// else{
//     results=`${number} = F, You failed`
// }
// document.getElementById('lasop').innerHTML=results





// Ternary Operation

// let marks=prompt('Input your score')
// marks=Number(marks)
// let grades=(marks >=70 ? 'You scored an A' : 'You scored lower than A')
// document.getElementById('las').innerHTML=grades


// let mark=prompt('input your score')
// mark=Number(mark)
// let grade=(mark >=70) ? 'You scored an A'
// :(mark >=60 )? 'You scored a B'
// :(mark >=50 )? 'You scored a C'
// :(mark >=40 )? 'you scored a D'
// : 'You scored an F'
// document.getElementById('las').innerHTML=grade
// console.log (grades)


// Switch case

// let date=new Date()
// document.getElementById('las').innerHTML=date

// let hour=date.getHours()
// let min=date.getMinutes()
// let sec=date.getSeconds()
// let time=`The time is ${hour}:${min}:${sec}`
// document.getElementById('las').innerHTML=time

// let now=new Date()
// let day;
// let days=now.getDay()
// switch(days){
//     case 0:
//         day='Sunday'
//         break;
//     case 1:
//         day='Monday'
//         break;
//     case 2:
//         day='Tuesday'
//         break;
//     case 3:
//         day='Wednesday'
//         break;
//     case 4:
//         day='Thursday'
//         break;
//     case 5:
//         day='Friday'
//         break;
//     case 6:
//         day='Saturday'
           
// }

// let actualDay=`Today is ${day}, and the time is ${hour}:${min}:${sec}`
// document.getElementById('las').innerHTML=actualDay


// let color=prompt('Enter your favorite color')
// let rezult;
// switch(color){
//     case 'red':
//         rezult='Your favorite color is red'
//         break;
//     case 'yellow':
//         rezult='Your favorite color is yellow'
//         break;
//     case 'green':
//         rezult='Your favorite color is green'
//         break;
//     case 'grey':
//         rezult='Your favorite color is grey'
//         break;
//     default:
//         rezult=`Your favorite color of ${color} is not listed`

// }
// document.getElementById('las').innerHTML=rezult

// Loop
// for Loop
// while loop

// for(let i=0; i<=100; i++){
//     console.log(i)
// }

// for(let i=100; i>=0; i--){
//     console.log(i)
// }

// for(let i=1; i<=100; i++){
//     console.log(`${i}:Please forgive me`)
// }

// let outputs;
// for(t=1; t<=100; t++){
//     if(t % 3===0 && t % 5===0){
//         outputs='FizzBuzz'
//     }
//     else if(t % 3===0){
//         outputs='Fizz'
//     }
//     else if(t % 5===0){
//         outputs='Buzz'
//     }
//     else{
//         outputs=t
//     }
//     console.log(outputs)
// }

// let nums=1
// let play=3
// let admin=Number(prompt('Admin! Enter your secret number'))

// while(nums<=3){
//     let player=Number(prompt('Enter your lucky guess'))

//     if(admin===player){
//         console.log(`Your guess of ${player} is correct!`)
//         console.log(`You will be contacted for your reward soon!`)
//         break;
//     }
//     else{
//         console.log(`Your guess of ${player} is wrong! You have ${play-nums} move(s) remaining`)
//     }
//     nums++
// }


// let nums=1
// let play=3
// let admin=Number(prompt('Admin! Enter your secret number'))

// for(let nums=1; nums<=3; nums++){
//     let player=Number(prompt('Enter your lucky guess'))

//     if(admin===player){
//         console.log(`Your guess of ${player} is correct!`)
//         console.log(`You will be contacted for your reward soon!`)
//         break;
//     }
//     else{
//         console.log(`Your guess of ${player} is wrong! You have ${play-nums} move(s) remaining`)
//     }
//     nums++
// }

// Do while loop
// let j=3
// do{
//     console.log(j)
//     j--
// }while(j>0)


// let ages=prompt('How old are you?')
// let yearsremaining=100-ages
// let monthsremaining=yearsremaining*12
// let weeksremaining=yearsremaining*52
// let daysremaining=yearsremaining*365
// let timeLeft=('You have ' + daysremaining + ' days, ' + weeksremaining + ' weeks, ' + monthsremaining + ' months remaining + ' + yearsremaining + ' years')
// console.log(timeLeft)
// document.getElementById('las').innerHTML=timeLeft


// Javascript functions

// Named function
// Anonymous function (nameless function)
// Arrow function
// Immediately invoked functions


// Named function

// function david(){
//     alert('hello world')
// }

// david()

// function hello(){
//     let name='George'
//     let greeting='Hello ' + name
//     document.getElementById('las').innerHTML=greeting
//     console.log(greeting)
// }

// hello()


// Arrow function

// const yearsRemaining=()=>{
// let ages=prompt('How old are you?')
// let yearsremaining=90-ages
// let monthsremaining=yearsremaining*12
// let weeksremaining=yearsremaining*52
// let daysremaining=yearsremaining*365
// let timeLeft=('You have ' + daysremaining + ' days, ' + weeksremaining + ' weeks, ' + monthsremaining + ' months remaining + yearsremaining ')
// console.log(timeLeft)
// document.getElementById('las').innerHTML=timeLeft
// }

// yearsRemaining()


// Nameless function

// let birthday=function(name, age){
//     let birth=`${name} is ${age} years old, and his birthday is today`
//     console.log(birth)
// }

// birthday('David', 23)


// Immediately invoked function

// (function(name){
//     console.log(`hello ${name}`)
// })('Faith')


// function profiles(name,age,job){
//     let role='My name is ' + name + ', I am ' + age + ' years old, I am a senior ' + job 
//     return(role)
// }


// let declare='Who are you?'
// console.log(declare)
// let occupations=profiles('John Mark', 42, 'Artist')
// console.log(occupations)

// Math method

// let k=98.9803
// k=98.1803
// console.log(Math.round(k))

// // Math.pow

// n=2
// console.log(Math.pow(n, 3))
// console.log(n**3)

// // math.floor

// console.log(Math.floor(4.923))

// // math.ceil

// console.log(Math.ceil(4.923))
// console.log(Math.ceil(4.123))

// // math.truncate

// console.log(Math.trunc(4.97588))

// // math.sign

// console.log(Math.sign(-4))
// console.log(Math.sign(4))

// // math.square root

// console.log(Math.sqrt(64))

// // math.absolute

// console.log(Math.abs(-4.7))


// let a = Number(prompt('Enter the value of a:'));
//   let b = Number(prompt('Enter the value of b:'));
//   let c = Number(prompt('Enter the value of c:'));

//   let discriminant = b * b - 4 * a * c;

//   if (discriminant > 0) {
//     let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//     let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//     console.log(`The roots are real and different:x₁ = ${root1}, x₂ = ${root2}`)
//   } else if (discriminant === 0) {
//     root1 = -b / (2 * a);
//     console.log(`The roots of the equation are ${root1}`)
//   } else {
//     console.log(`The root are complex number`)
//   }


// This is when you ask computer to give you a random number
let random=Math.random()
console.log(random)


random=Math.floor(Math.random() *10)
console.log(random)
random=Math.floor(Math.random() *10) +1


const Random=()=>{
    displayRandom.innerHTML=Math.floor(Math.random() *100) +1
}
Random()

// Arrays
let colors=['blue', 'red', 'orange', 'indigo', 'purple']
console.log(colors)

let pets=[1, true, 'rat', 1.9]
console.log(pets)

let color=Array('blue', 'red', 'orange', 'indigo', 'purple')
console.log(color)


// Array methods

// Converting array to string

const fruits=['Banana', 'orange', 'apple', 'mango']
document.getElementById('lasop').innerHTML=fruits;
console.log(fruits)

document.getElementById('las').innerHTML=fruits.toString();
console.log(fruits.toString())

// Join method
// const fruitss=['Banana', 'orange', 'apple', 'mango']
// document.getElementById('las').innerHTML=fruitss.join('* ');

// // pop method
// var fruit=['banana', 'orange', 'apple', 'mango', 'watermelon', 'cocumber']
// document.getElementById('las').innerHTML=fruit;
// fruit.pop()
// document.getElementById('man').innerHTML=fruit;

// // Push method
// var fruitz=['banana', 'orange', 'apple', 'mango', 'watermelon', 'cocumber']
// document.getElementById('las').innerHTML=fruitz;
// fruitz.push('black current')
// document.getElementById('man').innerHTML=fruitz;

// // shift method
// let cars=['volks', 'benz', 'toyota', 'audi']
// cars.shift()
// console.log(cars)

// // unshift method
// cars=['volks', 'benz', 'toyota', 'audi']
// cars.unshift('ford')
// console.log(cars)

// // concat method
// const myGirls=['Cecille', 'Lone']
// const myBoys=['Emil', 'Tobias', 'Linus']

// const myChildren=myGirls.concat(myBoys);
// const myChildrenz=myBoys.concat(myGirls);
// console.log(myChildren)
// console.log(myChildrenz)

// let concats=myBoys + ' ' + myGirls
// let concatss=`${myBoys} ${myGirls}`
// console.log(concats)
// console.log(concatss)

// write a program that will print a number from 1 to 100, if it is divisible by 3, it should be fizz, if divisible by 5, buzz
    
    outputs=[];
    for(t=1; t<=100; t++){
        if(t % 3===0 && t % 5===0){
            outputs.push('FizzBuzz')
        }
        else if(t % 3===0){
            outputs.push('Fizz')
        }
        else if(t % 5===0){
            outputs.push('Buzz')
        }
        else{
            outputs.push(t)
        }
    }
    console.log(outputs)

    // slice method
const fruitt=['apple', 'banana', 'cherry', 'date', 'elderberry']
const slicedfruitt=fruitt.slice(1,4)

console.log(fruitt)
console.log(slicedfruitt)


let course='Javascript'
let courses=course.slice(0, 4)
console.log(courses)


// Splice method
// const fruitsz=['apple', 'banana', 'cherry', 'date']
// fruitsz.splice(1, 0, 'blueberry', 'watermelon', 'grape')
// console.log(fruitsz)



// let students=['Ayomide', 'Lucky', 'Philo', 'Farouk', 'Friday', 'John', 'Bolu']
// let student=prompt('Input your name')
// if(students.includes(student)){
//     console.log(`You are welcome to class ${student}`)
// }

// else{
//     console.log(`Your name is not included in the class register`)
// }

// Object Data Type

let car={
    make:'Toyota',
    model:'Camry',
    color:'White',
    year:'2015'
}

console.log(car)
console.log(car.make)

const person={
    name:{
           nickName:'Jagaban',
           realName:{
                      firstName:'John',
                    lastName:'Doe',
                }
    },
    age:50,
    eyeColor:'blue'
};
let statement=`My name is ${person.name.realName.firstName} ${person.name.realName.lastName}. I am ${person.age} years old, I have a pair of ${person.eyeColor} colored eyes and my nickname is ${person.name.nickName}.`
console.log(statement)

// Create an empty object
const Person= {};

Person.firstName='John';
Person.lastName='Doe';
Person.age=50;
Person.eyeColor='blue';

document.getElementById('lasop').innerHTML=
Person.firstName + 'is ' + Person.age + ' years old.';

const persons={fname:'John', lname:'Doe', age:25};
let txt=''
for (let x in persons){
    txt += persons[x] + '';
}
console.log(txt)


// let freiendz=[]
// for(let friends=1; friends<=5;friends++){
//     let friend=prompt('Enter the name of your favorite friend')
//     freiendz.push(friend)
// }
// console.log(freiendz)

const salaries={
    Jack: 24000,
    Paul: 34000,
    Monica: 55000
};
for (let David in salaries){
    let salary='$' + salaries[David];
    console.log(`${David}: ${salary}`)
};

// let q='Friday'
// for(let i in q){
//     console.log(`${i}:${q[i]}`)
// }

// student=['Ayo', 'Kome', 'Jason', 'Omolara']
// for(let k in student){
//     console.log(`${k} ${student[k]}`)
// }

// const numbers=[45, 4, 9, 16, 25];
// function myFunction(value){
//     text +=value + '<br>';

// }

// text='';
// numbers.forEach(myFunction);
// document.getElementById('las').innerHTML=text;
// console.log(text)


// let studss=['John', 'Sara', 'Jack'];
// // using forEach

// studss.forEach(myFunction);
// function myFunction(item){
//     console.log(item);
// }


// Map method
let numberz=[2, 4, 6, 8, 10];
// function to return the square of a number

function square(numberz){
    return numberz * numberz;
}

let square_numbers=numberz.map(square);
console.log(square_numbers);

// student=['Ayo', 'Kome', 'Jason', 'Omolara']
// map throgh the array of student names.
// 1. Add the index
// 2. Attach a sting of '-student to each name'

// student=['Ayo', 'Kome', 'Jason', 'Omolara']

student = ['Ayo', 'Kome', 'Jason', 'Omolara']
let updatedStudent=student.map((name,i)=>`${i + 1}: ${name}-student`)
console.log(updatedStudent)


master='Ayo'
let output;
now=new Date()
let hours=now.getHours()
if(hours>=0 && hours<12){
    output=('Good Morning')
}
else if(hours>=12 && hours<16){
    output=('Good Afternoon')
}
else if(hours>=16 && hours<18){
    output('Good Evening')
}
else{
    output=('Good Night')
}
let greeting=output + ' ' + master + ', what are we doing today?'
document.getElementById('las').innerHTML=greeting;


// set interval
function updateClock(){
    const now=new Date();
    const timeString=now.toLocaleTimeString();
    document.getElementById('las').innerHTML=timeString;
}
updateClock();

setInterval(updateClock, 1000);

let saveTimer=setInterval(autoSave, 5000);
function autoSave(){
    const text=document.getElementById('editor').value;
    console.log('Auto-saving:', text);
    localStorage.setItem('draft', text);
}

    function stopAutoSave(){
        clearInterval(saveTimer);

    }

    let timeLeft=3600;
    const timer=setInterval(() =>{
        document.getElementById('countdown').textContent=timeLeft + ' seconds left'
        timeLeft--;

        if(timeLeft<0){
            clearInterval(timer);
            document.getElementById('countdown').textContent="Time's Up";
        }

    }, 1000);


    // spread or rest operator
    const numberzs=[1, 2, 3]
    const copyNumbers=[...numberzs];
    console.log(copyNumbers);

    const userFromAPI={ id: 1, name: 'John'};
    const localUserData={age: 30, city: 'New York'};

    const fullUserData={...userFromAPI, ...localUserData};
    console.log(fullUserData)


    const users=[
        {name: 'Alice', age: 25, active: true},
        {name: 'Bob', age: 30, active: false},
        {name: 'Charlie', age: 35, active: true},
        {name: 'David', age: 40, active: false},

    ];

    const activeUsers=users.filter(user=>user.active);
    console.log(activeUsers);

    const items=[
        {id: 1, name: 'iPhone 14', category: 'phone', price: 999},
        {id: 2, name: 'Samsung Galaxy S23', category: 'phone', price: 899},
        {id: 3, name: 'MacBook Pro', category: 'laptop', price: 1999},
        {id: 4, name: 'iPad Air', category: 'tablet', price: 599},
        {id: 5, name: 'Google Pixel 7', category: 'phone', price: 799},
        {id: 6, name: 'Sony Headphones', category: 'accessory', price: 199},

    ];
    const phones=items.filter(item=>item.category==='phone');
    console.log(phones)

    const applicants=[
        {name: 'Alice', discipline: 'Computer Engineering', cgpa: 4.2},
        {name: 'Bob', discipline: 'Mechanical Engineering', cgpa: 3.8},
        {name: 'Charlie', discipline: 'Civil Engineering', cgpa: 4.1},
        {name: 'David', discipline: 'Electrical Engineering', cgpa: 4.3},
        {name: 'Eve', discipline: 'Business Administration', cgpa: 3.9},
        {name: 'Frank', discipline: 'Software Engineering', cgpa: 4.5},
        {name: 'Grace', discipline: 'Marketing', cgpa: 3.7},
        {name: 'Hank', discipline: 'Chemical Engineering', cgpa: 4.0},
        {name: 'Ivy', discipline: 'Economics', cgpa: 3.6},
        {name: 'Jack', discipline: 'Aerospace Engineering', cgpa: 4.1},
        {name: 'Kelly', discipline: 'Law', cgpa: 3.8},
        {name: 'Leo', discipline: 'Biomedical Engineering', cgpa: 4.0},
        {name: 'Mona', discipline: 'Physics', cgpa: 3.9},
        {name: 'Nate', discipline: 'Software Engineering', cgpa: 3.5},
        {name: 'Olivia', discipline: 'Industrial Engineering', cgpa: 4.3},
        {name: 'Peter', discipline: 'Political Science', cgpa: 3.7},
        {name: 'Quinn', discipline: 'Mechanical Engineering', cgpa: 4.2},
        {name: 'Ryan', discipline: 'Environmental Engineering', cgpa: 3.9},
        {name: 'Sophia', discipline: 'Electrical Engineering', cgpa: 4.4},
        {name: 'Tom', discipline: 'Civil Engineering', cgpa: 4.1},
    ];


    const engineeringApplicants=applicants.filter(applicant => 
        applicant.discipline.toLowerCase().includes('engineering')
    );
    // console.log(engineeringApplicants);

    const shortlistedApplicants=engineeringApplicants.filter(applicant =>
        applicant.cgpa >=4.0);

        shortlistedApplicants.sort((a, b) => b.cgpa - a.cgpa);
        console.log('Shortlisted Engineering Applicants for Hire');
    console.table(shortlistedApplicants);

    const desciplines=applicants.map(applicant=>applicant.discipline)
    console.log(desciplines)
    for(let i=1; i<=desciplines.length; i++){
        console.log(`${desciplines[i]}`)
    }

    const numberss=[1, 2, 3, 4, 5];
    const double_num=numberss.map(x=>x*2)
    console.log(double_num)

    const userz=[
        {id: 1, name: 'Alice'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Charlie'},
    ];
    const namez=userz.map(person=>person.name)
    console.log(namez)

    for(let i=0;i<=namez.length; i++){
        console.log(`${namez[i]}`)
    }


    const words=['hello', 'world', 'javascript'];
    const Uppercased=words.map(word=>word.toUpperCase());
    console.log(Uppercased)


    const products=[
        {name: 'Laptop', price: 1000},
        {name: 'Phone', price: 500},
        {name: 'Tablet', price: 300},
    ];

    const prices=products.map(product=>product.price);
    console.log(prices);


    const people=[
        {firstName: 'John', lastName: 'Doe'},
        {firstName: 'Jane', lastName: 'Smith'},
    ];

    const fullNames=people.map(person=> `${person.firstName} ${person.lastName}`);
    console.log(fullNames);

    const studentz=[
        {name: 'Emma', grade: 85},
        {name: 'Liam', grade: 92},
        {name: 'David', grade: 42},
    ];

    const updatedStudents=studentz.map(student=>({
        ...student,
        passed: student.grade >=50
    }))

    console.log(updatedStudents);

    const numbezs=[1, 2, 3];
    const [i, f, g]=numbezs;
    console.log(i, f, g);

    const colorz=['red', 'blue', 'green', 'yellow'];
    const [firstColor, ...remainingColors]=colorz;
    console.log(firstColor);
    console.log(remainingColors);

    const nums=[5];
    const [u,v=10]=nums;
    console.log(u,v);


    