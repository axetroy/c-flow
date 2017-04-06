/**
 * Created by axetroy on 2017/4/4.
 */

import test from 'ava';
import Flow from '../index';

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

test('simple', async t => {
  // 假设最多只能并发2个任务
  const task = new Flow(2);

  await task
    .append(task1)
    .append(task2)
    .append(task3)
    .append(task4)
    .append(task5)
    .append(task6)
    .run();

  t.pass();
});
