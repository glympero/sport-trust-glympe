import React from 'react';
import { connect } from 'react-redux';

import MySportListItem from './MySportListItem';

import selectSports from '../selectors/mySports';

export const MySportList = (props) => {
    return (
        <div>
        {props.mySports.length !== 0 && <h4>Your Sports / Activities</h4>}
            {
                props.mySports.length !== 0 &&
                    props.mySports.map((sport) => {
                        return (
                            <MySportListItem key={sport.id}  {...sport} />
                        );
                    })
            }
        </div>        
    );
};

const mapStateToProps = (state) => {
    return {
        mySports: selectSports(state.mySports, state.filters)
    }
};

export default connect(mapStateToProps)(MySportList);
