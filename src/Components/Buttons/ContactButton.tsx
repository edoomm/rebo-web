import React from "react";
import { Button } from "react-bootstrap"; // Importa Button de react-bootstrap
import './ContactButton.css';

interface ContactButtonprops {
  label: string;
  ContactLink: string;
  IconClass: string;
}

const ContactButton: React.FC<ContactButtonprops> = ({ label, ContactLink, IconClass }) => {
  return (
    <Button variant="link" className="ContactButton p-0">
      <a className="GeneralLink" href={ContactLink} target="_blank" rel="noreferrer">
        <div className="ButtonInformation d-flex align-items-center">
          <i className={`${IconClass} me-2`} style={{color:'white'}}></i>
          <p className="ParagraphB m-0">{label}</p>
        </div>
      </a>
    </Button>
  );
};

export default ContactButton;
