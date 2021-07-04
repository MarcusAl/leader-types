import './Squares.css'

const Square1 = () => {
  return (
    <div className="container-squares">
      <div className="dice">
        <div className="side one"></div>
        <div className="side two"></div>
        <div className="side three"></div>
        <div className="side four"></div>
        {/* <div class="side five"></div> */}
        {/* <div class="side six"></div> */}
      </div> 
    </div>
  );
};

export {
  Square1
}