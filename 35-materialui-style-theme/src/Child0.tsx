import React from 'react';
import { makeStyles } from '@material-ui/styles';


// theme arg of makeStyles() is passed automatically
const useStyles = makeStyles((MUItheme: any) => {
    return {
        tag: {
            background: MUItheme.palette.primary.main,
            color: MUItheme.palette.secondary.main,
        },
    }
})

// I don;t event need useTheme() or withTheme to get theme
// the hook of useStyles is auto pass theme arg to makeStyles()
const Child0 = (props: any) => {

    const styles = useStyles();

    return (
        <div>
            <h4>Child 0.</h4>
            <p>Another theme</p>
            <div className={styles.tag}>{`color: pink on grey`}</div>
        </div>
    );
}

export default Child0;