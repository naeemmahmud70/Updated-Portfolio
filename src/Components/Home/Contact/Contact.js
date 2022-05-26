import React, { useEffect } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z7x7t5r",
        "template_3c6fuec",
        e.target,
        "user_edB0yp4J6oB3DhbVnw1d4"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal("Message Sent!", "Wait for the reply. Thank you!", "success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="row" id="contact">
      <div className="form-bg">
        <h2 className="text-color fw-bold text-center mt-4">Stay Connect With ME</h2>
        <form
          data-aos="fade-up"
          className="d-flex justify-content-center"
          onSubmit={sendEmail}
        >
          <div className="col-md-6">
            <div className=" form-group pt-2 ">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name"
              />
            </div>
            <div className="  form-group pt-2 ">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="email"
              />
            </div>
            <div className="  form-group pt-2 ">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="subject"
              />
            </div>
            <div className=" form-group pt-2 text-center">
              <textarea
                className="form-control"
                name="message"
                id=""
                cols="24"
                rows="8"
                placeholder="Write message"
              ></textarea>
              <br />
              <input
                id="send-btn"
                hidden="hidden"
                type="submit"
                value="Send Message"
                className="card-btn fw-bold mb-2"
              />
              <label htmlFor="send-btn" className="card-btn fw-bold">
                {" "}
                Send Message{" "}
                <FontAwesomeIcon
                  className="font-awesome"
                  icon={faPaperPlane}
                />{" "}
              </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
