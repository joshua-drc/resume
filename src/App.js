import './App.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img style={{width: 120, height: 120, borderRadius: 120/2}} src="./profile.png" alt="profile_picture" />
        <Typography style={{fontSize: 30}}>
          Joshua D'Arcy, M.D.
        </Typography>
        <Typography style={{fontSize: 16, align:"center", color: "lightgrey"}}>
          Machine Learning Engineer
        </Typography>
        <Typography style={{fontSize: 16, align:"center", color: "lightgrey"}}>
          Full Stack Developer
        </Typography>
        <Typography style={{fontSize: 8, align:"center", color: "lightgrey"}}>
          <i>(Resume website under development)</i>
        </Typography>
      </header>
    </div>
  );
}

export default App;
