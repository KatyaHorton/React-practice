import React, { Component } from 'react'
import ListContacts from './ListContacts.js'
import * as ContactsAPI from './utils/ContactsAPI.js'
import CreateContact from './CreateContact.js'
import { Route } from 'react-router-dom'


class App extends Component {
	
//creates a state property which manages the contacts array inside an App component	
//contacts is an empty array as the data wll be fetched from the server with an 	
	state = {		
		contacts: []
	}

componentDidMount(){
		ContactsAPI.getAll().then((contacts) => {
		this.setState({ contacts: contacts})
	})}



//function to remove the contact when delete button is clicked
// filters out (returns) new contacts array with contacts which ids are not equalt to the id of the contact clicked

  removeContact = (contact) => {
	  this.setState((state) => ({
		  contacts: state.contacts.filter((c) => c.id !== contact.id)
	  }))
	  
//sends API request to remove contacts also from the server
	  ContactsAPI.remove(contact)
}

//access the state property from inside the component
//assign removeContcat to the ListContcats component as it's props to access it from List 
 // sets the contion (based on the state of the screen) which component to render to our UI
	render() {
		return (
			<div>
	 <Route exact path='/' render={() => (
							
			<ListContacts 
					contacts={this.state.contacts} 
					onDeleteContact={this.removeContact}
					onNavigate = {() => {
						this.setState({ screen: 'create' }) }}
					/>	
			
		)}
  
	  />
	
    <Route path='/create' component={CreateContact} />

		
			</div>
		)
	}
}

export default App;
