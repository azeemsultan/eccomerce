import { Typography } from "@mui/material";
import React from "react";
import SimpleCard from "../atoms/simpleCard";
import PerfectScrollbar from 'react-perfect-scrollbar'
import axios from 'axios';

const CustomizedProduct = () => {

  let token = localStorage.getItem('token');
  const [products,setProducts] = React.useState([]);
  const [topRated,setTopRated] = React.useState([]);

 
  let getProducts = () =>{
    axios.get('http://localhost:5000/api/products', {headers:{'Authorization':token}})
    .then(function (response) {
      if(response.data.data.length > 8)
      {
        for(let i=0 ; i< response.data.data.length-8   ; ++i)
        {
          response.data.data.pop();
        }
   
      }
      setProducts(response.data.data);
   
     var result = response.data.data.filter(function(event) {
      return  event.productCollection.name == 'Top Rated'; 
  });

  console.log(result);

      setTopRated(response.data.data.filter(product=> product.productCollection.name === 'Top Rated'))
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  React.useEffect(()=>{
    getProducts();
 

  },[])

  let redirectToCategory = (name) => {
    window.location.href = `/category/${name}`
    console.log('clicked');
  }

 

  console.log('ogodgog',products[0]?.productCollection?.name)
 
  return (
    <div>
      
        <Typography variant="h6">
        Customized products
        </Typography>
        <Typography variant="subtitle2">
        Partner with one of 60,000 experienced manufacturers with design & production capabilities and on-time delivery.
        </Typography>
   
    <div style={{display:'flex', marginTop: "20px", marginBottom: "20px" }}>
      {products.map(function (item, i) {
        return (
          <div  onClick={()=>redirectToCategory(item?.category?.name)}  style={{ marginTop: "10px",marginLeft:'5px' }}>
            <SimpleCard type={item?.category?.name || ''} image={`https://fyptest.blob.core.windows.net/images/${item.images[0]}`} />
          </div>
        );
      })}
    </div>

    </div>
  );
};

export default CustomizedProduct;
