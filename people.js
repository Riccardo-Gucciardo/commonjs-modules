//3 - people.js
//1. Importa la tua funzione da names.js
//2. Importa la tua funzione da hobbies.js
//3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName 
// ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.

import hobbies from "./hobbie.js";
import Name from "./name.js";

function creapersona(){
    const createName = Name('riccardo','gucciardo')
    const createhobbies = hobbies("calcio","pallavolo","nuoto")

    return{
        createName,
        createhobbies
    }
}

console.log(creapersona());
