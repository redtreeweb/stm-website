import React, { useState } from 'react';
import axios from 'axios';

import addToMailchimp from 'gatsby-plugin-mailchimp'


import '../styles/components/form-subscribe.scss';

const FormSubscribe = () => {

    const [formStatus, setFormStatus] = useState('PRISTINE');

    const onFormSubmission = (e) => {
        e.preventDefault();

        const email = document.getElementById('form-subscribe__email').value;

        // axios.post('https://cms.skinnytiemedia.com/wp-json/newsletter/v1/subscribe',
        //     {
        //         "email": email, 
        //         "name": name
        //     }
        // ).then(res => {

        //     if (res.status === 200) {
        //         setFormStatus('SUBMITTED');
        //         alert('SUBMITTED')
        //         return;
        //     }
        //     setFormStatus('ERROR')
        // });

        addToMailchimp(email, {}) // listFields are optional if you are only capturing the email address.
            .then(data => {
                // I recommend setting data to React state
                // but you can do whatever you want (including ignoring this `then()` altogether)
                console.log(data)
                if (data.result === 'success') {
                    setFormStatus('SUCCESS');
                }
            })
            .catch(() => {
                // unnecessary because Mailchimp only ever
                // returns a 200 status code
                // see below for how to handle errors
            })

    }


    return <form className="form-subscribe" id="form-subscribe">
        {formStatus !== 'SUCCESS' ? <><div className="form-subscribe__copy">
            Get our latest blog posts straight to your inbox!
        </div>
        <div className="form-subscribe__fields">
            {/* <div className="form-subscribe__field__email"> */}
                <label>Email: </label>
                <input
                    id="form-subscribe__email"
                    type="email"
                    required
                />
            {/* </div> */}
            {/* HONEY POT */}
            <div
                style={{
                    position: 'absolute',
                    left: '-5000px'
                }}
                aria-hidden="true">
                <input
                    id="form-subscribe__phone"
                    type="text"
                    name="b_9000c9c71a9eb1030fd6c4320_191d4d44cb"
                    tabindex="-1"
                    value=""
                />
            </div>
            <button
                id="contact-form-submit"
                className="fill-in-effect-orange"
                type="submit"
                onClick={onFormSubmission}
            >SUBSCRIBE</button>
        </div></> :
        <>
            <div className="form-subscribe__copy">
                Thank you for subscribing!
            </div>
        </>
    }
    </form>

};

export default FormSubscribe;

