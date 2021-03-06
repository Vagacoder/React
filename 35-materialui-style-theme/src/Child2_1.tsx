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

const Child2_1 = (props: any) => {

    // classes variable (styles here) providing class names
    const styles = useStyles();

    return (
        <div>
            <h4>Child 2.1</h4>
            <p>Override the theme colors</p>
            <p>Theme here is:</p>
            <div className={styles.header}>{`color: ${styles.header}`}</div>
        </div>
    );
}

export default Child2_1;