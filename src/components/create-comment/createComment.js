import React, { useState } from 'react'
import './createComment.css';
import {List, Form, TextArea, Input, Button} from 'semantic-ui-react'

export default function CreateComment(props) {
  const [comment, setComment] = useState({name: "", content: '',avatar: '',id: ''});

  const CreateComment = async () => {
    props.add(comment);
    await setComment({name: "", content: '',avatar: '',id: ''});
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
            onClick={() => CreateComment()}
            content='Add'/>
        </Form>
      </List.Content>
    </List.Item>
  )
}