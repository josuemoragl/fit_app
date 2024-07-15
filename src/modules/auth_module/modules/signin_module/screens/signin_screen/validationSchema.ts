import * as Yup from 'yup';

import {emailRegex} from '../../../../../../common/infrastructure/constants/regex';

export const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .matches(emailRegex, 'Please enter a valid email')
      .required('Email is required'),
  });
