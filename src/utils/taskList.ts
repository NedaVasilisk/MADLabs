
export const taskList = (ctx: any) => [
  { id: '1', title: "Зробити 10 кліків", done: ctx.tapCount >= 10 },
  { id: '2', title: "Зробити 5 подвійних кліків", done: ctx.doubleTapCount >= 5 },
  { id: '3', title: "Утримати об'єкт 3 секунди", done: ctx.longPressDone },
  { id: '4', title: "Перетягнути об'єкт", done: ctx.panDone },
  { id: '5', title: "Свайп вліво", done: ctx.swipeLeft },
  { id: '6', title: "Свайп вправо", done: ctx.swipeRight },
  { id: '7', title: "Змінити розмір об'єкта", done: ctx.resized },
  { id: '8', title: "Отримати 100 очок", done: ctx.score >= 100 },
];
