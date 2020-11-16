const readline = require('readline');


const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const menu = `
Your options are:

1. Add a todo.
2. Remove a todo.
3. Remove all completed todos.
4. Toggle a todo's completion status.
5. Toggle a todo's priority.
6. Quit.

`

const toDoHandler = function(number) {
  if(number === '6') {
    interface.close();
  } else {
    interface.question(menu, toDoHandler);
  }
}

interface.question(menu, toDoHandler);


