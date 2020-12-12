import './Menu.css';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

//import ReactDom from 'react-dom';

//statefull предпологаетя поведение элемента
export default class Menu extends Component{
	render(){
		const {title, items} = this.props;
		return(
			<Fragment>
				<h3>{title}</h3>
				<ul className = "menu">
					{items.map(((item, idx) => <li key = {idx}><a href = "{item.href}">{item.title}</a></li>))}
					
					<li><a href = "/">Home</a></li>
					<li><a href = "/news">News</a></li>
					<li><a href = "/blog">Blog</a></li>				
				</ul>
			</Fragment>
		)
	}
	
	static propTypes = {
		title: PropTypes.string,
		items: PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string.isRequired,
				href: PropTypes.string.isRequired
			})
		)
	}
	
	static defaultProps = {
		title: 'Default menu title',
		items: []
	}
	
}
