import React from 'react';
import { connect } from 'react-redux';
import { setSportFilter } from '../actions/filters';

class SportListFilters extends React.Component {
    render() {
        return (
            <div>
                <input placeholder='Search by Sport / Activity' type='text' value={this.props.filters.sport} onChange={(event) => {
                    this.props.dispatch(setSportFilter(event.target.value));
                    //console.log(event.target.value);
                }} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(SportListFilters);

 