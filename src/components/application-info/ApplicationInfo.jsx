import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import JSONPretty from 'react-json-pretty';

const AppllicationInfo = ({ application }) => {
  return application && <JSONPretty data={application} />;
};

const mapStateToProps = (state) => ({
  application: state.application,
});

AppllicationInfo.propTypes = {
  application: PropTypes.shape({
    clientId: PropTypes.string,
    applicantsIds: PropTypes.arrayOf(PropTypes.string),
    newApplicants: PropTypes.arrayOf(
      PropTypes.shape({
        edrpou: PropTypes.string,
        name: PropTypes.string,
        address: PropTypes.shape({
          country: PropTypes.string,
          address: PropTypes.string,
        }),
        originalName: PropTypes.string,
        originalAddress: PropTypes.string,
        id: PropTypes.string,
        personType: PropTypes.string,
      })
    ),
  }),
};

export default connect(mapStateToProps, {})(AppllicationInfo);
