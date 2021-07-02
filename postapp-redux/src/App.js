import "bootstrap/dist/css/bootstrap.min.css";
import { Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import Save from "./pages/Save";
import Update from "./pages/Update";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={Main} />
      <Route path="/post" exact={true} component={Save} />
      <Route path="/post/:id" exact={true} component={Detail} />
      <Route path="/post/:id/update" exact={true} component={Update} />
    </div>
  );
}

export default App;
