import {createActions} from 'redux-actions';

export const loadStarted = createActions('[Comments] Loading started');
export const loadCompleted = createActions('[Comments] Loading completed');
export const loadFailed = createActions('[Comments] Loading failed');

export const load = (dispatch) => {
    dispatch (loadStarted());
    //this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then((response) => response.json())
            .then((comments) => {
                dispatch (loadCompleted(comments));
                /*this.setState({
                    loading: false,
                    comments: this.state.comments.concat(comments),
                })*/
            })
            .catch(() => { 
                dispatch (loadFailed());/*this.setState({loading: false})*/ 
            });
}