import React, { Component } from 'react';
import ReactDom from 'react-dom';
//прямой импорт
import Menu from './components/Menu/Menu.jsx';
import Container from './components/Container/Container.jsx';
//импорт через файл import.js
//import Menu from './components/Menu';
import List from './components/List/List.jsx';
import Counter from './components/Counter/Counter.jsx';
import CommentForm from './components/CommentForm/CommentForm.jsx';
import Timer from './components/Timer/Timer.jsx';

const items = [
	{href: '/', title: 'Home'},
	{href: '/news', title: 'News'},
	{href: '/blog', title: 'Blog'},
]

const items1 = [
	{href: '/', title: 'Home1'},
	{href: '/news', title: 'News1'},
	{href: '/blog', title: 'Blog1'},
]

class App extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			comments: [],
			isModal: false
		}		
	}
	
	handleComment = (comment) => {
		this.setState((prevState) => ({
			...prevState,
			comments: prevState.comments.concat([comment]),
		}))
//		console.log(comment);
	}
	hundleOpen = () => {
		this.setState({isModal: !this.state.isModal});		
	}
		
	render(){
		const {comments, isModal} = this.state;
//		console.log(comments);
		
		return(
			<div className = "box">
				<Container>
					<Menu items = {items} title = "Main menu" />
					<Menu items = {items1} title = "Another menu" />
					Hello world!
					<Menu items = {items1} title = "hi hi" />
					<List items = {['MongoDB', 'MiSQL', 'RethinkDB']} />
					<Counter /><br/>
					<ul>
						{comments.map((comment, idx) => <li key = {idx}>{comment.author}: {comment.message}</li>)}
					</ul>
					
					<CommentForm onSend = {this.handleComment}/><br/>
					{isModal && <div>Modal</div>}
					<button onClick={this.hundleOpen}>Open Modal</button>
				</Container>
				{isModal && <Timer />}
			</div>			
		)
	}	
}

ReactDom.render(<App />, document.getElementById('root'))