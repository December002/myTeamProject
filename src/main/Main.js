import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme} from '@mui/material/styles';
import { Link } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Main() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    return (
                            <Box onSubmit={handleSubmit}>
                                <Link to="/signIn">
                                <Button type="submit" size='large' variant="contained" sx={{ mt: '3px', mb: '2px', mr: '10px' }}>
                                    로그인
                                </Button>
                                </Link>
                                <Link to="/signUp">
                                <Button type="submit" size='large' variant="contained" sx={{ mt: '3px', mb: '2px', ml:'10px'}}>
                                    회원가입
                                </Button>
                                </Link>
                            </Box>
                            

    );
}
