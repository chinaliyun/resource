import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput.js'

class CreateContact extends Component {
    render(){
     return (
     		<div>	
     			<Link to="/" className="close-create-contact" />
     			<form className="create-contact-form">
     				<ImageInput 
     					className="create-contact-avatar-input"
     					name="avatarURL"
     					maxHeight={64}
     				/>
     				<div className="create-contact-details">
     					<input type="text" placeholder="Name" />
     					<input type="text" placeholder="email" />
	     				<button>ADD CONTACT</button>
     				</div>
     			</form>
     		</div>
     	)   
    }
}
export default CreateContact;