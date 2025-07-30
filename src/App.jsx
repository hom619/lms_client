import "./App.css";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
function App() {
  toast.success("Hello There");
  return (
    <>
      <Button>Click me</Button>
      <h1>Coming Soon..</h1>
      <ToastContainer />
    </>
  );
}

export default App;
