import './App.css';
import ArmyList from './components/ArmyList'

function App() {
  return (
    <div className="App" style={{height:'100%', minHeight:'100vh', 
      backgroundColor:'black', display:'flex', flexDirection:'column',
      backgroundImage: 'url("https://images.creativemarket.com/0.1.0/ps/3117853/580/580/m2/fpnw/wm1/1607.m00.i101.n021.p.c25.179331677-space-w-.jpg?1502726817&s=d00f90f4291db19fe03ed4f1989944e8")'
      }}>

        <h1 style={{color:'yellow'}}>Clone Army Builder (Palpatine's Playset)</h1>
        <ArmyList />
    </div>
  );
}

export default App;
