import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" style={{color:"green"}}/>
    </div>
  );
}

export default Loader;