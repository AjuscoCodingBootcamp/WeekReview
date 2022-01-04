import { db } from './data.js'
import { access1} from './login.js'
export const ID = "234"

export let access;
//console.log(access)

db.collection("perritos").onSnapshot((data) => {
      data.forEach( (doc) => {
            console.log(doc.data())
      })
})