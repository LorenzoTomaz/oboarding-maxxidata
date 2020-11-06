import { documentsTypes } from '../../../../utils/enums';

import * as yup from 'yup';

export default {
  create: yup.object().shape({
    nome: yup.string().required(),
    telefone: yup.string(),
    email: yup.string().required(),
    type_member_id: yup.number().required,
    endereco: yup.string(),
    situacao: yup.string().required(),
    /* memberName: yup.string().required(),
    userId: yup
      .number()
      .positive()
      .nullable(),
    phoneNumber: yup.string(),
    emailAddress: yup
      .string()
      .email()
      .required(),
    principalMember: yup.bool().required(),
    parentMemberId: yup
      .number()
      .positive()
      .nullable(),
    documentNumber: yup.string(),
    documentType: yup.string().oneOf(Object.keys(documentsTypes)),
    addressDescription: yup.string(),
    addressNumber: yup.string(),
    addressComplement: yup.string(),
    neighborhood: yup.string(),
    zipCode: yup.string(),
    coordinates: yup.string().nullable(),
    externalPk: yup.string().nullable(),
    active: yup.bool(), */
  }),
};
