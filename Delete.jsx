import axios from "axios";
import { useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";


const Delete = ()=>{
    const [id] = useParams();
    const [Navigate] =useNavigate();
    useEffect(()=>{
    axios.delete(`http://localhost:4000/delete/${id}`)
    .then((res)=>{ 
        alert('Delted')})
    .catch((err)=>{
       alert("Not deleted");
        
    })
    });
};

export default Delete;