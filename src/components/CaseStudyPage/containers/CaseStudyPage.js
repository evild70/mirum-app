import React, { Component } from 'react';
import CaseStudyBanner from '../components/CaseStudyBanner';
import CaseStudySlider from '../components/CaseStudySlider';
import CaseStudyInlineSlider from '../components/CaseStudyInlineSlider';

// <div className="container-lrg">
//     <CaseStudyBanner bannerImg="http://imgur.com/eXQaM7P.jpg">
//         <h2>American Family Insurance</h2>
//         <h1>Kid Coach Campaign: Big dreams require small experts.</h1>
//     </CaseStudyBanner>
// </div>
export class CaseStudyPage extends Component {
    render() {
        return (
            <div>

                <div className="section">
                    <div className="container-lrg">
                        <div className="bann bann--purple">
                            <div className="bann__bg" style={{backgroundImage: 'url("http://imgur.com/Fc7KPMu.jpg")'}}></div>
                            <div className="container-reg">
                                <div className="bann__content-wrapper">
                                    <div className="bann__content">
                                        <h5>North America</h5>
                                        <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                                        <a href="">northamerica@mirumagency.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
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

                        <div className="article-media">
                            <CaseStudyInlineSlider />
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

                <div className="section--padding section--has-divider">
                    <div className="container-reg text-center">
                        <h2 className="title">Lorem ipsum about design</h2>
                        <img src="http://imgur.com/vvTYqyU.jpg" className="casestudy-img full-width" alt="case study" />
                        <button className="primary-btn">Visit live site</button>
                    </div>
                </div>

                <div className="section--padding grey-bg">
                    <div className="container-reg">
                        <h4 className="title">Great work. Great results.</h4>
                        <div className="stats">
                            <div className="stats__item">
                                <h5 className="h1">12M</h5>
                                <p>Video views</p>
                            </div>
                            <div className="stats__item">
                                <h5 className="h1">10,461</h5>
                                <p>People coached</p>
                            </div>
                            <div className="stats__item">
                                <h5 className="h1">87%</h5>
                                <p>Increase in Lead Gen</p>
                            </div>
                        </div>
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
                        <CaseStudySlider />
                    </div>
                </div>

                <div className="section--padding">
                    <div className="container-reg">
                        <div className="imagegrid">
                            <div className="imagegrid__col imagegrid__col--half">
                                <div className="imagegrid__img" style={{backgroundImage: 'url(http://imgur.com/Fc7KPMu.jpg)'}}>
                                    <img src="http://imgur.com/Fc7KPMu.jpg" alt="grid item" />
                                </div>
                            </div>
                            <div className="imagegrid__col imagegrid__col--half">
                                <div className="imagegrid__img" style={{backgroundImage: 'url(http://imgur.com/vvTYqyU.jpg)'}}>
                                    <img src="http://imgur.com/vvTYqyU.jpg" alt="grid item" />
                                </div>
                                <div className="imagegrid__img" style={{backgroundImage: 'url(http://imgur.com/dBwokW4.jpg)'}}>
                                    <img src="http://imgur.com/dBwokW4.jpg" alt="grid item" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="banner-img" style={{backgroundImage: 'url("http://imgur.com/eXQaM7P.jpg")'}}>
                        <img src="http://imgur.com/eXQaM7P.jpg" alt="banner closeup" />
                    </div>
                </div>

                <div className="section--padding purple-bg">
                    <div className="container-reg">
                        <h3 className="title title--light">Related Work</h3>
                        <div className="related-work">
                            <div className="related-work__content">
                                <h5>Anderson Windows</h5>
                                <h4 className="h1">Lorem ipsum dolor sit amet</h4>
                            </div>
                            <div className="related-work__media" style={{backgroundImage: 'url("http://imgur.com/vvTYqyU.jpg")'}}>
                                <img src="http://imgur.com/vvTYqyU.jpg" alt="thingy majig" />
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="primary-btn">View All Work</button>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default CaseStudyPage;
