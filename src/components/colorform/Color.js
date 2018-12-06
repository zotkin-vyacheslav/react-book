import React, {Component} from 'react';
import StarRating from "./StarRating";
import PropTypes from 'prop-types';

class Color extends Component {
    componentWillMount() {
        console.log('componentWillMount');
        this.style =
            {backgroundColor: '#ccc'}
    }

    shouldComponentUpdate(nextProps) {
        const {rating} = this.props;
        return rating !== nextProps.rating;
    }

    componentDidUpdate(prevProps) {
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? 'better' : 'worse';
        console.log(`${title} is getting ${status}`);
        this.refs.title.style.backgroundColor = '';
        this.refs.title.style.color = 'black';
    }

    componentWillUpdate(nextProps) {
        const {title, rating} = this.props;
        this.style = null;
        this.refs.title.style.backgroundColor = 'red';
        this.refs.title.style.color = 'white';
        alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
    }

    render() {
        const {title, color, rating, onRemove, onRate} = this.props;
        return <section className='color' style={this.style}>
            <h1 ref='title'>{title}</h1>
            <button onClick={onRemove}>X</button>
            <div className='color' style={{backgroundColor: color}}>
            </div>
            <div>
                <StarRating starsSelected={rating} onRate={onRate}/>
            </div>
        </section>;
    }
}

Color.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.number,
    color: PropTypes.string,
    onRate: PropTypes.func
};

Color.defaultProps = {
    title: undefined,
    rating: 0,
    color: '#000000',
    onRate: f => f
};

export default Color;