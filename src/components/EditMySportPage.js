import React from 'react';
import MySportForm from './MySportForm';
import { connect } from 'react-redux';
import { editMySport } from '../actions/mySports';

export class EditMySportPage extends React.Component {

  onSubmit = (mySport) => {
    this.props.editMySport(this.props.mySport.id, mySport);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <MySportForm
          onSubmit={this.onSubmit}
          mySport={this.props.mySport}
        />
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let mySport = state.mySports.find( e => e.id === props.match.params.id);
  return {
    mySport
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editMySport: (id, mySport) => {
      dispatch(editMySport(id, mySport));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMySportPage);