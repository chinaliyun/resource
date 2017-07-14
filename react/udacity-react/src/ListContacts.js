import React , {Component} from 'react';
import PropTypes from 'prop-types'
import SortBy from 'sort-by'
import EscapeRegexp from 'escape-string-regexp'
import {Link} from 'react-router-dom'

class ListContacts extends Component{
	state={
		query: '',
		list: this.props.contacts
	}
	changeHandler = (query)=>{
		this.setState({
			query: query.trim()
		})
	}
	cleaerQuery = ()=>{
		this.setState({
			query: ''
		})
	}
	render (){
		const {contacts, onRemoveContact} = this.props;
		const {query} = this.state;
		let showingContacts 
		if(query){
			const match = new RegExp(EscapeRegexp(query), 'i');
			console.log(match)
			showingContacts = contacts.filter((c)=>match.test(c.name))
		}else{
			showingContacts = contacts
		}
		showingContacts = showingContacts.sort(SortBy('code'))
		return (
			<div className="list-contacts">
				<div className="list-contacts-top">
					<input
						className="search-contacts"
						value={query}
						onChange = {(event)=>{this.changeHandler(event.target.value)}}
					/>
					<Link
						to="/create"
						className="add-contact"
					/>
				</div>
				{
					showingContacts.length!==contacts.length && (
						<div className="showing-contacts">
							<span>正在展示 {showingContacts.length} of {contacts.length} </span>
							 <button onClick={this.cleaerQuery}>显示全部</button>
						</div>
						)
				}
				<ol className="contact-list">
					{showingContacts.map(contact=>(
						<li key={contact.id} className="contact-list-item">
							<div className="contact-avatar" style={{
								backgroundImage: `url(${contact.avatarURL})`
							}
							}>
							</div>
							<div className="contact-details">
								<p>{contact.name}</p>
								<p>{contact.email}</p>
							</div>
							<button onClick={()=>{onRemoveContact(contact)}} className="contact-remove">
								remove
							</button>
						</li>
						))}
				</ol>
			</div>
			)
		}
}
ListContacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	onRemoveContact: PropTypes.func.isRequired
}
/*class ListContacts extends Component {
	render(){
		
	}    
  }*/
export default ListContacts;