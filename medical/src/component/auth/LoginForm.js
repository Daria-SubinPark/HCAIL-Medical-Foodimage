import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import "./LoginForm.css"
import {loginUser} from "../../api/auth";

function LoginForm({history})
{
    const [mid, setMid] = useState('');
    const [pw, setPw] = useState('');
    const [str, setStr] = useState('');

    let checkAuth = async () =>
    {
        try
        {
            let medical = await loginUser(mid, pw);
            if (medical === 401 || medical === 500)
            {
                setStr("아이디 혹은 비밀번호를 찾을 수 없습니다.")  
                return;
            }
            else
            {
                localStorage.setItem('medical', JSON.stringify(medical))
                console.log(localStorage.medical)
                await history.push('/home');
            }
        }
        catch (e) {
            console.log(e)
        }
    }


    return(
        <div className="LoginForm">
            <div className="Container">
                <TextField label = "Enter Id" value = {mid} onChange={(e)=>{setMid(e.target.value)}}/>
                <TextField label = "Enter Password" value = {pw} onChange={(e)=>{setPw(e.target.value)}}/>
                <Button className = "btnStyle" variant="contained" color = "primary" onClick={checkAuth}>Click</Button>
                {str}
            </div>
        </div>
    )
}

export default LoginForm;