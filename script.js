alert('connnected')

const person = {
    firstName: ' Viggo',
    lastName: 'Montreal',
    fullName: function () =>{
        return `${this.firstName},${this.lastName}`
    }
}

// console.log(fullName)

function rolldie(numSide = 6){
    return Math.floor(math.random() * numSides) + 1
}

document.querySelector('h1').innerHTML = '<i> Listening , presenting, briefing and body language</i>'



const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// getting the total of all prices
const total = prices.reduce((total, price) => {
return total + price
})

console.log(total)
