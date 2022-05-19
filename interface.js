document.addEventListener('DOMContentLoaded', () => {


        let squares = document.querySelectorAll(".square");
        squares.forEach((squares) => {

            squares.addEventListener('click', handleClick);



        })










    })

    document.addEventListener('reiniciar', () => {

        let reiniciar = document.getElementsByClassName(".botao");

        botao.addEventListener('click', reiniciar);

    } )
    
 







function handleClick(event) {


    let square = event.target;
    let position = square.id;
    if (handleMove(position)) {

        setTimeout(() => {

            alert("GAME OVER - O vencedor foi o jogador " + playertime);

        }, 12);




    };
    updateSquares(position);

}
function updateSquares(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class='${symbols}'></div>`

}

function MyFunction(){
    reset.board;
    }