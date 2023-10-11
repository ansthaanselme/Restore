import { useEffect, useState } from "react";
import { Product } from "../models/products";
import Catalog from "../../features/catalog/Catalog";
import { Typography } from "@mui/material";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])
  
  function addProduct() {
    setProducts(prevState =>
       [...prevState, 
        {
          id: prevState.length + 101,
          name: 'product' + prevState.length, 
          price: (prevState.length + 200),
          brand: 'some brand',
          description: 'some description',
          pictureUrl: 'http://picsum.photos/200'
        }])
  }

  return (
    <>
      <div>
        <Typography variant="h2">
        Re-Store
        </Typography>
        
        <Catalog products={products} addProduct={addProduct}/>
        
      </div>


    </>
  )
}

export default App
