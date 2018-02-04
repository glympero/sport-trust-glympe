import React from 'react';
import MySportForm from './MySportForm';
import { addMySport } from '../actions/mySports';
import { connect } from 'react-redux';

export class AddMySportPage extends React.Component {

  onSubmit = (mySport) => {
    
    this.props.addMySport(mySport)
    this.props.history.push('/');
  }

  render(){
    return (
      <div>
        <h1>Add MySport</h1>
        <MySportForm
          onSubmit={this.onSubmit}
          parentID={this.props.filters.parentID}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMySport: (mySport) => {
      dispatch(addMySport(mySport));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMySportPage);