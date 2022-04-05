import { Paper, TextField } from "@mui/material";
import {
    Button,
    Grid,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from "@mui/material";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { ptBR } from "date-fns/locale";
const actDate = new Date()
export default function Form(props) {
    return (
        < LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
            <Box m="20px" maxWidth={"800px"}>
                <Paper elevation={20} sx={{ padding: "20px" }}>
                    <h1>{props.title}</h1>
                    <form onSubmit={props.handleSubmit}>
                        <Grid>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        name="['nome']"
                                        label="Nome"
                                        value={props.values.nome}
                                        onChange={props.handleChange}
                                        error={props.touched.nome && Boolean(props.errors.nome)}
                                        helperText={props.touched.nome && props.errors.nome}
                                        variant="filled"
                                    ></TextField>
                                </Grid>

                                <Grid item xs={6}>
                                    <TextField

                                        fullWidth
                                        name="['email']"
                                        label="E-mail"
                                        value={props.values.email}
                                        onChange={props.handleChange}
                                        error={props.touched.email && Boolean(props.errors.email)}
                                        helperText={props.touched.email && props.errors.email}
                                        variant="filled"
                                    ></TextField>
                                </Grid>

                                <Grid item xs={3}>
                                    <DesktopDatePicker
                                        value={props.values.nascimento}
                                        onChange={(value) => {
                                            props.setFieldValue('nascimento', value)
                                        }}
                                        maxDate={actDate}
                                        label="Data de Nascimento"
                                        name="['nascimento']"
                                        renderInput={(params) => <TextField variant="filled" helperText={props.touched.nascimento && props.errors.nascimento} error={props.touched.nascimento && Boolean(props.errors.nascimento)}
                                            {...params} />}
                                    />
                                </Grid>
                                <Grid item xs={3}>
                                    <FormControl
                                        fullWidth
                                        variant="filled"

                                    >
                                        <InputLabel>Sexo</InputLabel>
                                        <Select
                                            name="['sexo']"
                                            onChange={props.handleChange}
                                            value={props.values.sexo}
                                            error={props.touched.sexo && Boolean(props.errors.sexo)}
                                            helperText={props.touched.sexo && props.errors.sexo}>
                                            <MenuItem value="M">Masculino</MenuItem>
                                            <MenuItem value="F">Feminino</MenuItem>
                                            <MenuItem value="NA">Prefiro não dizer</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField

                                        fullWidth
                                        name="['CEP']"
                                        label="CEP"
                                        value={props.values.CEP}
                                        onChange={props.handleChange}
                                        error={props.touched.CEP && Boolean(props.errors.CEP)}
                                        helperText={props.touched.CEP && props.errors.CEP}
                                        variant="filled"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField

                                        fullWidth
                                        name="['endereco']"
                                        label="Endereço"
                                        value={props.values.endereco}
                                        onChange={props.handleChange}
                                        error={
                                            props.touched.endereco && Boolean(props.errors.endereco)
                                        }
                                        helperText={props.touched.endereco && props.errors.endereco}
                                        variant="filled"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        type="number"
                                        fullWidth
                                        name="['_endNumero']"
                                        label="Número"
                                        value={props.values._endNumero}
                                        onChange={props.handleChange}
                                        error={props.touched._endNumero && Boolean(props.errors._endNumero)}
                                        helperText={props.touched._endNumero && props.errors._endNumero}
                                        variant="filled"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField

                                        fullWidth
                                        name="['_endBairro']"
                                        label="Bairro"
                                        value={props.values._endBairro}
                                        onChange={props.handleChange}
                                        error={props.touched._endBairro && Boolean(props.errors._endBairro)}
                                        helperText={props.touched._endBairro && props.errors._endBairro}
                                        variant="filled"
                                    ></TextField>
                                </Grid>

                                <Grid item xs={2}>
                                    <TextField

                                        fullWidth
                                        name="['UF']"
                                        label="UF"
                                        value={props.values.UF}
                                        onChange={props.handleChange}
                                        error={props.touched.UF && Boolean(props.errors.UF)}
                                        helperText={props.touched.UF && props.errors.UF}
                                        variant="filled"
                                    ></TextField>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField

                                        fullWidth
                                        name="['cidade']"
                                        label="Cidade"
                                        value={props.values.cidade}
                                        onChange={props.handleChange}
                                        error={props.touched.cidade && Boolean(props.errors.cidade)}
                                        helperText={props.touched.cidade && props.errors.cidade}
                                        variant="filled"
                                    ></TextField>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" type="submit">Enviar</Button>
                                </Grid>
                            </Grid>

                        </Grid>


                    </form>
                </Paper>
            </Box>
        </LocalizationProvider >
    );
}
