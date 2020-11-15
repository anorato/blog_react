import React from 'react';
import {Modal, Button} from "react-bootstrap";

export const AuthorModal = (props) => {
    return (
        <div>
            <Modal show={props.showAuthor} onHide={()=>{
                props.handleClose("author")
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Author</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.post.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{
                        props.handleClose("author")
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};
