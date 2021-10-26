// antwoord op vraag 5

let ambiances = ["entertainment", "work", "cleaning", "morning"]
ambiances.push("movies")

console.log(`Er zijn ${ambiances.length} ambiances. Dit zijn:`)

for (let i = 0; i < ambiances.length; i++) {
    console.log(`Huis modus : ${ambiances[i]}`)
}
