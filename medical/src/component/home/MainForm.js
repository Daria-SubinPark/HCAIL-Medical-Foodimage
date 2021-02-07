import React, {useState, useEffect} from 'react';
import SearchForm from "../common/SearchForm"
import AuthForm from "../common/AuthForm"
import PNameListForm from '../list/PNameListForm';

import {getAllUser} from "../../api/auth"


import "./MainForm.css";

function MainForm({history})
{
    const [pname, setPname] = useState('');
    const [startDate, setStartDate] = useState(new Date(0));
    const [endDate, setEndDate] = useState(new Date());
    const [patientList, setPatientList] = useState([]);
    
    const onChangePname = e => { setPname(e.target.value) }

    const onChangeStartDate = date =>
    {
        setStartDate(date)
        localStorage.setItem('startDate', JSON.stringify(startDate))
    }

    const onChangeEndDate = date =>
    {
        setEndDate(date)
        localStorage.setItem('endDate', JSON.stringify(endDate))
    }

    const searchPhoto = async () =>
    {
        console.log("good")
    }

    const getNameList = async () =>
    {
        let patient = await getAllUser();
        setPatientList(patient)
    }

    let skipToCalender = async (data) =>
    {
        localStorage.setItem('patient', JSON.stringify(data))
        console.log(localStorage.patient)
        await history.push('/calendar');
    }


    useEffect(() => {
        getNameList();
    },[])

    useEffect(() => {
        console.log(patientList)
    }, [patientList])

    return (
        <div className="MainForm">
            <AuthForm />
            <div className="Container">
                <SearchForm
                    pname={pname}
                    onChangePname={onChangePname}
                    startDate={startDate}
                    endDate={endDate}
                    onChangeStartDate={onChangeStartDate}
                    onChangeEndDate={onChangeEndDate}
                    searchPhoto={searchPhoto}
                />
                <PNameListForm
                    dataSet = {patientList}
                    startDate={startDate}
                    endDate={endDate}
                    nextPage={skipToCalender}
                />
                
            </div>
        </div>
    )
}

export default MainForm;

//<PhotoListForm tileData={tileData}/>