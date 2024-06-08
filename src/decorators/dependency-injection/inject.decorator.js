import DependencyInjectionContainer from './dependency-injection.container.js';

/**
 * @param service {string} name of the service to inject
 * @returns {function(*, {kind: *}): function(*): (*)}
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
      return DependencyInjectionContainer.get(service);
    };
  };
}
