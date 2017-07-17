import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput.js'
import serializeForm from 'form-serialize';

class CreateContact extends Component {
    handlerSubmit = (e)=>{
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        console.log(values)
        if(this.props.onAddContact){
            this.props.onAddContact(values)
        }
    }
    render(){
     return (
     		<div>	
     			<Link to="/" className="close-create-contact" />
     			<form className="create-contact-form" onSubmit={this.handlerSubmit}>
     				<ImageInput 
     					className="create-contact-avatar-input"
     					name="avatarURL"
     					maxHeight={64}
     				/>
     				<div className="create-contact-details">
     					<input type="text" name="name" placeholder="Name" />
     					<input type="text" name="email" placeholder="email" />
	     				<button>ADD CONTACT</button>
     				</div>
     			</form>
     		</div>
     	)   
    }
}
export default CreateContact;
