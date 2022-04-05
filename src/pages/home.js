import { useEffect, useState } from "react"
import api from '../services/api'
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { Container, Button } from '@mui/material'
import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { OutlinedInput, Box, Paper } from "@mui/material";
import {
    DataGridPro,
    GridActionsCellItem,
    useGridApiRef,
    GridToolbarContainer
} from "@mui/x-data-grid-pro"
import { PropTypes } from "prop-types";
import CircularProgress from '@mui/material/CircularProgress';
const toolBar = (props) => {
    return (
        <>
            <GridToolbarContainer>
                <Box sx={{ flexGrow: 1 }}>
                    <Button onClick={props.onClick} color="primary" startIcon={<AddIcon />} >
                        Adicionar
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <OutlinedInput size="small" placeholder='Pesquise um Cliente' variant="filled" fullWidth onChange={props.onChange} startAdornment={
                        <InputAdornment>
                            <SearchIcon sx={{ mr: 1 }} />
                        </InputAdornment>
                    }></OutlinedInput>
                </Box>
            </GridToolbarContainer>
        </>
    )
}
toolBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
}
export default function Home() {
    const [userData, setData] = useState()
    const navigate = useNavigate();
    const apiRef = useGridApiRef()
    const [suggestions, setSuggestions] = useState()
    useEffect(() => {
        api.get('/api/users')
            .then(res => res)
            .then(data => {
                setData(data.data)
            })

    }, [])
    const handleChange = (e) => {

        let matches = []
        matches = userData.filter(usr => {
            const reg = new RegExp(`${e}`, 'gi')
            return usr.nome.match(reg)
        })
        setSuggestions(matches)
    }
    const handleDelete = e => event => {
        event.stopPropagation()

        api.delete(`/api/delUser/${e}`)
            .then(data => {
                apiRef.current.updateRows([{ ...data.data, _action: "delete" }])
            })
    }
    const cols = [

        {
            field: "nome", headerName: "Nome", width: 250
        },
        {
            field: "email", headerName: "Email", width: 250
        },
        {
            field: 'nascimento', headerName: "Data de Nascimento", type: "date", valueGetter: params => new Date(params.value), width: 150
        },
        {
            field: "sexo", headerName: "Sexo", width: 70
        },
        {
            field: "endereco", headerName: "Endereço", width: 220
        },
        {
            field: "_endNumero", headerName: "Número", width: 80
        },
        {
            field: "_endBairro", headerName: "Bairro", width: 150
        },
        {
            field: "CEP", headerName: "CEP"
        },
        {
            field: "UF", headerName: "UF", width: 50
        },
        {
            field: "cidade", headerName: "Cidade", width: 150
        },
        {
            field: 'actions', headerName: "Ações", type: "actions", cellClassName: 'actions', width: 100,
            getActions: ({ id }) => {
                return [
                    <>
                        <GridActionsCellItem
                            icon={<EditIcon />}
                            label="Edit"
                            onClick={() => navigate(`/edit/${id}`)}
                        />
                        <GridActionsCellItem
                            icon={<DeleteIcon />}
                            label="Delete"
                            onClick={handleDelete(id)}
                        />
                    </>
                ]
            }
        }
    ]

    return (

        <Container maxWidth="lg" autoPageSize >
            <Paper>
                <Box sx={{ height: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {
                        !userData ? <CircularProgress /> : <DataGridPro
                            apiRef={apiRef}
                            disableColumnMenu={true}
                            disableColumnSelector={true}
                            columns={cols}
                            rows={suggestions ? suggestions : userData}
                            getRowId={(row) => row._id}
                            id="_id"
                            components={{
                                Toolbar: toolBar
                            }}
                            componentsProps={{
                                toolbar: {
                                    onChange: (event) => handleChange(event.target.value),
                                    onClick: () => navigate(`/novo`)
                                }
                            }}
                            hideFooter
                        />
                    }
                </Box>
            </Paper>
        </Container >

    )
}


