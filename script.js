alert('connnected')

const person = {
    firstName: ' Viggo',
    lastName: 'Montreal',
    fullName: (() =>{
        return `${this.firstName},${this.lastName}`
    })
}

// console.log(fullName)

function rolldie(numSide = 6){
    return Math.floor(math.random() * numSides) + 1
}
