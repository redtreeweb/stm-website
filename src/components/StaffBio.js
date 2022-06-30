import React from 'react';

import AllLayouts from '../components/staffBlurb/AllLayouts';
import StaffRow from '../components/staffBlurb/Row';
import StaffColumn from '../components/staffBlurb/Column';

const generateBioHtml = (bio) => {
        if ( bio === '' ) {
            return '';
        }

        const supressClick = () => {
            return false;
        }

        let html = bio.map( (d, index) => {
            if ( d.row ) {
                return (
                    <div className="grid-staff-member-blurb" key={index} onClick={supressClick}>
                        <StaffRow key={index}>
                        {
                            d.row.map( (d, index) => {
                                if ( d.column ) {
                                    return (
                                        <StaffColumn key={index}>
                                        {
                                            d.column.map( (layouts) => {
                                                let layoutsArray = Object.entries(layouts);

                                                return (
                                                    <>
                                                        {
                                                            layoutsArray.map((layout, index) => {
                                                                return ( 
                                                                    <AllLayouts key={index} layoutData={layout} />
                                                                )
                                                            })
                                                        }
                                                    </>
                                                )
                                            })
                                        }
                                        </StaffColumn>
                                    )
                                }
                            })
                        }                            
                        </StaffRow>
                    </div>
                )
            }
        });

        return html;
}

const StaffBio = ( { bio } ) => {
    const html = generateBioHtml( bio );
    return html;
}

export default StaffBio;