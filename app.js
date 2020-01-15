document.addEventListener('DOMContentLoaded', function () {
  var firebaseConfig = {
    apiKey: "AIzaSyAkTJiWbAIVZtkmYlLCbOV5rdgNBU6qkZo",
    authDomain: "magicbois.firebaseapp.com",
    databaseURL: "https://magicbois.firebaseio.com",
    projectId: "magicbois",
    storageBucket: "magicbois.appspot.com",
    messagingSenderId: "9464443469",
    appId: "1:9464443469:web:54fb67767c3a51b8be2204",
    measurementId: "G-N6RHKFFC38",
  };
    
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

    // const preObject = document.getElementById('object');

    // const dbRefObject = firebase.database().ref().child('object');

    // dbRefObject.on('value', snap => console.log(snap.val()));
    
    
    
    
    // const magicBois = ['jordan', 'tone', 'blake', 'dillon', 'will'];

    // let cpuChoice = magicBois[Math.floor(Math.random() * magicBois.length)];
    // console.log(cpuChoice)

    // let points;

    // let usersChoice;

    // const scoreBoard = {
    //     playerScore: 0,
    //     cpuScore: 0,
    //     incrementPlayerScore: function() {
    //         this.playerScore += 1;
    //     },
    //     incrementCpuScore: function() {
    //         this.cpuScore += 1;
    //     },
    //     winnerCheck: function() {
    //         if (this.playerScore === 5) {
    //             alert("You Win!");
    //             this.resetGame();
    //         } else if (this.cpuScore === 5) {
    //             alert("You Lose");
    //             this.resetGame();
    //         }
    //     },
    //     resetGame: function() {
    //         this.playerScore = 0;
    //         this.cpuScore = 0;
    //         alert('The game will now reset');
    //     },
    // };

    // const jordanButton = document.getElementById('jordan');
    // const blakeButton = document.getElementById('blake');
    // const toneButton = document.getElementById('tone');
    // const dillonButton = document.getElementById('dillon');
    // const willButton = document.getElementById('will');

    // jordanButton.addEventListener('click', () => {
    //     usersChoice = 'jordan';
    //     playGame();
    // });

    // blakeButton.addEventListener('click', () => {
    //     usersChoice = 'blake';
    //     playGame();
    // });

    // toneButton.addEventListener('click', () => {
    //     usersChoice = 'tone';
    //     playGame();
    // });

    // dillonButton.addEventListener('click', () => {
    //     usersChoice = 'dillon';
    //     playGame();
    // });
    // willButton.addEventListener('click', () => {
    //     usersChoice = 'will';
    //     playGame();
    // });

    // function playGame() {
    //     if (usersChoice === 'rock' && cpuChoice === 'scissors') {
    //         alert('You won');
    //         scoreBoard.playerScore++
    //     } else if (usersChoice === 'paper' && cpuChoice === 'rock') {
    //         alert('You won');
    //         scoreBoard.playerScore++
    //     } else if (usersChoice === 'scissors' && cpuChoice === 'paper') {
    //         alert('You won'); 
    //         scoreBoard.playerScore++
    //     } else if (usersChoice === cpuChoice) {
    //         alert('You Tied');
    //     } else {
    //         alert('You Lose you dummy');
    //         scoreBoard.cpuScore++;
    //     } 
    //     alert(`the score is Player: ${scoreBoard.playerScore} to CPU: ${scoreBoard.cpuScore}`);
    //     scoreBoard.winnerCheck();
    //     alert('Cpu is choosing new play');
    //     cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    // }
});