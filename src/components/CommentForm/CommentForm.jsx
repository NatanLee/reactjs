import './CommentForm.css';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			author: '',
			message: ''
		};			
	}
	
	static propTypes = {
		onSend: PropTypes.func,
	}
	
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value  
		});
	}
	
	handleClick = () => {
		const {onSend} = this.props;
		this.setState({message: ''});
		if(typeof onSend === 'function'){
			onSend(this.state);
		}
	}
	
	render(){
		const {author, message} = this.state;
//		console.log({author, message});
		return(
			<Fragment>
				<input onChange = {this.handleChange} name = "author" value = {author} type="text" /><br/>
				<textarea onChange = {this.handleChange} value = {message} name = "message"></textarea><br/>
				<button onClick = {this.handleClick}>Send</button>
			</Fragment>
		)
	}
}
