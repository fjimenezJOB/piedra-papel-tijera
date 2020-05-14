/*
    Juego PIEDRA, PAPEL, TIJERAS
    ----------------------------

    Hecho con javascript para practicar el uso de if, else y else if.
*/

// VARIABLES ----------------------------------------------------------------
var plays = ["Piedra", "Papel", "Tijeras"];

// Inicio del juego
function game(player1, player2) {

// Comprobamos si ha habido empate
  if (player1 === player2) {
    console.log("******** ¡¡ ESTO ES UN EMPATE !! ********");
  }

// Comprobamos si jugador1 saca Piedra, si el jugador2 saca algo que no sea Papel, jugador1 gana.
  if (player1 === 0) {

    if (player2 === 2) {
      console.log(`Gana jugador1 con ${plays[player1]}`);

    } else {
      console.log(`Gana jugador2 con ${plays[player2]}`);
    }
  }

// Comprobamos si jugador1 saca Papel, si el jugador2 saca algo que no sea Tijeras, jugador1 gana.
  if (player1 === 1) {

    if (player2 === 0) {
        console.log(`Gana jugador1 con ${plays[player1]}`);

    } else {
        console.log(`Gana jugador2 con ${plays[player2]}`);
    }
  }

// Comprobamos si jugador1 saca Tijeras, si el jugador2 saca algo que no sea Piedra, jugador1 gana.
  if (player1 === 2) {

    if (player2 === 1) {
        console.log(`Gana jugador1 con ${plays[player1]}`);

    } else {
        console.log(`Gana jugador2 con ${plays[player2]}`);
    }
  }
}

// Ejecutamos el juego llamando a la funcion game().
game(2,0);