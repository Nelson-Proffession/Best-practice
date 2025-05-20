import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Update =()=>{
    const {id}=useParams();
     const [BookData,setBookData]=useState({
        book_name: '',
        author: '',
        publisher:''

     });

useEffect(() => {
    axios.get(`http://localhost:4000/select/${id}`)
        .then((res) => setBookData(res.data))
        .catch((error) => {
            alert("Data not selected");
        });
}, [id]);
const handleChange =(e)=>{
    setBookData({
        ...BookData,[e.target.name]:e.target.value
    });
    
}


// handle update
const handleUpdate =(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:4000/update/${id}`,BookData)
    .then((res)=>{
        alert('OK  updated')

})

.catch((err)=>{
   alert('err to update');
    
});
};
return (
<>
    <form onSubmit={handleUpdate} >
        <input type="text" name="book_name" value={BookData.book_name} onChange={handleChange} placeholder="Enter Book Name to update" /><br />
        <br />
        <input type="text" name="author" value={BookData.author} onChange={handleChange} placeholder="Enter author Name to update" /><br />
        <input type="text" name="publisher" value={BookData.publisher} onChange={handleChange} placeholder="Enter Publisher Name to update" /><br />
       
        <button type="submit">Update</button>
         <a href="/List">Check Update</a>
    </form>
    </>
);
};
export default Update;