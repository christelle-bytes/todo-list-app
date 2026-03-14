 export const users=JSON.parse(localStorage.getItem("users" )) || []

 export function addUser(newUser){
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

 }