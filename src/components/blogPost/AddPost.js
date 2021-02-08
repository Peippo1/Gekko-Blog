import React from 'react';
import { Link } from 'react-router-dom';

const AddPost = () => {
    const [userName, setUserName] = useState();
    const [userPost, setUserPost] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`submitter: ${userName} - ${userPost}`);
    };

    return (
        <div>
            <Link to="/">View Posts</Link>
            <h2>Add Post</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="User Name"
                onChange={({ target }) => setUserName(target.value)}
                /><br />
                <input
                type="text"
                placeholder="User Post"
                onChange={({ target }) => setUserPost(target.value)}
                /><br />

                <button type="submit">
                    Add Post
                </button>
            </form>
        </div>
    )
};

export default AddPost;