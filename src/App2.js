import React from 'react';
import ReactDOM from 'react-dom';

class App2 extends React.Component {
	constructor() {
		// give this keyword context within our component rather than parent class react.component
		super();
		// set initial state
		this.state = {
			items: []
		}
		// bind functions to be used
		this.filter = this.filter.bind(this)
	}

	// React lifecycle methods
	componentWillMount() {
		fetch('https://swapi.co/api/people/?format=json')
			.then(response => response.json())
			.then(({results: items}) => this.setState({items}))
	};

	// Define functions
	filter(e){
		this.setState({filter: e.target.value})
	};



	render() {
		const Person = (props) => <h4>{props.person.name}</h4>

		let items = this.state.items;

		if (this.state.filter) {
			items = items.filter(item =>
				item.name.toLowerCase()
					.includes(this.state.filter.toLowerCase()))
		}

		return (
			<div>
				<input type="text"
					onChange={this.filter} />
				{items.map(item =>
					<Person key={item.name} person={item} />)}
			</div>
		)
	}
}

export default App2;