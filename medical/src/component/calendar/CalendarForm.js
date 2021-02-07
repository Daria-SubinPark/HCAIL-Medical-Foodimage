import React, {useState, useEffect} from 'react';
import Calendar from 'react-calendar';
import {Button} from "@material-ui/core";
import 'react-calendar/dist/Calendar.css';
import './CalendarForm.css'

import AuthForm from "../common/AuthForm";
import PhotoListForm from "../list/PhotoListForm"
import {getPhotoList} from "../../api/photo";


function CalendarForm({history}) {
    const [value, onChange] = useState(new Date());
    const [tileData, setTileData] = useState([]);
    const [target, setTarget] = useState("");
    
    let setPatient = () =>
    {
        if(localStorage.getItem("patient"))
        {
            const target = JSON.parse(localStorage.patient);
            console.log(target)
            setTarget(target)
        }
        return;
    }
    
    const setTilePhoto = async () =>
    {
        let data;
        try
        {
            let startValue = new Date(value)
            let endValue = new Date(value)
            startValue = new Date(startValue.setDate(startValue.getDate()))
            endValue = new Date(endValue.setDate(endValue.getDate()+1))
            console.log(startValue, endValue)
            data = await getPhotoList(startValue, endValue, target._id);
            setTileData(data)
        }
        catch (err)
        {
            console.log(err)
        }
    }
    
    useEffect(() => {
        setPatient();
        setTilePhoto();
    },[])

    useEffect(() => {
        console.log(value)
        setTilePhoto();
    },[value])

    return (
        <div>   
            <AuthForm />
            <div className="Button"> 
                <Button 
                    className = "btnStyle" 
                    variant="contained" 
                    color = "primary" 
                    onClick={()=>history.push('/home')}>
                        이전
                </Button>
            </div>
            <div className="Pnamebox">   
                환자 이름 : {target.pname}
            </div>
            <div className='Calendarbox'>
                <Calendar
                    className='Calendar'
                    onChange={onChange}
                    value={value}
                    calendarType="US"
                />
            </div>
            <PhotoListForm tileData={tileData}/>
        </div>
    );
}

export default CalendarForm;