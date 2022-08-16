import axios from "axios";
import { useState, useEffect } from "react";

const MessageClient = axios.create({
  baseURL: "https://vast-reef-09589.herokuapp.com/api/message",
});

export const Contact = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sentMessage, setSentMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        let response = await MessageClient.get("?_limit=5");
        setMessages(response.data);
        console.log(messages);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessage();
  }, []);

  const addMessage = async () => {
    try {
      let response = await MessageClient.post("", {
        name: name,
        email: email,
        subject: subject,
        message: message,
      });

      setMessages([response.data]);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(messages)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("summited!");
    console.log(name);
    await addMessage();
    setSentMessage("Your message has been sent. Thank you!")
    // const object = {
    //   name: name,
    //   email: email,
    //   subject: subject,
    //   message: message,
    // };

    // axios
    //   .post(MessageClient, object)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // setName("");
    // setEmail("");
    // setSubject("");
    // setMessage("");
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>
        </div>

        {/* <div data-aos="fade-up">
        <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowfullscreen></iframe>
      </div> */}

        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Läntinen Rantakatu 38, 20100 Turku</p>
                </div>

                <div className="open-hours">
                  <i className="bi bi-clock"></i>
                  <h4>Open Hours:</h4>
                  <p>
                    Monday-Thursday:13.00 - 22.00 PM <br />
                    Friday: 13.00 - 02.00 (kitchen: 13.00 -21.00) <br />
                    Saturday: 12.00 - 02.00 (kitchen: 13.00 -21.00) <br />
                    Sunday: 12.00 - 22.00 (kitchen: 12.00 -21.00)
                  </p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>info@chibichill.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+358 45 8070840</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form onSubmit={handleSubmit} className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></input>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
                <div className="text-center">
                      <br />
                    {sentMessage}
                </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
