import React from 'react'
import './style/NavBar.css'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className="menu">
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        // onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Home" href="/" />
        <Tab label="Registrar" href="/register" />
        <Tab label="Login" href="/login" />
        <Tab label="Logout" href="/logout" />
        <Tab label="Perfil" href="/profile" /> 
        <Tab label="Carro de compra" href="/cart" /> 
      </Tabs>
      <nav>
        <ul>
          <li className="dropDown"><a href="#">CATEGORIA</a>
            <ul>
              <li><a href="/cat/electric-guitar">GUITARRA ELECTRICA</a></li>
              <li><a href="/cat/electric-bass">BAJO ELÉCTRICO</a></li>
              <li><a href="/cat/concerto-guitar">GUITARRA DE CONCIERTO</a></li>
              <li><a href="/cat/drums">BATERÍA</a></li>
              <li><a href="/cat/keyboard">TECLADO</a></li>
            </ul>
          </li>
      </ul>
    </nav>
    </Paper>
  );
}
