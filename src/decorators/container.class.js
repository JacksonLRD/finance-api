// import '../modules/transactions/TransactionController.js';
// import '../modules/transactions/TransactionService.js';
// import '../modules/transactions/TransactionRepository.js';

export default class Container {
  static #services = new Map();

  static set(name, service) {
    console.log('Container.set', name, service);
    this.#services.set(name, new service());
  }

  static get(name) {
    // console.log('Container.get', name);
    return this.#services.get(name);
    // if (!instance) {
    //   return null;
    // }
    //
    // return new instance();
  }
}
