import React from 'react';
import { connect } from 'react-redux';
import SportList from './SportList';
import MySportList from './MySportsList';
import SportListFilters from './SportListFilters';

class SportDashboardPage extends React.Component{

  logMySports = () => {
    console.log(this.props.mySports);
  }


  render() {
    return (
      <div>
      <h1>Sports / Activities</h1>
      <p>Please select first your Sports / Activities</p>
      <div className='flex-container'>
        <div>
          <SportListFilters />
          <SportList />
        </div>
        <div>
          <MySportList />
        </div>
      </div>
      <div className='button-container'>
        <button onClick={this.logMySports}>Save Activities</button>
      </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    mySports: state.mySports
  }
}

export default connect(mapStateToProps)(SportDashboardPage);