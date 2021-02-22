import React, {Fragment, useEffect, useState} from 'react'
import {List} from 'semantic-ui-react'
import Comment from '../comment/comment';
import imgGen from '@dudadev/random-img';
import CreateComment from '../create-comment/createComment';

export default function CommentsList() {

  const [commentsList,
    setCommentsList] = useState([]);

  useEffect(() => {
    const fromLS = JSON.parse(localStorage.getItem("commentsList")) || [];
    setCommentsList(fromLS);
  }, [])

  const addComment = async (comment) => {
    comment.avatar = await imgGen();
    comment.id = Math.floor(Math.random() * 9999)
    const updatedList = [
      ...commentsList,
      comment
    ];
    setCommentsList(updatedList);
    localStorage.setItem('commentsList',JSON.stringify(updatedList))
  }

  const editComment = (comment) => {
    const updatedList = commentsList.map(item => {
      if (item.id === comment.id) {
        return comment;
      }
      return item;
    });
    setCommentsList(updatedList)
    localStorage.getItem('commentsList',commentsList)
  }

  const deleteComment = (id) => {
    const updatedList = commentsList.filter(item => item.id !== id);
    setCommentsList([...updatedList]);
    localStorage.getItem('commentsList',commentsList)
  }

  const getComments = () => {
    return commentsList.map(comment => <Comment
      key={comment.id}
      delete={deleteComment}
      edit={editComment}
      comment={comment}/>);
  }
  return (
    <Fragment>
      <List verticalAlign='middle'>
        {getComments()}
      </List>
     <CreateComment add={addComment} />
    </Fragment>
  )
}
