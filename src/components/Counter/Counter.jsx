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
	
	/* handleMinusClick = (e) => {
		
		//1 вариант вызова setState
	 	const {counter} = this.state;
		this.setState({counter: counter - 1}); 
		
		this.setState((prevState) => ({
			...prevState,
			counter: prevState.counter - 1		
		}));
		
		//this.state.counter = this.state.counter - 1;
		
		
		//this.state.counter = this.state.counter - 1;
		//this.forceUpdate();//принудительная перерисовка
	}	 */
	
/* 	handleMinusClick = (e) => {
		this.state = this.state - 1; 
	} */
	handleClick = (event) => {
		const addition = event.target.name === 'minus' ? -1 : 1;
		this.setState((prevState) => ({
			...prevState,
			counter: prevState.counter + addition
		}));
	}
	
	
	render(){
		const {counter} = this.state;		
		return(
			<Fragment>
				<button name = "minus" onClick = {this.handleClick}>-</button>
				{counter}
				<button name = "plus" onClick = {this.handleClick}>+</button>
			</Fragment>
		)
	}
}
