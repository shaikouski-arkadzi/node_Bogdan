# Transform-стрима

    new stream.Transform({
        transform: function (chunk, encoding, callback) {}
    })

**Transform stream** — поток, который:

- принимает данные
- изменяет их
- передаёт дальше

---

### **Метод transform**

Это главный метод Transform stream.

Он вызывается каждый раз, когда приходит новый кусок данных.

Параметры:

### `chunk`

- кусок данных
- обычно это **Buffer**
- например строка, которую вводит пользователь

### `encoding`

- кодировка
- чаще всего `"buffer"`
- используется, если chunk — строка

### `callback`

- функция, которую нужно вызвать после обработки

---

### Pipeline

    process.stdin.pipe(upperCaseStream).pipe(process.stdout);

Это соединение потоков.

### `process.stdin`

стандартный ввод

(то, что печатает пользователь в терминале)

### `.pipe(upperCaseStream)`

передаём ввод в наш Transform stream

### `.pipe(process.stdout)`

передаём результат в стандартный вывод
