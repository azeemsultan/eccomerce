import React from 'react';
import { Button, Link } from "@mui/material";
import DropDown from '../atoms/DropDown';

const HomePageList = () => {
    let list = [
        {title:'Categories'},
        {title:'Ready to ship'},
        {title:'Wishlist'},
        {title:'Services & Help'},
        {title:'Blogs'},
    ]
    return ( 
        <ul style={{display:'flex',listStyle:'none'}}>
        <li>
          <DropDown title={list[0].title} />
        </li>
     
        <li>
            <Button>Wishlist</Button>
        </li>
        <li>
            <Button>Services & Help</Button>
        </li>
        <li>
            <a style={{textDecoration:'none'}} href="/blog">
            <Button>Blogs</Button>
            </a>
        </li>
  
    </ul>
     );
}
 
export default HomePageList;