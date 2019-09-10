import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: any;
//   value: any;
// };

function TabPanel(props){
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="simple tabs example"
        centered>
          <Tab 
          label="Item One -- Try a long label and wrap it inside box."
          wrapped
          {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} disabled />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        ABC
      </TabPanel>
      <TabPanel value={value} index={1}>
        789
      </TabPanel>
      <TabPanel value={value} index={2}>
        JFK
      </TabPanel>
    </div>
  );
}

export default App;
