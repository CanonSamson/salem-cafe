import bar from '../asset/icon/bar.png'
import Cart from '../asset/icon/cart.png'
import Search from '../components/Search';
import Produces from './Produces';
import { Link } from "react-router-dom";
import { useState } from 'react';
import img1 from '../asset/image/120249575_799876730814995_4170711664575039862_n-840x840.jpg' 
import css from './css.module.css'


const LandingPage = () => {
    const [toggle, serToggle] = useState(false);
    function Show()  {
        serToggle(true)
    }
    function Close()  {
        serToggle(false)
    }

    return (  
       <div className=' relative'> 
  
     {
        toggle &&
        <BarList onClick={Close} />
     }

         <div className='px-10'>
            
            <nav className='flex justify-between pt-6'>
                <img onClick={Show} className='w-10' src={bar} alt=""   />
                <Link to="/cart" className=' relative'>
                    <img className='w-10' src={Cart} alt=""   />  
                    <span className=' bg-red-500 text-white font-medium rounded-full w-[22px]
                    h-[60%] right-[-5PX]  px-1 absolute  top-[-2px]'>10</span>   
                </Link>
            </nav>
            <header className='mt-20'>
                <p className=' font-extrabold text-[20px]'>Welcome</p>
                <Search />
            </header>
            <Produces />
 
            <div className=' mt-10  relative'>
                <img className='   w-[100%]' src={img1}  alt="" />
                <p className=' absolute top-[210px]   w-[300px] left-16 p-6 bg-white'>of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It </p>
            </div>

        </div>
        <div className='mx-10 mb-20 p-2 py-5 bg-slate-50 mt-20 '>
            <div className={css.salem}>
                <p className='font-extrabold text-6xl text-white shadow-md   '>Salem Unversity</p>
            </div>
            <p className='my-5'>Salem University, Lokoja is a privately owned university located in Lokoja, 
            Kogi State, Nigeria. The institution was founded by ArchbishopSam Amaga, the president of Salem
            International Christian Center</p>
            <Link to="https://salemuniversity.edu.ng/"   className='bg-[#3F80E2] text-white font-extrabold p-2 rounded shadow' >Visit Salem University Page</Link>    
        </div>
      
      <p className='py-2 bg-slate-200 text-center'>Fuck Bro</p>
 
       </div>
    );
}

const BarList = ({onClick}) => {
    return (
        <div className=''>
            <div className='pt-20 absolute w-full z-10  '>
                <div className='bg-white p-10   flex flex-col align-center w-[70%] rounded justify-center m-auto ' >
                    <Link className=' text-center my-5 p-2 rounded-xl' to="" >Home</Link>
                    <Link className=' text-center my-5 p-2 rounded-xl' to="" >Home</Link>
                    <Link className=' text-center p-2 rounded-xl mt-10 bg-[#FFF500] ' to="/admin" >Admin</Link>
                </div> 
            </div>
            <div onClick={onClick} className=' z-0   absolute bg-black/25 h-full w-full'></div>
        </div>
      );
}
 

const Items = ({onClick}) => {
    return (
        <div className=''>
            <div className='pt-20 absolute w-full z-10  '>
                <div className='bg-white    flex flex-col align-center w-[90%] rounded justify-center m-auto ' >
                    <img className='h-[250px]' src={img1} alt="" />
                    <div className='px-5'>
                        <p className='my-5'>rice and beans</p>
                        <span className='flex my-5'>N<p>12,000</p></span>
                        <p>of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        unchanged. It </p>
                    </div>

                    <div className='py-10'>
                        <div className='flex align-center justify-end mx-10'>
                            <p className=' font-semibold bg-[#FFF500]  px-5 rounded text-white'>-</p>
                            <p className=' font-semibold p-1 px-5'>2</p>
                            <p className=' font-semibold bg-[#FFF500] px-5 rounded text-white'>+</p>
                        </div>
                    </div>

                </div> 
            </div>
            <div onClick={onClick} className=' z-0   absolute bg-black/25 h-full w-full'></div>
        </div>
      );
}

export default LandingPage;