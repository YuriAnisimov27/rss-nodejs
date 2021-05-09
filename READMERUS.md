# Caesar cipher CLI tool

### Полезные ссылки

[Описание задания](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/descriptions/caesar-cipher-cli-tool.md)

[Критерии проверки](https://github.com/rolling-scopes-school/basic-nodejs-2021Q2/blob/master/cross-check/caesar-cipher-cli-tool.md)

[Check-list](https://competent-hamilton-095abb.netlify.app/)

## Описание

**Инструмент CLI, который будет кодировать и декодировать текст с помощью [Шифр цезаря](https://en.wikipedia.org/wiki/Caesar_cipher)**.

## Как использовать

### Установка

Клонируйте (или загрузите) это репозиторий:

`git clone https://github.com/YuriAnisimov27/rss-nodejs.git -b caesar_cipher `

Установите зависимости:

`cd rss-nodejs/caesar_cipher/ && npm i`

Для запуска тестов:

`npm run test`

<hr/>

### Применение

Затем вы запускаете my_caesar_cli со следующими флагами:

***обязательные:***

-a или --action - действие, которое нужно выполнить, либо декодировать, либо кодировать. В противном случае выдает ошибку. (encode/decode)

-s или --shift - сдвиг. Количество чисел, на которое нужно сдвинуть алфавит, Допустимы любые целые числа. Выдает ошибку, если флаг опущен.

***опциональные:***

-i или --input - текстовый файл для чтения ввода. Если файл не найден выдается ошибка. Если флаг опущен, ввод считывается с консоли. Чтобы остановить ввод используйте комбинацию ctrl + c или control + c на macOs.

-o или --output - текстовый файл для записи вывода. Если флаг указан, а файл не найден, он будет создан автоматически по указанному пути. Если флаг опущен, вывод записывается в консоль.

Вы также можете:

`npm run help` чтобы узнать, как использовать этот интерфейс командной строки

`npm run test` запустить тесты

<hr/>

Как это работает:

Приложение декодирует / кодирует данные из источника. Если исходный или целевой файл не указан, данные читаются / выводятся в командную строку.

<details>
		  <summary>Примеры:</summary>
		  <p>

```
node my_caesar_cli --help
```

```
node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```
node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
```

```
node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt
```

```
node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
```

</p>
		</details>

кроме того, будет создан выходной файл, если он указан, но не существует или не найден
