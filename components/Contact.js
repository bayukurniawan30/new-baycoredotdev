import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col, Alert, Form } from 'react-bootstrap'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com'
import "../lib/FontAwesome"

export default function Contact({...pageProps}) {
    const phone   = pageProps.data.phone
    const waPhone = phone.replace("+", "")

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [validated, setValidated] = useState(false);
    const [message, setMessage]     = useState(false);
    const [button, setButton]       = useState(false);
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
            setButton(<span><FontAwesomeIcon icon={['fas', 'circle-notch']} size="sm" spin /> {pageProps.data.buttonLoadingText}</span>)

            emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, "#contact-form", process.env.EMAILJS_USER_ID)
            .then((result) => {
                setMessage(<Alert variant="success" className="mt-3">Your message has been sent. We will get back in touch with you soon!</Alert>)
                setButton(pageProps.data.buttonText)
            }, (error) => {
                setMessage(<Alert variant="danger" className="mt-3">{error}</Alert>)
                setButton(pageProps.data.buttonText)
            });

            setValidated(true);
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
                                <Form id="contact-form" className="form" method="post" noValidate validated={validated} onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form-group">
                                                <Form.Control {...register("from_name", { required: true, maxLength: 3, maxLength: 30 })}
                                                    name="from_name" 
                                                    className={errors.from_name && 'is-danger'}
                                                    type="text" 
                                                    placeholder={pageProps.data.formNamePlaceholder} 
                                                     />
                                                { errors.from_name &&
                                                    <Form.Text className="text-danger">
                                                        { errors.from_name?.type === "required" && "Name is required" }
                                                        { errors.from_name?.type === "minLength" && "Min length of name is 3 characters" }
                                                    </Form.Text>
                                                }
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group">
                                                <Form.Control {...register("from_email", { required: true, pattern: /^\S+@\S+$/i })}
                                                    name="from_email" 
                                                    className={errors.from_email && 'is-danger'}
                                                    type="email" 
                                                    placeholder={pageProps.data.formEmailPlaceholder}
                                                     />

                                                { errors.from_email &&
                                                    <Form.Text className="text-danger">
                                                        { errors.from_email?.type === "required" && "Email is required" }
                                                        { errors.from_email?.type === "pattern" && "Please use a valid email</p>" }
                                                    </Form.Text>
                                                }
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="form-group message">
                                                <Form.Control as="textarea" {...register("message", { required: true, minLength: 5 })}
                                                    name="message" 
                                                    className={errors.message && 'is-danger'}
                                                    placeholder={pageProps.data.formMessagePlaceholder} />

                                                { errors.message &&
                                                    <Form.Text className="text-danger">
                                                        { errors.message?.type === "required" && "Message is required" }
                                                        { errors.message?.type === "minLength" && "Min length of message is 5 characters" }
                                                    </Form.Text>
                                                }
                                            </div>
                                        </Col>
                                        <ReCAPTCHA
                                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
                                            onChange={onChange}
                                        />
                                        <Col>
                                            <div className="form-group button mt-3">
                                                <button type="submit" className="btn">{!button ? pageProps.data.buttonText : button}</button>
                                            </div>
                                        </Col>
                                        <Col>
                                            {message}
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}