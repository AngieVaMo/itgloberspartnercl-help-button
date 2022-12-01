import React from "react";
import PropTypes from "prop-types";

type Props = {
    logo: string
    phone: string
    message: string
}

const WhatsappButton = ({logo, phone, message}: Props) => {
  const formattedMessage = message.replace(/ /g, "%20")
  return <>
  <div className="fixed bottom-2 right-2 flex flexColumn">
    <a 
    href={`https://wa.me/${phone}?text=${formattedMessage}`}
    target= "_blank"
    rel= "noreferrer noopener">
        <img 
        src={logo}
        alt= "logo de Whatsapp"
        />
    </a>
  </div>
  </>
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
}

WhatsappButton.defaultProps = {
    logo: "mi-logo.png",
    phone: "0123456789",
    message: "Hola Decathlon, necesito ayuda con..."
}

WhatsappButton.schema = {
    title: "Botón de Whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de Whatsapp",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Télefono",
            description: "Agrega por favor el numero de teléfono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "Agrega por favor un mensaje para el usuario",
            type: "string"
        },

    }
}

export default WhatsappButton;