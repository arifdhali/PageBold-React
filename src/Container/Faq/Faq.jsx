import React from "react";
import "./Faq.css";
const Faq = () => {
  return (
    <div className="container padding_t padding_b">
      <h2 className="text-center">Frequently Asked Questions</h2>

      <div className="faq_content padding_t">
        <div className="faq_item">
          <div className="faq-header">
            <h4>Are there any recurring fees?</h4>
          </div>
          <div className="faq-content">
            <p>
              No. This one-time purchase offers you lifetime updates at no extra
              cost. You can choose to purchase a support extension after the
              initial six months of support has expired – however, this is
              entirely optional. There are no recurring fees to continue using
              our themes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
