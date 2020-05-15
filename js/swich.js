/*
    Juego PIEDRA, PAPEL, TIJERAS
    ----------------------------

    Hecho con javascript para practicar el uso de swich.

    */


// VARIABLES ----------------------------------------------------------------
var plays = ["Piedra", "Papel", "Tijeras"];

// FUNCIONES ----------------------------------------------------------------
function game(player1, player2) { // Introducimos las dos variables a la funcion, representa la elección de los dos jugadores.

  switch (player1) { // Comprobamos siempre primero lo que elige jugador 1.

    case 0:
      if (player2 == 0){
        console.log(' ********* ¡¡ ESTO ES UN EMPATE !! *********'); // Si jugador elige 0 (Piedra), y jugador2 también es un empate y rompemos el ciclo.
        break;
      }

      // Si jugador 2 elije algo que no sea papel gana jugador1, si no gana jugador2. Es lo mimso por cada elección que haga el jugador 1.
      if(player2 != 1){
        console.log(`Gana jugador1 con ${plays[player1]}`);
        break;
      } else {
        console.log(`Gana jugador2 con ${plays[player2]}`);
        break;
      }

    case 1:
      if (player2 == 1){
        console.log(' ********* ¡¡ ESTO ES UN EMPATE !! *********');
        break;
      }
      if(player2 != 2){
        console.log(`Gana jugador1 con ${plays[player1]}`);
        break;
      } else {
        console.log(`Gana jugador2 con ${plays[player2]}`);
        break;
      }

    case 2:
      if (player2 == 2){
        console.log(' ********* ¡¡ ESTO ES UN EMPATE !! *********');
        break;
      }
      if (player2 !== 0){
        console.log(`Gana jugador1 con ${plays[player1]}`);
        break;
      } else {
        console.log(`Gana jugador2 con ${plays[player2]}`);
        break;
      }
  }
}

// Llamamos a la funcion para iniciar el jugego colocando las elecciones de los dos jugadores como parámetros.
game(0,0);