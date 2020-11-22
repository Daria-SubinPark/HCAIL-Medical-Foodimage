import React from 'react';
import {ListItem, ListItemText} from '@material-ui/core'

function PhotoNameListForm({history, dataSet, startDate, endDate}) {
    console.log(dataSet)

    let saveDateandMid = async (pid) =>
    {
        try
        {
            await localStorage.setItem('pid', JSON.stringify(pid))
            await history.push('/photo')
        }
        catch(e)
        {
            console.log('Cant change to photo page')
        }
    }

    return (
        dataSet[0] ?(
            dataSet.map((data)=>
            (
                <ListItem button key={data.name} onClick={()=> {saveDateandMid(data.pid).then()}}>
                    <ListItemText primary={data.name} />
                </ListItem>
            ))):
        (<div/>)
    )
}

export default PhotoNameListForm;