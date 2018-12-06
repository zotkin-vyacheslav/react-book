import React, {Component} from 'react';
import Expandable from '../hoc/Expandable';

class MenuButton extends Component {
    componentWillReceiveProps(nextProps) {
        const collapsed = nextProps.collapsed && nextProps.collapsed === true;
        this.setState({collapsed});
    }

    render() {
        const {children, collapsed, txt, expandCollapse} = this.props;
        return <div className='pop-button'>
            <button onClick={expandCollapse}>{txt}</button>
            {(collapsed) ? <div className='pop-up'>{children}</div> : ''}
        </div>
    }
}

const PopUpButton = Expandable(MenuButton);

export default PopUpButton;