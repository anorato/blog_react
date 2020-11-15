import React from 'react';
import {Table, Button} from 'react-bootstrap';

export const MainTable = (props: any) => {
    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>User id</th>
                        <th>Post id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Detail</th>
                        <th>Action</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>

                        {
                            props.posts && props.posts.map((post)=>{
                                return (
                                    <tr key={post.id}>
                                        <td>{post.userId}</td>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td>
                                            <Button variant="success" onClick={()=>{
                                                props.handleDetailPost(post.id)
                                            }}>Detail</Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={()=>{
                                            props.handleDeletePost(post.id)
                                        }}>Delete</Button>
                                        </td>
                                        <td>
                                            <Button variant="primary" onClick={()=>{
                                                props.handleAuthorPost(post.id)
                                            }}>Author</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                </tbody>
            </Table>
        </div>
    )
};
