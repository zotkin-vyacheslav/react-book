import {connect} from 'react-redux';
import AddColorForm from '../../AddColorForm';
import ColorList from '../../ColorList';
import {
    addColor,
    rateColor,
    removeColor
} from '../actions/actions';


export const NewColor = connect(
    null,
    dispatch =>
        ({
            onNewColor(title, color) {
                dispatch(addColor(title, color))
            }
        })
)(AddColorForm);


const mapStateToProps = state =>
    ({
        colors: state.colors
    });

const mapDispatchToProps = dispatch =>
    ({
        onRemove(id) {
            dispatch(removeColor(id))
        },
        onRate(id, rating) {
            dispatch(rateColor(id, rating))
        }
    });

export const Colors = connect(
    mapStateToProps,
    mapDispatchToProps
)(ColorList);