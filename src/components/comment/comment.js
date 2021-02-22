import React, {useState} from 'react'
import {Button, Image, List} from 'semantic-ui-react'
import EditComment from '../editComponent/editComment';
import './comment.css';

export default function Comment(props) {
    const {comment} = props;
  const [isEdit,
    setEdit] = useState(false)

    const editComment = () => {
        setEdit(true)
    }
  const view = isEdit
    ? <EditComment edit={props.edit} comment={props.comment} setEdit={setEdit} />
    : (
      <List.Item>
        <List.Content floated='right'>
          <Button onClick={() => editComment()}>Edit</Button>
          <Button onClick={() => props.delete(comment.id)}>Delete</Button>
        </List.Content>
        <Image avatar src={comment.avatar}/>
        <List.Content>
          <List.Header as="h3">{comment.name}</List.Header>
          <div className="desc">{comment.content}</div>
        </List.Content>
      </List.Item>
    );
  return view;
}