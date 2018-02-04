import React from 'react';
import SportDashboardPage from './SportDashboardPage';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';

class MySportForm extends React.Component {
    constructor(props) {
        super(props);
        let defaultAcademyChecked = false;
        let defaultRacingChecked = false;
        let defaultAllActivitiesChecked = false;
        
        if(props.mySport !== undefined) {
            props.mySport.levels.map(level => {
                if(level.name === 'Academy') {
                    defaultAcademyChecked = true;
                }
                if(level.name === 'Racing') {
                    defaultRacingChecked = true;
                }
            })
        }

        if(defaultAcademyChecked && defaultRacingChecked) {
            defaultAllActivitiesChecked = true;
        }
        
        this.state = {
            name: props.mySport ? props.mySport.name : '',
            parent: props.mySport ? props.mySport.parent : this.props.parentID,
            defaultAcademyChecked,
            defaultRacingChecked,
            defaultAllActivitiesChecked,
            error: ''
        }
    }

    updateAllActivities = () => {
        if(this.state.defaultAcademyChecked && this.state.defaultRacingChecked) {
            this.setState(() => ({
                defaultAllActivitiesChecked: true
            }));
        }else {
            this.setState(() => ({
                defaultAllActivitiesChecked: false
            }));
        }
    }

    handleAcademyChange = () => {
        const defaultAcademyChecked = !this.state.defaultAcademyChecked;
        this.setState(() => ({
            defaultAcademyChecked
        }), () => {
            this.updateAllActivities();
        });
    }

    handleRacingChange = () => {
        const defaultRacingChecked = !this.state.defaultRacingChecked;
        this.setState(() => ({
            defaultRacingChecked
        }), () => {
            this.updateAllActivities();
        });
    }

    handleAllActivities = () => {
        const defaultAllActivitiesChecked = !this.state.defaultAllActivitiesChecked;
        if(defaultAllActivitiesChecked) {
            this.setState(() => ({
                defaultAcademyChecked: true,
                defaultRacingChecked: true,
                defaultAllActivitiesChecked
            }));
        }else {
            this.setState(() => ({
                defaultAcademyChecked: false,
                defaultRacingChecked: false,
                defaultAllActivitiesChecked
            }));
        }
        
    }

    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({
            name
        }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name) {
            this.setState(() => ({
                error: 'Please provide a name'
            }));
        }else {
            this.setState(() => ({
                error: ''
            }));
            const name = this.state.name;
            let levels = [];
            if(this.state.defaultAcademyChecked && this.state.defaultRacingChecked) {
                levels = [
                    {
                        id: 1,
                        name: 'Academy',
                        icon: 'acedemy.png'
                      },
                      {
                        id: 2,
                        name: 'Racing',
                        icon: 'racing.png'
                      }
                ]
            }else if (this.state.defaultAcademyChecked && !this.state.defaultRacingChecked) {
                levels = [
                    {
                        id: 1,
                        name: 'Academy',
                        icon: 'acedemy.png'
                      }
                ]
            }else if (!this.state.defaultAcademyChecked && this.state.defaultRacingChecked) {
                levels = [
                      {
                        id: 1,
                        name: 'Racing',
                        icon: 'racing.png'
                      }
                ]
            }
            this.props.onSubmit({ 
                name,
                levels,
                parent: this.state.parent
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Update Sport / Activity</h2>
                { !!this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type='text' value={this.state.name} onChange={this.onNameChange} placeholder='Sport name' autoFocus/>
                    <br />
                    <input 
                        type="checkbox" 
                        checked={this.state.defaultRacingChecked} 
                        onChange={this.handleRacingChange} 
                    /> Racing
                    <input 
                        type="checkbox" 
                        checked={this.state.defaultAcademyChecked}
                        onChange={this.handleAcademyChange} 
                    />
                     Academy
                    <input 
                        type="checkbox" 
                        checked={this.state.defaultAllActivitiesChecked}
                        onChange={this.handleAllActivities} 
                    />
                  All activities
                    <button 
                        //disabled={!this.state.name || !this.state.amount}
                    >Submit</button>
                </form>
            </div>
        );
    }
}

export default MySportForm;