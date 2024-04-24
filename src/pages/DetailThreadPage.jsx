// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useParams, Link} from 'react-router-dom';
import ThreadFooter from '../components/ThreadFooter';
import CommentForm from '../components/CommentForm';
import ThreadContent from '../components/ThreadContent';
import ThreadHeader from '../components/ThreadHeader';
import CommentItem from '../components/CommentItem';
import { useSelector, useDispatch } from 'react-redux';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import { postedAt } from '../utils';
import { asyncAddComment } from '../states/comment/action';
import Loading from '../components/Loading';

const DetailThreadPage = () => {
    const { id } = useParams();
    const {
        threadDetail = null,
        authUser
    } = useSelector((states) => states);
    console.log('ini id juga : ', id);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncReceiveThreadDetail(id));
    }, [id, dispatch]);

    const onAddComment = ({ threadId, content }) => {
        dispatch(asyncAddComment({ threadId, content })).then(() => {
            // window.location.reload();
            window.alert('Comment added successfully!');
            // window.history.back();
            window.location.href = `/threads/${threadId}`;
        }).catch((error) => {
            console.error('Error adding comment:', error);
        });
    }

    if (!threadDetail) {
        return null;
    }

    return (
        <>
            <Loading />
            <section className="detail-page">
                <header className="thread-header">
                    <ThreadHeader category={threadDetail.category} />
                </header>
                <div className="thread-content">
                    <ThreadContent title={threadDetail.title} body={threadDetail.body} />
                </div>
                <footer className="thread-footer">
                    <ThreadFooter owner={threadDetail.owner.name} createdAt={postedAt(threadDetail.createdAt)} avatar={threadDetail.owner.avatar} />
                </footer>
                <div className="thread-comment">
                    <div className="thread-comment__input">
                        <h3>Beri komentar</h3>
                        {authUser ? (
                            <CommentForm addComment={onAddComment} threadId={threadDetail.id} />
                        ) : (
                            <p className="thread-comment__not_login">
                                <Link to="/login">Login</Link> untuk memberi komentar
                            </p>
                        )}
                    </div>
                    <div className="thread-comment__list">
                        <h3>Komentar ({String(threadDetail.comments.length)})</h3>
                        <div className="comment-list">
                            {threadDetail.comments && threadDetail.comments.map((comment) => (
                                <CommentItem key={comment.id} {...comment} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailThreadPage;