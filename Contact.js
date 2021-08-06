import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();


    // EmailJS
    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_Ti8bVWvNguH73hIZXl2FI";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
            )
            r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.sendForm(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form was sent successfully! I will be in touch soon.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

    return (
        <div className="contacts">
            <div class="text-center">
                <h1>Contact Me</h1>
                <p>Fill out the form below and I will get back with you as soon as possible.</p>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        { /* Name Input */ }
                        <div className="text-center">
                        <input
                        type="text"
                            className="form-control"
                            placeholder="Name"
                            name="name"
                            ref={
                                register({
                                    required: "Please enter your name.",
                                    maxLength: {
                                        value: 20,
                                        message: "Please enter a name with fewer than 20 characters."
                                    }
                                })
                            }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            { errors.name && errors.name.message }
                        </span>
                        { /* Phone Input */ }
                        <div className="text-center">
                        <input
                        type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            ref={
                                register({
                                    required: "Please enter your phone number.",
                                })
                            }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            { errors.phone && errors.phone.message }
                        </span>
                        { /* Email Input */ }
                        <div className="text-center">
                        <input
                        type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            ref={
                                register({
                                    required: "Please provide a valid email address.",
                                    pattern: {
                                        value: /^[A-Z0-9.?%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                    }
                                })
                            }
                        />
                        <div className="line"></div>
                        </div>
                        { /* Subject Input */ }
                        <div className="text-center">
                        <input
                        type="text"
                            className="form-control"
                            placeholder="Subject"
                            name="subject"
                        />
                        <div className="line"></div>
                        </div>
                    </div>

                    <div className="col-md-6 col-xs-12">
                        { /* Description */ }
                        <div className="text-center">
                        <textarea
                        type="text"
                            className="form-control"
                            placeholder="Leave any feedback here."
                            name="description"
                        ></textarea>
                        <div className="line"></div>
                        </div>
                        <button className="btn-main-offer contact-btn" type="submit">Contact Me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;