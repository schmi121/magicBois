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

    var firebaseInstance = firebase.initializeApp(firebaseConfig);
    console.log(firebaseInstance)

    var magicPlayers = firebase.database().ref("/magic/players");

    let usersChoice;

    const jordanButton = document.getElementById('jordan');
    const blakeButton = document.getElementById('blake');
    const toneButton = document.getElementById('tone');
    const dillonButton = document.getElementById('dillon');
    const willButton = document.getElementById('will');

    jordanButton.addEventListener('click', () => {
        usersChoice = 'jordan';
        playGame();
    });

    blakeButton.addEventListener('click', () => {
        usersChoice = 'blake';
        playGame();
    });

    toneButton.addEventListener('click', () => {
        usersChoice = 'tone';
        playGame();
    });

    dillonButton.addEventListener('click', () => {
        usersChoice = 'dillon';
        playGame();
    });
    willButton.addEventListener('click', () => {
        usersChoice = 'will';
        playGame();
    });

    var jordanScoreRef = firebase.database().ref("magic/players/Jordan").child('score');

    jordanScoreRef.transaction(function (currentScore) ({
        return currentScore + 1;
    });

    var magicPlayersRef = db.collection('players')

    function playGame() {
        var playerQuery = magicPlayersRef.where('players');
        if (playerQuery != 'Jordan' || 'Dillon' || 'Blake' || 'Tone' || 'Will') {
            magicPlayers.set({
                Jordan: {
                    score: 0,
                },
        
                Dillon: {
                    score: 0,
                },
        
                Tone: {
                    score: 0,
                },
        
                Blake: {
                    score: 0,
                },
        
                Will: {
                    score: 0,
                },
            });
        } else {
            return usersChoice
        }   
    }
});