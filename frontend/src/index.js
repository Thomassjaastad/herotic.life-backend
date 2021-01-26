import React from 'react';
import ReactDOM from 'react-dom';
import { Item } from './Item';
import { items } from './items';

function App() {
  return (
  <div className= "App">
    <header className="App-header">
      <div></div>
    </header>
    <Itemlist></Itemlist>
  </div>  
  );
}

function Itemlist() {
  return (
    <section className="itemlist">
      {items.map((item) => {
        return (
          <Item key={item.id} item={item}>
            {" "}
          </Item>
        );
      })}
    </section>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));

