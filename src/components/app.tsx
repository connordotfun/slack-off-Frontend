import { Component, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";


import Vote from '../routes/vote';

if ((module as any).hot) {
    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

export default class App extends Component {
    public currentUrl?: string;
    public handleRoute = (e: RouterOnChangeArgs) => {
        this.currentUrl = e.url;
    };

    public render() {
        return (
            <div id="app">
                <Router onChange={this.handleRoute}>
                    <Route path="/" component={Vote} />
                </Router>
            </div>
        );
    }
}
