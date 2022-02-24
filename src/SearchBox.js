import React from 'react';

const SearchBox =({searchfield,searchChange})=>{
	return(
	   <div className = 'pa2'>
		<input 
		 className = 'pa2 ba b--green bg-lighest-blue'
		 type = "search"
		 placeholder ="Search Robots"
		 onChange = {searchChange}
		/>  
	   </div>
	);
}
export default SearchBox;