import React, { Component } from 'react';

export default class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: props.initialCount
		};
	}

	updateCount(value) {
		this.setState(prevState => {
			return { count: prevState.count + value }
		});
	}

	render() {
		return (
			<div>
				<button onClick={() => this.updateCount(-1)}>-</button>
				<span>{this.state.count}</span>
				<button onClick={() => this.updateCount(1)}>+</button>
			</div>
		);
	}
}