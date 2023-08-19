import { ReactDOM } from 'react';
import { App } from './App';


const rootDiv = document.getElementById("root");

const reactRoot = ReactDOM.createDiv(rootDiv);

reactRoot.render(<App></App>);