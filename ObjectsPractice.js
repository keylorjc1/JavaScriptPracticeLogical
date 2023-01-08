const usersNuevo = [
    { name: "Keylor", lastName: "Jimenez", age: 19, favColor: "blue" },
    { name: "Sharon", lastName: "Nunez", age: 13, favColor: "blue" },
    { name: "Melissa", lastName: "Carvajal", age: 20, favColor: "blue" },
    { name: "", lastName: "Soto", age: 10, favColor: "blue" },
    { name: 'cas',lastName: "Lara", age: 11, favColor: "blue" },
  ];

//que mande a llamar el unico que tenga menos de 3 letras
function filterFn() {
    usersNuevo.forEach( x => {
        if (x.name.length <= 3) {
            console.log(`${x.name}`);
        }
    })
}

filterFn()
//que mande a llamar al unico que la edad sea menor de 11
function filtrarNum() {
    usersNuevo.map(x => {
        if (x.age <= 11) {
            console.log(x);
        }
    })
}

filtrarNum()
//que me diga si hay alguno vacio
console.log('separar');

function emptyFn() {
    for (let index = 0; index < usersNuevo.length; index++) {
        if (usersNuevo[index].name === '') {
            console.log(usersNuevo[index]);
        }
    }
}

emptyFn()
console.log('Separar');
//que me diga si todos son mayores
function checkEquality(obj) {
    var values = [];
    for (var key in obj) {
    values.push(obj[key]);
    }
    for (var i = 0; i < values.length; i++) {
    if (values[i] !== values[0]) {
    return false;
    }
    }
    return true;
    }

// const minValue = Math.min(...num);
// const minArray = num.filter(el => el === minValue);

//remove uno con id repetido
// const arr = [
//     {id: 1, name: 'one'}, 
//     {id: 2, name: 'two'}, 
//     {id: 1, name: 'one'}
// ]
// const ids = arr.map(o => o.id)
// const filtered = arr.filter(({id}, index) => !ids.includes(id, index + 1))

//remove uno con id
// const fruits = [
//   {id:1, name: 'Banana'},
//   {id:2, name: 'Apple'},
//   {id:3, name: 'Kiwi'}
// ]

// // Remove Apple with id '2'
// function removeSpecific() {
//     const filtered = fruits.filter( x => x.id !== 2  )
// }

