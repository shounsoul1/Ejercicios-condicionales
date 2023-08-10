// // Ejercicio 1: 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
// // en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let respuesta = prompt ("¿Eres bellisimo/a?");

respuesta = respuesta.toLocaleLowerCase();

if(respuesta === "si"){
    alert("Ciertamente");;
}else if (respuesta === "no"){
    alert("No te creo");
}else {
    alert("Responde con un si o no :)");
}

// // 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un 
// // mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let ingresar = prompt("Ingresa un numero");

if (!isNaN(ingresar)){
    const numero = parseInt(ingresar);
    if (numero % 2 === 0){
        alert(`El numero ${numero} es divisible entre 2`);
    }else {
        alert (`El numero ${numero} no es divisible entre 2`)
    }
}else {
    alert("Debes ingresar solo numeros");
}

// // 3. Crear un programa que determine si un número introducido en 
// // un Prompt es par o no, la respuesta será mostrada en un Alert.

let ingresarPar = prompt("Ingresa un numero");
if (!isNaN(ingresarPar)){
    const numeroPar = parseInt(ingresarPar);
    if (numeroPar % 2 === 0){
        alert(`El ${numeroPar} es un numero par`)
    }else {
        alert(`El ${numeroPar} es un numero impar`)
    }
}else {
    alert("Debes ingresar solo numeros");
}

// // 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', 
// // en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let numeroCliente = parseInt(prompt("Ingresa tu numero de cliente"));
if (numeroCliente === 1000){
    alert(`Eres el cliente numero ${numeroCliente}, ¡Ganaste un premio!`);
}else {
    alert("Lo sentimos, sigue participando");
}

// // 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el 
// // caso en que ambos números son iguales.

let numero1 = parseFloat(prompt("Introduce el primer numero"));
let numero2 = parseFloat(prompt ("Introduce el segundo numero"));

if (numero1 < numero2){
    alert(`El numero ${numero1} es menor que el numero ${numero2}`);
} else{
    alert(`El numero ${numero2} es menor que el numero ${numero1}`);
}

// // 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor.
// // Considerar el caso en que 2 números sean iguales.

let primero = parseFloat(prompt("Introduce el primer numero"));
let segundo = parseFloat(prompt ("Introduce el segundo numero"));
let tercero = parseFloat(prompt ("Introduce el tercer numero"));

if (primero > segundo && primero > tercero){
    alert(`El numero mayor es ${primero}`);
}else if (segundo > primero && segundo > tercero){
    alert(`El numero mayor es${segundo}`);
}else if(tercero > primero && tercero > segundo){
    alert (`El numero mayor es: ${tercero}`);
}else if (primero === segundo && primero > tercero){
    alert(`${primero} y ${segundo} son mayores que ${tercero}`);
}else if (primero === tercero && primero > segundo){
    alert(`${primero} y ${tercero} son mayores que ${segundo}`);
}else if (segundo === tercero && segundo > primero){
    alert(`${segundo} y ${tercero} son mayores que ${primero}`);
}else {
    alert("Los numeros son iguales");
}

// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro 
// mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
// Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

let dia = prompt("Ingresa un dia de la semana de Lunes a Domingo").toLowerCase();

if (dia === "lunes"){
    alert(`Hoy ${dia} es el aniversario de mis tios`)
}else if(dia === "viernes"){
    alert(`Hoy ${dia} hay una fiesta en la noche`)
}else if(dia === "sabado" || dia === "domingo"){
    alert(`El dia ${dia} es para descansar, no me hablen`)
}else if(dia === "martes" || dia === "miercoles" || dia === "jueves"){
    alert(`Hoy es ${dia} no hay nada especial...`)
}else {
    alert("Introduce un dia de la semana. Ejemplo:Lunes, jueves, domingo, etc")
}

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número
// efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está,
// imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, 
// “bien” si es 9, y por último, “excelente” si es 10.



let calificacion = parseInt(prompt("Introduce un numero del 1 al 10"));

if (calificacion >= 1 && calificacion <= 10){
    if (calificacion < 6){
        alert(`Tu calificacion es ${calificacion}, estas reprobado.`)
    }else if(calificacion >=6 && calificacion <=8){
        alert(`Tu calificacion es ${calificacion}, regular...`)
    }else if (calificacion === 9){
        alert(`Tu calificacion es ${calificacion}, bien!`)
    }else if(calificacion === 10){
        alert(`Tu calificacion es ${calificacion}, excelente!!!`)
    }
}else {
    alert("Introduce una calificacion entre el 1 y 10")
}


// 9. Escribe un programa que responda a un usuario que quiere comprar un helado
// en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará 
// “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del 
// helado sin ningún topping.

