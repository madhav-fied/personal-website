import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const MY_GITHUB_URL = `https://github.com/madhav-fied`;

const openResource = () => {
    window.open(MY_GITHUB_URL, '_blank', 'noopener,noreferrer');
}

const GithubIcon = () => <FontAwesomeIcon
    icon={faGithub}
    size='2xl'
    onClick={openResource}
    style={{
        cursor: 'pointer',
    }}
/>

export default GithubIcon;
