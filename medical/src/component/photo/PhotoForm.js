import React, {useState} from 'react';
import PhotoListForm from "../common/PhotoListForm";
import "react-datepicker/dist/react-datepicker.css";
import {searchPhotoByDateinUser, searchPhotoByUser} from "../../api/photo";


function PhotoForm({history})
{
    const [tileData, setTileData] = useState([])

    let setData = () =>
    {
        let data;
        try
        {
            if(!localStorage.getItem("startDate"))
                data = searchPhotoByUser(localStorage.pid)
            else
                data = searchPhotoByDateinUser(localStorage.pid, localStorage.startDate, localStorage.endDate);
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