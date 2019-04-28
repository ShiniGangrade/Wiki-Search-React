import React from 'react';
import 'antd/dist/antd.css';
import {Card} from 'antd';

export class SearchResults extends React.Component {
    render() {
        return (
            <Card title="Search Results">

                {this.props.dataList.map(({title, description, link}, index)=>
                        <Card
                            style={{ margin: 10 }}
                            type="inner"
                            title={title}
                            extra={
                                <form action={`https://en.wikipedia.org/api/rest_v1/page/pdf/${link.split('/').pop()}`} target="_top">
                                <button type="submit"> Download</button>
                                </form>
                            }
                        >
                            {description}

                        </Card>
                )}
            </Card>
        );
    }
}
