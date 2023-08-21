import { Grid } from '@mui/material';
import './Test.css';
import TourCard from './PlanCard';
// import DatePicker from './plan/DatePicker';

function Test() {
    return (
        <div className="TestContainer">
            <Grid container className="gridContainer">
                <Grid item className="leftbar" xs={12} sm={2}>
                    {/* <DatePicker /> */}
                    <Grid item xs>
                        <TourCard style={{display:"flex"}}/>
                    </Grid>
                </Grid>
                <Grid item className="maparea" xs={12} sm={8} />
                <Grid item className="rightbar" xs={12} sm={2} />
            </Grid>
        </div>
    );
}

export default Test;