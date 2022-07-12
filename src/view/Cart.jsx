import home from '../asset/icon/home.png'
import colordelete from '../asset/icon/colordelete.png'
import PageName from './Dashboard/dashboardcomponents/PageName';
import { Link } from 'react-router-dom';
import img3 from '../asset/image/download.jfif' 

 

const Cart = () => {
    return ( 
        <div className='mx-10'>
            <nav className='flex justify-between pt-6  items-center'>
                <Link to="/" ><img className='w-10' src={home} alt="" /></Link>
                <Link to="/cart"><PageName name="Cart"  /></Link>
            </nav>
            <div className='mt-20'>
                <CartItems />   
                <CartItems />    
            </div>
        </div>
     );
}

const CartItems = () => {
    return (  
        <div className=' w-full  rounded-lg shadow-xl bg-slate-50 p-3 my-4'>
            <div className='flex'>  
                <img className='w-10' src={img3} alt="" />
                <div className="ml-5">    
                    <p>Rice stick noodles</p>
                    <p>N4,500</p>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <div className="flex  items-center">
                    <img className='' src={colordelete} alt="" />
                    <p>REMOVE</p>
                </div>
                <div className='flex align-center justify-end ml-10 '>
                    <span className=' font-extrabold bg-[#FFF500]  px-5 rounded text-black'>-</span>
                    <span  className=' font-semibold  px-5'>0</span>
                    <span  className=' font-extrabold bg-[#FFF500] px-5 rounded text-black' >+</span>   
                </div>
            </div>
        </div>
    );
}
 

 
export default Cart;