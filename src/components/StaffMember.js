import React, { useState } from 'react';

import StaffBio from '../components/StaffBio';

import Img from 'gatsby-image';

const StaffMember = ( { staffData, activeStaff, toggleFunction, index } ) => {

    const bio = ( staffData.staff_blurb_flexible_page ) ? staffData.staff_blurb_flexible_page : '';

    const [margin, setMargin] = useState(0);

    const setMarginFromBioHeight = ( data ) => {
        setMargin( data );
    };

    const isActiveStaff = ( activeStaff === index );

    const staffImage = staffData.staff_image.localFile.childImageSharp.fluid;

    const staffImageActive = staffData.staff_image_active.localFile.childImageSharp.fluid;

    return (
        <>
        <div 
            className={(isActiveStaff) ? 'active grid-staff-member' : 'grid-staff-member'} 
            onClick={toggleFunction} 
            key={index}
            style={ (isActiveStaff) ? { marginBottom: margin } : {} }
        >
            <div className="grid-staff-member-modal">
                <Img className="staff-image" fluid={staffImage} loading="eager" />
                <Img className="staff-image-active" fluid={staffImageActive} loading="eager" />
                <h5 className={'grid-staff-member-name'}>{staffData.staff_name}</h5>
                <div className="grid-staff-member-title">{staffData.staff_title}</div>
            </div>
            { ( isActiveStaff ) ? <StaffBio bio={ bio } parentCallback={ setMarginFromBioHeight } /> : null }
        </div>
        </>
    );

}

export default StaffMember;