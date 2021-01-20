import React from 'react';

import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {

    const recaptchaRef = React.createRef();

    

    const handleContact = async ( e ) => {
        e.preventDefault();

        await recaptchaRef.current.executeAsync();

        await emailjs.sendForm('service_ism95de', 'template_i3mc6jp', e.target, 'user_8RS7C6qwyfsq4ueFkKYMe')
        .then((result) => {
            Swal.fire(
                'Perfecto!',
                'Se envió el correo'
            );
            e.target.reset();
        }, (error) => {
            Swal.fire("Error", "No se pudo enviar el mensaje", "error");
        });

    };


    return (
        <div>
            <section className="showcase">
                <div className="center-content">
                    <div className="contact">
                        <div className="contact-form card">
                            <h3>Contacto</h3>
                            <form onSubmit={ handleContact }>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Escriba su nombre"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Escriba su correo electrónico..."
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Escriba su telefono... (opcional)" 
                                        name="phone"
                                    />
                                </div>

                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        placeholder="Escriba su mensaje..." 
                                        name="message"
                                        required
                                    />
                                </div>

                                <ReCAPTCHA
                                    sitekey="6LeHmR0aAAAAAKuVNqqCLWL5f2HKFmPpCPWRXsTb" 
                                    size="invisible" 
                                    ref={recaptchaRef}                               
                                />

                                <div>
                                    <input 
                                        type="submit" 
                                        className="btnSubmit" 
                                        value="Enviar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
