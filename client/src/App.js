import React from 'react';
import PostCreate from './PostCreate/PostCreate';
import PostList from './PostList/PostList';

const App = ()=>{
    return(
        <div className='container'>
            <h2>Create Posts</h2>
            <PostCreate />
            <hr/>
            <h2>Posts</h2>
            <PostList/>
        </div>
    )
};

export default App;