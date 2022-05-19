//iniciar variaveis

let board = ['', '', '', '', '', '', '', '', '',];
let playertime = 0;
let symbols = ['o', 'x'];
let gameOver = false;
let estadosDoVencedor = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]

function handleMove(position) {


    if (gameOver) {
        return;


    }




    if (board[position] == '') {
        board[position] = symbols[playertime];

        gameOver = VoceVenceu();

        if (gameOver == false) {

            playertime = (playertime == 0) ? 1 : 0

        }
    }
    return gameOver;

}
function VoceVenceu() {


    for (let i = 0; i < estadosDoVencedor.length; i++) {

        let sequencias = estadosDoVencedor[i];

        let pos1 = sequencias[0];
        let pos2 = sequencias[1];
        let pos3 = sequencias[2];
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {

            return true;









        }



    }

    return false;
}


 
