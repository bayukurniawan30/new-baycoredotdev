import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Alert, Form } from 'react-bootstrap'
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"
import "../lib/FontAwesome"

export default function Contact({...pageProps}) {
    const phone   = pageProps.data.phone
    const waPhone = phone.replace("+", "")

    const { register, handleSubmit, errors } = useForm();

    const [message, setMessage] = useState(false);
    const [button, setButton]   = useState(false);
    const [recaptchaValue, setRecaptchaValue] = useState(false);

    function onChange(value) {
        setRecaptchaValue(value)
    }

    const onSubmit = formData => {
        if (!recaptchaValue) {
            setMessage(<Alert variant="danger" className="mt-3">Please check the reCAPTCHA</Alert>)
        }
        else {
            console.log(recaptchaValue)
            setButton(pageProps.data.buttonLoadingText)

            emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, "#contact-form", process.env.EMAILJS_USER_ID)
            .then((result) => {
                setMessage(<article className="message is-success mt-5"><div className="message-body">Your message has been sent. We will get back in touch with you soon!</div></article>)
                setButton("SEND MESSAGE")
            }, (error) => {
                setMessage(<article className="message is-danger mt-5"><div className="message-body">{error}</div></article>)
                setButton("SEND MESSAGE")
            });
        }
    }

    return (
        <section id="contact-us" className="contact-us section">
            <Container>
                <div className="contact-head" data-aos="fade-up" data-aos-delay="200">
                    <Row>
                        <Col lg={5}>
                            <div className="single-head">
                                <div className="contant-inner-title">
                                    <h4>{pageProps.data.title}</h4>
                                    <p>{pageProps.data.description}</p>
                                </div>
                                <div className="single-info">
                                    <FontAwesomeIcon icon={['fab', 'whatsapp']} size="sm" />
                                    <ul>
                                        <li><a href={`https://wa.me/${waPhone}`}>{pageProps.data.phone}</a></li>
                                    </ul>
                                </div>
                                <div className="single-info">
                                    <FontAwesomeIcon icon={['far', 'envelope']} size="sm" />
                                    <ul>
                                        <li><a href={`mailto:${pageProps.data.email}`}>{pageProps.data.email}</a></li>
                                    </ul>
                                </div>
                                <div className="contact-social">
                                    <h5>{pageProps.data.socialMediaTitle}</h5>
                                    <ul>
                                        {pageProps.sosMed.socialMedia.map((sosmed) => (
                                        <li key={sosmed.name.value.replace(/\s/g, '_')}>
                                            <a href={sosmed.link.value.url}>
                                                <span className="icon-1"><FontAwesomeIcon icon={[sosmed.font_awesome_type.value, sosmed.font_awesome_icon.value]} size="sm" /></span>
                                                <span className="icon-2"><FontAwesomeIcon icon={[sosmed.font_awesome_type.value, sosmed.font_awesome_icon.value]} size="sm" /></span>
                                            </a>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="form-main">
                                <Form className="form" method="post" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <Form.Control ref={register({required: true, minLength: 3})}
                                                    name="name" 
                                                    className={errors.message && 'is-danger'}
                                                    type="text" 
                                                    placeholder={pageProps.data.formNamePlaceholder} 
                                                    required="required" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div className="form-group">
                                                <Form.Control ref={register({required: true, pattern: /^\S+@\S+$/i})}
                                                    name="email" 
                                                    className={errors.message && 'is-danger'}
                                                    type="email" 
                                                    placeholder={pageProps.data.formEmailPlaceholder}
                                                    required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group message">
                                                <Form.Control as="textarea" ref={register({required: true, minLength: 5})}
                                                    name="message" 
                                                    className={errors.message && 'is-danger'}
                                                    placeholder={pageProps.data.formMessagePlaceholder} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group button">
                                                <button type="submit" className="btn ">{pageProps.data.buttonText}</button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}