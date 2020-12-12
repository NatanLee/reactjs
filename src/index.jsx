import React, { Component } from 'react';
import ReactDom from 'react-dom';
//прямой импорт
import Menu from './components/Menu/Menu.jsx';
import Container from './components/Container/Container.jsx';
//импорт через файл import.js
//import Menu from './components/Menu';
import List from './components/List/List.jsx';
import Counter from './components/Counter/Counter.jsx';

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
	render(){
		return(
			<div className = "box">
				<Container>
					<Menu items = {items} title = "Main menu" />
					<Menu items = {items1} title = "Another menu" />
					Hello world!
					<Menu items = {items1} title = {1} />
					<List items = {['MongoDB', 'MiSQL', 'RethinkDB']} />
					<Counter />				
				</Container>
			</div>			
		)
	}	
}

ReactDom.render(<App />, document.getElementById('root'))