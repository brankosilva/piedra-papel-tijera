
//? ************ pedir nombre ************/
/*
let nombre = prompt ("Decime tu nombre").toLowerCase().trim();
let apellido = prompt ("Decime tu apellido").toLowerCase().trim();
let NombreApellido = alert ("Hola " + nombre + " "+ apellido + " " + "a continuación verás las instrucciones del juego.")
*/


//? ************ pedir nombre con Function ************/

/*

let nombreJugador = prompt ("Decime tu nombre").toLowerCase() .trim();
let apellidoJugador = prompt ("Decime tu apellido").toLowerCase() .trim();

function pedirNombre (nombre, apellido) {
    return ("Hola " + nombre + " "+ apellido + " " + "a continuación verás las instrucciones del juego.")
}

let dameTuNombre = pedirNombre(nombreJugador, apellidoJugador);
alert(dameTuNombre);

*/


//? **************** JUEGO CON DO....WHILE **************************************************/

/*

let jugador;
let oponente;

do {

    alert ("Bienvenido al PIEDRA, PAPEL o TIJERA");

    jugador = prompt ("Elegí tu ataque, escribí:\n0 para PIEDRA⚙\n1 para PAPEL📃\n2 para TIJERA✂\nesc para salir");
    oponente = Math.floor( Math.random() *2.5 );

//* ataque jugador
    if ( parseInt(jugador) == 0) {
        alert ("Elegiste Piedra ⚙")
    } else if ( parseInt(jugador) == 1) {
        alert ("Elegiste Papel 📃")
    } else if ( parseInt(jugador) == 2) {
        alert ("Elegiste Tijera ✂")
    } else if ( parseInt(jugador) !== 0 && parseInt(jugador) !== 1 && parseInt(jugador) !== 2 && jugador.toLowerCase() !== "esc" ) {
        alert ("Eso no es un ataque 😅")
    } else {
        alert ("gracias por participar, nos vemos luego");
        break;
    }


//* ataque oponente
    if ( parseInt(oponente) == 0) {
        alert ("Tu oponente eligió Piedra ⚙")
    } else if ( parseInt(oponente) == 1) {
        alert ("Tu oponente eligió Papel 📃")
    } else if ( parseInt(oponente) == 2) {
        alert ("Tu oponente eligió Tijera ✂")
    } else if ( parseInt(oponente) !== 0 && parseInt(oponente) !== 1 && parseInt(oponente) !== 2 && oponente.toLowerCase() !== "esc") {
        alert ("Eso no es un ataque 😅")
    }

//* resultados
    if (parseInt(jugador) == parseInt(oponente)) {
        alert ("Empataron 😮")
    } else if ( parseInt(jugador) == 0 && parseInt(oponente) == 2) {
        alert ("Ganasteee 🎉🎉")
    }  else if ( parseInt(jugador) == 1 && parseInt(oponente) == 0) {
        alert ("Ganasteee 🎉🎉")
    } else if ( parseInt(jugador) == 2 && parseInt(oponente) == 1) {
        alert ("Ganasteee 🎉🎉")
    } else {
        alert ("Perdiste 😭")
    }

} while (jugador.toLowerCase() !== "esc" && jugador !== "");

*/


//?  **************** JUEGO CON WHILE *******************************************************************/

/*

alert ("Bienvenido al PIEDRA, PAPEL o TIJERA");

let jugador = prompt ("Elegí tu ataque, escribí:\n0 para PIEDRA⚙\n1 para PAPEL📃\n2 para TIJERA✂\nesc para salir");
let  oponente = Math.floor( Math.random() *2.5 );

while (jugador.toLowerCase() !== "esc" && jugador !== "") {

//* ataque jugador
    if ( parseInt(jugador) == 0) {
        alert ("Elegiste Piedra ⚙")
    } else if ( parseInt(jugador) == 1) {
        alert ("Elegiste Papel 📃")
    } else if ( parseInt(jugador) == 2) {
        alert ("Elegiste Tijera ✂")
    } else if ( parseInt(jugador) !== 0 && parseInt(jugador) !== 1 && parseInt(jugador) !== 2 && jugador.toLowerCase() !== "esc") {
        alert ("Eso no es un ataque 😅")
    } else {
        alert ("gracias por participar, nos vemos luego")
    }


//* ataque oponente

    let oponente = Math.floor( Math.random() *2.5 );

    if ( parseInt(oponente) == 0) {
        alert ("Tu oponente eligió Piedra ⚙")
    } else if ( parseInt(oponente) == 1) {
        alert ("Tu oponente eligió Papel 📃")
    } else if ( parseInt(oponente) == 2) {
        alert ("Tu oponente eligió Tijera ✂")
    } else if ( parseInt(oponente) !== 0 && parseInt(oponente) !== 1 && parseInt(oponente) !== 2 && oponente.toLowerCase() !== "esc") {
        alert ("Eso no es un ataque 😅")
    } else {
        alert ("gracias por participar, nos vemos luego")
    }

//* resultados
    if (parseInt(jugador) == parseInt(oponente)) {
        alert ("Empataron 😮")
    } else if ( parseInt(jugador) == 0 && parseInt(oponente) == 2) {
        alert ("Ganasteee 🎉🎉")
    }  else if ( parseInt(jugador) == 1 && parseInt(oponente) == 0) {
        alert ("Ganasteee 🎉🎉")
    } else if ( parseInt(jugador) == 2 && parseInt(oponente) == 1) {
        alert ("Ganasteee 🎉🎉")
    } else {
        alert ("Perdiste 😭")
    }

    let queresJugar = confirm ("¿Queres jugar de nuevo?");
    if (queresJugar === true) {
        alert ("Bienvenido al PIEDRA, PAPEL o TIJERA");
        jugador = prompt ("Elegí tu ataque, escribí:\n0 para PIEDRA⚙\n1 para PAPEL📃\n2 para TIJERA✂\nesc para salir");
    } else {
        jugador.toLowerCase() == "esc";
        alert ("gracias por participar, nos vemos luego");
        break;
    }
} 

*/


//?  **************** JUEGO CON FUNTION  ******************************************************************/



function PiedraPapelTijera() {

alert ("Bienvenido al PIEDRA, PAPEL o TIJERA");

let jugador = prompt ("Elegí tu ataque, escribí:\n0 para PIEDRA⚙\n1 para PAPEL📃\n2 para TIJERA✂\nesc para salir");
let oponente = Math.floor( Math.random() *2.5 );

//*ataque jugador
    if ( parseInt(jugador) == 0) {
        alert ("Elegiste Piedra ⚙")
    } else if ( parseInt(jugador) == 1) {
        alert ("Elegiste Papel 📃")
    } else if ( parseInt(jugador) == 2) {
        alert ("Elegiste Tijera ✂")
    } else if ( parseInt(jugador) !== 0 && parseInt(jugador) !== 1 && parseInt(jugador) !== 2 && jugador.toLowerCase() !== "esc") {
        alert ("Eso no es un ataque 😅")
    } else {
        alert ("gracias por participar, nos vemos luego")
    }

//*ataque oponente
    if ( parseInt(oponente) == 0) {
        alert ("Tu oponente eligió Piedra ⚙")
    } else if ( parseInt(oponente) == 1) {
        alert ("Tu oponente eligió Papel 📃")
    } else if ( parseInt(oponente) == 2) {
        alert ("Tu oponente eligió Tijera ✂")
    } else if ( parseInt(oponente) !== 0 && parseInt(oponente) !== 1 && parseInt(oponente) !== 2 && oponente.toLowerCase() !== "esc") {
        alert ("Eso no es un ataque 😅")
    } else {
        alert ("gracias por participar, nos vemos luego")
    }

//*resutados
    if (parseInt(jugador) == parseInt(oponente)) {
        alert ("Empataron 😮")
    } else if ( parseInt(jugador) == 0 && parseInt(oponente) == 2) {
        alert ("Ganasteee 🎉🎉")
    }  else if ( parseInt(jugador) == 1 && parseInt(oponente) == 0) {
        alert ("Ganasteee 🎉🎉")
    } else if ( parseInt(jugador) == 2 && parseInt(oponente) == 1) {
        alert ("Ganasteee 🎉🎉")
    } else {
        alert ("Perdiste 😭")
    }
    
    let queresJugar = confirm ("¿Queres jugar de nuevo?");
    if (queresJugar === true) {
        PiedraPapelTijera ();
    } else {
        alert ("gracias por participar, nos vemos luego")
    }

}

PiedraPapelTijera ();


//? ************ calculando con function ********************************************/


/*
function suma (numero1, numero2) {
    return numero1 + numero2
}

let primernro = parseInt(prompt ("escribí un numero"));
let segundonro = parseInt(prompt ("escribí otro numero"));


/***** una opcion es ******/

/*
let resultado = suma (primernro, segundonro)
alert ("el resutlado de la suma es = " + resultado);
*/

/*****otra opcion es******/

/*
alert ("el resutlado de la suma es = " + suma (primernro, segundonro ));
*/

/*****otra opcion es******/

/*
alert ( "el resultado del calculo es " + suma (4, 5));
*/
