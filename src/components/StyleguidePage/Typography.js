import React, { Component } from 'react';

export class Typography extends Component {
    render() {
        return (
            <div className="sg-typography">
                <div className="container-reg">
                    <div className="card-column-container">
                        <div className="card-column">
                            <div className="element-card">
                                <div className="element-card__title">H1 <span></span></div>
                                <h1 className="element-card__sample">Lorem Ipsum Dolor</h1>
                                <span className="element-card__description">Mirum Sans, Regular, 36px, Sentence Case</span>
                            </div>

                            <div className="element-card">
                                <div className="element-card__title">H2 <span></span></div>
                                <h2 className="element-card__sample">Lorem Ipsum Dolor</h2>
                                <span className="element-card__description">Mirum Sans, Regular, 22px, Sentence Case</span>
                            </div>

                            <div className="element-card">
                                <div className="element-card__title">H3 <span>(CTAs)</span></div>
                                <h3 className="element-card__sample">Lorem Ipsum Dolor</h3>
                                <span className="element-card__description">Mirum Sans, Bold, 16px, Sentence Case</span>
                            </div>

                            <div className="element-card">
                                <div className="element-card__title">H4 <span>(Pull Quotes)</span></div>
                                <h4 className="element-card__sample" style={{'width': '65%'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h4>
                                <span className="element-card__description">Mirum Serif, Regular, 30px, Sentence Case</span>
                            </div>
                        </div>

                        <div className="card-column">
                            <div className="element-card">
                                <div className="element-card__title">H5 <span>(Labels)</span></div>
                                <h5 className="element-card__sample">Lorem Ipsum Dolor</h5>
                                <span className="element-card__description">Mirum Sans, Bold, 16px, Upper Case</span>
                            </div>

                            <div className="element-card">
                                <div className="element-card__title">H6 <span></span></div>
                                <h6 className="element-card__sample">Lorem Ipsum Dolor</h6>
                                <span className="element-card__description">Mirum Sans, Regular, 12px, Sentence Case</span>
                            </div>

                            <div className="element-card">
                                <div className="element-card__title">BODY</div>
                                <p className="element-card__sample">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque felis eget dui ullamcorper euismod. Cras nulla felis, tempor sed vulputate in, gravida vel diam. Pellentesque id nibh venenatis tellus pretium venenatis. </p>
                                <span className="element-card__description">Mirum Sans, Regular, 16px, Sentence Case</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Typography;
