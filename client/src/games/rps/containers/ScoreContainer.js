import Score from '../components/Score';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	// Translate Redux state into React props

    return {
        amount: state.count
    }
}

export default connect(mapStateToProps)(Score);