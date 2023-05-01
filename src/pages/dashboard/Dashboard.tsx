import React from 'react';
import scss from './dashboard.module.scss'
import {Box, Grid, Paper} from "@mui/material";

const Dashboard = () => {
    return (
        <Box>
            <Grid container gap={2} className={scss.topCardsContainer} >
                <Grid>
                <Paper className={scss.dataCard}>Products</Paper>
                </Grid>
                <Grid>
                <Paper className={scss.dataCard}>Farms</Paper>
                </Grid>
                <Grid>
                <Paper className={scss.dataCard}>Filter</Paper>
                </Grid>
            </Grid>
            <Grid xs={12} marginY={2}>
            <Paper className={scss.dataCard}>Display some type of other information here...</Paper>
            </Grid>
        </Box>
    )
}

export default Dashboard;