import React, { useState } from 'react';
import { Button, IconButton, makeStyles, TextField } from '@material-ui/core';

import CasinoIcon from '@material-ui/icons/Casino';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles(() => {
  return {
    container: {
      textAlign: 'center',
    },
  };
});

function App(): JSX.Element {
  const classes = useStyles();

  const [games, setGames] = useState([{ csgo: 'csgo' }]);

  const onPickClicked = () => {
    console.log('clicked');
  };

  return (
    <div className={classes.container}>
      <TextField id="gameName" label="Game" variant="outlined" />
      <IconButton>
        <AddBoxIcon />
      </IconButton>

      <br />
      <br />
      <Button
        variant="contained"
        startIcon={<CasinoIcon />}
        endIcon={<CasinoIcon />}
        size="large"
        onClick={onPickClicked}
      >
        Pick for me!
      </Button>
    </div>
  );
}

export default App;
