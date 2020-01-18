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
    var databaseReference = firebase.database();

    
    const jordanButton = document.getElementById('jordan');
    const blakeButton = document.getElementById('blake');
    const toneButton = document.getElementById('tone');
    const dillonButton = document.getElementById('dillon');
    const willButton = document.getElementById('will');

    const btnsArray = [jordanButton, blakeButton, toneButton, dillonButton, willButton];

    btnsArray.forEach(button => {
        button.addEventListener('click', e => {
            incrementScoreByOne(e.srcElement.innerText);
            updateDom(e);
        })
    })

    initializeDatabase();
    
    // jordanButton.addEventListener('click', (e) => {
    //     incrementScoreByOne(e.srcElement.innerText);
    //     updateDom(e);
    // });

    // blakeButton.addEventListener('click', (e) => {
    //     incrementScoreByOne(e.srcElement.innerText);
    //     updateDom(e);
    // });

    // toneButton.addEventListener('click', (e) => {
    //     incrementScoreByOne(e.srcElement.innerText);
    //     updateDom(e);
    // });

    // dillonButton.addEventListener('click', (e) => {
    //     incrementScoreByOne(e.srcElement.innerText);
    //     updateDom(e);
    // });

    // willButton.addEventListener('click', (e) => {
    //     incrementScoreByOne(e.srcElement.innerText);
    //     updateDom(e);
    // });

    function incrementScoreByOne(player) {
        databaseReference.ref(`magic/players/${player}`).child('score').transaction(function (currentScore){
            return currentScore + 1;
        });
    };

    function updateDom(e) {
        let player = e.srcElement.innerText;
        let element = e;

        if (e.type === 'click') {
            databaseReference.ref('magic/players/').once("value", function (snapshot) {
                let playersCurrentScore = snapshot.val()[player].score;
                element.toElement.nextSibling.nextElementSibling.innerHTML = `<p>${playersCurrentScore}</p>`;
            })
        } else {
            
        }
    }

    function initializeDatabase() {
        databaseReference.ref('/magic/players').on("value", function (snapshot) {
            if (!snapshot.val()) {
                databaseReference.ref('/magic/players').set(players)
            }
        });
    }
})