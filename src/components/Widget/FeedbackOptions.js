import styles from './Widget.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options }) => {

    return (
        <div className={styles.btn_container}>
            <button className={ styles.btn} onClick={options.goodFeedback}>Good</button>
            <button className={ styles.btn} onClick={options.neutralFeedback}>Neutral</button>
            <button className={ styles.btn} onClick={options.badFeedback}>Bad</button>
        </div>
    )
}
export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        goodFeedback: PropTypes.func,
        neutralFeedback: PropTypes.func,
        badFeedback: PropTypes.func
    })

}