import React, { Component } from 'react'
import { Media } from 'react-bootstrap'
import '../../styles/InformationList.css';

class InformationList extends Component {
  render() {
    const { dispInformations, isFetching, openModal } = this.props
    return (
      <div>
        {
          isFetching
          ? <h2>Now Loading...</h2>
          : <div className="padding-top50">
              {dispInformations
                .sort((a, b) =>  a.published_at < b.published_at ? 1 : -1 )
                .filter((information, index) => { return index < 3 })
                .map((information, index) => (
                  <Media key={information.id} onClick={() => openModal(information.id)} className="margin">
                    <Media.Left>
                      <img width={90} height={90} src={`${information.image_thumbnail}`} alt="ThumbnailImg"/>
                    </Media.Left>
                    <Media.Body>
                      <Media.Heading className="title">
                        {information.title.length >= 40 ? (information.title).substr(0, 40)+"..." : information.title}
                      </Media.Heading>
                      <p className="text">{information.body}</p>
                    </Media.Body>
                  </Media>
              ))}
            </div>
        } 
      </div>
    )
  }
}

export default InformationList