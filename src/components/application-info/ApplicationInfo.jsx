import { connect } from 'react-redux';
import JSONPretty from 'react-json-pretty';

const AppllicationInfo = ({ application }) => {
  return application && <JSONPretty data={application} />;
};

const mapStateToProps = (state) => ({
  application: state.application,
});

export default connect(mapStateToProps, {})(AppllicationInfo);
