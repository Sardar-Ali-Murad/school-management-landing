import React from "react";
import Dialog from "@mui/material/Dialog";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

export default function Contact({ open, setOpen }) {
  const form = React.useRef();

  let [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    message: "",
    email: "",
  });

  const handleClose = () => {
    setOpen(false);
    setData({
      firstName: "",
      lastName: "",
      message: "",
      email: "",
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!data?.firstName || !data?.lastName || !data?.message || !data?.email) {
      toast.error("Please provide all the fields!", {
        position: toast.POSITION.TOP_LEFT,
      });
    }

    if (
      data?.firstName !== "" &&
      data?.lastName !== "" &&
      data?.message !== "" &&
      data?.email !== ""
    ) {
      emailjs
        .sendForm(
          "service_dnq3a7r",
          "template_55loyxb",
          form.current,
          "0Q_Cw_77BwGKK2tWn"
        )
        .then(
          (result) => {
            console.log(result.text);
            dispatch(closeContactForm());
            toast.success(
              "Thank you for expressing interest in our product! We’re thrilled to provide you with a personalised demo. Our team will be in touch shortly to schedule a demonstration tailored to your needs. Stay tuned",
              {
                position: toast.POSITION.TOP_LEFT,
              }
            );
            setData({
              firstName: "",
              lastName: "",
              message: "",
              email: "",
            });
          },
          (error) => {
            console.log(error.text);
            toast.error("Something Went Wraong While Sending the Email !", {
              position: toast.POSITION.TOP_LEFT,
            });
          }
        );
    }
  };

  function handleChange(e) {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="dialogBox"
      >
        <div style={{ background: "#F4FFFB" }}>
          <h1 id="alert-dialog-title" className="dialogBoxHeader">
            Contact Us
          </h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className="dialogBoxTextFieldsGrid">
              <div className="dialogBoxTextField">
                <p>First Name</p>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  className="dialogBoxInput"
                  value={data?.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="dialogBoxTextField">
                <p>Last Name</p>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="dialogBoxInput"
                  value={data?.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="dialogBoxTextField">
                <p>Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                  className="dialogBoxInput"
                  value={data?.email}
                  onChange={handleChange}
                />
              </div>
              <div className="dialogBoxTextField">
                <p>Number</p>
                <input
                  type="text"
                  name="message"
                  placeholder="123 456 7890"
                  className="dialogBoxInput"
                  value={data?.message}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="contactBtn">
              <button type="submit" className="homeBtnCommon default-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
