import { FunctionalComponent, h } from "preact";
import * as slackdown from "slackdown";
import Pin from "../../models/Pin";
import * as style from './style.css';

interface CardProps {
    pin: Pin
    submitVote: () => void
}

const Card: FunctionalComponent<CardProps> = ({pin, submitVote, ...props}) => (
    <div className={style.card}>
        {pin.file !== '' ? <img src={pin.file} class={style.image}/> : null}
        {/* yes, this is bad practice. however, it allows us to display slack messages as intended, so... maybe it's fine? */}
        {pin.text !== '' ? <div class={style.message}><span dangerouslySetInnerHTML={{__html: slackdown.parse('&ldquo;' + pin.text)}} /></div> : null }
        <div class={style.voteButton} onClick={submitVote}>VOTE</div>
    </div>
)

export default Card