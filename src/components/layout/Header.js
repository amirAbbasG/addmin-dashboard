import React from 'react';
import {Box, Typography} from "@mui/material";
import {useColors} from "../../theme";

const Header = ({ title, subtitle }) => {
    const {colors} = useColors()

    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[400]}>
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;