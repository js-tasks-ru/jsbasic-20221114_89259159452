function getMinMax(str) {
    let obj = {};

    const filtList = str
        .split(" ")
        .filter(i => +i)
        .map(i => +i);

    obj['min'] = Math.min.apply(Math, filtList);
    obj['max'] = Math.max.apply(Math, filtList);

    return obj;
}
