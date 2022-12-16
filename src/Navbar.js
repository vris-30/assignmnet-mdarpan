import './Navbar.css';
import login from './imgs/login.png';
function Navbar(){
    return (
        <div className={'navbar1'} style={{}}>
            <div className='row' style={{justifySelf:'center',width:'100vw'}}>
                <div className='col-lg-2' style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
                    <div style={{width:'25px',height:'22px',backgroundColor:'#E7E9EB',borderRadius:'3px'}}></div>
                    <div>Medical Darpan</div> 
                </div>
                <div className='col-lg-1 navitem' >
                    Home
                </div>
                <div className='col-lg-1 navitem' >
                     Products
                </div>
                <div className='col-lg-1 navitem' >
                     Distributors
                </div>
                <div className='col-lg-1 navitem' >
                     Manufacturers
                </div>
                <div className='col-lg-1 navitem' >
                     About Us
                </div>
                <div className='col-lg-1 navitem' >
                     Blog
                </div>
                <div className='col-lg-4' style={{display:'flex'}}>
                    <div style={{float:'right',width:'65%',display:'flex',justifyContent:'right'}}>
                        Login
                    </div>
                    <div style={{float:'right',width:'25%'}}>
                        <img src={login} alt='img' width={'25px'} height={'25px'} style={{ filter: 'invert(1)',fontWeight:'bold'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;