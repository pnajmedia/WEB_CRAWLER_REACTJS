import React, { Component } from 'react';
import {Modal, Icon,Button} from 'semantic-ui-react';

class LinkLister extends React.Component {
    constructor(props) {
        super(props);
        const { url, show } = this.props;
        console.log('transf props', url)
        this.state ={ libFetchUrl: url} 
    }

    render() {
        return ( 
            <div>
                {/* {this.state.libFetchUrl?
                window.open(this.state.libFetchUrl, "_blank"):<></>} */}

                
          </div>
        )
    }
}

export default LinkLister;