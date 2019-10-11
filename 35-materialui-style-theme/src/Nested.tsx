import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    context:{}
})

const Nested = (props : any) => {

    const classes = useStyles(props.classes);

    return (
        <div className={classes.context}>
            Nested contents
        </div>
    );
}

export default Nested;