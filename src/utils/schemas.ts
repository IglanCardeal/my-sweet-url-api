import * as yup from 'yup';

const urlSchema = yup.object().shape({
  alias: yup
    .string()
    .trim()
    .min(3, 'Apelido tem que ter tamanho minimo de 3 caracteres')
    .max(14, 'Apelido tem que ter tamanho maximo de 14 caracteres')
    .matches(
      /^[\w\-]+$/gi,
      'Formato do apelido invalido. Use somente letras, numeros, "_" ou "-".'
    ),
  url: yup
    .string()
    .trim()
    .url('URL nao pode ser vazia ou tem que ser em um formato valido!')
    .required(),
  publicStatus: yup
    .boolean()
    .required()
    .typeError(
      'O estatus(publicStatus) da URL tem que ser um Boolean "true" ou "false"'
    ),
  userId: yup.string(),
});

const userSchema = {}

export {
  urlSchema,
  userSchema
}
