import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI.js'
import CreateContact from './CreateContact.js'
import {Route} from 'react-router-dom'

class App extends Component {
    state = {
        screen: 'list', //list, create
        contacts: []
    }
    componentDidMount(){
        ContactsAPI.getAll().then((contacts)=>{
            this.setState({
                contacts
            })
        })
    }
    removeContact = (contact)=>{
        ContactsAPI.remove(contact).then((contacts)=>{
            this.setState({
                contacts: this.state.contacts.filter((c)=>c.id!==contact.id)
            })
        })
    }
    addContact = (contact)=>{
        ContactsAPI.create(contact).then((contact)=>{
            console.log(this.state.contacts)
            this.setState({
                contacts: this.state.contacts.concat(contact),
            })
        })
    }
    onNavigatorToCreate = ()=>{
        this.setState({
            screen: 'create'
        })
    }
    render() {
        return ( 
            <div>
                <Route exact path="/" render={()=>(
                    <ListContacts 
                        onRemoveContact={this.removeContact} 
                        contacts={ this.state.contacts } 
                        onNavigator = {this.onNavigatorToCreate}
                    />
                )}/>
                <Route path='/create' render={({history})=>(
                    <CreateContact onAddContact={(contact)=>{
                        history.push('/')
                        this.addContact(contact)
                    }} />
                )} />
            </div>
        )
    }
}
export default App;
