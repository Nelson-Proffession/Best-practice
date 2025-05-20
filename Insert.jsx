import axios from 'axios';
import React,{ useState} from 'react';

const Insert =()=>{
const [bookData,setBookData] = useState({
    'book_name':'',
    'author':'',
    'publisher':''
})
// just am gonna for handle changes
const HandleChange = (e) =>{
    setBookData({
    ...bookData,[e.target.name]:e.target.value
});
};
// handle submit
const HandleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`http://localhost:4000/add`,bookData)
    .then((res)=>{
        alert('Inserted well');
    })
    .cath((err)=>{
        console.error("error to insert");
        
    });

}

return (
    <>
    <form onSubmit={HandleSubmit} >
       Book Name <input type="text" name="book_name"  value={bookData.book_name} onChange={HandleChange} /><br/>
        Author<input type="text" name="author" value={bookData.author} onChange={HandleChange} /><br />
        Publisher<input type="text" name="publisher" value={bookData.publisher} onChange={HandleChange} />
        <a href="list">Book list</a>
        
        <button type='submit'>register</button>
         


    </form>
    </>
)

};

export default Insert;