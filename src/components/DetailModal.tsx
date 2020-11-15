import React from 'react';
import {Modal, Button} from "react-bootstrap";

export const DetailModal = (props) => {
    return (
        <div>
            <Modal show={props.showDetail} onHide={()=>{
                props.handleClose("detail")
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.post.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.post.body}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{
                        props.handleClose("detail")
                    }}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};
