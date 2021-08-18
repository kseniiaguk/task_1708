function insertTranslation(jsonArg) {
    let stringsMap = new Map(),
        path = [];
    function getEngs(obj, map, path) {
        for (let prop in obj) {
            path.push(prop);
            if (typeof obj[prop] != 'object') {
                if (prop == 'en') {
                    map.set(obj[prop], Object.assign([], path));
                } 
            } else {
                getEngs(obj[prop], map, path);
            }
            path.pop();
        }
    }
    function getTranslations(keyWords) {
        return ["это текст, который нам не следует переводить", "администратор баз данных",
        "ассистент менеджера", "информатика", "вышивание крестиком"]
    }
    getEngs(jsonArg, stringsMap, path)
    let engWordsArr = [...stringsMap.keys()],
        translationsArr = getTranslations(engWordsArr);
    for (let i = 0; i < engWordsArr.length ; i ++) {
        let enPath = stringsMap.get(engWordsArr[i]),
            variablePath = jsonArg;
        for (let j = 0; j < enPath.length - 1; j ++) {
            variablePath = variablePath[enPath[j]]
        }
        variablePath.ru = translationsArr[i] 
    }
    return jsonArg
}
