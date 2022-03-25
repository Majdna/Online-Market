// import './ aboutUs.scss';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const aboutUs = () => {
  
    return (
        <div className='warpper'>

            <div>
                <div>
                    <h1>hi every one into abo ali Online market
                    </h1>
                    we have akk products that u want like : fruts and vegetables , meat and fish , organic and healthy , drinks and more other things
                    <div> we are so happy to see you hear </div>
                    <Link to="/homePage"> to home Page</Link>
                    <Stack spacing={2}>
                   <Item>
                   <Avatar
                   alt="Remy Sharp"
                   src="/static/images/avatar/1.jpg"
                   sx={{ width: 56, height: 56 }}
                  />
                  </Item>
                  <Item>
                     <Avatar
                   alt="Remy Sharp"
                   src="/static/images/avatar/1.jpg"
                   sx={{ width: 56, height: 56 }}
                  />
                  </Item>
                 </Stack>
                </div>
            </div>

        </div>
    )
}


export default aboutUs;