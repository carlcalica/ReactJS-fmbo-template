import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
// import { MultiSelect } from 'primereact/multiselect';
import './assets/css/DropdownDemo.css';

export default class DropdownDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lazyItems: [],
            lazyLoading: false,
            selectedCity1: null,
            selectedCity2: null,
            selectedCountry: null,
            selectedGroupedCity: null,
            selectedItem: null,
            selectedItem2: null
        };

        this.cities = [
            { name: 'H8', code: 'H8' },
            { name: 'M88-NG', code: 'M88-NG' },
            { name: 'CLUBV', code: 'CLUBV' },
            { name: 'CLUBJ', code: 'CLUBJ' }
        ];

        this.onCityChange = this.onCityChange.bind(this);
    }

    onCityChange(e) {
        this.setState({ selectedCity1: e.value });
    }

    render() {
        return (
            <div className="dropdown-action">
                <div className="card">
                    <Dropdown value={this.state.selectedCity1} options={this.cities} onChange={this.onCityChange} optionLabel="name" placeholder="M88" />
                </div>
            </div>
        );
    }
}