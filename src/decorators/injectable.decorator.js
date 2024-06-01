import Container from './container.class.js';

export default function injectable(serviceName = '') {
  return (value, { name }) => {
    if (typeof serviceName === 'string' && serviceName !== '') {
      console.log(`injectable: ${serviceName}`);
      return Container.set(serviceName, value);
    }
    console.log(`injectable: ${name}`);
    return Container.set(name, value);
  };
}
