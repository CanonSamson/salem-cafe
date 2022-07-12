import { NavLink, Link } from "react-router-dom";
import home from '../../../asset/icon/home.png'
const NarBar = () => {
    return (
        <div className="m-5 rounded-lg flex justify-between p-4 items-center  bg-[#FFF500]">
            <NavLink to="orders">ORDERS</NavLink>
            <Link to="/"><img className="w-7" src={home} alt="" /></Link>
            <NavLink to="addpost">ADD POST</NavLink>
        </div>

      );
}
 
export default NarBar;