import * as yup from "yup";
import api from '../services/api'
import { useFormik } from "formik";
import Form from '../components/form'
import { Alert, IconButton } from '@mui/material/'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
const actDate = new Date()
let schema = yup.object().shape({
    nome: yup.string("Digite seu Nome").required("O nome é obrigatório"),
    email: yup
        .string("Digite seu Email")
        .email("Digite um email válido")
        .required("O email é obrigatório"),
    nascimento: yup
        .date("Digite a data de nascimento")
        .max(actDate, 'data maior que a atual')
        .required("O campo data é obrigatório"),
    sexo: yup.string().required("Campo Obrigatório"),
    endereco: yup.string().required('O endereço é obrigatório'),
    _endNumero: yup.number().required('O número é obrigatório'),
    _endBairro: yup.string().required('O bairro é obrigatório'),
    CEP: yup.string().required('o CEP é obrigatório'),
    UF: yup.string().required('Digite a UF'),
    cidade: yup.string().required('Digite o nome da cidade')
});

export default function App() {
    const [alert, setAlert] = useState({
        severity: "",
        message: "",
        visible: false
    })
    const formik = useFormik({
        initialValues: {
            "nome": "",
            "email": "",
            "nascimento": actDate,
            "sexo": "M",
            "endereco": "",
            "_endNumero": "",
            "_endBairro": "",
            "CEP": "",
            "UF": "",
            "cidade": ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            api.post('/api/addUser', values).then((res) => {
                if (res.status == 200) {
                    setAlert({
                        message: "Cliente adicionado com sucesso",
                        severity: "success",
                        visible: true
                    })
                }
            }).catch(err => setAlert({
                message: err.response.data.message,
                severity: "error",
                visible: true
            }))
        }

    });
    return (
        <>
            {alert.visible ?
                <Alert onClose={() => setAlert({ visible: false })} sx={{ position: 'absolute', top: 100 }} variant="filled" severity={alert.severity}>{alert.message}
                </Alert> : ''}

            <Form title="Adicionar Cliente"{...formik}></Form>
        </>
    );
}
