# flow

concurrency flow contc-flower.

## Installation

```bash
npm install @axetroy/flow
```

or if you are using **yarn**(recommend)

```bash
yarn add @axetroy/flow
```

## Usage

```javascript

function task1(next) {
  setTimeout(
    function() {
      console.log('task1');
      next();
    },
    1000
  );
}

function task2(next) {
  setTimeout(
    function() {
      console.log('task2');
      next();
    },
    900
  );
}

function task3(next) {
  setTimeout(
    function() {
      console.log('task3');
      next();
    },
    800
  );
}

function task4(next) {
  setTimeout(
    function() {
      console.log('task4');
      next();
    },
    700
  );
}

function task5(next) {
  setTimeout(
    function() {
      console.log('task5');
      next();
    },
    600
  );
}

function task6(next) {
  setTimeout(
    function() {
      console.log('task6');
      next();
    },
    500
  );
}

// 假设最多只能并发2个任务
const flow = new Flow(2);

flow
    .append(task1)
    .append(task2)
    .append(task3)
    .append(task4)
    .append(task5)
    .append(task6)
    .run();

/*
print out


task2
task1
task4
task3
task6
task5
*/
```

## API

### .append(task:Function): this

append task to the flow.

### .run(): Promise

run start

## Test

```bash
git clone https://github.com/axetroy/flow.git
cd ./flow.js
yarn
yarn run test
```

## Contributing

```bash
git clone https://github.com/axetroy/flow.git
cd ./flow.js
yarn
yarn run test
```

You can flow [Contribute Guide](https://github.com/axetroy/flow/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/flow/blob/master/LICENSE)