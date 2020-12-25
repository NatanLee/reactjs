import { combineActions} from 'redux';
import commentsAction from '/comments';

export default combineActions({
    comments: commentsAction
})