const messages = [
    "Alejandro",
    "Andres",
    "Jorge",
    "Mario",
    "Laura",
    "Carolina",
    "Anna",
    "Mariela",
    "Yina"
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message)
}

module.exports = {randomMsg};