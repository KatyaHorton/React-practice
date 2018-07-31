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
//access the state property from inside the component
	render() {
		return (
			<div>
				<ListContacts contacts={this.state.contacts} />
			</div>
		)
	}
}

export default App;
