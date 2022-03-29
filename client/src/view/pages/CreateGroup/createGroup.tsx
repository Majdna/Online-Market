import './createGroup.scss';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/header';
import axios from 'axios';
import { ContactsOutlined } from '@material-ui/icons';
import { useAppSelector } from '../../../app/hooks';
import { convertCompilerOptionsFromJson, isJsxClosingFragment } from 'typescript';
import { CleaningServices, ConstructionOutlined } from '@mui/icons-material';





function CreateGroup(){
    
    const user = useAppSelector(state=> state.user)

    function handelSubmit (ev:any){
        ev.preventDefault();
        const members:string = ev.target.members.value;
        const membersArray = members.split(",").map((str:any) => {
            return {id:str}
        });
        if(membersArray.length < 3){
            alert("need more members");
            return;
        }
        axios.get('http://localhost:4001/users').then(({data})=>{
            const arr:string[] = [];
             console.log(data.users);
           for(let obj of data.users){
               arr.push(obj.id);
           }
           for(let memberId of membersArray){
               if(arr.findIndex((id:any) => memberId.id===id) === -1){
                alert(`${memberId.id} user doesn't exist`);
                return
            }
          }
         
           const info={
            ID:"",
            Name: ev.target.groupName.value,
            adminId: user.ID,
            Members: membersArray
            }
           
            axios.post('http://localhost:4001/groups',info)
            .then((data)=>{
                alert(`${ev.target.groupName.value} added`);
                // check repose if ok
                return data;
            }).catch(err=>{
    
            }
            )

            //  for(let memberId of membersArray){
            //     axios.post(`http://localhost:4001/users/${memberId.id}`).then(({data})=>{
            //     let arr:any[] = [...data.groups];
            //     console.log(arr);
            //     arr.push(info)
            //     console.log(arr);
            //     axios.patch(`http://localhost:4001/users/${memberId.id}`,arr).then(({data})=>{
            //          console.log(data);
            //     })
              
            //  })}

        }).catch(e=>{
            console.log(e)
        })
        
        setGroupDetails([...membersArray])
    
    }

    function handleOnClck(e:any){
        e.preventDefault();
        console.log("aadd clicked")
        // ge text from input
        // validate input: check id and sperator and if exisits
        const t = e.target.value


    }
    const [groupDetails, setGroupDetails] = useState<Array<any>>([]);
    
    return(
        <div>    <Header></Header>
        <div className='warpper'>
         
               <div>
               
              <h1> Create new Group </h1> <br /><br />
                <form onSubmit={handelSubmit}>
                Group Name: <br />
                <input name="groupName" type="text" />
                <br /><br />
                Members :  <br />
                <input name="members" type="text" placeholder='min 3 mumbers' /> 
                 <button onClick={handleOnClck}>add</button>
                <br /><br />
               
                <button type='submit' >Add group</button>
                </form>
                <br />
                <Link to="/Group">cancel</Link>

               </div>
        </div>
        </div>
    )
}


export default CreateGroup;