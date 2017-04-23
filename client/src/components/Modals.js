import React, { Component } from 'react'
import { Media, Modal, Button } from 'react-bootstrap'

class Modals extends Component {
  render () {
    const { selectInformation, isShow, closeModal } = this.props
    return (
      <div>
        <Modal show={isShow} onHide={closeModal} dialogClassName="custom-modal">
          <Modal.Header>
            <Modal.Title>{selectInformation[0].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-boy"><Media.Left>
            <img width={360} height={360} src={`${selectInformation[0].image_main}`} alt="MainImg"/>
          </Media.Left>
            <Media.Body>
              <p>{selectInformation[0].body}</p>
            </Media.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal}>とじる</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default Modals