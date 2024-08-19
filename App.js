// import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
// import FormData from './FormData';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Demo3 from './Demo3';
import { Demo4 } from './Demo4';
import  Component1  from './Component1';
import { Demo6 } from './Demo6';
import { Demo8 } from './Demo8';
import Demo7 from './Demo7';
import Index1 from './Index1';

// import Parent from './Parent';
// import Table from './Table';
// import Product from './Product'
// import Formdata1 from './Formdata1';
// import Props from './Props';
// import Footer from './Footer';
// import ConditionalRender from './ConditionalRender';

//import componentMount from './componentMount';
// import Demo from './Demo';
// import Usedemo from './Usedemo';
// import Usedemo1 from './Usedemo1';
// import Usered from '../../Usered';

function App() {
  return (  
    <>
    <Router>
      <Routes>
        <Route extact path="/Header" Component={Header}></Route>
        <Route extact path="/Footer" Component={Footer}/>
        <Route extact path="/" Component={Demo6}/>
        <Route extact path="/Demo3" Component={Demo3}/>
        <Route extact path="/Demo4" Component={Demo4}></Route>
        <Route extact path="/Component1" Component={Component1}/>
        <Route extact path="/Demo8" Component={Demo8}></Route>
        <Route extact path="/Demo7" Component={Demo7}></Route>
<Route extact path="/Index1" Component={Index1}></Route>
       
<Route extact path="/Demo6" Component={Demo6}/>
      </Routes>
    </Router>
    {/* <componentMount></componentMount>
    <Parent></Parent>
    <Header></Header>
    <Footer></Footer>
    <Table></Table>
    <Formdata1></Formdata1>
    <Props></Props> */}
    </>
  
  );
}

export default App;
