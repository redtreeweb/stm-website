import React, { useEffects, useState } from 'react';
import axios from 'axios';

import '../styles/components/contact-form.scss';


const ContactForm = () => {

    const [showFields, setShowFields] = useState({ 'contact-form-follow-up__phone': false, 'contact-form-follow-up__email': false });
    const [formStatus, setFormStatus] = useState('PRISTINE');

    const onFormSubmission = (e) => {
        e.preventDefault();

        const name = document.getElementById('contact-form-name').value;
        const eventType = document.getElementById('contact-form-event-type').value;
        const eventDate = document.getElementById('contact-form-event-date').value;

        const followUpEmail = document.getElementById('contact-form-follow-up__email__value').value;
        const followUpPhone = document.getElementById('contact-form-follow-up__phone__value').value;

        const followUp = !!showFields['contact-form-follow-up__phone'] ? 'phone' : 'email';

        axios.post('https://cms.skinnytiemedia.com/form-email-events.php',
            { 
                name, 
                eventType,
                eventDate,
                followUpEmail, 
                followUpPhone, 
                followUp 
            },
        ).then(res => {

            if (res.status === 200) {
                setFormStatus('SUBMITTED');
                return;
            }
            setFormStatus('ERROR');
        });
        setFormStatus('SUBMITTED');
    };


    const onFollowUpChange = (e) => {
        const { value } = e.target;

        const newState = {};

        newState[`contact-form-follow-up__email`] = false;
        newState[`contact-form-follow-up__phone`] = false;

        newState[`contact-form-follow-up__${value}`] = true;
        setShowFields(newState);
    };

    const resetFormStatus = () => {
        setFormStatus('PRISTINE');
    };


    return <>
    <h4 class="contact-form-events-h4">Tell us about your event</h4>
    <form className="contact-form contact-form-events" id="contact-form">
        <div className="contact-form_phone-number">
            Drop us a line at <a href="tel:+14125025054" target="_blank" rel="noopener noreferrer" >412.502.5054</a>
        </div>
        <div className="contact-form__body">
            <fieldset>
                <label for="contact-form-name">Nice to meet you _______</label>
                <input id="contact-form-name" type="text" placeholder="First and Last Name" />
            </fieldset>

            <fieldset>
                <label for="contact-form-event-type">What type of event?</label>
                <select name="contact-form-event-type" id="contact-form-event-type">
                    <option value="Employee Event">Employee Event</option>
                    <option value="Awards/Recognition Event">Awards/Recognition Event</option>
                    <option value="Public Event">Public Event</option>
                    <option value="Town Hall">Town Hall</option>
                    <option value="Press Conference">Press Conference</option>
                    <option value="Other">Other</option>
                </select>
            </fieldset>
            <fieldset>
                <label for="contact-form-event-date">Event Date</label>
                <input id="contact-form-event-date" type="text" placeholder="Event Date" />
            </fieldset>

            {/* <fieldset>
                <label for="contact-form-name">What can we do for you?</label>
                <textarea id="contact-form-text" placeholder="Let's Collaborate on Something!" data-test={showFields.test}></textarea>
            </fieldset> */}
            <fieldset className="contact-form-follow-up">
                <label className="section-label">How should we follow up?</label>
                <label for="contact-form-follow-up__email" onChange={onFollowUpChange}>
                    <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__email" value="email" />
                Email</label>
                <div className={`contact-form-follow-up-input ${  !!showFields['contact-form-follow-up__email'] ? 'is-visible' : null}`} >
                    <input id="contact-form-follow-up__email__value" type="text" placeholder="Email Address" />
                </div>
                <label for="contact-form-follow-up__phone">
                    <input type="radio" name="contact-form-follow-up" id="contact-form-follow-up__phone" value="phone" onChange={onFollowUpChange} />
                Phone</label>
                <div className={`contact-form-follow-up-input ${  !!showFields['contact-form-follow-up__phone'] ? 'is-visible' : null}`} >
                    <input id="contact-form-follow-up__phone__value" type="text" placeholder="Phone Number" />
                </div>
            </fieldset>

            <button
                className="fill-in-effect-orange"
                id="contact-form-submit"
                type="submit"
                onClick={onFormSubmission}
            >SUBMIT</button>
            {formStatus === 'SUBMITTED' && <div className="contact-form__modal">
                <a onClick={resetFormStatus} className="contact-form__modal__return">Return to Form</a>
                <div className="contact-form__modal__copy">
                    <p>Thank you for reaching out to us!<br />We'll get back to you shortly.</p>

                    <p>You can always drop us a line at <a href="tel:+14125025054" target="_blank">412.502.5054</a></p>
                </div>
            </div>}
            {formStatus === 'ERROR' && <div className="contact-form__modal">
                <a onClick={resetFormStatus} className="contact-form__modal__return">Return to Form</a>

                <div className="contact-form__modal__copy">
                    <p>Oops! Something went wrong, please try to submitting again, if the problem continues, please contact using email.</p><p>Or give us a call: <a href="tel:+14125025054" target="_blank">412.502.5054</a>!</p>
                </div>

            </div>}
        </div>
    </form>
    </>;
};


export default ContactForm;