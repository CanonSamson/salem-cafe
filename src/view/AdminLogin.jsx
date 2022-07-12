import home from '../asset/icon/home.png'
import eyeclose from '../asset/icon/eyeclose.png'
import { Link } from "react-router-dom";
import PageName from './Dashboard/dashboardcomponents/PageName';

const AdminLogin = () => {
                    return ( 
                        <div className='mx-10'>
                            <nav className='flex justify-between pt-6  items-center'>
                                <Link to="/" > <img className='w-10' src={home} alt="" /></Link>
                                <Link to="/dashboard"><PageName name="Admin"  /></Link>
                            </nav>
                            <form action="" className='w-[90%] m-auto mt-[100px]'>
                                <Input />
                                <Password />
                                <Button />
                            </form>
                        </div>
                    );
}

const Input = () => {
    return ( 
        <div className='flex flex-col mt-10'>
            <label>Full Name</label>
            <input className='  focus:outline-none w-full p-4 rounded shadow-lg' type="search" placeholder='Enter Full Name' />
        </div>
     );
}
const Password = () => {
    return ( 
        <div className='flex flex-col mt-10'>
            <label>Password</label>
                <div className='flex  align-center p-4 rounded shadow-lg'>
                <input className=' focus:outline-none w-full ' type="password" placeholder='Enter Password' />
                <img className='w-[20px]' src={eyeclose} alt="" />
            </div>
        </div>
     );
}

const Button = () => {
    return ( 
        <div className='flex flex-col mt-10'>
           <button  className=' font-extrabold bg-[#FFF500] focus:outline-none w-full p-3 rounded-xl shadow'>LOG IN</button>
        </div>
     );
}
export default AdminLogin;