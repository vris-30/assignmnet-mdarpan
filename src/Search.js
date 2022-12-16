import React, { useState } from "react";
import './Navbar.css';
import search from './imgs/search.png';
function Search({onPress}){
    const [val,setVal]=useState('')
    return (
        <div style={{width:'100vw'}}>
            <div style={{textAlign:"left",paddingLeft:'30px',marginBottom:'10px',marginTop:'10px'}}>
                Medical Darpan {'>'} Search {'>'} FabiFlu Tablet
            </div>
            <div style={{display:'flex',textAlign:'left',flexDirection:'row',paddingLeft:'30px',marginBottom:'10px'}}>
                <div style={{width:'600px',border:'1px solid black',display:'flex',justifyContent:'space-evenly',height:'40px',alignItems:'center'}}>
                    <img src={search} alt='img' width='20px' height='20px'/>
                    <input value={val} onChange={(e)=>{setVal(e.target.value);console.log(val);}} className="inputItem" type={'text'}  style={{width:'90%',backgroundColor:'#E7E9EB'}}/>
                </div>
                <div onClick={()=>onPress(val)} className="searchbtn" style={{border:'1px black solid',backgroundColor:'#04AA6D',width:'150px',color:'white',fontSize:'18px',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    Search
                </div>
            </div>
        </div>
    )
}

export default Search;