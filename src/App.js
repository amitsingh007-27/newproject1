import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Services from "./Components/pages/Services";
import { Routes, Route } from 'react-router-dom';
import Contact from "./Components/pages/Contact";
import Footer from "./Components/pages/Footer";
function App() {
   return (
       <Routes>
        <Navbar></Navbar>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/" element={<About/>}> </Route>
        <Route path="/" element={<Services/>}> </Route>
        <Route path="/" element={<Contact/>}> </Route>
   <Footer></Footer>
       </Routes>

  );

}
export default App;