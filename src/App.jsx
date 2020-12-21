import { Provider } from 'react-redux';
import store from './store';
import ApplicantsPanel from './components/applicants/ApplicantsPanel';
import CustomerPanel from './components/customer/CustomerPanel';
import ApplicationInfo from './components/application-info/ApplicationInfo';

const App = () => {
  return (
    <Provider store={store}>
      <CustomerPanel />
      <ApplicantsPanel />
      <ApplicationInfo />
    </Provider>
  );
};

export default App;
