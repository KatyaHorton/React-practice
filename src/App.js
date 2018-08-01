import React, { Component } from 'react';
import ListContacts from './ListContacts.js'



class App extends Component {
	
//creates a state property which manages the contacts array inside an App component	
	state = {
contacts: [
  {
    "id": "ryan",
    "name": "Ryan Florence",
    "email": "ryan@reacttraining.com",
    "avatarURL": "http://localhost:5001/ryan.jpg"
  },
  {
    "id": "michael",
    "name": "Michael Jackson",
    "email": "michael@reacttraining.com",
    "avatarURL": "http://localhost:5001/michael.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "email": "tyler@reacttraining.com",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
]
		
	}

//function to remove the contact when delete button is clicked
// filters out (returns) new contacts array with contacts which ids are not equalt to the id of the contact clicked

  removeContact = (contact) => {
	  this.setState((state) => ({
		  contacts: state.contacts.filter((c) => c.id !== contact.id)
	  }))
}

//access the state property from inside the component
//assign removeContcat to the ListContcats component as it's props to access it from List 
	render() {
		return (
			<div>
				<ListContacts 
					contacts={this.state.contacts} 
					onDeleteContact={this.removeContact}
					/>
		
			</div>
		)
	}
}

export default App;
