import React, { Component } from 'react';

export class Buttons extends Component {
    render() {
        return (
            <div className="sg-ui-elements">
                <h5 className="sub-title">Primary Buttons</h5>

                <div className="buttons-guide">
                    <div className="buttons-guide__container">
                        <div className="buttons-guide__card">
                            <button className="primary-button">Meet Mirum</button>
                        </div>
                        <div className="buttons-guide__card">
                            <button className="primary-button sg-hover">Meet Mirum</button>
                        </div>
                        <div className="buttons-guide__card">
                            <button className="primary-button sg-focus">Meet Mirum</button>
                        </div>
                        <div className="buttons-guide__card">
                            <button className="primary-button sg-active">Meet Mirum</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buttons;
