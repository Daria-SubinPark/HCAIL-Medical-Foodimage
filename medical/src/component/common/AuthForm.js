import React, {useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import PhotoListForm from '../list/PhotoListForm';

const useStyles = makeStyles((theme) =>
    ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
            marginBottom: "5%",
            justifyContent: 'center',
            height: '50px',
            alignItems: 'center',
            backgroundColor: 'rgba(33, 203, 243, .3)',
        },
    }));



function AuthForm() {
    const classes = useStyles();
    const [mname, setMname] = useState("")

    let checkUser = () =>
    {
        if(localStorage.getItem("medical"))
        {
            const medical = JSON.parse(localStorage.medical);
            console.log(medical.mname)
            setMname(medical.mname)
        }
        return;
    }

    useEffect(() => {
        checkUser();
    },[])
    
    return (
        <div>
            <div className={classes.root}>
                {mname}
            </div>
        </div>
    );
}

export default AuthForm;