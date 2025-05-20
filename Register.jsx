import axios from 'axios';
import React,{ useState} from 'react';
import { Navigate } from 'react-router-dom';

const Register =()=>{
const [userData,setuserData] = useState({
    'username':'',
    'email':'',
    'password':''
})
// just am gonna for handle changes
const HandleChange = (e) =>{
    setuserData({
    ...userData,[e.target.name]:e.target.value
});
};
// handle submit
const HandleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:4000/register`,userData)
    .then((res)=>{Navigate('Login')
        alert('Inserted well');
    })
    .cath((err)=>{
        console.error("error to insert");
        
    });

}

return (
    <>
    <form onSubmit={HandleSubmit} >
       User Name <input type="text" name="username"  value={userData.username} onChange={HandleChange} /><br/>
        Email<input type="email" name="email" value={userData.email} onChange={HandleChange} /><br />
        Password<input type="password" name="password" value={userData.password} onChange={HandleChange} />
        <button type='submit'>Register</button>
           <a href="Login">Login</a>


    </form>
    </>
)

};
export default Register;