function adminLogin(uName,pwd)
{
    console.log("LoginSuccessfull as ADMIN");
}

function userLogin(uName,pwd) 
{
    console.log("LoginSuccessfull as USER");
}
function Login(username,password,account)
{
    account(username,password)   
}
console.log();
Login('abc@gmail.com','123456',userLogin)
console.log();