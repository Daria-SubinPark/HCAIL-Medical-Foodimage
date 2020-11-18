import React from 'react';
import DatePicker from "react-datepicker";
import {Button} from "@material-ui/core";
import "react-datepicker/dist/react-datepicker.css";

function DateSearchForm ({startDate, endDate, onChangeStartDate, onChangeEndDate, getPlist})
{
    return(
        <div>
            <div className="dateBoxStyle">
                날짜별로 검색하세요 :
                <div className="dateStyle">
                    Start Date
                    <DatePicker dateFormat="yyyy/MM/dd" selected={startDate} onChange={onChangeStartDate} />
                </div>
                <div className="dateStyle">
                    End Date
                    <DatePicker dateFormat="yyyy/MM/dd" selected={endDate} onChange={onChangeEndDate}/>
                </div>
                <Button className = "btnStyle" variant="contained" color = "primary" onClick={getPlist}>Click</Button>
            </div>
        </div>
    )
}

export default DateSearchForm;