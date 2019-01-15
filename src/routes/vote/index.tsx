import { Component, h } from "preact";

import Card from "../../components/card";
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
    public componentDidMount() {
        this._getNewPairing()
    }

    // gets called just before navigating away from the route
    public componentWillUnmount() {
    }

    // update the current time

    public render({ }: Props, {currentPairing}: State) {
        if (currentPairing) {
            return (
                <div class={style.vote}>
                    <div className={style.pairing}>
                        <Card pin={currentPairing[0]} submitVote={() => this._voteFor(0)} />
                        <div className={style.vs}>VS</div>
                        <Card pin={currentPairing[1]} submitVote={() => this._voteFor(1)} />
                    </div>
                </div>
            );
        }
    return null
    }


    private _voteFor(option: number) {
        fetch(`//${this.API_HOST}/submit_winner?winner=${this.state.currentPairing[option].id}&loser=${this.state.currentPairing[1 - option].id}`)
            .then(() => this._getNewPairing())
    }

    private async _getNewPairing() {
        const res = await fetch(`//${this.API_HOST}/new_pairing`)
        const items = await res.json()
        this.setState(() => ({currentPairing: items as [Pin, Pin]})) 
    }
}
