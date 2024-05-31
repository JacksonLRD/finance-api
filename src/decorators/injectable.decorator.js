import Container from './container.class.js';

export default function injectable() {
  return (value, { name }) => {
    Container.set(name, value);
    console.log(`Container.get: ${name}`, Container.get(name));
  };
}
