import React, {useState} from 'react';
import {TextField, ListItem, ListItemText} from '@material-ui/core'
import saveComment from "../../api/comment";

function CommentForm({tile}) {
    const [comment, setComment] = useState('');

    const onChangeComment = e =>
    {
        setComment(e.target.value)
    }


    return (
        <div>
            <ListItem button onClick={()=>saveComment(tile._id, localStorage.medical.__id, comment)} style={{weight:"auto", backgroundColor: 'green'}}>
                <ListItemText primary={"저장"} style={{color: 'white'}} />
            </ListItem>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Default Value"
                style={{ height: 'auto' }}
                variant="outlined"
                fullWidth
                onChange={onChangeComment}
            />
        </div>
    );
}

export default CommentForm;