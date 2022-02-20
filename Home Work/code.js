/////////////////////////////  1 //////////////////////

class Employee {
  constructor(id, first, last, position, salary, workinghours) {
      this._id = id;
      this._firstName = first;
      this._lastName = last;
      this._position = position;
      this._salary = salary;
      this._working = workinghours;
      //if( typeof salary !== "number"){
        //throw Error ("salary must be number ")
       //}
  }

      //id
  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id; 
  }

     // first name
  get firstName() {
      return this._firstName;
    }

  set firstName(value) {
      if(value.length === 0){
        console.log("Please provide first name")
      }
        this._firstName = value; 
  }

     // last name
  get lastName() {
      return this._lastName;
    }
  
  set lastName(value) {
      if(value.length === 0){
        console.log("Please provide last name")
      }
      this._lastName = value;  
  }


     //position
  get position() {
      return this._position;
    }
  
  set position(value) {
      this._position = value; 
  }
    
      //salary
  get salary() {
      return this._salary;
    }
  
  set salary(value) {
      if(typeof value === "string"){
        console.log("salary Mast be  number")
        return
      }
      this._salary = value; 
  }
  
      //workinghours
  get workinghours() {
    return this._workinghours;
  }
  
  set workinghours(value) {
    this._workinghours = value; 
  }

  getFullName(){
        return this._firstName + " " + this._lastName;
  }

  getAnnualSalary(){
        return this._salary * 12
  }

  raiseSalary(rate){
      this.salary = this.salary * (1 + (rate / 100));
      return this._salary;
  }
}

const employeeOne = new Employee(1,"Nikolay","Yeghyan","It Specialist",400,15);





///////////////////////////   2  ////////////////////////////////


class Author  {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender;
  }

  //  name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value; 
  }

  //  email
  get email() {
    return this._email;
  }

  set email(value) {
    this._email = value; 
  }

  // Gender
  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value; 
  }
  
  toString(){
    return ` Contact Information,  Name: ${this._name},  Email: ${this._email}`
  }

}


class Book {
  constructor( title, Author, price, quantity) {
    this._titles = title;
    this._Author = Author;
    this._price = price;
    this._quantity = quantity;
  }

  
  //  title
  get title() {
    return this._title;
  }

  set title(value) {
      this._title = value; 
  }

  //  Author
  get Author() {
    return this._Author;
  }

  set Author(value) {
    this._Author = value; 
  }

  // price
  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value; 
  }

   // quantity
   get quantity() {
    return this._quantity;
  }

  set quantity(value) {
    this._quantity = value; 
  }

  toString() {
    return ` Author of this book is ${this._Author._name} : ${this._Author.toString()}`
  }

  getProfit(){
    return  this._price * this._quantity
  }

}



///////////////////  3  ////////////////////


class Account  {
  constructor (id, name, balance) {
    this._id = id;
    this._name = name;
    this._balance = balance;
  }

  // id
  get id() {
    return this._id;
  }

  // name
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value; 
  }
  // balance
  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value; 
  }

  credit(amount){
    this._balance +=amount;
    return this._balance;
  }

  debit(amount){
    if(amount < this._balance) {
      this._balance -= amount;
      return this._balance;
    } else {
      return "Amount exceeded balance"
    }
  }

  
  transferTo(anotherAccount, amount){
    if (amount <= this._balance){
        anotherAccount.credit(amount);
        return this.debit(amount);
    }
    else{
        return "Amount exceeded balance.";
    }
  }

  static identifyAccounts(accountFirst, accountSecond){
      if (accountFirst.id == accountSecond.id && accountFirst.name == accountSecond.name && accountFirst.balace == accountSecond.balace) {
        return ("it is the same accout")      
      } else {
        return ("it is not the same accout")
      }
  }

  toString() {
    return `Name is ${this.name} and  Balance is  ${this.balance}`
  }

}






///////////////////  4  ////////////////////


class Person {
  constructor(firstName, lastName, gender, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }


  //firstName
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    this._firstName = value; 
  }

  //lastName
  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    this._lastName = value; 
  }

  //gender
  get gender() {
    return this._gender;
  }

  set gender(value) {
    this._gender = value; 
  }


//age
  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value; 
  }

  toString() {
    return `Name is ${this.firstName} and  my age is  ${this.age}`
  }

}



class Student extends Person {
  constructor (firstName, lastName, gender, age,  year, fee, program = [] ) {
    super(firstName,lastName,gender,age);
    this._program = program;
    this._year = year;
    this._fee = fee;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value
  }


  get fee() {
    return this._fee;
  }

  set fee(value) {
    this._fee = value; 
  }


  get program() {
    return this._program;
  }

  set program(value) {
    this._program = value; 
  }


  passExam(programs, grade) {
    this._program.push({programs,grade})
    let count = 0
    this._program.forEach(element => {
      count += element.grade
    })
    if(count >= 50) {
      this._year += 1
    }
    return  this._program
  }
}


//const studentOne = new Student("Nikolay","Yeghyan","Male",24,1989,50);

//console.log(studentOne.passExam("exam1",12))
//console.log(studentOne.passExam("exam2",14))
//console.log(studentOne.toString())



class Teacher extends Person { 
    constructor (firstName, lastName, gender, age, program, pay) {
      super(firstName,lastName,gender,age);
      this._program = program;
      this._pay = pay;     
      if (typeof program !== 'string') {
        throw new Error('Strings expected...');
      }
    }

    
  get program() {
    return this._program;
  }

  set program(value) {
    this._program = value; 
  }

  get pay() {
    return this._pay;
  }

  set pay(value) {
    this._pay = value; 
  }

}




class Timer {
  constructor(seconds) {
     this._seconds = seconds;
  }

  get seconds() {
    return this._seconds;
  }

  set seconds(value) {
    this._seconds = value; 
  }


}
 
class Clock {
  constructor({ template }) {
    this._template = template;
    this._timer;
  }
  stop = function () {
    clearInterval(this._timer);
  };
  start = function () {
    this.render();
    this._timer = setInterval(this.render.bind(this), 1000);
  };
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }
}

//let clock = new Clock({ template: "h:m:s" });
//clock.start();
//clock.stop();




