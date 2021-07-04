import './Layout.css';

// Create the grid structure for the page
const Container = (props) => {
  const classes = 'container ' + props.className;
  return <div className={classes}>{props.children}</div>
}

export default Container;