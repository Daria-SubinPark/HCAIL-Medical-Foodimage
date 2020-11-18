import React, {useState} from 'react';
import NameSearchForm from '../common/NameSearchForm';
import DateSearchForm from '../common/DateSearchForm';
import PhotoNameListForm from '../common/PhotoNameListForm';
import searchPatientByName from '../../api/patient';
import {searchPhotoByDate} from "../../api/photo";

import "./MainForm.css";

function MainForm({history})
{
    const [pname, setPname] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dataSet, setDataSet] = useState([]);

    const onChangePname = e =>
    {
        setPname(e.target.value)
    }
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

    const getPimage = async () =>
    {
        let data = await searchPatientByName(pname);
        setDataSet([data])
    }

    const getPlist = async () =>
    {
        let data = await searchPhotoByDate(startDate,endDate);
        setDataSet([data])
    }

    return (
        <div className="MainForm">
            <div className="Container">
                <NameSearchForm
                    pname={pname}
                    onChangePname={onChangePname}
                    getPimage={getPimage}
                />
                <DateSearchForm
                    startDate={startDate}
                    endDate={endDate}
                    onChangeStartDate={onChangeStartDate}
                    onChangeEndDate={onChangeEndDate}
                    getPlist={getPlist}
                />
                <PhotoNameListForm
                    dataSet = {dataSet}
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
        </div>
    )
}

export default MainForm;