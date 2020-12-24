// string 的blank类
export function isBlank(item) {
    if (item) {
        return item
    }
    return false
}

// 对象的空安全
export function objectNUllSafe(item) {
    if (Object.keys(item).length === 0) {
        return false
    }
    return item
}

// 判空时，可以先判断类型，再进行空值的判断
// 判断string类型
export function stringType(item) {
    if (typeof (item) === 'string') {
        if (item) {
            return item
        }
        throw new Error(item + ' is null')
    } else {
        throw new Error(item + ' is not a string')
    }
}
