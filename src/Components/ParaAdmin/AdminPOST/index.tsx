import { Button, Paper, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import IAdminPOST from "../../../interfaces/IAdminPOST";



function AdminPOST({ src, alt, tipographyChildren, buttonChildren }: IAdminPOST) {
    return (

        <Paper>
            <img src={src} alt={alt} />
            <Typography color={'text.secondaty'} textAlign={'center'} padding={'1rem'}>
                {tipographyChildren}
            </Typography>
            <NavLink to={'novo'}>
                <Button size='small' fullWidth>{buttonChildren}</Button>
            </NavLink>
        </Paper>
    )
}

export default AdminPOST