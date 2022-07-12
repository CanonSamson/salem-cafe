 import cart from '../asset/icon/cart.png'
const Food = ({name, price, link, image}) => {
    return (
        <div  className='w-[100%]  bg-slate-50 rounded p-2'>
            <img className='h-[100px] w-full bg-center bg-centain' src={image} alt="" />
            <p className="py-4">{name}</p>
            <p className=' flex'>N<p>${price}</p></p>
            <div>
                <img className=' w-7 float-right' src={cart} alt="" />
            </div>
        </div>
      );
}
 
export default Food;
