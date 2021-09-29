import React from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import "./contactMe.css";
import Card from "react-bootstrap/Card";
import WhatsApp from "../../img/whatsapp.png";

function ContactMe() {
  return (
    <div clasName="formMain" id="contact">
      <div className="hitMeUpSegment">
        <Card>
          <Card.Body>
            <Card.Title>Hit me up directly </Card.Title>
            <Card.Text className="projectCardText">
              <a
                href="https://wa.me/+4917670568851?text=Hello,%20I'm%20writting%20you%20from%20your%20website.%20I'm%20interested%20in%20..."
                target="_blank"
              >
                <img src={WhatsApp} className="whatsAppIcon" />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <Card className="contactCard">
        <div class="contactTitle">
          <h2 className="contactTitle">Contact Me</h2>
        </div>

        <Form
          className="formContent"
          target="_blank"
          action="https://formsubmit.co/0bce47247151822ce9e9df09a6952496"
          method="POST"
        >
          <div className="emailAndPass">
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              className="emailAddress"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email Address"
                name="email"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              className="password"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                class="form-control"
                placeholder="Full Name"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicMessage"
              className="message"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                name="message"
                class="form-control"
                placeholder="Message"
                required
              />
            </Form.Group>

            <div className="contactBtn">
              <Button
                variant="dark"
                type="submit"
                className="contactButton"
                target="_blank"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default ContactMe;
