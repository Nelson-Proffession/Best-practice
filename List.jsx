import React,{ useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


const List = () =>{
    const [BookData,setBookData]=useState([]);
    const navigate=useNavigate();
    const FetchBook =()=>{
        axios.get(`http://localhost:4000/select`) ;
       .then((res)=>{
        setBookData(res.data)
    })
       .catch((err)=>{
        console.error("data not selected")
       })
 };
useEffect(()=>{
    FetchBook();
},[])
// function to handle Delete
const handleDelete = (id)=>{
    axios.delete(`http://localhost:4000/delete/${id}`,BookData)
    .then((res)=>{ 
        alert('Delted')})
    .catch((err)=>{
       alert("Not deleted");
        
    })
    
};

return (
<div>
<table border="1">
    <thead>
        <tr>
<th>id</th>
<th>bookname</th>
<th>author</th>
<th>publisher</th>
<th>Action</th>
</tr>
    </thead>
    <tbody>
{BookData.map((book)=>(
    <tr key={book.id}>
    <td>{book.id}</td>
    <td>{book.book_name}</td>
    <td>{book.author}</td>
    <td>{book.publisher}</td>
    <td>
        <button onClick={() => navigate(`/update/${book.id}`)}>Update</button>
        <button onClick={()=> handleDelete(book.id)}>delete</button>

    </td>
    </tr>
)

)}
</tbody>
</table>
</div>
);
};
export default List;