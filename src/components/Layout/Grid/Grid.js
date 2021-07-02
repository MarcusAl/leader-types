import './Layout.css';

// Create the grid structure for the page
const Grid = (props) => {
  const classes = 'grid ' + props.className;
  return <div className={classes}>{props.children}</div>
}

export default Grid;