import React, { useState } from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import group from '../Groups/group';
import axios from 'axios';
const signUp = () => {
    // add use State for user 
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [Name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [Id, setId] = useState("");

    
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    
    interface user {
        id: string;
        FullName: string;
        password: string;
        phone: string;
        Email:string;
    }


    async function handelLink(e:any){
        const _user:user = {"id":Id ,"FullName":Name,"password":password,"phone":phone,"Email":email}
        axios.post(`http://localhost:4001/users`, _user)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })

        alert("Signed Up :)")
        nav("/store");
       
    }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid  >
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon  />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    </Grid>
                <form onSubmit={handelLink} >
                    <TextField fullWidth label='Id' required placeholder="Enter your ID" onKeyUp={(e: any) => setId(e.target.value)}/>
                    <TextField fullWidth label='Name' required placeholder="Enter your name" onKeyUp={(e: any) => setName(e.target.value)}/>
                    <TextField fullWidth label='Email' required placeholder="Enter your email" onKeyUp={(e: any) => setEmail(e.target.value)}/>
                    <FormControl component="fieldset" required style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender"  name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth label='Phone Number' required placeholder="Enter your phone number" onKeyUp={(e: any) => setPhone(e.target.value)}/>
                    <TextField fullWidth type="password" label='Password' required placeholder="Enter your password" onKeyUp={(e: any) => setPassword(e.target.value)}/>
                    <TextField fullWidth  type="password"  label='Confirm Password' required placeholder="Confirm your password"/>
                   
                    <Button type='submit' onClick={handelLink}  variant='contained' color='primary'> Sign up</Button>
                    <br />
                    <Link to="/HomePage">Cancel</Link>
                    </form>
            </Paper>
        </Grid>
    ) 
}

export default signUp;