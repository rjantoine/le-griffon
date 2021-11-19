import React, {useState} from 'react';
import Theme from "../templates/Theme";
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import emailjs from "emailjs-com"

const ContactPage = () => {
    const [alerts, setAlerts] = useState()

    const onSubmit = (e) => {
        e.preventDefault();
        document.getElementById('form-submit').disabled = true;
        setAlerts('')

        const formData = new FormData(e.currentTarget)

        if(formData.get('last')) {
            setAlerts(<Alert className="mx-5" variant="danger">Une erreur est s'est produite, SVP essayer de nouveau.</Alert>)
            document.getElementById('alerts').scrollIntoView()
            document.getElementById('form-submit').disabled = false;
        }
        emailjs.sendForm(
            "service_q3n14nd",
            "template_m2zpyao",
            e.target,
            "user_JgvHjVyVgoAVcGcTcWHQw"
        )
        .then(
            result => {
                e.target.reset()
                setAlerts(<Alert className="mx-5" variant="success">Merci, votre message a été envoyé.</Alert>)
                document.getElementById('alerts').scrollIntoView()
            },
            error => {
                document.getElementById('form-submit').disabled = false;
                setAlerts(<Alert className="mx-5" variant="danger">Une erreur est souvenue.</Alert>)
                document.getElementById('alerts').scrollIntoView()
            }
        )
    }

    return <Theme title="Nous joindre" pathname='/contact' description="Remplissez le formulaire suivant pour communiquer avec Le Griffon">
        <Container>
            <Row>
                <Col className="my-5">
                    <h1 className="mx-5">Nous joindre</h1>
                    <div id="alerts">{ alerts }</div>
                    <Form className="mx-5" onSubmit={onSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Votre nom</Form.Label>
                            <Form.Control
                                name="from_name"
                                type="text"
                                required
                                onInput={(e)=>{e.currentTarget.setCustomValidity('')}}
                                onInvalid={(e)=>{e.currentTarget.setCustomValidity('SVP inclure votre nom.')}}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Votre courriel</Form.Label>
                            <Form.Control
                                name="reply_to"
                                type="email"
                                required
                                onInput={(e)=>{e.currentTarget.setCustomValidity('')}}
                                onInvalid={(e)=>{e.currentTarget.setCustomValidity('SVP inclure votre courriel.')}}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Sujet</Form.Label>
                            <Form.Control
                                name="subject"
                                type="text"
                                required
                                onInput={(e)=>{e.currentTarget.setCustomValidity('')}}
                                onInvalid={(e)=>{e.currentTarget.setCustomValidity('SVP inclure le sujet')}}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Votre message</Form.Label>
                            <Form.Control
                                name="message"
                                as="textarea"
                                required
                                rows={5}
                                onInput={(e)=>{e.currentTarget.setCustomValidity('')}}
                                onInvalid={(e)=>{e.currentTarget.setCustomValidity('N‘oubliez pas d‘inclure votre message.')}}
                            />
                        </Form.Group>

                        <Form.Group className="form-auth">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" autoComplete="off" name="last"></Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" id="form-submit" className="w-100 mt-5">
                            Soumettre
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </Theme>
}

export default ContactPage