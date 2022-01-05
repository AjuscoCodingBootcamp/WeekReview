let perritos = ["Khale", "Champi", "Dona", "Samantha", "Arya", "Maya", "Odín", "Nerón", "Muñeca", "Aisha"]

let gatitos = ["simba", "nala", "king"]

let canarios = ["piquito", "loli", "perry"]
//console.log(perritos.map(function(perrito) {perrito.length}))

function contadorDeLetras (arregloMascotas) {
      let mascotaNumbers = 0
      arregloMascotas.map(function(mascota) { 
            mascota.length
            mascotaNumbers += mascota.length})
      return mascotaNumbers
}
console.log(contadorDeLetras(canarios))
//ARROW FUNCTION
let petNumbers = 0

const countNameLetters = arrayPets => {
     // canarios.map(pet => petNumbers += pet.length)
     arrayPets.map(pet => petNumbers+= pet.length)
     petNumbers
}

//countNameLetters(canarios)

//console.log(petNumbers)

