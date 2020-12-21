import React, {Component, Fragment} from 'react';

//import CommentList from 'components/CommentsList';
import CommentsList from '../components/CommentsList/CommentsList';

export default class CommentsContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            comments: [],
            page: 1
        }      
    }

    loadComments = () =>{
        const {page} = this.state;
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
    }

    handleScroll = (event) => {
        if(document.documentElement.clientHeight - window.scrollY - window.innerHeight == 0){
            if(!this.state.loading){
                this.loadComments();
            }
        }
    }

    componentDidMount(){
        this.loadComments();        
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
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