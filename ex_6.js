// Задание 6. Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

const arr = [3, 3, 2, 3, 5, 3, 3, 3];
for (i = 0; i < arr.length; i++) {
  if (arr[0] === arr[i]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
