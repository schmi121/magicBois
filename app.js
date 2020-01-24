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

    const jordanIncButton = document.getElementById('jordanIncrementButton');
    const blakeIncButton = document.getElementById('blakeIncrementButton');
    const toneIncButton = document.getElementById('toneIncrementButton');
    const dillonIncButton = document.getElementById('dillonIncrementButton');
    const willIncButton = document.getElementById('willIncrementButton');

    const jordanDeButton = document.getElementById('jordanDecrementButton');
    const blakeDeButton = document.getElementById('blakeDecrementButton');
    const toneDeButton = document.getElementById('toneDecrementButton');
    const dillonDeButton = document.getElementById('dillonDecrementButton');
    const willDeButton = document.getElementById('willDecrementButton');

    const jordanPlayerHealth = document.getElementById('jordanHealth');
    const blakePlayerHealth = document.getElementById('blakeHealth');
    const tonePlayerHealth = document.getElementById('toneHealth');
    const dillonPlayerHealth = document.getElementById('dillonHealth');
    const willPlayerHealth = document.getElementById('wilHealth');

    const btnsArray = [jordanButton, blakeButton, toneButton, dillonButton, willButton];
    const playerHealthArray = [jordanPlayerHealth, blakePlayerHealth, tonePlayerHealth, dillonPlayerHealth, willPlayerHealth];
    const incBtnsArray = [jordanIncButton, blakeIncButton, toneIncButton, dillonIncButton, willIncButton];
    const deBtnsArray = [jordanDeButton, blakeDeButton, toneDeButton, dillonDeButton, willDeButton];

    btnsArray.forEach(button => {
        button.addEventListener('click', e => {
            incrementScoreByOne(e.srcElement.innerText);
            updateDom(e);
        })
    })

    incBtnsArray.forEach(button => {
        button.addEventListener('click', e => {
            let currentHealth = parseInt(e.srcElement.parentNode.parentNode.childNodes[1].innerText);
            currentHealth += 1;
            e.srcElement.parentNode.parentNode.childNodes[1].innerHTML = `<p>${currentHealth.toString()}</p>`;
        })
    })

    deBtnsArray.forEach(button => {
        button.addEventListener('click', e => {
            let currentHealth = parseInt(e.srcElement.parentNode.parentNode.childNodes[1].innerText);
            currentHealth -= 1;
            e.srcElement.parentNode.parentNode.childNodes[1].innerHTML = `<p>${currentHealth.toString()}</p>`;
        })
    })

    initializeDatabase();

    function incrementScoreByOne(player) {
        databaseReference.ref(`magic/players/${player}`).child('score').transaction(function (currentScore) {
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
            } else {
                databaseReference.ref('magic/players/').once("value", function (snapshot) {
                    let players = snapshot.val()
                    for (let player in players) {
                        document.getElementById(player.toLowerCase()).nextSibling.nextSibling.innerHTML = `<p>${players[player].score}</p>`;
                    }
                });
            };
        });
    };
})