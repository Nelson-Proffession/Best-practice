import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import List from "./components/List";
import Insert from "./components/Insert";
// import Home from "./components/Home";
import Delete from "./components/Delete";
import Update from "./components/Update";
import Login from "./components/Login";
import Register from "./components/Register";


const App =()=>{
  return(
<>
<Router>
  <Routes>
    <Route path='/' element={<Insert />} />
    <Route path='/Login' element={<Login />} />
    <Route path='/Register' element={<Register />} />
    <Route path='/List' element={<List />} />
    <Route path='/Delete/:id' element={<Delete />}/>
    <Route path='/Update/:id' element={<Update />}/>
    {/* <Route path='/' element={<Home />}/> */}
``
  </Routes>
</Router>
</>
  );
};

export default App;
