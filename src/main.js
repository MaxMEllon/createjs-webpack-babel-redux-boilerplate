import 'yuki-createjs';
import 'babel-polyfill';
import { sample } from './actions';

import store from './store';

window.onload = () => {
  const canvas = document.getElementById('main');
  const stage = new createjs.Stage(canvas);
  const circle = new createjs.Shape();

  circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;

  circle.addEventListener('click', () => store.dispatch(sample()));

  store.subscribe(() => {
    const state = store.getState();
    circle.x = state.sample.x;
    circle.y = state.sample.y;
    stage.update();
  });

  stage.addChild(circle);
  stage.update();
};

