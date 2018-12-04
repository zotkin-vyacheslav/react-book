import React, {Component} from 'react';

class HiddenMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {hidden: (props.hide) ? props.hide : true}
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({hidden: nextProps.hide})
    }

    render() {
        const {hidden} = this.state;
        const {children} = this.props;
        return (<p>
                {
                    (hidden) ? children.replace(/[a-zA-Z0-9]/g, "x") : children
                }
            </p>
        )
    }
}

export default HiddenMessage;