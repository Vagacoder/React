import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTheme, withTheme, makeStyles, createStyles } from '@material-ui/styles';
import { MyTheme } from './App';

const useStyles = makeStyles((theme: MyTheme) => {
    return createStyles({
        child3: {
            backgroundColor: theme.background,
            color: "lime",
        }
    })
})

// const theme = useTheme<MyTheme>();
// const useStyles = makeStyles( {
//         child3: {
//             backgroundColor: theme.background,
//             color: "lime",
//         }
// });

const Child3 = () => {
    const classes = useStyles();

    return (
        <div className={classes.child3}>
            Child 3
        </div>
    );

}

export default Child3;