import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTheme, withTheme, makeStyles, createStyles } from '@material-ui/styles';
import { MyTheme } from './App';

// Overriding styles, classes prop (it is styles here)
// makeStyles generate a style rule.
const useStyles = makeStyles({
    //each style rule containes its own class names
    header: {
        background: "dodgerblue",
        color: 'gold',
    }
})

const Child2 = (props : any) => {

    // classes variable (styles here) providing class names
    const styles = useStyles();

    return (
        <div>
            <div className={styles.header}>Header and headline</div>
            Child 2. 
            Sample text.
        </div>
    );
}

export default Child2;