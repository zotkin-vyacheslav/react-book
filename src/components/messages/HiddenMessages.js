import React, {Component} from 'react';
// import HiddenMessage from './HiddenMessage';
import Expandable from "../hoc/Expandable";

const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    <p onClick={expandCollapse}>
        {(collapsed) ?
            children.replace(/[a-zA-Z0-9]/g, "x") :
            children}
    </p>;
const HiddenMessage = Expandable(ShowHideMessage);

class HiddenMessages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                "The crow crows after midnight",
                "Bring a watch and dark clothes to the spot",
                "Jericho Jericho Go"],
            showing: -1
        }
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            let {showing, messages} = this.state;
            showing = (++showing >= messages.length) ?
                -1 : showing;
            this.setState({showing});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let {messages, showing} = this.state;
        return (
            <div className='hidden-messages'>
                {messages.map((message, i) =>
                    <HiddenMessage key={i}
                                   collapsed={(i !== showing)}>
                        {message}
                    </HiddenMessage>
                )}
            </div>
        )
    }
}

export default HiddenMessages;