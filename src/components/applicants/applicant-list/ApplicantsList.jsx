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

export default connect(mapStateToProps, {})(ApplicantsList);
