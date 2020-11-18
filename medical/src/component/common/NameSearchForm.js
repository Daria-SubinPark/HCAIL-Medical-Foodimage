import React from 'react';
import {Button, TextField} from "@material-ui/core";

function NameSearchForm({pname, onChangePname, getPimage})
{
    return(
        <div>
            환자 이름으로 검색하세요 :
            <TextField value = {pname} onChange={onChangePname}/>
            <Button variant="contained" color = "primary" onClick={getPimage}>Click</Button>
        </div>
    )
}

export default NameSearchForm;