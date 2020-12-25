import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ApplicantItem from './ApplicantItem';

const ApplicantsList = ({ applicants }) => {
  return (
    <>
      {applicants.map((applicant) => (
        <ApplicantItem key={applicant.id} applicant={applicant} />
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  applicants: state.applicant.applicants,
});

ApplicantsList.propTypes = {
  applicants: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      address: PropTypes.shape({
        address: PropTypes.string,
      }),
      id: PropTypes.string,
    })
  ).isRequired,
};

export default connect(mapStateToProps, {})(ApplicantsList);
