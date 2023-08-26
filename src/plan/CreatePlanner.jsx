import { Button, Grid } from '@mui/material';
import './css/Test.css';
import DatePicker from './DatePicker';
import PlanCard from './PlanCard';
import Map from './Map';
import SearchBar from './SearchBar';
import { useState } from 'react';
import AppendCard from './AppendCard';
import { Link } from 'react-router-dom';


function CreatePlanner() {
    const [selectedItems, setSelectedItems] = useState([]);
    const [daysDiff, setDaysDiff] = useState(0);
    

    const handleDaysDiffChange = (newDaysDiff) => {
        setDaysDiff(newDaysDiff);
    };

    return (
        <>
                <div className='plan-header'>
                    <p className='kor-title'>대한민국 서울</p>
                    <p className='eng-title'>seoul</p>
                </div>
            <div className="TestContainer">
                <Grid container className="gridContainer">
                    <Grid item className="leftbar" xs={12} sm={2}>
                        <DatePicker onDaysDiffChange={handleDaysDiffChange}/>
                        {/* 여기에 선택된 관광지라고 헤드라인 띄워야함 */}
                        <hr />
                        {daysDiff > 4  ? <p>5일 이상은 선택 불가입니다.</p> : <p>{daysDiff+1}</p>}
                        <hr />
                        <AppendCard selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
                    </Grid>
                    <Grid item className="maparea" xs={12} sm={8}>
                        <Map />
                    </Grid>
                    <Grid item className="rightbar" xs={12} sm={2}>
                        <SearchBar/>
                        {/* 여기에 추천 관광지라고 헤드라인 띄워야함 */}
                        <PlanCard setSelectedItems={setSelectedItems} selectedItems={selectedItems}/>
                    </Grid>
                </Grid>
            </div>
            
            <div className='planBtn'>
            <Link to="/plan/detail">
                <Button variant="contained" sx={{backgroundColor:"#8181F7"}}>일정확인하기</Button>
            </Link>
            </div>
        </>
    );
}

export default CreatePlanner;