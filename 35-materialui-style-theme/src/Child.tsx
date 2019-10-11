import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTheme, withTheme, makeStyles, createStyles } from '@material-ui/styles';
import { MyTheme } from './App';

const Child1 = () => {
    const thisTheme = useTheme<MyTheme>();

    // #1 ====================================
    // const useStyle = makeStyles(
    //     {
    //         bold:{
    //             backgroundColor: thisTheme.background,
    //         },
    //     }
    // );
    // const classes = useStyle(thisTheme);
    // =======================================

    // #2 ====================================
    const useStyle = makeStyles((theme:MyTheme) => {
        return (createStyles(
            {
                bold:{
                    backgroundColor: theme.background,
                }
            }
        ));
    });
    const classes = useStyle(thisTheme);
    // =======================================

    // #3 ====================================
    // const classes1 = createStyles(
    //     {
    //         bold: {
    //             backgroundColor: thisTheme.background,
    //         }
    //     }
    // );
    // ========================================

    return (
        <div>
            <h4>Child 1, Sample text. </h4>
            <p>Theme is based on theme providers: </p>
            <p className={classes.bold}>{thisTheme.background}</p>
            <p>`class name of bold is: ${classes.bold}`</p>
        </div>
    );
}

export default withTheme(Child1);