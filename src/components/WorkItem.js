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
        work_badges,
        work_thumbnail,
        action_button,
        index
    } = props;

    let work_badges_img = null;

    if (work_badges) {

        work_badges_img = work_badges.map(d => {
        
            switch (d) {
                case 'Telly_Bronze':
                    return <div key={d} class="telly bronze"><img src={imgTellyBronze} /></div>;
                case 'Telly_Silver':
                    return <div class="telly silver"><img src={imgTellySilver} /></div>;
                default:
                    return null;
            }
        })
    }


    switch (work_type) {

        case 'featured':
            return (
                <div class="row">
                    {/* need way more stuff here */}
                    <div class="large-12 columns flex-video vimeo widescreen">
                        <iframe src={`https://player.vimeo.com/video/${work_url}?color=d94c00&title=0&byline=0&portrait=0`} width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>

                    <div class="large-1 columns featured-tag">
                        <img src={imgFeature} />
                    </div>

                    <div class="large-11 columns featured-video-description">
                        <h3>{work_title}</h3>
                        <p>{work_description}</p>
                        <div class="vimeo-link"><a href={'https://vimeo.com/' + work_url} target="_blank">{action_button}</a></div>
                        {work_badges_img}
                    </div>
                </div>
            );
        case 'video':
            return (
                <div class={'large-12 columns video-wrapper' + (index % 2 === 0 ? '' : ' right')}>
                    <div class={'large-6 columns flex-video vimeo widescreen thumb' + (index % 2 === 0 ? '' : ' right')}>
                        <iframe src={'https://player.vimeo.com/video/' + work_url} width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div class="large-6 columns video-description">
                        <h3>{work_title}</h3>
                        <p>{work_description}</p>
                        <div class="vimeo-link"><a href={'https://vimeo.com/' + work_url} target="_blank">{action_button}</a></div>
                        {work_badges_img}
                    </div>
                </div>
            )
        case 'photo':
            return (
                <div class={'large-12 columns video-wrapper' + (index % 2 === 0 ? '' : ' right')}>
                    <div class={'large-6 columns flex-video vimeo widescreen thumb'}>
                        <a href="https://www.flickr.com/photos/130258915@N06/sets/72157650997362449/" target="_blank"><img src={work_thumbnail.source_url} alt="crossroads-gallery" /></a>
                    </div>
                    <div class="large-6 columns video-description">
                        <h3>{work_title}</h3>
                        <p>{work_description}</p>
                        <div class="vimeo-link"><a href="https://www.flickr.com/photos/130258915@N06/sets/72157650997362449/" target="_blank">VIEW ON FLICKR</a></div>
                        {work_badges_img}
                    </div>

                </div>
            )
        default:
            return (
                <div class={'large-12 columns video-wrapper' + (index % 2 === 0 ? '' : ' right')}>
                    <div class="large-6 columns flex-video vimeo widescreen thumb">
                        <iframe src="https://player.vimeo.com/video/145694989" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                    <div class="large-6 columns video-description">
                        <h3>{work_title}</h3>
                        <p>{work_description}</p>
                        <div class="vimeo-link"><a href="https://vimeo.com/145694989 " target="_blank">WATCH ON VIMEO</a></div>
                        {work_badges_img}
                    </div>
                </div>
            )
    }


}

