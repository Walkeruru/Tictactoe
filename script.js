const gameboard= function(){
    let board=["","","","","","","","",""];
    return board;
}()
const player= (name,simbolo) =>{
    return {name,simbolo};
};
const playGame=(function(){
    let contenedor= document.getElementById("contenedor");
    let boton= document.getElementById("boton");
    let nombre= document.getElementById("nombre");
    let nombredos=document.getElementById("nombredos");
    boton.addEventListener("click",function(){
        //aplicaciones para un reinicio de juego
    boton.innerHTML="Restart"
    gameboard.splice(0,9,"","","","","","","","","");
    //creacion del tablero
    contenedor.innerHTML= `
    <div class="cuadrado top left" data-numero="0"></div>
    <div class="cuadrado top" data-numero="1"></div>
    <div class="cuadrado top right" data-numero="2"></div>
    <div class="cuadrado left" data-numero="3"></div>
    <div class="cuadrado" data-numero="4"></div>
    <div class="cuadrado right" data-numero="5"></div>
    <div class="cuadrado left bot" data-numero="6"></div>
    <div class="cuadrado bot" data-numero="7"></div>
    <div class="cuadrado bot right" data-numero="8"></div>`
    // creacion de jugadores
    const player1=player(nombre.value,"X");
    const player2=player(nombredos.value,"O");
    let currentPlayer=player1;
    let plantillas=document.querySelectorAll(".cuadrado");

    //evento para la colocacion de marcadores en el tablero
    plantillas.forEach(plantilla=>{
        plantilla.addEventListener("click",function(){
            if(currentPlayer==player1 && plantilla.innerHTML===""){
                gameboard[plantilla.dataset.numero]="X"
               plantilla.innerHTML="X"
               currentPlayer=player2;
               if(winGame(plantilla.dataset.numero)==="win"){
                contenedor.innerHTML=`<span class="final">Gana ${nombre.value}</span>`
                gameboard.splice(0,9,"","","","","","","","","");
                boton.innerHTML="Jugar de nuevo";
               }else if(winGame(plantilla.dataset.numero)==="draw"){
                contenedor.innerHTML=`<span class="final">Empate</span>`
                gameboard=["","","","","","","","",""];
                boton.innerHTML="Jugar de nuevo";
               }
            }else if(currentPlayer==player2 && plantilla.innerHTML===""){
                gameboard[plantilla.dataset.numero]="O"
                plantilla.innerHTML="O";
                currentPlayer=player1;
                if(winGame(plantilla.dataset.numero)==="win"){
                    contenedor.innerHTML=`<span class="final">Gana ${nombredos.value}</span>`
                    gameboard.splice(0,9,"","","","","","","","","");
                    boton.innerHTML="Jugar de nuevo";
                   }else if(winGame(plantilla.dataset.numero)==="draw"){
                    contenedor.innerHTML=`<span class="final">Empate</span>`
                    gameboard.splice(0,9,"","","","","","","","","");
                    boton.innerHTML="Jugar de nuevo";
                   }
            }
        })
    })
})

// creamos una funcion que retorna si se encuntran 3 en linea o el tablero esta lleno(draw)
    const winGame = (a) =>{
        if((gameboard[0]===gameboard[1] && gameboard[0]===gameboard[2] && gameboard[a]===gameboard[0]) || (gameboard[3]===gameboard[4] && gameboard[3]===gameboard[5]  && gameboard[a]===gameboard[3] ) || 
        (gameboard[6]===gameboard[7] && gameboard[6]===gameboard[8] && gameboard[a]===gameboard[6]) || (gameboard[0]===gameboard[3] && gameboard[0]===gameboard[6]  && gameboard[a]===gameboard[0] ) ||
        (gameboard[1]===gameboard[4] && gameboard[1]===gameboard[7]  && gameboard[a]===gameboard[1]) || (gameboard[2]===gameboard[5] && gameboard[2]===gameboard[8]  && gameboard[a]===gameboard[2] ) ||
        (gameboard[0]===gameboard[4] && gameboard[0]===gameboard[8]  && gameboard[a]===gameboard[0]) || (gameboard[6]===gameboard[4] && gameboard[6]===gameboard[2] && gameboard[a]===gameboard[6])){
        return "win"
        }else if(!gameboard.includes("")){
            return "draw"
        }

    }
})();

