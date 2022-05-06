import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer";
import { Cart } from "./components/Cart";
import {Routes,Route} from "react-router-dom"
import {Link} from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <h1>jkbsdjkbsdjkb</h1> */}
     <Navbar />
     {/* <Link to="/atin" ></Link> */}
     <Routes>
       {/* <Route Path={"/"} element={<Navbar />}></Route> */}
       {/* <Route path={"/cart"} element={<Cart />}></Route> */}
       {/* <Route path={"/atin"} element={<Cart />}></Route> */}
     </Routes>
     <Footer />
     
     {/* <Cart /> */}
    </div>
  );
}

export default App;
