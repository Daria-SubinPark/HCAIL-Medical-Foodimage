import React, {useState} from 'react';
import {TextField, ListItem, ListItemText} from '@material-ui/core'
import {sendComment} from "../../api/photo";

function CommentForm({tile}) {
    const [comment, setComment] = useState('');

    const onChangeComment = e =>
    {
        setComment(e.target.value)
    }


    return (
        <div>
            <ListItem button onClick={()=>sendComment(tile._id, tile.mid, comment)} style={{backgroundColor: 'green'}}>
                <ListItemText primary={"Send"} style={{color: 'white'}} />
            </ListItem>
            <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Default Value"
                style={{ margin: 8, height: 'auto' }}
                variant="outlined"
                fullWidth
                onChange={onChangeComment}
            />
        </div>
    );
}

export default CommentForm;