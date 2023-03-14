function HouseKeeper (name, yearsOfExperience, cleaningRepertoire) {
    this.name = name
    this.yearsOfExperience = yearsOfExperience
    this.cleaningRepertoire = cleaningRepertoire
    this.moveSwitcase = function() {
        alert("May I take your suitcase?")
        pickUpSuitcase()
        move()
    }
}

var houseKeeper1 = new HouseKeeper("Martha", 3, ["bathroom", "lobby", "bedroom"])

console.log(houseKeeper1.name)

function BellBoy (name, age, hasWorkPermit, languages) {
    this.name = name
    this.age = age
    this.hasWorkPermit = hasWorkPermit
    this.languages = languages
}

