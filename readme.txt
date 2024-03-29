0. Текст тестового:
https://drive.google.com/file/d/1jY5irwrIxqoR4MmghC2PqSskGinktoar/view?usp=sharing

1. О решении:

1.1. Функция перевода текстовых свойств в сложной JSON модели.

В файле script.js реализована функция перевода -- insertTranslation(jsonArg).
Принимает на вход: только JSON-объект.
Возвращает: отредактированный JSON-объект.
Вложенные функции:
    1) getEngs(obj, map, path) -- рекурсивная (чтобы "заходить" внутрь значений), ничего не возвращает,
    записывает в аргумент map значения свойств "en" объекта (то есть выражения, которые надо перевести) в качестве ключей и их
    "путь" внутри объекта в качестве значений -- в виде строк и массивов строк соответственно;
    2) getTranslations(keyWords) -- принимает на вход массив, возвращает массив ["это текст, который нам не следует переводить",
    "администратор баз данных", "ассистент менеджера", "информатика", "вышивание крестиком"].
Локальные переменные:
    1) stringsMap -- коллекция Map, для хранения значений "en" и их местонахождения в объекте;
    2) path -- массив для записи в него местонахождения значений "en", вложенной функцией getEngs перезаписывается для каждого "en"
    и кладётся в stringsMap в качестве значения;
    3) engWordsArr -- массив строк-значений "en" для "запроса";
    4) translationsArr -- массив соответствующих строк-переводов;
    5) enPath -- массив, который перезаписывается внутри цикла в зависимости от рассматриваемого "en";
    6) variablePath -- объект, который внутри цикла меняет значение и становится "уже", то есть заходит внутрь вложенных объектов,
    в итоге позволяет задать значение для "ru".

1.2. Ограничение полей, которые переводятся.

1) Можно передать вторым аргументом массив строк, где каждая строка -- значение, которое не надо переводить. Внутри вложенной функции
getEngs() поставить условие: записывать всё необходимое в stringsMap, если данное значение не содержится в массиве-аргументе (проверять,
например, с помощью includes()). Соответственно, если условие не выполнится, то функция просто перейдёт к следующей итерации и будет
обрабатывать другие свойства.
2) Можно установить внутри JSON-объекта флаги "enumerable" со значениями false для тех свойств, которые мы не хотим переводить,
тогда цикл внутри вложенной функции getEngs() их проигнорирует. Однако этот подход не так предпочтителен, потому что потребует
дополнительного перебора свойств объекта, чтобы установить на них флаги, хотя это и можно реализовать "снаружи" функции перевода.
