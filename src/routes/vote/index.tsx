import { Component, h } from "preact";
import * as slackdown from "slackdown";
import Pin from "../../models/Pin";
import * as style from "./style.css";

interface Props {
}

interface State {
    currentPairing: [Pin, Pin]
}
export default class Vote extends Component<Props, State> {
    private API_HOST = 'connor-dot-fun-slack-off.herokuapp.com'

    // gets called when this route is navigated to
    public async componentDidMount() {
        const res = await fetch(`//${this.API_HOST}/new_pairing`)
        const items = JSON.parse(JSON.parse(await res.text()))
        this.setState(() => ({currentPairing: items as [Pin, Pin]}))
    }

    // gets called just before navigating away from the route
    public componentWillUnmount() {
    }

    // update the current time

    public render({ }: Props, {currentPairing}: State) {
        if (currentPairing) {
            return (
                <div class={style.profile}>
                    {currentPairing.map(pin => (
                        <div>
                            {/* yes, this is bad practice. however, it allows us to display slack messages as intended, so... maybe it's fine? */}
                            <span dangerouslySetInnerHTML={{__html: slackdown.parse(pin.text)}} /> <strong>–{pin.author}</strong>
                            <br />
                            <em>Sent in #{pin.channel} on {(new Date(pin.created*1000)).toLocaleString()}</em>
                        </div>
                    ))}
                </div>
            );
        }
    return null
    }
}
