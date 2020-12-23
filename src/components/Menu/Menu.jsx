import './Menu.css';
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom'; 

//import ReactDom from 'react-dom';

//statefull предпологается поведение элемента
class Menu extends Component{
	render(){
		const {title, items, activePath, onChange} = this.props;
		return(
			<Fragment>
				<h3>{title}</h3>
				<ul className = "menu">
					{items.map(((item, idx) => <li key = {idx}><Link to = {item.href}>{item.title}</Link></li>))}					
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

export default withRouter(Menu);
