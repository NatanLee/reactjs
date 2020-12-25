import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

//import CommentList from 'components/CommentsList';
import CommentsList from '../components/CommentsList/CommentsList';
import {load} from 'actions/comments';

class CommentsContainer extends Component{
   /* constructor(props){
        super(props);

        this.state = {
            loading: false,
            comments: [],
            page: 1
        }      
    }*/

    /*loadComments = () =>{
        const {page} = this.state;
        //перенесено в actons comments
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10&page=${page}`)
            .then((response) => response.json())
            .then((comments) => {
                this.setState({
                    loading: false,
                    comments: this.state.comments.concat(comments),
                })
            })
            .catch(() => {this.setState({loading: false}) });
    }*/

    /*handleScroll = (event) => {
        if(document.documentElement.clientHeight - window.scrollY - window.innerHeight == 0){
            if(!this.state.loading){
                this.loadComments();
            }
        }
    }*/

    componentDidMount(){
        const {loadComments} = this.props;
        loadComments();
        //this.loadComments();        
        //window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        //window.removeEventListener('scroll', this.handleScroll);
    }

    render(){
        const {loading, comments} = this.state;
        return(
            <Fragment>
                <CommentsList comments={comments} />
                {loading ? 'Loading' : ''}
            </Fragment>    
        )
    }
}

function mapStateToProps(state, props){
    return {
        ...props,
        comments: state.comments.entities,
        loading: state.comments.loading,
    }
} 

function mapDispatchToProps(dispatch, props){
    return {
        ...props,
        loadComments: () => load(dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);