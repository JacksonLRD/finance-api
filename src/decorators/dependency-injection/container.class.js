export default class Container {
  static #services = new Map();

  static set(name, service) {
    console.log('Container.set', name, service);
    this.#services.set(name, new service());
  }

  static get(name) {
    return this.#services.get(name);
  }
}
