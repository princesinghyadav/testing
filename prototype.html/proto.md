<script>
 prototype is like an insistor which u will get all the thing which will be get by ur own insitor.
    ex:- 1   , to set the proto on any object
let  dhanush = {
name: "dhanush yadav",
car: "hyundai",
};
let suraj = Object.create(dhanush)
suraj.housetype= "bungalow"
console.log(suraj)
console.log(suraj.car);    




example :- 2    , to set the proto on any object

    let sanju = {
        name:"sanju",
        car:"rolls",
        bike:"pulsar"
    };
    let salman={
        name:"salman",
        car:"bmw",
        headphone:"boat"
    }
    let sarukh ={
        name:"sharukh",
        car: "ferrari",
        bookshelf: "personal"
    }
    Object.setPrototypeOf(sarukh,sanju)
    Object.setPrototypeOf(sanju,salman)
    console.log(sarukh);
     console.log(sarukh.headphone);
