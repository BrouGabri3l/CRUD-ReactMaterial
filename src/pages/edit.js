import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from "react-router-dom"
import { useFormik } from "formik";
import api from '../services/api'
import Form from '../components/form'
import { Alert } from '@mui/material/'
import { schema } from '../schemas/schemaCliente'
export default function Edit(props) {
    const [alert, setAlert] = useState({
        severity: "",
        message: "",
        visible: false
    })
    const params = useParams()
    const [data, setData] = useState({
        "nome": "",
        "nascimento": "",
        "email": "",
        "sexo": "",
        "endereco": "",
        "_endNumero": "",
        "_endBairro": "",
        "CEP": "",
        "UF": "",
        "cidade": "",
    }
    )
    useEffect(() => {
        api.get(`api/editUser/${params.id}`)
            .then((user) => setData(user.data))

    })
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: { ...data },
        validationSchema: schema,
        onSubmit: (values) => {
            if (JSON.stringify(data) !== JSON.stringify(values)) {
                api.put(`/api/modifyUser/${params.id}`, values).then((res) => {
                    if (res.status === 200) {
                        setAlert({
                            message: "Cliente alterado com sucesso",
                            severity: "success",
                            visible: true
                        })
                    }
                }).catch(err => {
                    setAlert({
                        message: err.response.data.message,
                        severity: "error",
                        visible: true
                    })
                })
            }
        }

    });
    return (
        <>
            {
                alert.visible ?
                    <Alert onClose={() => setAlert({ visible: false })} sx={{ position: 'absolute', top: 100 }} variant="filled" severity={alert.severity}>{alert.message}

                    </Alert> : ''
            }
            < Form title="Editar dados" {...formik}></Form >
        </>
    )
}