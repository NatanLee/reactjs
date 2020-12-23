import React, {Component, Fragment} from 'react';

//import CommentList from 'components/CommentsList';
import Comment from '../components/Comment/Comment';

export default class CommentContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            loading: false,
            comment: {}           
        }      
    }

    loadComments = () =>{       
    }

    handleScroll = (event) => {
        if(document.documentElement.clientHeight - window.scrollY - window.innerHeight == 0){
            if(!this.state.loading){
                this.loadComments();
            }
        }
    }

    componentDidMount(){
        const {match} = this.props;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/comments/${match.params.id}`)
            .then((response) => response.json())
            .then((comment) => {
                this.setState({
                    loading: false,
                    comment,
                })
            })
            .catch(() => {this.setState({loading: false}) });
    }

   

    render(){
        const {loading, comment} = this.state;
        return(
            <Fragment>
                <Comment name={comment.name} body={comment.body} />               
            </Fragment>    
        )
    }
}