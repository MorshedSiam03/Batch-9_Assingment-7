import { useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Banner from "./Components/Banner/Banner"
import TitleBar from "./Components/TitleBar/TitleBar"
import Products from "./Components/Products/Products"
import ProductCart from "./Components/ProductCart/ProductCart"
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer/Footer"


function App() {
  const [cooks, setCooks] = useState([]);
  const [prepared, setPrepared] = useState([]);
  const handleCook = (cook) => {
    const existing = cooks.find((match) => match.recipe_id === cook.recipe_id);
    if (!existing) {
      const newCoookings = [...cooks, cook];
      setCooks(newCoookings);
      toast.success('Recipe added success!')
    } else {
      toast.error("Already selected to Prepare");
    }
  };

  const handlePreparing = (prepare) => {
    const exitings = prepared.find(
      (match) => match.recipe_id === prepare.recipe_id
    );
    if (!exitings) {
      const newPrepared = [...prepared, prepare];
      setPrepared(newPrepared);
      toast.success("Added For Cooking");
    } else {
      // toast.error("Already Prepared.");
    }
  };
 return (
    <>
    <div className="container mx-auto">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar></Navbar>
      <Banner></Banner>
      <TitleBar></TitleBar>
      <div className="md:flex">
        <Products handleCook={handleCook} ></Products>
        <ProductCart 
        cooks= {cooks}
        prepared={prepared}
        handlePreparing={handlePreparing} 
        ></ProductCart>
      </div>
          </div>
      <Footer></Footer>
      
    </>
  )
}

export default App
