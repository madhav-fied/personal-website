
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const MY_LINKEDIN_URL = `https://in.linkedin.com/in/narasiman-vasudevan-78b0b41a5`;

const openResource = () => {
    window.open(MY_LINKEDIN_URL, '_blank', 'noopener,noreferrer');
}

const LinkedinIcon = () => <FontAwesomeIcon 
    icon={faLinkedin} 
    size='2xl' 
    onClick={openResource}
    style={{
        cursor: 'pointer',
    }}
    />

export default LinkedinIcon;
