# flow

[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/c-flow.svg)](https://greenkeeper.io/)

用于多个异步并发的控制器, 能够控制并发数量.

当前面的任务执行完成之后, 会立刻执行下一个任务. 但是保证并发的数量不变

## 适用场景

假设有无数个要完成的异步任务,要跑完这些任务但又不是马上, 而是分批次依次完成.

经典场景:爬虫

假如要爬一千万条商品信息. 如果要直接发送一千万个http请求, 服务器直接炸裂. 或者还没有请求那么多次,就已经被服务器ban掉.

所以才写了这个库. 按批次依次爬取.

实现如上需求的伪代码:

```javascript
const itemList = [1, 2, 3, 4, 10000000];

const flow = new Flow(10);    // 每次并发10个任务, 而且往后正在运行的任务也总是10个.

itemList.forEach(function (item) {
  flow.append(function (next) {   // 循环添加任务到队列里面
    http.get(`http://example.com/item/${item}`)
      .then(function (response) {
        // 爬取数据成功, 做你改做的事吧
        next();  // 进入到下一个任务
      })
      .catch(function (err) {
        console.error(err);
        next();
      })
  });
});

flow.run()    // 运行任务
  .then(function () {
    console.log('Tasks done'); // 任务已完毕
  });
```

## 安装

```bash
npm install @axetroy/flow
```

或者如果你正在使用 **yarn**(推荐)

```bash
yarn add @axetroy/flow
```

## 使用

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

## 测试
```bash
git clone https://github.com/axetroy/flow.git
cd ./flow.js
yarn
yarn run test
```

## 参与贡献

```bash
git clone https://github.com/axetroy/flow.git
cd ./flow.js
yarn
yarn run test
```

You can flow [Contribute Guide](https://github.com/axetroy/flow/blob/master/contributing.md)

## 贡献者

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## 开源许可
The [MIT License](https://github.com/axetroy/flow/blob/master/LICENSE)
