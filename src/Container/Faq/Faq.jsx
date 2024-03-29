import React, { useState } from "react";
import "./Faq.css";
const Faq = () => {
  const [openFaq, setOpenFaq] = useState({});
  const handelFaqs = (id) => {
    setOpenFaq((prevId) => ({
      ...prevId,
      [id]: !prevId[id],
    }));
  };

  return (
    <div className="container padding_t padding_b">
      <h2 className="text-center">Frequently Asked Questions</h2>

      <div className="faq_container padding_t">
        <div className="faq_item" onClick={() => handelFaqs("faq1")}>
          <div className="faq-header">
            <h4>Are there any recurring fees?</h4>{" "}
            <i
              className={`fa-solid fa-${openFaq["faq1"] ? "minus" : "plus"}`}
            ></i>
          </div>
          {openFaq["faq1"] && (
            <div className="faq-content">
              <p>
                No. This one-time purchase offers you lifetime updates at no
                extra cost. You can choose to purchase a support extension after
                the initial six months of support has expired – however, this is
                entirely optional. There are no recurring fees to continue using
                our themes.
              </p>
            </div>
          )}
        </div>
        <div className="faq_item" onClick={() => handelFaqs("faq2")}>
          <div className="faq-header">
            <h4>How many plugins do I need to install to use a theme?</h4>{" "}
            <i
              className={`fa-solid fa-${openFaq["faq2"] ? "minus" : "plus"}`}
            ></i>
          </div>
          {openFaq["faq2"] && (
            <div className="faq-content">
              <p>
                Our themes only need three plugins: UiCore Framework (theme core
                functionalities), Elementor (free page builder), and Element
                Pack Pro (premium plugin, included for free).
              </p>
            </div>
          )}
        </div>
        <div className="faq_item" onClick={() => handelFaqs("faq3")}>
          <div className="faq-header">
            <h4>Do I need to register any bundled plugin?</h4>{" "}
            <i
              className={`fa-solid fa-${openFaq["faq3"] ? "minus" : "plus"}`}
            ></i>
          </div>
          {openFaq["faq3"] && (
            <div className="faq-content">
              <p>
                No. All plugins are fully-featured and included for free with
                your purchase.
              </p>
            </div>
          )}
        </div>
        <div className="faq_item" onClick={() => handelFaqs("faq4")}>
          <div className="faq-header">
            <h4>How can I get support after purchase?</h4>{" "}
            <i
              className={`fa-solid fa-${openFaq["faq4"] ? "minus" : "plus"}`}
            ></i>
          </div>
          {openFaq["faq4"] && (
            <div className="faq-content">
              <p>
                We have a dedicated support forum with a team of agents to
                assist you. We also recommend checking through the documentation
                to find answers to common questions.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
