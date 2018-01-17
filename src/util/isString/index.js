const isString = (obj:Any):Boolean => {
  return typeof obj === 'string' || obj instanceof String;
}

export default isString;
