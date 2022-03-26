// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import EarningCard from 'views/EarningCard';
import { gridSpacing } from 'store/constant';
import MyForm from './MyForm';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
    <MainCard title="Sample Card">
        <Typography variant="body2">
            Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut enif
            ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue dolor in
            reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president, sunk in culpa
            qui officiate descent molls anim id est labours.
        </Typography>

        <Grid container spacing={gridSpacing}>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
            <Grid item xs={4}>
                <EarningCard />
            </Grid>
        </Grid>
        {/* <MyForm /> */}
    </MainCard>
);

export default SamplePage;
