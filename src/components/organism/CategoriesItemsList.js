import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Select from "../atoms/Select";
import DetailCard from '../atoms/detailCard'
import axios from "axios";


const CategoriesItems = () => {

  const [products,setProducts] = useState([]);
  let token = localStorage.getItem("token");
  var url = window.location.pathname;
  var category = url.substring(url.lastIndexOf("/") + 1);
  var link = category.replace('%20',' ');
  console.log(link);

  console.log(category);

  let getCategoryItems = () => {
    axios.get(`http://localhost:5000/api/products`,{headers: { Authorization: token }})
    .then(function (response) {
      console.log(response);
      setProducts(response.data.data.filter(t=>t.category.name == link))
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(()=>{
    getCategoryItems();
  },[])


  return (
    <Grid container>
      <Grid item md={12}>
        <Typography variant="h4">Deals and Promotions</Typography>
      </Grid>
      <Grid item md={12}>
          <br/>
      </Grid>
      <Grid item md={12}>
        <Typography variant="subtitle1">
          Shop Today’s Deals, Lightning Deals, and limited-time discounts
        </Typography>
        <br/>
        <Typography variant="h6">
          
        {products?.length > 0 ? <div> </div> : <div> No Product found! </div>
      }
        </Typography>
      </Grid>
      <Grid item md={9}></Grid>
      <Grid item md={3}>
          <div style={{display:'flex'}}>
        <label style={{marginRight:'20px'}}>Sort by:</label> 
        <Select />
        </div>
      </Grid>
      <Grid item md={12}>
          <br/>
          <br/>
      </Grid>
      <Grid item md={12}>
      <div style={{display:'flex', flexWrap:'wrap'}}>
      {products?.map(function (item, i) {
        return (
            <div key={i} style={{marginLeft:'20px',marginTop:'10px'}}>
            <DetailCard
              type={item.name}
              image={`https://fyptest.blob.core.windows.net/images/${item.images[0]}`}
              price={item.price}
              id={item._id}
            />

            </div>


        );
      })}
      </div>
      </Grid>
    </Grid>
  );
};

export default CategoriesItems;
