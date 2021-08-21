import PropTypes from 'prop-types';

const Statistics = ({ options, state, total, positivePercentage }) => {
    const percentage = positivePercentage.toFixed(2)
    return (
    <>
            <h2>Staistics</h2>
            {options.map((option) => {
                return (
                    <p key={option}>{option}: {state[option]}</p>)
            })}
        <p>Total: { total }</p>
        <p>Positive feedback: { percentage } %</p>
    </>
    )
}
export default Statistics

Statistics.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }),
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}