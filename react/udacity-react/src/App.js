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
                <Route path='/create' component={CreateContact} />
            </div>
        )
    }
}
export default App;
