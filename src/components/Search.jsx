import search  from "../asset/icon/search.png";

const Search = () => {
    return ( 
    <div className="flex justify-between p-3  rounded mt-4 shadow-lg">
        <img className="w-8 mr-4" src={search} alt=""   />
        <input className="w-full focus:outline-none " type="search" placeholder="Search Food" />
    </div>
     );
}
 
export default Search;