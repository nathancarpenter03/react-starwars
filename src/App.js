import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		// give this keyword context within our component rather than parent class react.component
		super();
		// set initial state
		this.state = {
			title: 'this is the state txt',
			val: 0
		}
		this.updateStateTitle = this.updateStateTitle.bind(this);
		this.update = this.update.bind(this);
	}

	// Define functions (updating state for example)
	updateStateTitle(e) {
		this.setState({title: e.target.value})
	}

	update() {
		this.setState({val: this.state.val + 1})
	}

	// React lifecycle methods
	componentWillMount() {
		console.log('willmount')
	}
	componentDidMount() {
		console.log('didmount')
	}
	componentWillUnmount() {
		console.log('willunmount')
	}

	render() {
		let txt = this.props.txt;
		let title = this.state.title;
		// or {this.props.txt} inside jsx
		return (
			<div>
				<h1>{txt}</h1>
				<input type="text" onChange={this.updateStateTitle} />
				<h2>{title}</h2>
				<p>cat # - {this.props.cat}</p>
				<button onClick={this.update}>{this.state.val}</button>
			</div>
		)
	}
}


// We can set prop types by adding PropType property and make them required
// App.PropTypes = {
//   txt: React.PropTypes.string,
//   category: React.PropTypes.number.isRequired
// };
// We can set default properties by adding defaultProps property
// App.defaultProps = {
//   txt: "this is the default text"
// }

export default App;