import React from 'react';
import { connect } from 'react-redux';
import { removeMySport } from '../actions/mySports';

import { Link } from 'react-router-dom';

class MySportListItem extends React.Component {

    onRemove = () => {
        this.props.removeMySport( {id: this.props.id, parentID:this.props.filters.parentID} );
      }

    render(){
        return (
            <div>
                <h4><Link to={`/edit/${this.props.id}`}>{this.props.name}</Link></h4>
                {this.props.levels.map((level) => {
                    return (
                        <p key={level.name}>{level.name}</p>
                    );
                })}
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    }   
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeMySport: (data) => {
        dispatch(removeMySport(data));
      },
      editMySport: (id, expense) => {
        dispatch(editMySport(id, expense));
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(MySportListItem);