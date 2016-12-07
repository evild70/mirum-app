import React, { Component } from 'react';
import CaseStudyBanner from '../components/CaseStudyBanner';

export class CaseStudyPage extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="container-lrg">
                        <CaseStudyBanner bannerImg="http://imgur.com/eXQaM7P.jpg">
                            <h1>Kid Coach Campaign</h1>
                        </CaseStudyBanner>
                    </div>
                </div>
                <div className="section--padding grey-bkgd">
                    <div className="container-reg project-synopsis">
                        <div className="project-synopsis__item">
                            <p className="label">Challenge</p>
                            <p>The older we get, the less likely we are to follow our dreams.</p>
                        </div>
                        <div className="project-synopsis__item">
                            <p className="label">Challenge</p>
                            <p>The older we get, the less likely we are to follow our dreams.</p>
                        </div>
                        <div className="project-synopsis__item">
                            <p className="label">Challenge</p>
                            <p>The older we get, the less likely we are to follow our dreams.</p>
                            <span className="pill">Content</span>
                            <span className="pill">Video Production</span>
                        </div>
                    </div>
                </div>

                <div className="section--padding">
                    <div className="container-reg">

                    </div>
                </div>
            </div>

        );
    }
}

export default CaseStudyPage;
