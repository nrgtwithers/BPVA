import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Button from '@material-ui/core/Button';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Button variant="contained" color="primary">
//           Hello World
//     </Button>
//       </div>
//     );
//   }
// }
// export default App;
function App() {

  return (
   
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


