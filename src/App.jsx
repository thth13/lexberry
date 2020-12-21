import { Provider } from 'react-redux';
import store from './store';
import ApplicantsPanel from './components/applicants/ApplicantsPanel';
import CustomerPanel from './components/customer/CustomerPanel';

const App = () => {
  return (
    <Provider store={store}>
      <CustomerPanel />
      <ApplicantsPanel />
    </Provider>
  );
};

export default App;
