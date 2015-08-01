import Debug from 'debug';
import App from '../../app';

var attachElement = document.getElementById('app');

var state = {
  users: [
    {
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
    },

    {
      name: 'Ming',
      items: [
        {
          name: 'Bunny',
          color: 'blue',
          weight: 0
        },
        {
          name: 'Phone',
          color: 'Sandblasted Aluminum',
          weight: 0.4
        },
        {
          name: 'Camera',
          color: 'black',
          weight: 5
        }
      ]
    }
  ]
};

var app;

Debug.enable('myApp*');

// create new app, attach to element

app = new App({
  state: state
});

app.renderToDOM(attachElement);
