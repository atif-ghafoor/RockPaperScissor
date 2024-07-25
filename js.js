const choices = ['rock', 'paper', 'scissor'];

/**
 * randomly choose a number from given array
*/
function getRandomFromList(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const random = arr[randomIndex];
    return random;
}

/**
 * 
 * @param {*} personChoice - person choice
 * @param {*} computerChoice - user computer
 * @param {*} choices - rock | paper | scissor
 * @returns returns games results
 * 
 * implements game logic of rock paper and scissor
*/
function RockPaperScissor (personChoice, computerChoice, choices){
    if (choices.includes(personChoice)){
        if (personChoice === computerChoice){
            return 'Draw'
        }
        if (personChoice === 'rock') {
            if( computerChoice === 'paper'){
                return 'computer'
            }
            else{
                return 'person'
            }
        }
        else if (personChoice === 'paper' ){ 
            if( computerChoice === 'rock'){
                return 'person'
            }
            else{
                return 'computer'
            }
        }
        else{
            if (computerChoice === 'paper'){
                return 'person'
            }
            else{
                return 'computer'
            }
        }
        
    }
}

let result;
let personChoice;
let computerChoice;
let winer;
let imgResetPerson; // variable reset personchoice img to previous position
let imgResetComputer;// variable to reset computerchoice img to previous position

// variables for personchoice images to indent up
const images = document.querySelectorAll('.Person_img img');
const rockPerson = document.querySelector('.rock_p').className
const scissorPerson = document.querySelector('.scissor_p').className
const paperPerson = document.querySelector('.paper_p').className

// variables for computerchoice images to indent up
const rockComputer = document.querySelector('.rock_c')
const scissorComputer = document.querySelector('.scissor_c')
const paperComputer = document.querySelector('.paper_c')

let clickable = true;
/**
 * to indent images of personchoice and computerchoice up 
 * and after indenting rest images to previous position after 9s
 */
images.forEach(img => {
    let imgClassName = img.className
    img.addEventListener('click', function (event){
        if (clickable){
            clickable = false
            //  to indent personChoice img up
            if (imgClassName == rockPerson)
                {
                    img.style.margin = '0 30px 120px 30px'
                    personChoice = 'rock'
                    imgResetPerson =  document.querySelector('.rock_p')
                }
            else if (imgClassName === scissorPerson){
                img.style.margin = '0 30px 120px 30px'
                personChoice = 'scissor'
                imgResetPerson =  document.querySelector('.scissor_p')
            }
            else{
                img.style.margin = '0 30px 120px 30px'
                personChoice = 'paper'
                imgResetPerson =  document.querySelector('.paper_p')
            }
            //  winner
            const computerChoice = getRandomFromList(choices)
            winer = RockPaperScissor(personChoice, computerChoice, choices)

            // to indent computerchoice img up
            if (computerChoice === 'rock')
            {
                rockComputer.style.margin = '0 30px 120px 30px'
                imgResetComputer = document.querySelector('.rock_c')
            }
            else if (computerChoice === 'scissor'){
                scissorComputer.style.margin = '0 30px 120px 30px'
                imgResetComputer = document.querySelector('.scissor_c')
            }
            else{
                paperComputer.style.margin = '0 30px 120px 30px'
                imgResetComputer = document.querySelector('.paper_c')
            }

            // deciding winner or loser or for draw
            if (winer === 'computer'){
                result = 'You lose'
            }
            else if (winer === 'Draw'){
                result = 'Draw'
            }
            else{
                result = 'You win'
            }

            // to display winner on screen
            document.querySelector('#result').textContent = result

            // set a time to reset img positions
            setTimeout(() => {
                clickable = true
                imgResetPerson.style.margin = '10px 30px';
                imgResetComputer.style.margin = '10px 30px';
            }, 1500);
        }
    })
})





