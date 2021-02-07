import React from 'react';
import moment from 'moment';
import {GridList, GridListTile, GridListTileBar, ListSubheader} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import CommentForm from "../common/CommentForm";

const useStyles = makeStyles((theme) =>
    ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
            justifyContent: 'center',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            display: 'flex',
            width: "200px",
            height: "auto",
            justifyContent: 'center',
            alignItems : 'center'
        },
        titleBar : {
            width: "auto",
            margin: "auto",
            background: 'rgba(0, 0, 0, 0.5)',
        },
        titlebox : {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: "auto",
            alignItems : 'center'
        }
    }));


function PhotoListForm({tileData}) {

    const classes = useStyles();
    console.log(tileData)

    return (
        tileData.length != 0 ?(
        <div>
            <GridList cellHeight='auto' className={{width: "auto"}} cols={1}>
                <GridListTile key="Subheader" cols={1} className={classes.gridList}>
                    <ListSubheader component="div">사진 목록</ListSubheader>
                </GridListTile>
                    <div>
                        {tileData.map((tile) => (
                            <div className = {classes.titlebox}>
                                <GridListTile key={tile.img} className={classes.gridList}>
                                    <img src={"https://frserver.hcail.ml/"+tile.filename+".png"} alt={tile.filename} />
                                    <GridListTileBar
                                        className= {classes.titleBar}
                                        title={""}
                                        subtitle={<span>date: {moment(tile.date).format('YYYY MM DD HH:mm:ss')}</span>}
                                    />
                                </GridListTile>
                                <CommentForm
                                    tile = {tile}
                                />
                            </div>
                            
                        ))}
                    </div>
            </GridList>
        </div>)
        : (<div className = {classes.titlebox}>  사진 없음</div>)
    )
}

export default PhotoListForm;