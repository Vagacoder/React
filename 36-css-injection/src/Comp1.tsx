import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

const useStyle1 = makeStyles({
    root: {
        color: "dodgerblue",
        margin: "10px",
        padding: "20px",
        border: "2px solid blue"
    }
})

const useStyle2 = makeStyles({
    root: {
        color: "pink",
        margin: "20px",
        padding: "50px",
        border: "1px solid black"
    }
})

// Comp1 testing the order of css: 
// The injection of style tags happens in the same order as 
// the makeStyles / withStyles / styled invocations.
const Comp1 = (props: any) => {
    const classes1 = useStyle1();
    const classes2 = useStyle2();

    const classNames = clsx(classes1.root, classes2.root);

    return (
        <div className={classNames}>Comp1</div>
    );
}

export default Comp1;