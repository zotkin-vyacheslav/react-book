import React, {Component} from 'react';
import MemberList from './components/members/MemberList';

class MembersApp extends Component {

    render() {
        return <MemberList count='20'/>
    }
}

export default MembersApp;