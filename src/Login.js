import './login.css';

const Login = (props) => {
    var users = [{"mail":"raja@gmail.com","password":"raja"},{"mail":"sam@gmail.com","password":"same"}]

    function apiLoginCheck() {
        var maillAdd = document.querySelector('#mailID').value
        var pass = document.querySelector('#Password').value;

        let loginStatus = false; 

       for (let i = 0; i < users.length; i++){
        if (users[i].mail == maillAdd && users[i].password == pass){
            loginStatus = true;
           alert("match Found..!");
             }
             else {
                console.log("not matched")
                props.onRegistration();
                break;
             }
           
           
             
       } 

       if(loginStatus){
     
       }
    }

    return (  
        <div className="login">
            <div className="loginform">
                <h1>Login</h1>
                <p>Gether around</p>
            <div className='inputs-container'>
            <input type="text" name="" id="mailID" placeholder='Enter mail id' />
                <input type="password" name="" id="Password" placeholder='Password' />
            </div>
                <button type="submit" onClick={apiLoginCheck}>Login</button>
            </div>
        </div>
    );
}
 
export default Login;