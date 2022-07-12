import { NavLink } from "react-router-dom";
import Food from "../components/Food";
import img from '../asset/image/chinese-fried-noodles-basic-recipe-1.jpg' 
import img1 from '../asset/image/120249575_799876730814995_4170711664575039862_n-840x840.jpg' 
import img3 from '../asset/image/download.jfif' 




const Produces = () => {

    return ( 
        <div>
            <nav className="flex justify-between mt-10">
            <NavLink className="" to="#" >All</NavLink>
            <NavLink className="" to="#" >CARFETERIA</NavLink>
            <NavLink className="" to="#" >GUEST HOUSE</NavLink>
            </nav>
    
   
{/* 

                    <div className="mt-10 grid grid-cols-2 gap-4">
                        {data.map ((product) => (
                       <Food key={product.id} name={product.name} image={product.image}  link={product.link} price={product.price}  />
                    ))
                            }

                    </div> */}

        </div>
     );
}
 
export default Produces;