import { AutoComplete } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const Option = AutoComplete.Option;

export class SearchBox extends React.Component {
    render() {
        const { suggestions, handleSelect, handleSearch } = this.props;
        const children = suggestions.map((item, index) => <Option key={index}>{item}</Option>);

        return (
            <AutoComplete
                style={{ width: 200 , margin:10}}
                onSearch={handleSearch}
                placeholder='Search...'
                onSelect={handleSelect}
            >
                {children}
            </AutoComplete>
        );
    }
}
