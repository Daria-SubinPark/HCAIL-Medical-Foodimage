import React from 'react';
import {GridList, GridListTile, GridListTileBar, ListSubheader} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import CommentForm from "./CommentForm";

const useStyles = makeStyles((theme) =>
    ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            overflow: 'hidden',
            justifyContent: 'space-around',
            backgroundColor: theme.palette.background.paper,

        },
        gridList: {
            width: "auto",
            height: "auto",

        },
        titleBar : {
            width: "auto",
            margin: "auto",
            background: 'rgba(0, 0, 0, 0.5)',
        }
    }));


function PhotoListForm({tileData}) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight='auto' className={classes.gridList} cols={1}>
                <GridListTile key="Subheader" cols={1} style={{ height: 'auto' }}>
                    <ListSubheader component="div">Photo List</ListSubheader>
                </GridListTile>
                <div>
                    {tileData.map((tile) => (
                        <div>
                            <GridListTile key={tile.img}>
                                <img src={tile.img} alt={tile.filename} />
                                <GridListTileBar
                                    className= {classes.titleBar}
                                    title={tile.filename}
                                    subtitle={<span>date: {tile.date}</span>}
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
    );
}

export default PhotoListForm;