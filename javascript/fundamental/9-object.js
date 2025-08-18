


const user = {
    username: "Immu",
    email: "test@gmail.com",
    age: 21,
    phoneNo: 9092598581,
    hobbies: ['Reading', 'Coding'],
    address: {
        city: "Py",
        pincode: 605110
    }
}

let val;


val = user.username
val = user.hobbies[1]

val = user.age
val = user["email"]
val = user.address.pincode


console.log(val)