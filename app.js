document.addEventListener('DOMContentLoaded', function () {

    const players = {
        Jordan: {
            score: 0,    
        },
        Dillon: {
            score: 0,    
        },
        Blake: {
            score: 0,    
        },
        Tone: {
            score: 0,    
        },
        Will: {
            score: 0,    
        }
    }

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

    var databaseReference = firebase.database();
    function initializeDatabase() {
        databaseReference.ref('/magic/players').on("value", function (snapshot) {
            console.log(snapshot.val());
            if (!snapshot.val()) {
                console.log("There's no data")
                databaseReference.ref('/magic/players').set (players)
            }
        });
    }

    initializeDatabase();

    const jordanButton = document.getElementById('jordan');
    const blakeButton = document.getElementById('blake');
    const toneButton = document.getElementById('tone');
    const dillonButton = document.getElementById('dillon');
    const willButton = document.getElementById('will');

    jordanButton.addEventListener('click', (e) => {
        incrementScoreByOne(e.srcElement.innerText);
    });

    blakeButton.addEventListener('click', (e) => {
        incrementScoreByOne(e.srcElement.innerText);
    });

    toneButton.addEventListener('click', (e) => {
        incrementScoreByOne(e.srcElement.innerText);
    });

    dillonButton.addEventListener('click', (e) => {
        incrementScoreByOne(e.srcElement.innerText);
    });

    willButton.addEventListener('click', (e) => {
        incrementScoreByOne(e.srcElement.innerText);
    });

    function incrementScoreByOne(player) {
        databaseReference.ref(`magic/players/${player}`).child('score').transaction(function (currentScore){
            return currentScore + 1;
        });
    };


    
})  