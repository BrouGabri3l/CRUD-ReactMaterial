import AppBar from '@mui/material/AppBar';
import { Container, Toolbar, Box, IconButton, } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'

export default function Header(props) {
    const navigate = useNavigate()
    // const [anchorElNav, setAnchorElNav] = useState(null);

    // const handleOpenNavMenu = (event) => {
    //     console.log(event.currentTarget)
    //     setAnchorElNav(event.currentTarget)
    // }

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null)
    // }

    return (

        <AppBar color="transparent" variant="outlined" sx={{ backdropFilter: "blur(5px)" }} elevation={0} >
            <Container maxWidth="xl" >
                <Toolbar disableGutters >

                    {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={anchorElNav}
                            onClose={handleCloseNavMenu}
                        >

                        </Drawer>
                    </Box> */}

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
    // return (

    //     <div>
    //         <Link to="/">Home</Link>
    //         <Link to="/about">Sobre</Link>
    //         <Link to="/novo">Novo Usuário</Link>
    //     </div>
    // )
}