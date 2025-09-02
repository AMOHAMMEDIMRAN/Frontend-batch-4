// function fn(){
//     console.log('first')
// }
// fn()

const fn = () => {
  console.log("first");
};

fn();
const users = [
    userOne={
        name:"immu"
    }
]

const add = (a) => console.log(2 + a);

add(3);

const arr = [1, 2, 3, 45, 6];

const [first, second, third, fiveth,fourth] = arr;


console.log(fourth)


const obj = {
    name: "Immu",
    age: 21
}

const { age,name} = obj;
console.log(name)

arr.map(function(v,i){
    console.log(v,i)
})