import Container from './container.class.js';

/**
 * @param service {string}
 */
export default function inject(service) {
  return function (value, { kind }) {
    if (kind !== 'field') {
      throw new Error('Can only use the @inject decorator on class fields');
    }

    return function (initialValue) {
      if (initialValue) {
        return initialValue;
      }
      return Container.get(service);
    };
  };
}
