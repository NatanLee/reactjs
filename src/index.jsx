import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//прямой импорт
import Menu from 'components/Menu/Menu.jsx';
import Container from './components/Container/Container.jsx';
//импорт через файл import.js
//import Menu from './components/Menu';
import List from 'components/List/List.jsx';
import Counter from './components/Counter/Counter.jsx';
import CommentForm from 'components/CommentForm/CommentForm.jsx';
import Timer from 'components/Timer/Timer.jsx';
import CommentsContainer from 'containers/CommentsContainer.jsx';

const items = [
	{href: '/', title: 'Home'},
	{href: '/comments', title: 'Comments'},
	
]

const items1 = [
	{href: '/', title: 'Home1'},
	{href: '/news1', title: 'News1'},
	{href: '/blog1', title: 'Blog1'},
]

class App extends Component{
	constructor(props){
		super(props);
		
		this.state = {
			comments: [],
			isModal: false,
			activePath: '/'
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
	
	handleActiveMenuChange = (e) => {
		this.setState({
			activePath: e.target.dataset.href
		});
		e.preventDefault();
	}

	render(){
		const {comments, isModal, activePath} = this.state;
//		console.log(comments);
		
		return(
			<div className = "box">
				<Container>
					<Menu items = {items} title = "Main menu" activePath = {activePath} onChange={this.handleActiveMenuChange}/>
					<Switch>
						<Route path="/" exact component={Counter} />
						<Route path="/comments" exact component={CommentsContainer} />
					</Switch>
					<Menu items = {items1} title = "Another menu" activePath = {activePath} />
					Hello world!
					<Menu items = {items1} title = "hi hi" activePath = {activePath} />
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
				<CommentsContainer />
			</div>			
		)
	}	
}

ReactDom.render(
	<BrowserRouter><App /></BrowserRouter>,
	document.getElementById('root'))