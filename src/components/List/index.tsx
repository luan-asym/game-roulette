import { Chip, makeStyles } from '@material-ui/core';
import { Games } from '@material-ui/icons';

interface ListType {
  items: any;
  onDelete: (key: string) => void;
}

const useStyles = makeStyles(() => ({
  chip: {},
}));

function List({ items, onDelete }: ListType) {
  const classes = useStyles();

  return (
    <>
      {Object.entries(items).map(([k, v]) => {
        <Chip key={k} label={`${k} -- ${v}`} onDelete={() => onDelete(k)} />;
      })}
    </>
  );
}

export default List;
