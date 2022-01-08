
//fetch with promises
const myPromise = () => {
      fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then( (response) => {
        console.log(response.status)
        //response.json()
        })
      .then( (data) => console.log(data))
      .catch((error) => console.log(error))
      }
      //myPromise()
      //fetch with async - await
      const myFetch = async () => {
            let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
            let response2 = await fetch("https://pokeapi.co/api/v2/pokemon/pikach")
            console.log(response, response2)
            if (!response.ok || !response2.ok) {throw new Error (` :D :D HTTP error! status: ${response.status} - ${response2.status}`)};
            console.log("Fetch exitoso")
            console.log(response.json(), response2.json())
      }
      myFetch()
      