function sumSalary(salaries) {
    let sum = 0
    for (const key in salaries) {
        let value = salaries[key]
        if (isFinite(value) && value === parseInt(value, 10)) {
            sum += value;
        }
    }
    return sum
}
