import React, { useEffect, useState } from 'react'
import './editComment.css';
import {List, Form, TextArea, Input, Button} from 'semantic-ui-react'

export default function EditComment(props) {
    const [comment, setComment] = useState({name: "", content: '',avatar: '',id: ''});

    useEffect(() => {
        if(props.comment) 
            setComment(props.comment);
    }, [props.comment])


  const EditComment = () => {
    props.edit(comment);
    setComment({name: "", content: '',avatar: '',id: ''});
    props.setEdit(false)
  }

  return (
    <List.Item className="create-comment-item">
      <List.Content>
        <Form>
          <Form.Field
            control={Input}
            value={comment.name}
            placeholder="Your name"
            onChange={(e) => setComment({...comment,name: e.target.value})} />
          <Form.Field
            control={TextArea}
            placeholder='Your comment'
            value={comment.content}
            onChange={(e) => setComment({...comment,content: e.target.value})} />
          <Form.Field
            id='form-button-add-comment'
            control={Button}
            onClick={() => EditComment()}
            content='Edit'/>
        </Form>
      </List.Content>
    </List.Item>
  )
}