import 'yuki-createjs';

window.onload = () => {
  console.log(createjs);
  const canvas = document.getElementById('main');
  const stage = new createjs.Stage(canvas);
  let circle = new createjs.Shape();
  circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  stage.addChild(circle);
  stage.update();
  console.log('OK');
}
