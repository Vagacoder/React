import React from 'react';
import {
  Card, Checkbox, Dialog, Grid, List, ListItem, ListItemText, makeStyles, TextField, Button,
  Select, MenuItem, Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  popup: {
    padding: "20px",
    width: "800px",
    height: "800px",
    overflowY: "scroll",
  },
  buttonGrid: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
  },
  confirm: {
    padding: "20px",
    width: "600px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
  },
});

const App: React.FC = () => {
  const classes = useStyles({});

  return (
    <div className="App">
      <Dialog open={true} maxWidth={"lg"} >
        <Card className={classes.confirm}>
          <List>
            <ListItem>
              <Typography variant="h6">
                New Venue Is Created. Your Inquiry Information Is Updated</Typography>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => { }}
              >Close</Button>
            </ListItem>
          </List>
        </Card>
      </Dialog>
    </div>
  );
}

export default App;
