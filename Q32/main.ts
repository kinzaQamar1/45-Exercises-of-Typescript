//Array of current uers.
let current_users =["ali","ayesha","rehman","areeba","sana"]

//Array of new users.
let new_users =["kinza","tasbiha","ali","waniya","areeba"]

//loop through new_users to check username avalibility.
new_users.forEach(new_one_user =>{
    
    //making a condition for username already exist and save in our_condition variables.
let our_condition =(current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()))

//print the different messages by using IF , ELSE statement.
if (our_condition){

    console.log(`SORRY ${new_one_user},is already taken!`);
    
}else{
    console.log(`This username ${new_one_user} is available`);
    
}
})