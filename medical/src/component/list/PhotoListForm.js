import React from 'react';
import moment from 'moment';
import {GridList, GridListTile, GridListTileBar, ListSubheader} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import CommentForm from "../common/CommentForm";
import sample1 from "./img/sample1.png"
import sample2 from "./img/sample2.png"

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
            width: "300px",
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
            marginRight: "5px",
            alignItems : 'center'
        },
        columnbox: {
            display: 'flex',
            justifyContent: 'center',

        }
    }));


function PhotoListForm({tileData}) {

    const classes = useStyles();
    console.log(tileData)

    return (
        tileData[0] !== [] || tileData.length === 0 ?(
            <GridList cellHeight='auto' className={{width: "auto"}} cols={1}>
                <GridListTile key="Subheader" cols={1} className={classes.gridList}>
                    <ListSubheader component="div">샘플</ListSubheader>
                </GridListTile>
                <div className={classes.columnbox}>
                    <div className = {classes.titlebox}>
                        <GridListTile key={sample1} className={classes.gridList}>
                            <img src={sample1} alt={"sample1-before"} />
                            <GridListTileBar
                                className= {classes.titleBar}
                                title={"sample1-before"}
                                subtitle={<span>date: {moment(new Date()).format('YYYY MM DD HH:mm:ss')}</span>}
                            />
                        </GridListTile>
                    </div>
                    <div className = {classes.titlebox}>
                        <GridListTile key={sample2} className={classes.gridList}>
                            <img src={sample2} alt={"sample2-before"} />
                            <GridListTileBar
                                className= {classes.titleBar}
                                title={"sample2-after"}
                                subtitle={<span>date: {moment(new Date()).format('YYYY MM DD HH:mm:ss')}</span>}
                            />
                        </GridListTile>
                    </div>
                    <CommentForm
                        tile = {"none"}
                    />
                </div>
            </GridList>
            )
        :(
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
            </div>
        )
    )
}

export default PhotoListForm;