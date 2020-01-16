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

    let currentScoreRef = firebase.database().ref('magic/players/').child('/score');

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
        } else function score() {
            if (usersChoice === 'jordan') {
                function increaseScore() {
                    var jordanScoreRef = firebase.database().ref('magic/players/Jordan').child('score');
                    jordanScoreRef.transaction(function (currentScoreRef) {
                        return currentScore + 1;
                    });
                };
            } else if (usersChoice === 'blake') {
                function increaseScore() {
                    var blakeScoreRef = firebase.database().ref('magic/players/Blake').child('score');
                    blakeScoreRef.transaction(function (currentScoreRef) {
                        return currentScore + 1;
                    });
                };
            } else if (usersChoice === 'tone') {
                function increaseScore() {
                    var toneScoreRef = firebase.database().ref('magic/players/Tone').child('score');
                    toneScoreRef.transaction(function (currentScoreRef) {
                        return currentScore + 1;
                    });
                };
            } else if (usersChoice === 'dillon') {
                function increaseScore() {
                    var dillonScoreRef = firebase.database().ref('magic/players/Dillon').child('score');
                    dillonScoreRef.transaction(function (currentScoreRef) {
                        return currentScore + 1;
                    });
                };
            } else if (usersChoice === 'will') {
                function increaseScore() {
                    var willScoreRef = firebase.database().ref('magic/players/Will').child('score');
                    willScoreRef.transaction(function (currentScoreRef) {
                        return currentScore + 1;
                    });
                };
            } else (console.log('Null Pick')); {
        };
    };
};})