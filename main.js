
alert ("Bienvenido al PIEDRA, PAPEL o TIJERA");
alert ("Para poder iniciar el juego voy a pedirte algunos datos");

/*
let nombre = prompt ("Decime tu nombre").toLowerCase().trim();
let apellido = prompt ("Decime tu apellido").toLowerCase().trim();
let NombreApellido = alert ("Hola " + nombre + " "+ apellido + " " + "a continuación verás las instrucciones del juego.")
*/


//? ************ pedir nombre con Function ************/


let nombreJugador = prompt ("Decime tu nombre").toLowerCase() .trim();
let apellidoJugador = prompt ("Decime tu apellido").toLowerCase() .trim();

function pedirNombre (nombre, apellido) {
    return ("Hola " + nombre + " "+ apellido + " " + "a continuación verás las instrucciones del juego.")
}

let dameTuNombre = pedirNombre(nombreJugador, apellidoJugador);
alert(dameTuNombre);


//? **************** JUEGO CON DO....WHILE **************************************************/



let jugador;
let oponente;

do {

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


//?  **************** JUEGO CON WHILE *******************************************************************/

/*

let jugador = prompt ("Elegí tu ataque, escribí:\n0 para PIEDRA⚙\n1 para PAPEL📃\n2 para TIJERA✂\nesc para salir");

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

    jugador = prompt ("Elegí tu ataque, escribí:\n0 para PIEDRA⚙\n1 para PAPEL📃\n2 para TIJERA✂\nesc para salir");
} 

*/


//?  **************** JUEGO CON FUNTION ******************************************************************/

/*
let jugador = prompt ("Elegí tu ataque, escribí:\n0 para PIEDRA⚙\n1 para PAPEL📃\n2 para TIJERA✂\nesc para salir");
let oponente = Math.floor( Math.random() *2.5 );

function ataques(ataqueJugador, ataqueOponente) {

//*ataque jugador
    if ( parseInt(ataqueJugador) == 0) {
        alert ("Elegiste Piedra ⚙")
    } else if ( parseInt(ataqueJugador) == 1) {
        alert ("Elegiste Papel 📃")
    } else if ( parseInt(ataqueJugador) == 2) {
        alert ("Elegiste Tijera ✂")
    } else if ( parseInt(ataqueJugador) !== 0 && parseInt(ataqueJugador) !== 1 && parseInt(ataqueJugador) !== 2 && ataqueJugador.toLowerCase() !== "esc") {
        alert ("Eso no es un ataque 😅")
    } else {
        alert ("gracias por participar, nos vemos luego")
    }

//*ataque oponente
    if ( parseInt(ataqueOponente) == 0) {
        alert ("Tu oponente eligió Piedra ⚙")
    } else if ( parseInt(ataqueOponente) == 1) {
        alert ("Tu oponente eligió Papel 📃")
    } else if ( parseInt(ataqueOponente) == 2) {
        alert ("Tu oponente eligió Tijera ✂")
    } else if ( parseInt(ataqueOponente) !== 0 && parseInt(ataqueOponente) !== 1 && parseInt(ataqueOponente) !== 2 && oponente.toLowerCase() !== "esc") {
        alert ("Eso no es un ataque 😅")
    }

//*resutados
    if (parseInt(ataqueJugador) == parseInt(ataqueOponente)) {
        alert ("Empataron 😮")
    } else if ( parseInt(ataqueJugador) == 0 && parseInt(ataqueOponente) == 2) {
        alert ("Ganasteee 🎉🎉")
    }  else if ( parseInt(jugaataqueJugadordor) == 1 && parseInt(ataqueOponente) == 0) {
        alert ("Ganasteee 🎉🎉")
    } else if ( parseInt(ataqueJugador) == 2 && parseInt(ataqueOponente) == 1) {
        alert ("Ganasteee 🎉🎉")
    } else {
        alert ("Perdiste 😭")
    }

}

ataques (jugador, oponente);

*/



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
