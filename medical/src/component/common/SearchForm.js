import React from 'react';
import {Button, TextField} from "@material-ui/core";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SearchForm({pname, onChangePname, startDate, endDate, onChangeStartDate, onChangeEndDate, searchPhoto})
{
    return(
        <div>
            <div>
                환자 이름으로 검색하세요 :
                <TextField value = {pname} onChange={onChangePname}/>
            </div>
            <div className="dateBoxStyle">
                날짜별로 검색하세요 :
                <div className="dateStyle">
                    시작일 
                    <DatePicker dateFormat="yyyy/MM/dd" selected={startDate} onChange={onChangeStartDate} />
                </div>
                <div className="dateStyle">
                    종료일  
                    <DatePicker dateFormat="yyyy/MM/dd" selected={endDate} onChange={onChangeEndDate}/>
                </div>
            </div>
            <Button className = "btnStyle" variant="contained" color = "primary" onClick={searchPhoto}>검색</Button>
    </div>
    )
}

export default SearchForm;