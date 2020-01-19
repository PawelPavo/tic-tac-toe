
let cells = document.querySelectorAll('.row > div');
console.log(cells)

// // cell.forEach(function (anything) {
// //     anything.addEventListener("click", cellX)
// // });
let currentPlayer = 'X'
let clickCounter = 0
let gameOver = false

for (let i = 0; i < cells.length; i++) {
    let cell = cells[i]
    cell.addEventListener('click', cellClicked)
}

function cellClicked(e) {
    if (gameOver) {
        gameReset()
        return;
    }
    if (e.target.textContent === 'X' || e.target.textContent === 'O') {
        return;
    }
    e.target.textContent = currentPlayer;
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
    clickCounter++

    if (cells[0].textContent === 'X' &&
        cells[1].textContent === 'X' &&
        cells[2].textContent === 'X') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'X is the winner!',
        })
    } else if (
        cells[3].textContent === 'X' &&
        cells[4].textContent === 'X' &&
        cells[5].textContent === 'X') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'X is the winner!',
        })
    } else if (
        cells[6].textContent === 'X' &&
        cells[7].textContent === 'X' &&
        cells[8].textContent === 'X') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'X is the winner!',
        })
    } else if (
        cells[2].textContent === 'X' &&
        cells[5].textContent === 'X' &&
        cells[8].textContent === 'X') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'X is the winner!',
        })
    } else if (
        cells[0].textContent === 'X' &&
        cells[3].textContent === 'X' &&
        cells[6].textContent === 'X') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'X is the winner!',
        })
    } else if (
        cells[1].textContent === 'X' &&
        cells[4].textContent === 'X' &&
        cells[7].textContent === 'X') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'X is the winner!',
        })
    } else if (
        cells[0].textContent === 'X' &&
        cells[4].textContent === 'X' &&
        cells[8].textContent === 'X') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'X is the winner!',
        })
    } else if (
        cells[2].textContent === 'X' &&
        cells[4].textContent === 'X' &&
        cells[6].textContent === 'X') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'X is the winner!',
        })
    } else if (cells[0].textContent === 'O' &&
        cells[1].textContent === 'O' &&
        cells[2].textContent === 'O') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'O is the winner!',
        })
    } else if (
        cells[3].textContent === 'O' &&
        cells[4].textContent === 'O' &&
        cells[5].textContent === 'O') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'O is the winner!',
        })
    } else if (
        cells[6].textContent === 'O' &&
        cells[7].textContent === 'O' &&
        cells[8].textContent === 'O') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'O is the winner!',
        })
    } else if (
        cells[2].textContent === 'O' &&
        cells[5].textContent === 'O' &&
        cells[8].textContent === 'O') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'O is the winner!',
        })
    } else if (
        cells[0].textContent === 'O' &&
        cells[3].textContent === 'O' &&
        cells[6].textContent === 'O') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'O is the winner!',
        })
    } else if (
        cells[1].textContent === 'O' &&
        cells[4].textContent === 'O' &&
        cells[7].textContent === 'O') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'O is the winner!',
        })
    } else if (
        cells[0].textContent === 'O' &&
        cells[4].textContent === 'O' &&
        cells[8].textContent === 'O') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'O is the winner!',
        })
    } else if (
        cells[2].textContent === 'O' &&
        cells[4].textContent === 'O' &&
        cells[6].textContent === 'O') {
        gameOver = true
        Swal.fire({
            icon: 'success',
            title: 'O is the winner!',
        })
    } else if (clickCounter === 9) {
        gameOver = true
        Swal.fire({
            icon: 'error',
            title: 'DRAW',
            text: 'No winners here',
        })
    }

}

function gameReset() {
    currentPlayer = 'X'
    clickCounter = 0
    gameOver = false
    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i]
        cell.textContent = ''
    }
}