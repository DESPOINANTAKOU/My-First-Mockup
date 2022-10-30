function algorithm() {
    console.log('despoina');
}

algorithm();


function test1() {
    for (let i = 0; i < 10; i++) {
        console.log("geia sou");
    }
}




test1();


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}

console.log(sum());


function sum2(randomArray) {
    let sum = 0;
    for (let i = 0; i < randomArray.length; i++) {
        sum = sum + randomArray[i];
    }
    return sum;
}


sum2(array);



function even(randomArray) {
    let sum = 0;
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] % 2 === 0) {
            sum += randomArray[i];
        }
    }
    return sum;
}

even(array);



const despoina = {
    age: 29,
    name: "Despoina",
    surname: "Ntakou",
    isMarried: false,
}


function personFunction(personObject) {
    console.log(`${personObject.name}  ${personObject.surname} is ${personObject.age} , is married? ${personObject.isMarried}`);
};

personFunction(despoina);

let personArray = [despoina, { name: "MAria", surname: "ntakou", age: 35, isMarried: false }];




function sumOfAges(persons) {
    let sum = 0;
    for (let i = 0; i < persons.length; i++) {

        sum += persons[i].age;
    }
    return sum;
};




function addPerson(newPerson) {
    if (newPerson.name !== undefined && newPerson.surname !== undefined) {
        personArray.push(newPerson);
    }
    else{
        console.log("bro the name!")
    }
};

addPerson({ name: "Tolis", age: 38, surname: "Apostolou", isMarried: false });

