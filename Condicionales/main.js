// Ejercicio 1:

let answer = prompt('Eres bellísimo/a?');

if(answer === 'si' || answer === 'sí') {
    console.log('Ciertamente');
} else {
    console.log('No te creo')
}

//Ejercicio 2:
let number = prompt('Escribe un número: ')
if (number % 2 === 0) {
    console.log(number + " es divisible entre 2.");
} else {
    console.log(number + " no es divisible entre 2.");
}

//Ejercicio 3:
let number2 = prompt('Escribe un número: ')
if (number2 % 2 === 0) {
    alert(number2 + " es par");
} else {
    alert(number2 + " no es par");
}

//Ejercicio 4:
let clientNumber = Number(prompt('Ingresa tu número de cliente: '));

if (clientNumber === 1000) {
    console.log('Ganaste un premio!!!');
} else {
    console.log(`${clientNumber} Lo sentimos sigue participando...`);
}

//Ejercicio 5:
let numberOne = Number(prompt('Ingresa un número:'));
let numberTwo = Number(prompt('Ingresa otro número'));

if(numberOne > number2){
    console.log(`${numberOne} es mayor que ${numberTwo}`);
} else if(numberOne < number2) {
    console.log(`${numberTwo} es mayor que ${numberOne}`);
} else{
    console.log('Los números que ingreaste son iguales ');
}

//Ejercicio 6:
let numOne = Number(prompt('Ingresa un número:'));
let numTwo = Number(prompt('Ingresa otro número:'));
let numThree = Number(prompt('Ingresa un número más:'));

if(numTwo < numOne > numThree){ 
    console.log(`${numOne} es mayor que ${numTwo} y ${numThree}.`);
} else if(numOne < numTwo > numThree) {
    console.log(`${numTwo} es mayor que ${numOne} y ${numThree}.`);
} else if (numOne < numThree > numTwo){
    console.log(`${numThree} es mayor que ${numOne} y ${numTwo}.`);
} else if (numOne === numTwo) {
    console.log('El primer número que ingresaste es igual al segundo.');
}else if (numberOne === numThree){
    console.log('El primer número que ingresaste es igual al segundo.');
} else if (numTwo === numThree) {
    console.log('El segundo número que ingresaste es igual al tercero.');
}

//Ejercicio 7:
let day = prompt('Ingresa un día de la semana que prefieras:')

if(day === "Lunes"){
    console.log('Un buen día para iniciar algo nuevo.');
} else if(day === "Viernes"){
    console.log('Y el cuerpo lo sabe');
} else if(day === "Sábado" || day === "Domingo") {
    console.log('Disfruta de la vida');
} else {
    console.log('Sé feliz.');
}

//Ejercicio 8:
let calificacion = Number(prompt('Ingresa una calificación del 1 al 10:'))

if (1 <= calificacion >= 10) {
    if(calificacion <= 6 ){
        console.log('Reprobado');
    } else if (6 < calificacion >= 8){
        console.log('Regular');
    } else if (calificacion = 9) {
        console.log('Bien C:');
    } else {
        console.log('Excelente');
    }
} else {
    console.log('Error el número no se encuentra en tre el rango del 1 al 10 :c');
}

//Ejercicio 9:
let pedido = prompt('Lindo día te desea DQ! Deseas un Helado con topping?');
 if (pedido === 'no'){
    console.log('Tu total son $50 MXN gracias!');
 } else {
    let topping = prompt('Cuál topping desea tengo de Oreo, Kitkat y Browni?');

    if (topping === 'Oreo') {
        console.log('Tu total es: 60 MXN');
    } else if ( topping === 'KitKat') {
        console.log('Tu total es: $65 MXN');
    } else if ( topping === 'Brownie') {
        console.log('Tutotal es: $70 MXN');
    } else {
        console.log('No tenemos este topping, lo sentimos...');
    }
 }


//Ejercicio 10:
let course = 4999;
let carrera = 3999;
let master = 2999;

let becaFace = 20;
let becaGoog =  15;
let becaJesua =  50;

let timeCourse = 2;
let timeCarrera = 6;
let timeMaster = 12;

let typeLevel = prompt('Cuál es el tipo de nivel que desea? (Course / Carrera /Master)');


if(typeLevel === 'Cuorse'){
    let beca = prompt('Cuenta con alguna beca? Si su respuesta es sí ingrese el nombre correspondiente Facebook, Google o Jesua')
    if (beca === 'Facebook') {
        total = (course*timeCourse)-((course*becaFace)/100)
        console.log('Su pago por nivel Course que dura 2 meses y con el 20% de descuento aplicado es de: $' + total);
    } else if (beca === 'Google') {
        total = (course*timeCourse)-((course*becaGoog)/100)
        console.log('Su pago por nivel Course que dura 2 meses y con el 15% de descuento aplicado es de: $' + total);
    } else if (beca === 'Jesua') {
        total = (course*timeCourse)-((course*becaJesua)/100)
        console.log('Su pago por nivel Course que dura 2 meses y con el 50% de descuento aplicado es de: $' + total);
    } else {
        console.log('Lo sentimos no existe esa beca en el sistema :c');
    }
} else if (typeLevel === 'Carrera') {
    if (beca === 'Facebook') {
        total = (carrera*timeCarrera)-((carrera*becaFace)/100)
        console.log('Su pago por nivel Carrera que dura 6 meses y con el 20% de descuento aplicado es de: $' + total);
    } else if (beca === 'Google') {
        total = (carrera*timeCarrera)-((carrera*becaGoog)/100)
        console.log('Su pago por nivel Carrera que dura 6 meses y con el 15% de descuento aplicado es de: $' + total);
    } else if (beca === 'Jesua') {
        total = (carrera*timeCarrera)-((carrera*becaJesua)/100)
        console.log('Su pago por nivel Carrera que dura 6 meses y con el 50% de descuento aplicado es de: $' + total);
    } else {
        console.log('Lo sentimos no existe esa beca en el sistema :c');
    }
} else if (typeLevel === 'Master') {
    if (beca === 'Facebook') {
        total = (master*timeMaster)-((master*becaFace)/100)
        console.log('Su pago por nivel Master que dura 12 meses y con el 20% de descuento aplicado es de: $' + total);
    } else if (beca === 'Google') {
        total = (master*timeMaster)-((master*becaGoog)/100)
        console.log('Su pago por nivel Master que dura 12 meses y con el 15% de descuento aplicado es de: $' + total);
    } else if (beca === 'Jesua') {
        total = (master*timeMaster)-((master*becaJesua)/100)
        console.log('Su pago por nivel Master que dura 12 meses y con el 50% de descuento aplicado es de: $' + total);
    } else {
        console.log('Lo sentimos no existe esa beca en el sistema :c');
    }
} else {
    console.log('Lo siento no entendí a que nivel deseas aplicar... intenta de nuevo');
}

//Ejercicio 11:

let tipoVehiculo = prompt('Tipo de vehículo?: Coche / Moto /Autobús');
let klRecorridos = prompt('Cuántos kilómetros recorrites?')

if (tipoVehiculo === 'Coche'){
    
}
