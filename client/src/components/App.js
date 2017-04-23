import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from 'react-bootstrap'
import axios from 'axios'
import InformationList from './InformationList'
import Modals from './Modals'
import { 
  requestData, receiveDataSuccess, receiveDataFailed,
  openModal, closeModal
 } from '../actions'
import '../../styles/App.css';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestData())
    axios.get('/api/informations')
    .then(response => {
      const dispInformations = response.data.informations
      dispatch(receiveDataSuccess(dispInformations))
    })
    .catch(err => {
      console.error(new Error(err))
      dispatch(receiveDataFailed())
    })
  }

  render() {
    return (
      <div>
        <Panel header="お知らせ" className="panel">
          <InformationList 
            dispInformations={this.props.dispInformations} 
            openModal={this.props.openModal} 
            isFetching={this.props.isFetching} 
          />
          <Modals
            selectInformation={this.props.selectInformation} 
            isShow={this.props.isShow} 
            closeModal={this.props.closeModal}
          />
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dispInformations: state.informations.dispInformations,
    selectInformation: state.informations.selectInformation,
    isShow: state.informations.isShow,
    isFetching: state.informations.isFetching,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (id) => { dispatch(openModal(id)) },
    closeModal: () => { dispatch(closeModal()) },
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)