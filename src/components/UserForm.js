import React from 'react';

const UserForm = (props) =>{
	return(
		<form onSubmit={props.getUser}>
		      <input style={{margin:"35px auto",display:"block"}} type="text" name="username" />
		      <button style={{margin:"20px auto",display:"block"}}>Submit</button>
		</form>
		);
}

export default UserForm;