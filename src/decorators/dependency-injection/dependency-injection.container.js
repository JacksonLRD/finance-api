export default class DependencyInjectionContainer {
  static #services = new Map();

  static set(name, service) {
    this.#services.set(name, new service());
  }

  static get(name) {
    return this.#services.get(name);
  }
}
