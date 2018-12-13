import {Dispatcher} from 'flux';

class CountdownDispatcher extends Dispatcher {
    constructor(props) {
        super(props);
    }

    handleAction(action) {
        console.log('dispatching action: ', action);
        this.dispatch({
            source: 'VIEW_ACTION',
            action
        })
    }
}

export default CountdownDispatcher;