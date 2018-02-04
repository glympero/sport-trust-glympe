import React from 'react';
import { connect } from 'react-redux';
import { setParentIDFilter } from '../actions/filters';
import { addMySport } from '../actions/mySports';
import { Link } from 'react-router-dom';
import { history } from '../routers/AppRouter';

class SportListFilters extends React.Component {

    linkToPage = () => {
        return '/create';
    }
    
    setParentFilter = () => {
        if(this.props.levels.length !== 0 && this.props.filters.parentID !== 0) {
            const found = this.props.mySports.findIndex(sport => {
                return sport.id === this.props.id && sport.parent === this.props.filters.parentID
            });
            if(found === -1) {
                this.props.addMySport(
                    {
                        id: this.props.id,
                        desc: this.props.desc,
                        name: this.props.name,
                        icon: this.props.icon,
                        levels: this.props.levels,
                        parent: this.props.filters.parentID
                    }
                );
            }
        }else if(this.props.levels.length === 0) {
            this.props.setParentIDFilter(this.props.id);
            history.push('/create');
            
        }
    }

    render(){
        return (
            <div>
                <h4><Link to={`/edit/${this.props.id}`}>{this.props.name}</Link></h4>
                <span>{this.props.desc}</span>
                <button onClick={this.setParentFilter}>Select</button>
                
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters,
        mySports: state.mySports
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setParentIDFilter: (id) => {
        dispatch(setParentIDFilter(id));
      },
      addMySport: (parentID, childSport) => {
          dispatch(addMySport(parentID, childSport));
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SportListFilters);