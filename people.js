//3 - people.js
//1. Importa la tua funzione da names.js
//2. Importa la tua funzione da hobbies.js
//3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName 
// ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

const Name = require('./name')
const creaHobbie = require('./hobbies')

function creapersona(){
    const fullName = Name('riccardo','gucciardo')
    const hobbie = creaHobbie("calcio","pallavolo","nuoto")

    return{
        fullName,
        hobbie
    }
}

console.log(creapersona());
