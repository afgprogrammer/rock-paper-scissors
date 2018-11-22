
let userWin = 0
let userLos = 0 

const userSpan = document.getElementById('user')
const cpuSpan = document.getElementById('cpu')
const result = document.getElementById('result')

const stone = document.getElementById('stone') //1
const paper = document.getElementById('paper') //2
const scissor = document.getElementById('scissor') //3

const gameItme = ['1', '2', '3']

function userWins() {
    userWin++;

    userSpan.innerHTML = userWin
    result.innerHTML = 'User Win ...'
}

function userLoss() {
    userLos++;

    cpuSpan.innerHTML = userLos
    result.innerHTML = 'User Los ...'
}

// Game Handle
function game(itme) {
    let cpu = Math.floor(Math.random() * 3)
        cpu = gameItme[cpu]
    switch(itme + cpu) {
        case '13':
        case '21':
        case '32':
            userWins()
            break
        case '12':
        case '23':
        case '31':
            userLoss()
            break
        default: 
            result.innerHTML = 'Nothing ...'

    }
}

// Click Handle
stone.addEventListener('click', () => {
    game('1')
})

paper.addEventListener('click', () => {
    game('2')
})

scissor.addEventListener('click', () => {
    game('3')
})
