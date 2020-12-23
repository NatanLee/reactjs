
import CommentsContainer from 'containers/CommentsContainer.jsx';
import CommentContainer from 'containers/CommentContainer.jsx';
import Counter from 'components/Counter/Counter.jsx';

export default [
    {
        path: '/',
        exact: true,
        component: Counter
    },
    {
        path: '/comments',
        exact: true,
        component: CommentsContainer
    },
    {
        path: '/comments/:id',
        exact: true,
        component: CommentContainer
    }

];