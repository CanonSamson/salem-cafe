import Image from './dashboardcomponents/Image';

const AddPost = () => {
    return ( 
      <div className='mb-0 '>
          <div className='grid grid-cols-2 gap-5 w-[90%] m-auto'>
            <div className=' col-span-2 '>
              <Image />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 w-[90%] m-auto">
            <Input label="Price" placeholder="Enter Full Name" />
            <Input label="Location" placeholder="Guest House" />
            <div className=" col-span-2">
              <Input label="Name" placeholder="Rice stick noodles" />
            </div>
            <div className=" w-full col-span-2 ">
              <label>Description</label>
              <textarea className="w-full shadow-lg mt-4 bg-slate-100 p-5 " name="" id="" placeholder='Enter Food Description' />
            </div>
            <button  className='  mt-10 font-extrabold bg-[#FFF500] focus:outline-none w-full p-3 rounded shadow'>UPLOAD</button>     
          </div>
      </div>
     );
}


const Input = ({label, placeholder}) => {
    return ( 
        <div className='flex flex-col mt-3'>
            <label>{label}</label>
            <input className='  focus:outline-none w-full p-3 mt-2 rounded shadow 
          bg-slate-100' type="text" placeholder={placeholder} />
        </div>
     );
}
 
export default AddPost;