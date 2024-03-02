import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MY_MAIL_ID = `mailto:madhavcv2116@gmail.com`;

const openResource = () => {
    window.open(MY_MAIL_ID, '_blank', 'noopener,noreferrer');
}

const MailIcon = () => <FontAwesomeIcon 
    icon={faEnvelope} 
    size='2xl'
    onClick={openResource}
    style={{
        cursor: 'pointer',
    }}
    />

export default MailIcon;
