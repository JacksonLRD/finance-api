import DependencyInjectionContainer from './dependency-injection.container.js';

/**
 * @param service {string} name of the service to be injected
 */
export default function injectable(service = '') {
  return (value, { name }) => {
    if (typeof service === 'string' && service !== '') {
      DependencyInjectionContainer.set(service, value);
      return;
    }
    DependencyInjectionContainer.set(name, value);
  };
}
