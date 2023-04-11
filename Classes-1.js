class  clas {
    constructor(name,age){
        this.name=name
        this.age=age
    }
    about(){
        return this.age >= 10
    }
}

class buyer extends clas{
    constructor(name,age,speed){    
            super(name,age)
            this.speed=speed
    }

    name1(){
        return `${this.speed} is greater then 20`
    }
    
}

// let user = new clas("malik",23);
let user = new buyer("malik",23,34);
console.log(user.name1(45));