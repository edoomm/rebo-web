import React from "react";
import { Button } from 'react-bootstrap'; // Importamos Button de React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './BodyTop1Button.css';

interface BodyTop1Buttonprops {
    label: string;
    ContactLink: string;
    ButtonColor: string;
    TextColor: string;
}

const BodyTop1Button: React.FC<BodyTop1Buttonprops> = ({ label, ContactLink, ButtonColor, TextColor }) => {
    return (
        <Button href={ContactLink}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration:'none', backgroundColor: ButtonColor, color: TextColor, maxWidth: '100%', whiteSpace: 'normal', wordWrap: 'break-word', fontSize: 'calc(0.75rem + 0.5vw)' }}
                className="BodyB  text-center">
            {label}
        </Button>
    );
};

export default BodyTop1Button;
