import 'semantic-ui-css/semantic.min.css';
import './App.css';
import React from 'react'
import CommentsList from './components/comments-list/commentsList';
import {Header} from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Header as='h1' textAlign='center' className="title">
            User reviews
          </Header>
          <CommentsList/>
        </header>
    </div>
  );
}

export default App;
