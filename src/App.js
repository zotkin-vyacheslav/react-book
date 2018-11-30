import React, {Component} from 'react';
import data from './data/data';
import {v4} from 'uuid';
import './App.css';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: data
        };
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors, {
                id: v4(),
                title,
                color,
                rating: 0
            }
        ];
        this.setState({colors});
    }

    removeColor(id) {
        const colors = this.state.colors.filter(color => color.id !== id);
        this.setState({colors});
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color : {
                    ...color,
                    rating
                }
        );
        console.log(rating);
        this.setState({colors});
    }

    render() {
        const {colors} = this.state;
        const {addColor, rateColor, removeColor} = this;
        return (
            <div className="App">
                <AddColorForm onNewColor={addColor}/>
                <ColorList onRate={rateColor} onRemove={removeColor} colors={colors}/>
            </div>
        );
    }
}

export default App;
