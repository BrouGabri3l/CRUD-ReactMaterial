import AppBar from '@mui/material/AppBar';
import { Container, Toolbar, Box, IconButton, } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
    const navigate = useNavigate()

    return (

        <AppBar color="transparent" variant="outlined" sx={{ backdropFilter: "blur(5px)" }} elevation={0} >
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton color="primary" onClick={() => navigate('/')}>
                            <HomeIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        {props.children}
                    </Box>
                </Toolbar>
            </Container >
        </AppBar >

    );
}