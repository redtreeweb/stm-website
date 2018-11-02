import React from 'react';

import imgHeader from '../images/catalog-header.jpg';
import imgFeature from '../images/featured-tag.svg';
import imgTellyBronze from '../images/telly_site_bugs_bronze.gif';
import imgTellySilver from '../images/telly_site_bugs_silver.gif';
import imgMatthews from '../images/we-are-matthews-thumb.jpg';
import imgCrossroads from '../images/crossroads-gallery.jpg';


export default (props) => {

    const {
        work_title,
        work_type,
        work_description,
        work_url,
        action_button,
        index
    } = props;

    console.log(props)

    switch (work_type) {

        case 'featured':
            return (
                <div class="row">
                    {/* need way more stuff here */}
                    <div class="large-12 columns flex-video vimeo widescreen">
                        <iframe src="https://player.vimeo.com/video/265289033?color=d94c00&title=0&byline=0&portrait=0" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>

                    <div class="large-1 columns featured-tag">
                        <img src={imgFeature} />
                    </div>

                    <div class="large-11 columns featured-video-description">
                        <h3>{work_title}</h3>
                        <p>{work_description}</p>
                        <div class="vimeo-link"><a href="https://vimeo.com/265289033" target="_blank">{action_button}</a></div>
                    </div>
                </div>
            );
        case 'video':
            return (
                <div class="large-12 columns video-wrapper">
                    <div class={'large-6 columns flex-video vimeo widescreen thumb' + (index % 2 === 0 ? '' : ' right' )}>
                        <iframe src={'https://player.vimeo.com/video/' + work_url} width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div class="large-6 columns video-description">
                        <h3>{work_title}</h3>
                        <p>Maintaining a visual presence – especially as a start-up – is critical to gaining awareness from potential customers. As BOSS Controls began going-to-market, they knew a key strategy was to keep marketing their name, identity and value propositions across multiple settings from the web, to meetings, to tradeshows. Working in partnership with BOSS’s business support services company, C-leveled, Skinny Tie Media produced this trade show video as an eye-catching, value-proposition piece that could be re-purposed to serve other platforms for BOSS in the future.</p>
                        <div class="vimeo-link"><a href={'https://vimeo.com/' + work_url} target="_blank">{action_button}</a></div>
                    </div>
                </div>
            )
        default:
            return (
                <div class="large-12 columns video-wrapper">
                    <div class="large-6 columns flex-video vimeo widescreen thumb">
                        <iframe src="https://player.vimeo.com/video/145694989" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div class="large-6 columns video-description">
                        <h3>BOSS Controls</h3>
                        <p>Maintaining a visual presence – especially as a start-up – is critical to gaining awareness from potential customers. As BOSS Controls began going-to-market, they knew a key strategy was to keep marketing their name, identity and value propositions across multiple settings from the web, to meetings, to tradeshows. Working in partnership with BOSS’s business support services company, C-leveled, Skinny Tie Media produced this trade show video as an eye-catching, value-proposition piece that could be re-purposed to serve other platforms for BOSS in the future.</p>
                        <div class="vimeo-link"><a href="https://vimeo.com/145694989 " target="_blank">WATCH ON VIMEO</a></div>
                    </div>
                </div>
            )
    }


}

