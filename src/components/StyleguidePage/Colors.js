import React, { Component } from 'react';

export class Colors extends Component {
    constructor() {
        super();

        this.renderColorList = this.renderColorList.bind(this);
    }

    renderColorList(data, index) {
        const { color, code } = data;

        const bgColor = {
            "backgroundColor": `${color}`
        }

        return (
            <li key={index}>
                <div className="color-circle-container">

                </div>
                <div className="color-circle" style={bgColor}></div>

                <p className="hex">{color}<br /><span className="sg-inline-code">{code}</span></p>
                {/*<p dangerouslySetInnerHTML={{__html: desc}}></p>*/}
            </li>
        )
    }

    render() {
        const primaryColors = {
            colors: [
                {
                    "color": "#25172a",
                    "code": "$mirum-dark-purple",
                    "desc": "Typography on White or Light Backgrounds<br>Background Use"
                },
                {
                    "color": "#4cc8ed",
                    "code": "$mirum-blue",
                    "desc": "Main Calls to Action<br>(Arrows and Underlines)<br>Background Use"
                },
                {
                    "color": "#ffffff",
                    "code": "$mirum-white",
                    "desc": "Typography on Dark Backgrounds<br>Background Use"
                },
                {
                    "color": "#14a74a",
                    "code": "$mirum-green",
                    "desc": ""
                },
                {
                    "color": "#eb2f25",
                    "code": "$mirum-red",
                    "desc": ""
                },
                {
                    "color": "#e24598",
                    "code": "$mirum-pink",
                    "desc": ""
                },
                {
                    "color": "#faed50",
                    "code": "$mirum-yellow",
                    "desc": ""
                },
                {
                    "color": "#f9f9f9",
                    "code": "$mirum-bone-white",
                    "desc": "Alternative Background"
                }
            ]
        }

        return (
            <div className="container-reg">
                <div className="sg-colors">
                    <ul className="color-list">
                        {
                            primaryColors.colors.map(this.renderColorList)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Colors;
