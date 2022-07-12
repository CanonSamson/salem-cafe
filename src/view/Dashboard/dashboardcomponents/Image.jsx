

    import { useState } from "react";

const Image = () => {

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

    return ( 
      <div className='grid grid-cols-2 gap-5 w-[90%] m-auto'>
            <img className="w-50% shadow" src={file} alt="" />
            <label className="  " htmlFor="">
              <p className=" bg-[#FFF500]  font-bold px-8  py-1 absolute rounded shadow text-black ">ADD IMAGE</p>   
              <input  type="file"  className="   opacity-0 w-[90%] border-2 relative " onChange={handleChange} />
            </label>
        </div>
     );
}
 
export default Image;