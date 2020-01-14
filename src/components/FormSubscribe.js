import React, {useState} from 'react';
import axios from 'axios';


const FormSubscribe = () => {

    const [formStatus, setFormStatus] = useState('PRISTINE');

    const onFormSubmission = (e) => {
        e.preventDefault();

        axios.post('https://cms.skinnytiemedia.com/?na=s',
            {
                nn: 'Nelly', 
                ne: 'sjjd199+@gmail.com'
            },
        ).then(res => {

            if (res.status === 200) {
                setFormStatus('SUBMITTED');
                alert('SUBMITTED')
                return;
            }
            setFormStatus('ERROR')
        });
    }


    return <form className="form__subscribe" id="form__subscribe">
        <input type="hidden" name="nlang" value="" />
        <div className="tnp-field tnp-field-firstname"><label>First name or full name</label><input className="tnp-firstname" type="text" name="nn" /></div>
        <div className="tnp-field tnp-field-email"><label>Email</label><input className="tnp-email" type="email" name="ne" required /></div>
        <button
        className="fill-in-effect-orange"
        id="contact-form-submit"
        type="submit"
        onClick={onFormSubmission}
    >SUBMIT</button>
    </form>

};

export default FormSubscribe;

