// 深拷贝
export const deepClone = (obj = {}) => {
  if (typeof (obj) !== 'object' || obj == null) {
    return obj;
  }

  let result;
  if (obj instanceof Array) {
    result = []
  } else if (obj instanceof Object) {
    result = {}
  }

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }

  return result;
}
