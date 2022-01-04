import { user, access1 } from './login.js'
import * as module from './firebase.js'

export const fetchData = () => {
      //console.log("data.js connected")
}
export const db = firebase.firestore()

db.collection("perritos").add(
      {name: "Kalesh", age: 7}
).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });

