import { login, access1 } from './modules/login.js'
import { fetchData } from './modules/data.js'
import { ID } from './modules/app.js'

console.log("main module connected")
login()
fetchData()
console.log(ID)
console.log(access1)