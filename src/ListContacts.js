import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegexp from 'escape-string-regexp' 
import sortBy from 'sort-by'


class ListContacts extends Component {
 
//query proprerty updates our input field	
state = {
	query:''
 } 	

//method to handle the change of the inputfiels  (passed into onChange function)
updateQuery = (query) => {
// setState is passed an object as the new state will not depent on the previous state) 
	this.setState({ query: query.trim() })  
}

//set query to an empty string to show all the contacts again
clearQuery = (query) => {
	this.setState({ query: ''})
}

static PropTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired
}


//render returns only one element in React
//value of the input field always is whatever this.state.query
//onChange - when the input field changes it gives us event, then invokes updateQuery passing it the specific value of the input field
	render() {
		let showContacts
		if (this.state.query) {
			const match = new RegExp(escapeRegexp(this.state.query), 'i')
			showContacts = this.props.contacts.filter(
				(contact) => match.test(contact.name)
												    )
		} else {
			showContacts = this.props.contacts
		}
		
//sorts contacts by name		
		showContacts.sort(sortBy('name'))
		
		return (
			<div className='list-contacts'>
			<div className='list-contacts-top'>
				<input 
					className='search-contacts'
					type='text'
			        placeholder='Serach contacts'
					value={this.state.query}
					onChange={(event) => this.updateQuery(event.target.value)}/>
			</div>

//show count for contacts
            {showContacts.length !== this.props.contacts.length && (
				<div className='showing-contacts'>
				<span>
						Now showing {showContacts.length} of {this.props.contacts.length} total
				</span>
				<button onClick={this.clearQuery}>
				Show all
				</button>
 				</div> 
)} 
   
			<ol>
		{showContacts.map((contact) => (
			<li key={contact.id} className='contact-list-item'>
          <div className='contact-avatar' style={{
            backgroundImage: `url(${contact.avatarURL})`
          }}/>
          <div className='contact-details'>
            <p>{contact.name}</p>
            <p>{contact.email}</p>
          </div>
          <button onClick={() => this.props.onDeleteContact(contact)} 			  			className='contact-remove'>
             Remove
           </button> 
         </li>
				 ))}

			</ol>
          </div>
		)
	}
}


export default ListContacts
