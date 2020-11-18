import React, {useState} from 'react';
import PhotoListForm from "../common/PhotoListForm";
import "./App.css"
import "react-datepicker/dist/react-datepicker.css";
import {searchPhotoByDateinUser, searchPhotoByUser} from "../../api/photo";


function PhotoForm({history})
{
    const [tileData, setTileData] = useState([])

    let setData = () =>
    {
        try
        {
            if(!startDate)
                let data = searchPhotoByUser(localStorage.pid)
            else
                let data = searchPhotoByDateinUser(localStorage.pid, localStorage.startDate, localStorage.endDate);
            setTileData(data)
        }
        catch (err)
        {
            console.log(err)
        }
    }

    return (
        <PhotoListForm
            tileData={tileData}
        />
    );
}

export default PhotoForm;