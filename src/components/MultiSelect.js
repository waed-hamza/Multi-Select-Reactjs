import * as React from 'react';
import { useState } from 'react';

class MultiSelect extends React.Component{
    state={
        selectedOptions:{
            budget:false,
            foodAllergies:false,
            peopleNumber:false,
            specialRestrictions:false
        },
        searchField: '',
    }
    checkClick = (e) =>{
        var {name,checked} = e.target;
        this.setState((e)=>{
            var selectedOption = e.selectedOptions;
            return selectedOption[name]=checked;
        });
    }

    handleSearch = (e)=>{
        console.log(e.target);
        this.setState({searchField: e.target.value});
    }
    render(){
        const displayValues = Object.keys(this.state.selectedOptions).filter((x)=>this.state.selectedOptions[x]);
        return(
            <div className="container">
                {/* Select Box */}
                <div className="select-box">
                    <div className="options-container">
                        {/* First op. */}
                        <div className="option">
                            <input
                                type="checkbox"
                                className="checkbox"
                                id="budget"
                                name="budget"
                                onChange={this.checkClick}
                            />
                            <label for="budget">Budget</label>
                        </div>
                        {/* Second op. */}
                        <div className="option">
                            <input
                                type="checkbox"
                                className="checkbox"
                                id="food-allergies"
                                name="foodAllergies"
                                onChange={this.checkClick}
                            />
                            <label for="food-allergies">Food allergies</label>
                        </div>
                        {/* Third op. */}
                        <div className="option">
                            <input
                                type="checkbox"
                                className="checkbox"
                                id="people-number"
                                name="peopleNumber"
                                onChange={this.checkClick}
                            />
                            <label for="people-number">Numbet of People</label>
                        </div>
                        {/* Forth op. */}
                        <div className="option">
                            <input
                                type="checkbox"
                                className="checkbox"
                                id="special-restrictions"
                                name="specialRestrictions"
                                onChange={this.checkClick}
                            />
                            <label for="special-restrictions">Special Restrictions</label>
                        </div>
                    </div>
                    
                    <input type="text" className="selected" placeholder="Search Questions" onChange={this.handleSearch} value={this.state.searchField}></input>
                </div>
                <div className="displayValue">
                    <strong>{displayValues+""}</strong>
                </div>
            </div>
        );
    }
}

export default MultiSelect;