import './Menu.css';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'; 

//import ReactDom from 'react-dom';

//statefull предпологается поведение элемента
export default class Menu extends Component{
	render(){
		const {title, items, activePath, onChange} = this.props;
		return(
			<Fragment>
				<h3>{title}</h3>
				<ul className = "menu">
					{items.map(((item, idx) => <li className={activePath === item.href ? 'active' : ''} key = {idx}><a data-href={item.href} href = {item.href} onClick={onChange}>{item.title}</a></li>))}					
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
