import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ApplicantItem from './ApplicantItem';
import LinearProgress from '@material-ui/core/LinearProgress';

const ApplicantsList = ({ applicants, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        applicants.map((applicant) => (
          <ApplicantItem key={applicant.id} applicant={applicant} />
        ))
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  applicants: state.applicant.applicants,
  isLoading: state.applicant.applicantsIsLoading,
});

ApplicantsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
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
