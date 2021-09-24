import global from './global.json';

export default (KEY) => {
  return global[KEY] || KEY;
};
