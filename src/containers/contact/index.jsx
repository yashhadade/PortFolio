import React, { useState } from "react";
import PageHeaderContent from '../../components/pageHeaderContainer'
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import './styles.scss'

const Contact = () => {
const [result,setResult]=useState("");

const onSubmit=async(event)=>{
  event.preventDefault();
  setResult("Sending....");
  const formData=new FormData(event.target);
  formData.append("access_key","3f69dc12-d0b1-443c-ba4d-8b17a398ccbb");
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
};

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={onSubmit}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input required name="name" className="inputName" type={"text"} />
                <label htmlFor="name" className="nameLabel"> Name </label>
              </div>
              <div>
                <input required name="email" className="inputEmail" type={"email"} />
                <label htmlFor="email" className="emailLabel"> Email </label>
              </div>
              <div>
                <textarea required name="description" className="inputDescription" type={"text"} rows="5" />
                <label htmlFor="description" className="descriptionLabel"> Description </label>
              </div>
            </div>
            <button type="submit">Submit</button>
            </form>
            <span style={{color:"#ffdd40"}}>{result}</span>
          </div>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;