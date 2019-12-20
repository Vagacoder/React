import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useTheme, withTheme, makeStyles, createStyles } from '@material-ui/styles';
import { MyTheme } from './App';

// Not overriding styles, classes prop (it is styles here)
// take the theme from props, withTheme(Child2);
// makeStyles generate a style rule.
const useStyles = makeStyles((theme: MyTheme) => {
    //each style rule containes its own class names
    return {
        header: {
            background: theme.background,
            color: theme.color,
        }
    }
})

const Child2 = (props: any) => {

    const { theme } = props;
    // classes variable (styles here) providing class names
    const styles = useStyles();

    console.log(theme);
    return (
        <div>
            <h4>Child 2.</h4>
            <p>Not override the theme colors</p>
            <p>Theme here is:</p>
            <div className={styles.header}>{`color: ${theme.color}`}</div>
        </div>
    );
}

export default withTheme(Child2);