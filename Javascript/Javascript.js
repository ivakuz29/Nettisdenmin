let humanScore = 0
let computerScore = 0
 
function play(value) {
    const choices = ["stein", "papir", "saks"]
    let robot = choices[Math.floor(Math.random() * 3)]
    if (!choices.includes(value)) {
        console.log("Not valid choice")
    }
    if (value === robot) {
        console.log("Tie")
    }
    else if (value === "stein" & robot === "saks") {
        console.log("PLayer won")
    }
    else if (value === "papir" & robot === "stein") {
        console.log("PLayer won")
    }
    else if (value === "saks" & robot === "papir") {
        console.log("PLayer won")
    }
    else {
        console.log("Robot won")
    }
}
 
play("stein")
 