import Container from './container.class.js';

/**
 * @param service {string} name of the service to be injected
 */
export default function injectable(service = '') {
  return (value, { name }) => {
    if (typeof service === 'string' && service !== '') {
      console.log(`injectable: ${service}`);
      Container.set(service, value);
      return;
    }
    console.log(`injectable: ${name}`);
    Container.set(name, value);
  };
}
