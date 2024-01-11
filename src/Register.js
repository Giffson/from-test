
import './login.css';

const Register = (props) => {

    var users = [{"mail":"raja@gmail.com","password":"raja"},{"mail":"sam@gmail.com","password":"same"}]

 

    function apiFunction(){

        var maillAdd = document.querySelector('#mailID').value
        var pass = document.querySelector('#Password').value;

 var checkUser = true;
 


//    check Array
        for (let i = 0; i < users.length; i++){
          
            if (users[i].mail == maillAdd ){
                checkUser = false;
                alert('you already Register with us !');
                props.onRegistration();
            
                break;
                
            }
            
        }

// check Value
        if (checkUser)  {

            let obj = {"mail": maillAdd,"password":pass};
            users.push(obj);
            console.log(obj);
           
        }
       
        console.log(users);

       





      
        }

    return ( 
        <div className="registerform login">
   <div className="loginform">
                <h1>Register</h1>
                <p>Gether around</p>
            <div className='inputs-container'>
            <input type="text" name="" id="mailID" placeholder='Enter mail id'/>
                <input type="password" name="" id="Password" placeholder='Password' />
            </div>
                <button type="submit" onClick={apiFunction}>Register now</button>
            </div>
        </div>
     );
}
 
export default Register;