import CasinoIcon from '@material-ui/icons/Casino';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    container: {
      textAlign: 'center',
    },
  };
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <IconButton>
        <CasinoIcon />
      </IconButton>
    </div>
  );
}

export default App;
