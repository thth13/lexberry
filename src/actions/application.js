import { CREATE_APPLICATION } from './types';

export const createApplication = () => (dispatch, getState) => {
  const { customer, applicant } = getState();

  const data = {
    clientId: customer.customer && customer.customer.id,
    applicantsIds: applicant.applicants.map((item) => item.id),
    newApplicants: applicant.newApplicants,
  };

  console.log(data);

  dispatch({
    type: CREATE_APPLICATION,
    payload: data,
  });
};
