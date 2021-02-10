import React, { Component } from 'react';
import axios from 'axios';
import LinkLister from "./linkLister";

class UrlParser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { keyword: 'best places', pagedItems: [], travelURL: null, modelOpen: false }
    }

    fetchResults = async (e) => {
        let params = {
            q: this.state.keyword
        }
        await axios.get('http://localhost:3002/demoResponse', { params }).
            then(res => {
                // console.log('fetched Data', res.data.results[0].content.results.organic);
                this.setState({ pagedItems: res.data.results[0].content.results.organic })
            })
            .catch((error) => console.log(error));
    }

    // linkParserModal = (e, url) => {
    //     console.log('linke durl', url)
    //     this.setState({ travelURL: url, modelOpen: true });
    //     console.log('travel Url', this.state.travelURL)
    //     console.log('Model State', this.state.modelOpen)
    // }

    render() {
        return (
            <div className="ui centered grid computer only row">
                <div className="column">
                    <h2 class="ui teal image header">
                        <div class="content">
                            WEB CRAWLER
                        </div>
                    </h2>
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Keywords..." onClick={(e) => this.fetchResults(e)} value={'best places'} />
                            <i className="search icon"></i>
                        </div>
                        <div class="ui relaxed divided list">
                            {this.state.pagedItems.map((data) => {
                                // console.log('paged Items set', data);
                                return (
                                    <div class="item" key={data.pos}>
                                        {/* <a class="header" onClick={(e) => { this.linkParserModal(e, data.url) }}>{data.url}</a> */}
                                        <a class="header" href={ data.url} target="_blank">{data.url}</a>
                                        <div class="description">{data.desc}</div>
                                        <br />
                                        {/* {this.state.travelURL ?
                                             <LinkLister url={this.state.travelURL}/>: <></>
                                         } */}
                                    </div>
                                )})
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UrlParser;