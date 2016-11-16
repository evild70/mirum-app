import React, { Component } from 'react';
import Footer from '../Footer/Footer';

export class WorkPage extends Component {
    render() {
        return (
            <div className="work page-position">
                <h2 className="component-header">Work</h2>
                <button onClick={this.props.callFromWork}>callFromWork</button>
                <Footer />
            </div>
        );
    }
}

export default WorkPage;
