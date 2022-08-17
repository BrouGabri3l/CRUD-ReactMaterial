import * as yup from "yup";
const actDate = new Date();
export const schema = yup.object().shape({
    nome: yup.string("Digite seu Nome").required("O nome é obrigatório"),
    email: yup
        .string("Digite seu Email")
        .email("Digite um email válido")
        .required("O email é obrigatório"),
    sexo: yup.string().required("Campo Obrigatório").default("M"),
    endereco: yup.string().required('O endereço é obrigatório'),
    _endNumero: yup.number().required('O número é obrigatório').positive("O número deve ser positivo").integer("O número deve ser inteiro"),
    _endBairro: yup.string().required('O bairro é obrigatório'),
    CEP: yup.string().required('o CEP é obrigatório').length(8, "CEP inválido"),
    UF: yup.string().required('Digite a UF'),
    cidade: yup.string().required('Digite o nome da cidade'),
    nascimento: yup
        .date("Digite a data de nascimento")
        .default(actDate)
        .max(actDate, `A data deve ser menor ou igual a data de  ${actDate.toLocaleDateString("pt-BR")}`)
        .required("O campo data é obrigatório"),
});