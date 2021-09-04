import './FeedbackOptions.scss';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option.id}
            name={option.label}
            onClick={onLeaveFeedback}
            value={option.value}
          >
            {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
          </button>
        );
      })}
    </>
  );
};

FeedbackOptions.protoType = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default FeedbackOptions;
