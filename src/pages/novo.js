
import api from '../services/api'
import { useFormik } from "formik";
import Form from '../components/form'
import { Alert } from '@mui/material/'
import { useState } from 'react'
import { schema } from "../schemas/schemaCliente"
export default function App() {
    const [alert, setAlert] = useState({
        severity: "",
        message: "",
        visible: false
    })
    const formik = useFormik({
        initialValues: schema.cast(),
        validationSchema: schema,
        onSubmit: (values) => {
            api.post('/api/addUser', values).then((res) => {
                if (res.status === 200) {
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

            <Form title="Adicionar Cliente" {...formik}></Form>
        </>
    );
}
