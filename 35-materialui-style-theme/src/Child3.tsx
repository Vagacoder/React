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

const Child3 = (props: any) => {
    const classes = useStyles();

    return (
        <div>
            <h4>Child 3</h4>
            Combine the theme and overriding style:
            Use background style and add new style for text color
            <div className={classes.child3}>{`${classes.child3}`}</div>
        </div>
    );

}

export default Child3;