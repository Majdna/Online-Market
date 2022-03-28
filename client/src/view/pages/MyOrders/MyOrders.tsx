import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PeopleIcon from '@material-ui/icons/People';
import Paper from '@mui/material/Paper';
import Header from '../../components/header/header';
import axios from 'axios';
import { useState , useEffect } from "react";
import {useParams, useNavigate} from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { Link } from '@material-ui/core';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


 
interface GroupMember {
  id: string;
}

interface cart {
  id:string,
  name: string,
  price: number,
  catagory: string,
  quantity: number,
  description: string,
  Url:string
  }

interface order{
    orderId: string,
    orderOwnerId: string,
    groupId: string,
    cartProducta: cart,
}

export default function MyOrders() {
  const user = useAppSelector(state=> state.user)
  const {groupId} = useParams();
  useEffect(()=>{axios.get(`http://localhost:3004/order?groupId=${groupId}&orderOwnerId${user.ID}`).then(({data})=>{
      console.log(data);
   const arr = [...data];
   setArr(data);
   setArr(arr)
  })
  },[]);

  const [arr,setArr]=useState<Array<order>>([]);
  let navigate = useNavigate();
 
  return (
    <div>
    <Header></Header>
    <div className='groupName'>{user.ID}</div>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"> productID </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
            <StyledTableRow key={row.orderId}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.orderId}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}