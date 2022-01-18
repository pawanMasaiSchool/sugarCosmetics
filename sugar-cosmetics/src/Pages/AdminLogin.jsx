import React from 'react'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AdminLoginForm from '../Components/AdminLoginForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


const AdminLogin = () => {
    const isAuth = useSelector(state => state.admin.isAuth);

    if(isAuth){
        return <Redirect to="/admin/orders" />
    }

    return (
        <Container maxWidth="xl">
            <Box  sx={{padding:"1rem" }}>
                <Typography variant="h3">Login</Typography>
                <AdminLoginForm />
            </Box>
      </Container>
    )
}

export default AdminLogin