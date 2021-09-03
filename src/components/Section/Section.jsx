import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
