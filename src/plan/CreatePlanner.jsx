import React, { useState } from 'react';
import './css/CreatePlanner.css';
import DatePicker from './DatePicker';
import Map from './Map';
import PlanCard from './PlanCard';
import { Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import DateAccordion from './DateAccordion';
import DateAlert from './DateAlert';


function Test() {
    const [dateLength, setDateLength] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleDateChange = (dateArray) => {
        setDateLength(dateArray.length);
      };

    
      console.log(selectedItems)
    return (
        <>
            <div className="plan-header">
                <p className="kor-title">대한민국 서울</p>
                <p className="eng-title">seoul</p>
            </div>
            <div className="TestContainer">
                <Grid container className="gridContainer">
                    <Grid item className="leftbar" xs={12} sm={2}>
                        <DatePicker onDateChange={handleDateChange} />
                        <DateAccordion dateLength={dateLength} setSelectedItems={setSelectedItems} selectedItems={selectedItems} setSelectedIndex={setSelectedIndex}/>
                        <DateAlert dateLength={dateLength}/>
                    </Grid>
                    <Grid item className="maparea" xs={12} sm={8}>
                         <Map selectedItems={selectedItems} />
                    </Grid>
                    <Grid item className="rightbar" xs={12} sm={2}>
                        <PlanCard setSelectedItems={setSelectedItems} selectedItems={selectedItems} selectedIndex={selectedIndex}/>
                    </Grid>
                </Grid>
            </div>
            <div className="planBtn">
                <Link to="/plan/detail">
                    <Button variant="contained" sx={{ backgroundColor: '#8181F7' }}>
                        일정 생성하기
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default Test;