import axios from "axios";
 function Login(){
    const [form,setform]=useState({
        'username':'',
        'email':''
    })
    // handle submit
 const HandleSubmit =(e)=>{
    e.preventDefault();
     axios.post(`http://localhost:4000/login`,form)
        .then((res)=>res.json())
        .then(data=>{
            localStorage.setItem('token',data,token);
        });
        
  
 }



 // handle change
 const HandleChange =(e)=>{
    setform({
        ...form,[e.target.name]:e.target.value
    })

 }
 
    return (
        <>
 <form onSubmit={HandleSubmit} >
       UserName <input type="text" name="username"  value={form.username} onChange={HandleChange} /><br/>
        Email<input type="email" name="email" value={form.email} onChange={HandleChange} /><br />
       <button type="submit">Login</button>
</form>
</>
    ) ;
    
     };

 export default Login;