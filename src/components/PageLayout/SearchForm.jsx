import React, { Component } from "react";
import './SearchForm.scss';
import TextField from '@material-ui/core/TextField';
import Input from 'muicss/lib/react/input';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import RootRef from '@material-ui/core/RootRef';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import green from '@material-ui/core/colors/green';


class Filters extends Component {
    constructor(props) {
        super(props);
        this.searchInputRef = null;
    }

    handleFilterChange = (e) => {
        this.props.updateFilter(e.target.value);
    }

    setSearchInputRef = (node) => {
        this.searchInputRef = node;
    }

    componentDidMount() {
        this.props.getSearchInputRef(this.searchInputRef);
    }

    render() {
        return (
            <div ref={this.setSearchInputRef}>
                <Input type="text" label={this.props.placeholder} floatingLabel={true} onChange={this.handleFilterChange} className="form-control" />
            </div>
        )
    }
};

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: ['Chicago', 'New York', 'Tokyo', 'London', 'San-Francisco', 'Amsterdam', 'Hong Kong', 'Moscow', 'Rostov-on-Don'],
            filterValue: '',
            displaySearchResults: false
        };       
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        let visibility = false;

        if (this.searchResultRef && this.searchInputRef && this.state.filterValue.length > 0) {
            if (this.searchResultRef.contains(event.target) || this.searchInputRef.contains(event.target)) {
                visibility = true;
            }
        }

        this.setState({
            displaySearchResults: visibility
        })
    }

    handleFilterUpdate = (filterValue) => {
        this.setState({
            filterValue: filterValue,
            displaySearchResults: filterValue.length > 0 ? true : false
        })
    }

    setSearchResultRef = (node) => {
        this.searchResultRef = node;
    }

    handleGetSearchInputRef = (ref) => {
        this.searchInputRef = ref;
    }

    render() {
        const filterValue = this.state.filterValue.toLowerCase();

        let content = "";
        let placeholder = "Введите искомый город на англ.";
        let displayedItems = this.state.listItems.filter(function (item) {
            let match = item.toLowerCase().indexOf(filterValue);
            if (match >= 0 && filterValue.length > 0) {
                return true
            }
        }.bind(this));

        if (displayedItems.length > 0) {
            var items = displayedItems.map((item, itemIndex) => {
                return (
                    <li key={`search-item-${itemIndex}`}>{item}</li>)
            });
            content = <ul>{items}</ul>;
            placeholder = `Найдено ${displayedItems.length} совпадений `;
        } else if (filterValue.length > 0) {
            placeholder = "Совпадений нет";
        }

        const style = {
            display: this.state.displaySearchResults && displayedItems.length > 0 ? "block" : "none"
        };

        return (
            <div id="search-form">
                <Filters updateFilter={this.handleFilterUpdate} getSearchInputRef={this.handleGetSearchInputRef} placeholder={placeholder} />
                <div ref={this.setSearchResultRef} id="search-form-result" style={style}>{content}</div>
            </div>
        )
    }
}

export default SearchForm;