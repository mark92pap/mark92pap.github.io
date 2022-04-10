
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub, faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './icons.css'

export const Github = <FontAwesomeIcon 
    icon={faGithub} 
    size="2x"
/>
export const Facebook = <FontAwesomeIcon 
    icon={faFacebook} 
    size="2x"
/>
export const Instagram = <FontAwesomeIcon 
    icon={faInstagram} 
    size="2x"
/>
export const Twitter = <FontAwesomeIcon 
    icon={faTwitter} 
    size="2x"
/>

export const Spinner = <FontAwesomeIcon
    icon = {faSpinner}
    size="2x"
    className="spinner"
/>