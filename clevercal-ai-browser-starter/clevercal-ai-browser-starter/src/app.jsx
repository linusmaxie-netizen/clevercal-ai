/* CleverCal.ai — Browser Starter (React + CDN)
   - Keine Installation nötig
   - Später migrierbar zu Vite/Next/Expo
*/
const { useState } = React;

const Logo = () => (
  <div className="logo">
    <img src="./assets/clevercal-logo.svg" alt="CleverCal.ai" />
    <div>
      <h1>CleverCal.ai</h1>
      <p>Kalorienzähler & Coach</p>
    </div>
  </div>
);

const Nav = ({ tab, setTab }) => (
  <nav className="nav">
    {["Home","Tracker","Coach","Profil"].map(t => (
      <button key={t}
        className={tab===t ? "active":""}
        onClick={()=>setTab(t)}>{t}</button>
    ))}
  </nav>
);

const CalorieCard = () => {
  const [kcal, setKcal] = useState(0);
  const [target, setTarget] = useState(2200);
  return (
    <section className="card">
      <h2>Heutige Kalorien</h2>
      <div className="kcal">
        <strong>{kcal}</strong><span>/ {target} kcal</span>
      </div>
      <div className="row">
        <input type="number" placeholder="z.B. 450" onChange={e=>setKcal(Number(e.target.value)||0)} />
        <button onClick={()=>setKcal(0)}>Reset</button>
      </div>
      <small>Tipp: Später Lebensmittel-Scanner & DB anbinden.</small>
    </section>
  );
};

const CoachCTA = () => (
  <section className="card">
    <h2>Coach</h2>
    <p>Erhalte tägliche Empfehlungen zu Mahlzeiten, Bewegung & Hydration.</p>
    <div className="row">
      <button>Starte Check-in</button>
      <button className="ghost">Ziele anpassen</button>
    </div>
    <small>API-Hook: /coach/checkin (später).</small>
  </section>
);

const Home = () => (
  <main className="container">
    <Logo/>
    <CalorieCard/>
    <CoachCTA/>
  </main>
);

const Placeholder = ({title}) => (
  <main className="container">
    <Logo/>
    <section className="card">
      <h2>{title}</h2>
      <p>Hier entsteht der {title}-Bereich. TODOs siehe README.</p>
    </section>
  </main>
);

const App = () => {
  const [tab,setTab] = useState("Home");
  return (
    <div className="app">
      {tab==="Home" && <Home/>}
      {tab==="Tracker" && <Placeholder title="Tracker"/>}
      {tab==="Coach" && <Placeholder title="Coach"/>}
      {tab==="Profil" && <Placeholder title="Profil"/>}
      <Nav tab={tab} setTab={setTab}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
