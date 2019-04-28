import debounce from 'lodash.debounce';
import React, {Component} from 'react';

import {SearchBox} from '../../components/SearchBox';
import {SearchResults} from '../../components/SearchResults';
import {getAutoSuggestResult, getSearchResults} from '../../service/wikiService';

export default class Home extends Component {


    state = {
        suggestions: [],
        searchResults: []
    };

    handleSearch = debounce(async (value) => {
        const data = await getAutoSuggestResult(value);
        const suggestions = data[1] || [];
        this.setState({suggestions});
    }, 600);

    handleSelect = async (value, option) => {
        const data = await getSearchResults(this.state.suggestions[value]);
        const searchResults = data[1].map((item, index) => ({
            title: item,
            description: data[2][index],
            link: data[3][index]
        }));
        this.setState({searchResults});
    }

    renderResults = searchResults => <div className="results-container">
        {searchResults.map(({title, description, link}, index) => <div key={index} className="result-view">
            {/*<SearchResultCard/>*/}

            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <form action={`https://en.wikipedia.org/api/rest_v1/page/pdf/${link.split('/').pop()}`} target="_top">
                <button type="submit"> Download</button>
            </form>
        </div>)}
    </div>

    render() {
        const {suggestions, searchResults} = this.state;
        return (<div className="home-container">
            <SearchBox
                suggestions={suggestions}
                handleSearch={this.handleSearch}
                handleSelect={this.handleSelect}
            />
            <SearchResults dataList={searchResults}/>
        </div>);
    }
}
