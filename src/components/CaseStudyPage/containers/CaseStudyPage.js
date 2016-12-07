import React, { Component } from 'react';
import CaseStudyBanner from '../components/CaseStudyBanner';
import CaseStudySlideshow from '../components/CaseStudySlider';

export class CaseStudyPage extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="container-lrg">
                        <CaseStudyBanner bannerImg="http://imgur.com/eXQaM7P.jpg">
                            <h2>American Family Insurance</h2>
                            <h1>Kid Coach Campaign: Big dreams require small experts.</h1>
                        </CaseStudyBanner>
                    </div>
                </div>
                <div className="section--padding grey-bg">
                    <div className="container-reg project-synopsis">
                        <div className="project-synopsis__item">
                            <h5>Challenge</h5>
                            <p>The older we get, the less likely we are to follow our dreams.</p>
                        </div>
                        <div className="project-synopsis__item">
                            <h5>Idea</h5>
                            <p>Pair dreamers with someone who can help renew their childhood optimism.</p>
                        </div>
                        <div className="project-synopsis__item">
                            <h5>Results</h5>
                            <p>3X engagement rate in campaigns first week</p>
                            <p>87% increase in lead gen rate in first 2 weeks</p>
                        </div>
                    </div>
                </div>

                <div className="section--padding">
                    <div className="container-reg">

                        <div className="article-section">
                            <h1>This is about our process</h1>
                            <p>
                                A brief description of how Mirum approached the task, elevated value and produced results. This is a summary of Mirum and our approach to work not a summary of a client and their product. Lorem ipsum dolor sit amet, Cras tristique consectetur velit, fringilla commodo justo sollicitudin eu. Aenean pulvinar posuere interdum.
                            </p>
                            <p>
                                A brief description of how Mirum approached the task, elevated value and produced results. This is a summary of Mirum and our approach to work not a summary of a client and their product. Lorem ipsum dolor sit amet, Cras tristique consectetur velit, fringilla commodo justo sollicitudin eu. Aenean pulvinar posuere interdum.
                            </p>
                        </div>

                        <div className="article-section">
                            <p>
                                A brief description of how Mirum approached the task, elevated value and produced results. This is a summary of Mirum and our approach to work not a summary of a client and their product. Lorem ipsum dolor sit amet, Cras tristique consectetur velit, fringilla commodo justo sollicitudin eu. Aenean pulvinar posuere interdum.
                            </p>

                            <div className="article-tags">
                                <h5>Disciplines</h5>
                                <span className="pill">Content</span>
                                <span className="pill">Video Production</span>
                                <span className="pill">Design</span>
                                <span className="pill">UX Design</span>
                                <span className="pill">Creation</span>
                                <span className="pill">Strategy</span>
                            </div>

                            <div className="article-tags">
                                <h5>Technologies</h5>
                                <span className="pill">Wordpress</span>
                                <span className="pill">Drupal</span>
                            </div>

                            <div className="article-tags">
                                <h5>Office</h5>
                                <span className="pill">Minneapolis</span>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="section--padding grey-bg">
                    <div className="container-reg">
                        <h4>"Mirum didn't just make a video serious. They created a cohesive, multidimensional campaign that inspired people to Dream Fearlessly."</h4>
                        <p>Bobbie Bobberson, CMO, American Family Insurance</p>
                    </div>
                </div>

                <div className="section--padding purple-bg">
                    <div className="container-reg">
                        <div className="quote-banner">
                            <h4>"Mirum didn't just make a video serious. They created a cohesive, multidimensional campaign that inspired people to Dream Fearlessly."</h4>
                            <p>Bobbie Bobberson, CMO, American Family Insurance</p>
                        </div>
                    </div>
                </div>

                <div className="section--padding">
                    <div className="container-lrg">
                        <CaseStudySlideshow />
                    </div>
                </div>

            </div>

        );
    }
}

export default CaseStudyPage;
