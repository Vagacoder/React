import * as React from 'react';
import { useState, useEffect } from 'react';
// import { render } from 'react-dom';

import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup'
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Add from '@material-ui/icons/Add';
import Delete from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: '100%'
  },
  arrangementCard: {
    minHeight: '10px'
  },
  header: {
    position: 'relative',
    width: '600px',
  },
  arrangementTitle: {
    display: 'inline-block',
    width: '70%',
  },
  expand: {
    float: 'right',
    display: 'inline-block',
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: 'transform 0.3s',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  plusIcon: {
    float: 'right',
    display: 'inline-block',
    paddingLeft: '7px',
    paddingRight: '7px',
  },
  deleteIcon: {
    float: 'right',
    display: 'inline-block',
    paddingRight: '3px',
  },
  content: {
    position: 'relative',
  },
  leftCol: {
    float: 'left',
    width: '40%'
  },
  rightCol: {
    float: 'right',
    width: '58%'
  },
  description: {

  },
  note: {

  },
  qty: {

  },
  price: {

  },
  label: {

  },
  progress: {
    margin: '2px'
  },
  image: {

    width: '90%',
    height: 0,
    paddingTop: '80%',
    display: 'block',
    backgroundsize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  options: {

  },
  formControl: {

  },
  group: {

  },
  formLabel: {
    fontSize: '14px',
  }
}));

interface IClientViewArrangementCard {
  arrangementData: any
  addNewArrangement: any
  removeThisArrangement: any
}

const ClientViewArrangementCard: React.SFC<IClientViewArrangementCard> = (props) => {
  enum Options {
    Arrangement,
    Optional,
    Hidden,
  };

  const classes = useStyles(props);

  const [arrangementData, setArrangementData] = useState(props.arrangementData);
  const [isExpanded, setIsExpanded] = useState(true);
  const [option, setOption] = useState(Options.Arrangement);

  const handleNameChange = (e: any) => {
    let newName = e.currentTarget.value;
    let newArrangementData = arrangementData;
    newArrangementData.name = newName;
    setArrangementData(newArrangementData);
  };

  const handleDescriptionChange = (e: any) => {
    let newDescription = e.currentTarget.value;
    let newArrangementData = arrangementData;
    newArrangementData.description = newDescription;
    setArrangementData(newArrangementData);
  };

  const handleNoteChange = (e: any) => {
    let newNote = e.currentTarget.value;
    let newArrangementData = arrangementData;
    newArrangementData.note = newNote;
    setArrangementData(newArrangementData);
  };

  const handleQtyChange = (e: any) => {
    let newQty = e.currentTarget.value;
    let newArrangementData = arrangementData;
    newArrangementData.qty = newQty;
    setArrangementData(newArrangementData);
  };

  const handlePriceChange = (e: any) => {
    let newPrice = e.currentTarget.value;
    let newArrangementData = arrangementData;
    newArrangementData.price = newPrice;
    setArrangementData(newArrangementData);
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  }

  const handleOptions = (e: React.ChangeEvent<unknown>) => {

    switch ((e.currentTarget as HTMLInputElement).value) {
      case "0": {
        setOption(Options.Arrangement);
        break;
      }
      case "1": {
        setOption(Options.Optional);
        break;
      }
      case "2": {
        setOption(Options.Hidden);
        break;
      }
      default: {
        setOption(Options.Arrangement);
        break;
      }
    };
  }

  return (
    <div className={classes.container}>
      {(arrangementData)
        ?
        <Card className={classes.arrangementCard}>
          <CardActionArea>
            <CardActions disableSpacing>
              <div className={classes.header}>
                <div className={classes.arrangementTitle}>
                  <TextField
                    id="name"
                    type="text"
                    defaultValue={arrangementData.name}
                    onChange={handleNameChange}
                    fullWidth={true}
                  ></TextField>
                </div>

                <div
                  data-testid="deleteIcon"
                  className={classes.deleteIcon}
                  onClick={props.removeThisArrangement}>
                  <Delete></Delete>
                </div>

                <div
                  data-testid="plusIcon"
                  className={classes.plusIcon}
                  onClick={props.addNewArrangement}>
                  <Add></Add>
                </div>

                <div
                  data-testid="expandIcon"
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: isExpanded,
                  })}
                  onClick={handleExpand}
                >
                  <ExpandMoreIcon />
                </div>
              </div>
            </CardActions>
          </CardActionArea>
          <Collapse data-testid="collapse" in={isExpanded} timeout="auto" unmountOnExit>
            <CardContent data-testid="content" className={classes.content}>
              <div className={classes.leftCol}>
                <CardMedia
                  className={classes.image}
                  image={arrangementData.imgUrl}
                  title={arrangementData.name}
                />
              </div>

              <div className={classes.rightCol}>
                <div className={classes.description}>
                  <TextField
                    label="Description"
                    id="description"
                    type="text"
                    multiline
                    rows="3"
                    rowsMax="5"
                    defaultValue={arrangementData.description}
                    onChange={handleDescriptionChange}
                    margin="normal"
                  ></TextField>
                </div><br />
                <div className={classes.note}>
                  <TextField
                    label="Note"
                    id="note"
                    type="text"
                    multiline
                    rows="3"
                    rowsMax="5"
                    defaultValue={arrangementData.note}
                    onChange={handleNoteChange}
                  ></TextField>
                </div><br />
                <div className={classes.qty}>
                  <TextField
                    label="Qty"
                    id="qty"
                    type="number"
                    defaultValue={arrangementData.qty}
                    onChange={handleQtyChange}
                  ></TextField>
                </div><br />
                <div className={classes.price}>
                  <TextField
                    label="Price"
                    id="price"
                    type="number"
                    defaultValue={arrangementData.price}
                    onChange={handlePriceChange}
                  ></TextField>
                </div><br/>
              </div>
              <div className={classes.rightCol}>
                <div className={classes.options}>
                  <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup
                      aria-label="options"
                      name="options"
                      className={classes.group}
                      defaultValue={option.toString()}
                      onChange={handleOptions}
                    >
                      <FormControlLabel className={classes.formLabel} value="0" control={<Radio />} label="Arrangement" />
                      <FormControlLabel className={classes.formLabel} value="1" control={<Radio />} label="Optional (not included in proposal total)" />
                      <FormControlLabel className={classes.formLabel} value="2" control={<Radio />} label="Hidden (not included in proposal total)" />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

            </CardContent>
          </Collapse>

        </Card> :
        <div className='event-editable-table-loading'>
          <CircularProgress className={classes.progress} />
          <Typography>Loading...</Typography>
        </div>
      }
    </div>
  );
}

export default ClientViewArrangementCard;
