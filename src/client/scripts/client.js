import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var state = {
  person: {
    name: 'Jacob',
    items: [
      {
        name: 'Car',
        color: 'grey',
        weight: 2300
      },
      {
        name: 'Phone',
        color: 'white',
        weight: 0.4
      },
      {
        name: 'macbook',
        color: 'Sandblasted Aluminum',
        weight: 5
      }
    ]
  }
};


Debug.enable('myApp*');

// create new app, attach to element

var app = new App({
  state: state
});

app.renderToDOM(attachElement);
