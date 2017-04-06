/**
 * Created by axetroy on 2017/4/4.
 */

class Flow {
  constructor(concurrent) {
    this.__concurrent = concurrent;
    this.__tasks = [];
    this.__tasksInQueue = [];
    this.__tasksHaveDoned = 0;
  }

  append(fn) {
    this.__tasks.push(fn);
    return this;
  }

  _next(lastTask) {
    this.__tasksHaveDoned++;
    if (this.__tasksHaveDoned === this.__tasks.length) {
      this.__tasksHaveDoned = 0;
      this.__tasksInQueue = [];
      this.done();
    }

    const currentTask = this.__tasksInQueue.shift();

    currentTask && currentTask.call(this, this._next.bind(this, currentTask));

    return this;
  }

  run() {
    // init
    this.__tasksInQueue = this.__tasks.slice();
    this.__tasksHaveDoned = 0;

    const tasks = [];

    for (let i = 0; i < this.__concurrent; i++) {
      tasks.push(this.__tasksInQueue.shift());
    }

    // start run task
    tasks.forEach(task => task.call(this, this._next.bind(this, task)));
    
    return new Promise((resolve, reject) => this.done = resolve);
  }
}

module.exports = Flow;
