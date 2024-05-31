import Container from './container.class.js';

/**
 * @param service {string}
 */
export default function inject(service) {
  return function () {
    return function () {
      return Container.get(service);
    };
  };
}
