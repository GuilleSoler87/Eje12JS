// BOOLEANOS

// Dados 2 variables booleanas:
let booleano1 = true; 
let booleano2 = false;

// Crear variable booleanoAnd cuyo valor sea la comparación booleana booleano1 AND booleano2
let booleanoAnd = booleano1 && booleano2
console.log(booleanoAnd)
   
// Crear variable booleanoOr cuyo valor sea la comparación booleana booleano1  OR booleano2
let booleanoOr = booleano1 || booleano2
console.log(booleanoOr)

// Crear variable booleanoNot cuyo valor sea la comparación booleana no booleano1
let booleanoNot = !booleano1 

// Crear variable booleanoMix0 cuyo valor sea la comparación booleana (booleano1 or booleano2) and (booleano1 or (not booleano1 and not booleano2)
let booleanoMix0 = 
(booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))
console.log(booleanoMix0)

// OPERADORES

// Crear variable valorDivision cuyo valor sea la división de 17 entre 3 y que solo muestre 2 decimales en el resultado
let a = 17;
let b = 3;
let c = 7;

let valorDivisión = a/b;
console.log(valorDivisión.toFixed(2))

// Crear variable valorResto cuyo valor sea el resto de 17 entre 7
let valorResto = a%c
console.log(valorResto)


// LÓGICA DE PROGRAMACIÓN

// Crea una variable A cuyo valor sea el número 9, después crea una variable B cuyo valor sea un string con el número 9, desarrolla la lógica para que cuando A == B muestre por consola “Son iguales”, ¿qué pasa si en vez de tener A == B, comprobamos que A === B?

let A = 9;
let B = "9"

if(A === 9 && B ==="9")
    console.log("Son iguales")

// Crea una variable mochila que sea un array de elementos, desarrolla la lógica para que sí mochila tiene más de 10 elementos muestre por consola el mensaje “No puedo cargar con tantas cosas”, sí mochila contiene entre 10 y 2 elementos se muestre por consola “Que bien voy con mi mochila” y si no muestre por consola “Creo q no necesito una mochila”
    
let mochila = ["1","2","3"]
if (mochila.length > 10) {console.log("No puedo cargar con tantas cosas")}

else if (mochila.length > 2 && mochila.length < 8) console.log("Que bien voy con mi mochila")
else console.log ("Creo que no necesito mochila")

// Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10  PREGUNTAR!!!
const contarHasta10 = 0;

for (let contarHasta10 = 0; contarHasta10 <= 10; contarHasta10++) {

    console.log(contarHasta10);
    
    }

// Crea una variable diaFestivo que sea de tipo boolean. Crea un ternario que si diaFestivo es true devuelve un console.log de ‘Hoy no trabajo’ y  si es false ‘Hoy trabajo’
let diaFestivo = false
diaFestivo ? console.log('Hoy no trabajo') : console.log('Hoy trabajo');



// Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle
const arrayBucle = []

for (let numeros = 4; numeros <= 18; numeros++) {
arrayBucle.push(numeros)
}
console.log(arrayBucle)

// Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado

let resultado = 0;

for (let i = 0; i < arrayBucle.length; i++) {
  resultado += arrayBucle[i];
}

console.log(resultado)



// Dado el siguiente array, [‘Con’, ‘Sofia’, ‘aprendiendo’, ‘bucles’], recorrelo utilizando el bucle “for of” y muestra por consola todos sus elementos, después recórrelo utilizando el bucle “for in” mostrando también por consola todos sus elementos

// FOR OF

let arrayEjer =  ["Con", "Sofia", "aprendiendo", "bucles"]
for (let clase of arrayEjer) {
    
      console.log(clase)
    }

// FOR IN
let arrayEjer1 = ["Con", "Sofia", "aprendiendo", "bucles"];       
for (let clase1 in arrayEjer1) {
    
console.log(arrayEjer1[clase1])
}

// DUDA
// Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3  
const patata = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let i = 1;
while(i<= 20) {
    if (i % 3 === 0) {
    console.log("patata");
    }
    i++;
}

// EXTRAS

let gente = [{

    nombre: "Jamiro",
    
    edad: 45,
    
    },
    
    {
    
    nombre: "Juan",
    
    edad: 35,
    
    },
    
    {
    
    nombre: "Paco",
    
    edad: 34,
    
    },
    
    {
    
    nombre: "Pepe",
    
    edad: 14,
    
    },
    
    {
    
    nombre: "Pilar",
    
    edad: 24,
    
    },
    
    {
    
    nombre: "Laura",
    
    edad: 24,
    
    },
    
    {
    
    nombre: "Jenny",
    
    edad: 10,
    
    },
    
    ];

    // Crea un array con la gente que su nombre tiene 4 letras. Sin utilizar el método filter de los arrays y muéstralo por consola.

    
    const fourlett = [];
    for (let i = 0; i < gente.length; i++) {
        if (gente[i].nombre.length === 4) {
          fourlett.push(gente[i]);
        }
      }
      
      console.log(fourlett);


    //   Crea un array con la gente que su nombre empieza por J y sean menores de 40 años. Sin utilizar el método filter de los arrays y muéstralo por consola.
      let gente40J = [];
      for (const persona of gente) {
        if (persona.edad < 40 && persona.nombre[0] ==="J") {
          gente40J.push(persona);
        }
      }
      console.log(gente40J);


    //   Crea un objeto en la variable ordenador de tal modo que el siguiente código no muestre por consola 'suspendes'
    //   // TEST 1
    //   const ordenador = {};
    //   if (typeof ordenador === "object") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


    //   // TEST 2
    //   const ordenador = {
    //      marca: "La pava"
    //    };
    //   if (ordenador.marca === "La pava") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


    //   // TEST 3
    //   const ordenador = {
    //     tipo: "portatil"
    //     };
    //     if (ordenador.tipo === "portatil") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


      // TEST 4
    //   const ordenador = {
    //     perifericos: ["raton","touchPad"]
    //   }
    //   if (ordenador.perifericos[1] === "touchPad") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


      // TEST 5
    //   const ordenador = {
    //     almacenamiento: {
    //       discos: ["1TB", "HDD"]
    //     }
    //   };
    //   if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


      // TEST 6    DUDA!!!!!!!
      
    //   if (ordenador.almacenamiento.maestro === 0) {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }






    //   Crea un array en la variable llamada arr de tal modo que el siguiente código no muestre por consola 'suspendes'
      
    // TEST 1      
    //   const arr = [];
    //   if (typeof arr === "object" && arr.length >= 0) {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }



      // TEST 2
    //   const arr = [{nombre: "Juan", edad: 30}];
    //   if (typeof arr[0] === "object") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }



      // TEST 3
    //   const arr = [1, {}];
    //   if (typeof arr[1] === "object") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


    //   TEST 4
    //   const arr = [1, 2, {}];
    //   if (typeof arr[2] === "object") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }



    //   // TEST 5
    //   const arr = [1, 2, 3];
    //   if (arr.length === 3) {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }

      
    //   // TEST 6

    // const arr = [{ name: "Juan" }, { name: "Juan" }, { age: 30 }];
    //   if (arr[0].name === arr[1].name) {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


    //   // TEST 6
    // const arr = [{ name: "Juan" }, { name: "pepito", age: 25 }];
    //   if (arr[1].name === "pepito") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


    //   // TEST 7
    // const arr = [{age: 20 }, {age: 30 }, { age: 25 }];
    //   if (arr[1].age > arr[2].age) {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }



    //   // TEST 8
    // const arr = [{name: "Juan" age: 25}];
    //   if (arr[0].age === 25) {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }



    //   // TEST 9
    // const arr = [1, 2, { name: "Juan" }];
    //   if (typeof arr[2].name === "string") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }


    //   // TEST 10
    // const arr = [1, 2, { name: "Juan" }];
    //   if (arr[2].name[0] === "J") {
    //     console.log("apruebas");
    //   } else {
    //     console.log("suspendes");
    //   }
