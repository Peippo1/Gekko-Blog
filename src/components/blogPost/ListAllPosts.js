import React from "react";
import { Link } from 'react-router-dom';

const ListAllPosts = () => {
    return (
        <div>
            <Link to="/add-post">Add Post</Link>
            <h2>GEKKO POSTS</h2>

            <table>
                <thread>
                    <tr>
                        <th>UserName</th>
                        <th>UserPost</th>
                    </tr>
                </thread>
                <tbody>
                    <tr>
                        <td>Mr Charles</td>
                        <td>"How do you feel about pants? Thats what i really waht to know..."</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ListAllPosts;