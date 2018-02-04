import React from 'react';
import { connect } from 'react-redux';

import SportListItem from './SportListItem';

import selectSports from '../selectors/sports';

export const SportList = (props) => {
    return (
        <div>
        <h3>Sport List</h3>
            {
                props.sports.length === 0 ? (
                    <p>No sports Found</p>
                ) : (
                    
                    props.sports.map((sport) => {
                        return (
                            <SportListItem key={sport.id}  {...sport} />
                        );
                    })
                )
            }
        </div>        
    );
};

const mapStateToProps = (state) => {
    return {
        sports: selectSports(state.sports, state.filters)
    }
};

export default connect(mapStateToProps)(SportList);
