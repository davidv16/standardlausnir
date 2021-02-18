import React from 'react';
import ContactForm from './ContactForm'

export default function ContactArea(props) {
  const { t } = props;
  return (
    <div id="contact" className="fix">
      <div className="rn-contact-area ptb--120 bg_color--5">
        <ContactForm t={t} contactImages="/assets/images/about/DSC_1128-Edit.png" />
      </div>
    </div>
  )
}