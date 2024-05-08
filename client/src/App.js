import "./App.css";
import Form from "./pages/Form";
import axios from "axios";
axios.defaults.baseURL = "https://new-form-api-git-main-prathamhubs-projects.vercel.app/";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <Form />
    </>
  );
}

export default App;
