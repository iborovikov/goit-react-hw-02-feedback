import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    const percentage = positivePercentage.toFixed(2)
    return (
    <>
        <h2>Staistics</h2>
        <p>Good: { good }</p>
        <p>Neutral: { neutral }</p>
        <p>Bad: { bad }</p>
        <p>Total: { total }</p>
        <p>Positive feedback: { percentage } %</p>
    </>
    )
}
export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}