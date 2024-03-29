import React, { useState } from 'react';
import axios from 'axios';
import { includes } from 'lodash';

import addToMailchimp from 'gatsby-plugin-mailchimp'


import '../styles/components/form-subscribe.scss';

const FormSubscribe = () => {

    const [formStatus, setFormStatus] = useState('PRISTINE');

    const onFormSubmission = (e) => {
        e.preventDefault();

        const email = document.getElementById('form-subscribe__email').value;
        const honeyPot = document.getElementById('form-subscribe__phone').value;

        if (honeyPot !== '') {
            console.log('THANK YOU!')
            return
        }

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
                if (data.result === 'success') {
                    setFormStatus('SUCCESS');
                }
                else if (includes(data.msg, 'is already subscribed')) {
                    setFormStatus('FAIL_ALREADY_SUBSCRIBED');
                }
                else {
                    setFormStatus('FAIL');
                }
            })
            .catch(() => {
                setFormStatus('FAIL');
            })
    }

    if (formStatus === 'FAIL') {
        window.setTimeout(() => setFormStatus('RESET'), 400);
    }



    return <div className="form-subscribe__wrapper">
        <form
            className={`form-subscribe ${formStatus === 'FAIL' ? 'failed' : ''}`}
            id="form-subscribe">
            {formStatus !== 'SUCCESS' ? <><div className="form-subscribe__copy">
                {
                    formStatus === 'FAIL' || formStatus === 'RESET' ?
                        'Something went wrong. Please submit a valid email.' :
                        formStatus === 'FAIL_ALREADY_SUBSCRIBED' ? 
                        'This email address is already subscribed!':
                        'Get our latest blog posts straight to your inbox!'
                }
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
                    <div className="form-subscribe__button-wrapper">
                        <button
                            id="contact-form-submit"
                            className="fill-in-effect-orange"
                            type="submit"
                            onClick={onFormSubmission}
                        >SUBSCRIBE</button>
                    </div>
                </div></> :
                <>
                    <div className="form-subscribe__copy">
                        Thank you for subscribing!
            </div>
                </>
            }
        </form>
    </div>

};

export default FormSubscribe;

