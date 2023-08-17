import { Box, Button } from '@mui/material';
import * as React from 'react';
import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
        <div className="box-container">
            <Box
                sx={{
                    width: 1500,
                    height: 700,
                    border: '1px solid black',
                    padding: '2',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            />
            <Box
                sx={{
                    width: 380,
                    height: 700,
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                <h3 style={{ marginTop: '-80px', marginBottom: '15px' }}>여행을 위한 계획</h3>
                <h2 style={{ marginTop: '10px', marginBottom: '80px' }}>Travel Again</h2>
                <Box onSubmit={handleSubmit}>
                    <Link to="/signIn">
                        <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            sx={{ mt: '3px', mb: '2px', mr: '10px' }}
                        >
                            시작하기
                        </Button>
                    </Link>
                </Box>
            </Box>
        </div>
    );
}