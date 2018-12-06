import React, {Children} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataComponent from './components/hoc/DataComponent';
import ColorsApp from './ColorsApp';
import MembersApp from './MembersApp';
import HiddenMessages from './components/messages/HiddenMessages';
import CountryList from './components/country/CountryList';
import PeopleList from './components/hoc/PeopleList';
import Expandable from './components/hoc/Expandable';
import TimeLine from './components/d3t/TimeLine';
import historicDatesForSkiing from './data/historicDatesForSkiing';
import PopUpButton from './components/test/MenuButton';
import * as serviceWorker from './serviceWorker';

const findChild = (children, child) => Children.toArray(children).filter(c => c.type === child)[0];

const WhenTruthy = ({children}) => Children.only(children);
const WhenFalsy = ({children}) => Children.only(children);

const Display = ({ifTruthy = true, children}) =>
    (ifTruthy) ? findChild(children, WhenTruthy) : findChild(children, WhenFalsy);
const age = 29;

const RandomMeUsers = DataComponent(
    PeopleList, "https://randomuser.me/api/"
);

const CountryNames = ({data, selected = ''}) => <select className='people-list' defaultValue={selected}>
    {data.map(({name}, i) => <option key={i} value={name}>{name}</option>)}
</select>;


const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    <p onClick={expandCollapse}>
        {(collapsed) ?
            children.replace(/[a-zA-Z0-9]/g, "x") :
            children}
    </p>;
const HiddenMessage = Expandable(ShowHideMessage)

const CountryDropdown = DataComponent(CountryNames, "https://restcountries.eu/rest/v1/all");
// ReactDOM.render(<ColorsApp />, document.getElementById('root'));
// ReactDOM.render(<MembersApp />, document.getElementById('root'));
// ReactDOM.render(<HiddenMessages />, document.getElementById('root'));
// ReactDOM.render(<TimeLine name="History of Skiing" data={historicDatesForSkiing}/>, document.getElementById('root'));
// ReactDOM.render(<CountryList />, document.getElementById('root'));
// ReactDOM.render(<HiddenMessage />, document.getElementById('root'));
ReactDOM.render(<PopUpButton hidden={true} txt='Toggle popup'>
    <h1>Hidden content</h1>
    <p>This content will start off hidden</p>
</PopUpButton>, document.getElementById('root'));
// ReactDOM.render(
//     <Display ifTruthy={age >= 21}>
//         <WhenTruthy><h1>You can enter</h1></WhenTruthy>
//         <WhenFalsy><h1>go home</h1></WhenFalsy>
//     </Display>,
//     document.getElementById('root'));

serviceWorker.unregister();
