import React, {Component} from 'react';
import getFakeMembers from './getFakeMembers';
import Member from './member';

class MemberList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            loading: false,
            error: null
        };
    }

    componentWillMount() {
        this.setState({loading: true});
        getFakeMembers(this.props.count).then(
            members => {
                this.setState({members, loading: false})
                },
            error => {
                this.setState({error, loading: false})
            }
        )
    }

    componentWillUpdate() {
        console.log('updating lifecycle');
    }

    render() {
        const {members, loading, error} = this.state;
        return(
            <div className='memder-list'>
             {(loading) ?
                <span>Loading members</span> :
                (members.length) ?
                members.map((user, i) => <Member key={i} {...user}/>) :
                <span>0 members Loaded</span>
             }
             {(error) ? <p>Error loading members: {error}</p> : ""}
            </div>
        )
    }
}

export default MemberList;