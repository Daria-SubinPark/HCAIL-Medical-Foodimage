import React, {useState} from 'react';
import {ListItem, ListItemText} from '@material-ui/core'

import {getPhotoList} from "../../api/photo";

function PNameListForm({history, dataSet, startDate, endDate, nextPage}) {
    const [tileData, setTileData] = useState([]);
    
    let setTilePhoto = async (pid) =>
    {
        let data;
        try
        {
            data = await getPhotoList(startDate, endDate, pid);
            setTileData(data)
        }
        catch (err)
        {
            console.log(err)
        }
    }


    return (
        dataSet ?(
            dataSet.map((data)=>
            (
                <div>
                    <ListItem button key={data.pname} onClick={()=>nextPage(data)}>
                        <ListItemText primary={data.pname} />
                    </ListItem>
                </div>
            ))):
        (<div/>)
    )
}

export default PNameListForm;