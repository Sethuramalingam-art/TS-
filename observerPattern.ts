//observer pattern

class Watcher {
  observers: any[];
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unSubscribe(fn) {
    this.observers = this.observers.filter((ob) => ob !== fn);
  }

  notify(data) {
    this.observers.forEach((obj) => {
      obj(data);
    });
  }
}

const MyWatcher = new Watcher();

const sentToCEO = (data) => console.log("data", data);
const sentToCTO = (data) => console.log("data1", data);

MyWatcher.subscribe(sentToCEO);
MyWatcher.subscribe(sentToCTO);

const sentData = document.getElementById("btn");

sentData?.addEventListener("click", () => {
  MyWatcher.notify({ name: "mak", age: 30 });
});
