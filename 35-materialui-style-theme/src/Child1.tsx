import React from 'react';
import { useTheme, withTheme, makeStyles, createStyles } from '@material-ui/styles';
import { MyTheme } from './App';

const Child1 = (props: any) => {

    // #1 ====================================
    // const thisTheme = useTheme<MyTheme>();
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
    // we can the theme provided from ThemeProvider by
    // 1. useTheme(); 2. { theme } = props;
    const { theme } = props;

    // the hook useStyle is made by makeStyles()
    // makeStyle takes function (e.g. createStyles) or a style object (like below)
    // the hook useStyle can be outside of component, since it is independent to 
    // the component which use it, and is called insided that component.
    const useStyle = makeStyles((theme: MyTheme) => {
        // return (createStyles(
        return {
            bold: {
                color: theme.color,
                backgroundColor: theme.background,
                fontSize: "1.5em",
                fontWeight: "bold",
            }
        }
        // ));
    });

    // useStyle can take props or props.theme as arg
    const classes = useStyle(props);
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
            <p className={classes.bold}>{theme.background}</p>
            <p>`class name of bold is: ${classes.bold}`</p>
        </div>
    );
}

export default withTheme(Child1);