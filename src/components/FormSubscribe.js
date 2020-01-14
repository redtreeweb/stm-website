import React from 'react';


const FormSubscribe = () => {


    const onFormSubmission = (e) => {
        e.preventDefault();

        axios.post('https://cms.skinnytiemedia.com/?na=s',
            { name, contactFormText, followUpEmail, followUpPhone, followUp },
        ).then(res => {

            if (res.status === 200) {
                setFormStatus('SUBMITTED');
                return;
            }
            setFormStatus('ERROR')
        });
    }


    return <form className="form__subscribe" id="form__subscribe">
        <input type="hidden" name="nlang" value="" />
        <div class="tnp-field tnp-field-firstname"><label>First name or full name</label><input class="tnp-firstname" type="text" name="nn" /></div>
        <div class="tnp-field tnp-field-email"><label>Email</label><input class="tnp-email" type="email" name="ne" required /></div>
        <div class="tnp-field tnp-field-button"><input class="tnp-submit" type="submit" value="Subscribe" /></div>
        <button
        className="fill-in-effect-orange"
        id="contact-form-submit"
        type="submit"
        onClick={onFormSubmission}
    >SUBMIT</button>
    </form>

};

export default FormSubscribe;

