
// import _ from 'lodash';

/* const element = document.createElement('div');
element.innerHTML = _.join([ 'Hello', ' qiyapeng!' ], '-');
document.body.appendChild(element);*/

async function getComponent() {
  const { default: _ } = await import((/* webpackChunkName: "lodash" */'lodash'));
  const element = document.createElement('div');
  element.innerHTML = _.join([ 'a', 'b', 'c' ], '-');
  return element;
}

  /* return import(/!* webpackChunkName: "lodash" *!/'lodash').then(({ default: _ }) => {
    const element = document.createElement('div');
    element.innerHTML = _.join([ 'a', 'b', 'c' ], '-');
    return element;
  }*/

document.addEventListener('click', () => {
  getComponent().then(element => {
    document.body.appendChild(element);
  });
});
