import './Counter.css';
import React, { Component, Fragment } from 'react';

export default class Counter extends Component{
	constructor(props){
			super(props);
			this.state = {
				counter: 1
			};
			//привязывание контекста к функции, есть полее правильный способ
			/*this.handleMinusClick = ::handleMinusClick;
			this.handleMinusClick = handleMinusClick.bind(this);*/
		}
	
	handleMinusClick = (e) => {
		
		//1 вариант вызова setState
	/* 	const {counter} = this.state;
		this.setState({counter: counter - 1}); */
		
		this.setState((prevState) => ({
			...prevState,
			counter: prevState.counter - 1		
		}));
		
		//this.state.counter = this.state.counter - 1;
		
		
		//this.state.counter = this.state.counter - 1;
		//this.forceUpdate();//принудительная перерисовка
	}	
	
/* 	handleMinusClick = (e) => {
		this.state = this.state - 1; 
	} */
	handlePlusClick = (e) => {
		this.setState((prevState) => ({
			...prevState,
			counter: prevState.counter + 1		
		}));
	}
	
	
	render(){
		const {counter} = this.state;		
		return(
			<Fragment>
				<button onClick = {this.handleMinusClick}>-</button>
				{counter}
				<button onClick = {this.handlePlusClick}>+</button>
			</Fragment>
		)
	}
}
