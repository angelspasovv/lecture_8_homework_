// Домашна 9
// Задача 1.
// Да се креира класа Animal која што ќе има барем две својства и два методи. Потоа да се направи класа Dog која што ќе наследува од класата 
// Animal. Дополнително, класата Dog да има барем плус уште едно својство и уште еден метод. Да се направат инстанци од двете класи и да се 
// повикаат соодветните методи. Својствата и методите ги дефинирате вие сами.

class Animal {
    constructor(type, colour) {
        this.type = type
        this.colour = colour
    }

    presentation() {
        console.log(`The animal is ${this.type}, and has ${this.colour} colour.`)
    }
}

class Dog extends Animal {
    constructor(type, colour, breed) {
        super(type, colour)
        this.breed = breed
    }

    dogBreed() {
        console.log(`The animal is ${this.type}, has ${this.colour} colour and its breed is ${this.breed}.`)
    }
}

const animal = new Animal("cat", "black")
const dog = new Dog("dog", "white", "French Bulldog")

animal.presentation()
dog.dogBreed()

// Задача 2.
// Да се дефинира класа Rectangle со следните атрибути и методи:

// color
// width - приватна променлива
// height - приватна променлива
// Статичен метод getShapeType() кој што ќе враќа “Rectangle”
// Гетери и сетери за атрибутите width и height
// Метод getArea() кој што ќе ја пресметува плоштината
// Метод describe() koj што ќе ги принта бојата, ширината и висината на правоаголникот.
// Да се направат неколку инстанци од оваа класа и да се употребат соодветните методи.

class Rectangle {
    #width
    #height

    constructor(colour, width, height) {
        this.colour = colour
        this.#width = width
        this.#height = height
    }

    static getShapeType() {
        return "Rectangle"
    }

    get dim1() {
        return this.#width
    }
    set dim1(dimensionOne) {
        return this.#width = dimensionOne
    }

    get dim2() {
        return this.#height
    }
    set dim2(dimensionTwo) {
        return this.#height = dimensionTwo
    }

    getArea() {
        return console.log(this.#width * this.#height);
    }

    describe() {
        console.log(`The shape has ${this.colour} colour, the width is: ${this.#width}, and the height is: ${this.#height}.`)

    }


}

const rectangle = new Rectangle("Blue", 10, 15)
rectangle.describe()
rectangle.getArea()
console.log(Rectangle.getShapeType())
console.log(rectangle.dim1)
console.log(rectangle.dim2)

rectangle.dim1 = 70
rectangle.dim2 = 140
rectangle.getArea()


// Задача 3.
// Дефинирајте класа на банкарска сметка(BankAccount) со следните атрибути и методи:

// Атрибути: accountNumber, accountHolder, balance
// Методи: deposit(amount), withdraw(amount), getBalance()
// Спроведете валидација во методот на повлекување(withdraw) за да се осигурате дека износот за повлекување не го надминува тековното салдо(balance).
// Креирајте два примероци од класата BankAccount и извршете некои трансакции (депозити и повлекувања).

class BankAccount {
    constructor(accountNumber, accountHolder, balance) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = balance
    }

    deposit(amount) {
        this.balance += amount
        console.log(`You have deposited into ${this.accountNumber}, an amount of ${amount}`)
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
            console.log(`Amount of ${amount} has been withdrawn from your account: ${this.accountNumber}`)
        } else{
            console.log(`Insufficient balance in account ${this.accountNumber}`)
        }
    }

    getBalance() {
        console.log(`Account: ${this.accountNumber}, Balance: ${this.balance} MKD.`)
    }
}

const bankAccount1 = new BankAccount("1234512333987", "Angel Spasov", 20000)
const bankAccount2 = new BankAccount("1000012312312", "Trajko Tajkoski", 30042)

bankAccount1.getBalance()
bankAccount2.getBalance()

bankAccount1.deposit(5000)
bankAccount2.deposit(8000)

// Making sure this deposit method works:
bankAccount1.getBalance()
bankAccount2.getBalance()

bankAccount1.withdraw(2000)
bankAccount2.withdraw(4000)

// Making sure this withdraw method works:
bankAccount1.getBalance()
bankAccount2.getBalance()


