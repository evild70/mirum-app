import React, { Component } from 'react';

export class Generic extends Component {
    const generic = {
        display: "block",
        minHeight: "200px"
        backgroundColor: "#E5FEFF"
    }

    render() {
        return (
            <div style={generic}>
                <h2>Generic</h2>
            </div>
        );
    }
}

export default Generic;
