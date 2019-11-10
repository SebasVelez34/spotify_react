import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from "react"; /* hooks de react */

class Launch extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show : false
        }
        
    }
    handleShow() {
        this.setState({ show: true });
    }
    handleClose(){
        this.setState({ show: false });
    }
    
    render(){
        return (
            <>
            <Modal show = {this.state.show} onHide = {this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant = "secondary" onClick = {this.handleClose}>
                    Close
                </Button>
                <Button variant = "primary" onClick = {this.handleClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default Launch;