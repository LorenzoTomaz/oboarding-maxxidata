import { documentsTypes } from '../../../../utils/enums';

import * as yup from 'yup';

export default {
  create: yup.object().shape({
    descricao: yup.string().required(),
    situacao: yup.string().required(),
  }),
};
