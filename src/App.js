import Navbar from './Navbar.js';
import Search from './Search.js';
import logo from './imgs/logo.png';
import './App.css';
import { useState } from 'react';
import tablet from './imgs/tablets.png';

function Categ({title,objects,onPressAdd}){

  return(
    <div style={{marginTop:'10px',width:'85%',float:'right',marginBottom:'5px',padding:'0px 50px 0px 50px'}}>
      <div style={{backgroundColor:'rgb(190, 189, 189)',height:'auto',padding:'5px 0 5px  0px',justifyContent:'center',display:'flex',alignItems:'center',borderStyle:'inherit',fontWeight:'bold'}}>{title}</div>
      <div>{objects.map(value=>{
        return <div className="objectItem" onClick={()=>onPressAdd(value)} style={{textAlign:'left',height:'auto',padding:'5px 5px 4px 7px',fontWeight:'500',fontSize:'12px',border:'1px solid black',borderStyle:'inherit',backgroundColor:'white'}}>{value}</div>
      })}</div>
    </div>
  )
}

function Card({name,cost,com,loc}){
  return(
    <div style={{display:'flex',flexDirection:'column',height:'370px',border:'1px solid gray',backgroundColor:'white',borderRadius:'7px',overflow:'hidden'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'190px'}}><img src={tablet} alt='img' width={'95%'} height={'90%'}/></div>
      <div style={{height:'170px'}}>
      <div style={{fontWeight:'bold',fontSize:'14px'}}>{name}</div>
      <div style={{marginBottom:'1px'}} ><span style={{color:'rgb(85,0,21)',fontWeight:'bold'}}>Rs {cost} </span>/ stripe</div>
      <div style={{fontWeight:'500',fontSize:'14px'}}>{com}</div>
      <div style={{color:'gray',fontSize:'13px',fontWeight:'500'}}>{loc}</div>
      <hr/>
      <div className='contact' style={{display:'flex',flexDirection:'row', paddingBottom:'10px', justifyContent:'center',alignItems:'center',marginTop:'-6px'}}>
        <img src={logo} alt='img' width={'20px'} height={'20px'} style={{marginRight:'5px'}}/>
        <div style={{fontWeight:'bold',color:'#61dafb',fontSize:'20px'}}>Contact Supplier</div>
      </div>
      </div>
      <div style={{backgroundColor:'rgb(85,0,21)',height:'10px'}}></div>
    </div>
  )
}
function App() {
  const [search,setSearch]=useState('');
  const [filters,setFilters]=useState([]);
  function searchFn(item){
    //console.log(item);
    setSearch(item);
  }
  function onPressAdd(item){
    setFilters([...filters,item]);
  }
  return (
    <div className="App">
      <Navbar/>
      <Search onPress={searchFn}/>
      <div style={{height:'40px',textAlign:'left',paddingLeft:'30px',display:'flex',justifyContent:'left',flexDirection:'row'}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',color:'gray',textTransform:'capitalize'}}>{search!=''?search :''}  </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{filters.length>0 && filters.map(item=>{return <div style={{width:'fit-content',margin:'0 5px 0 5px',padding:'0 5px 0 5px',color:'white',backgroundColor:'#04AA6D' , fontSize:'14px', borderRadius:'3px',display:'flex',alignItems:'center'}}>{item}</div>})}</div>
        <div className='removebtn' style={{fontSize:'12px',fontWeight:'bold',color:'rgb(85,0,21)',display:'flex',alignItems:'center'}}  onClick={()=>setFilters([''])}>{filters.length>1?'remove all' :''}</div>
      </div>
      <div className='row'>
        <div style={{width:'25vw'}}>
          <Categ onPressAdd={onPressAdd} title={'Related category'} totle={4} objects={['paracetamol Tablets','Paracetamol Syrup','Paracetamol Powder','Aceclofenac']}/>
          <Categ onPressAdd={onPressAdd} title={'Related Brands'} totle={4} objects={['Cipmol Paracetamol','Pandal Paeracetamol Tablets','Combiflam','Crocin Tablets','Calpol Paracetamol Tablets','Sumo Tablet']}/>
          <Categ onPressAdd={onPressAdd} title={'Business Type'} totle={4} objects={['Wholesaler','Manufacturer','Retailer','Exporter']}/>
          <Categ onPressAdd={onPressAdd} title={'Strength'} totle={4} objects={['Wholesaler','Manufacturer','Retailer','Exporter']}/>
          <Categ onPressAdd={onPressAdd} title={'Manufacturer'} totle={4} objects={['Wholesaler','Manufacturer','Retailer','Exporter']}/>
          <Categ onPressAdd={onPressAdd} title={'Prescription/Non prescription'} totle={4} objects={['Alkem Laboratories Ltd','Intas Pharmaceutical Ltd']}/>
        </div>
        <div style={{width:'60vw'}}>
          <div className='row' style={{gap:'0px'}}>
            <div className='col-lg-4' style={{padding:'10px 10px 10px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
            <div className='col-lg-4'  style={{padding:'10px 10px 10px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
            <div className='col-lg-4'  style={{padding:'10px 10px 10px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
          </div>
          
          <div className='row' style={{gap:'0px'}}>
            <div className='col-lg-4' style={{padding:'10px 10px 0px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
            <div className='col-lg-4'  style={{padding:'10px 10px 0px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
            <div className='col-lg-4'  style={{padding:'10px 10px 0px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
          </div>
          <div className='row' style={{gap:'0px',marginBottom:'100px'}}>
            <div className='col-lg-4' style={{padding:'10px 10px 0px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
            <div className='col-lg-4'  style={{padding:'10px 10px 0px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
            <div className='col-lg-4'  style={{padding:'10px 10px 0px 10px '}}>
            <Card name='Favipiravir 400mg (Fabiflu) Tablets' cost='1775' com='Glenmark Pharmaceutical Limited' loc='PARVAT PATIYA, SURAT, GUJRAT'/>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
