const solution1 = (text = '', lowerCase = true) => {
  let result = '';
  const toLowerCase = confirm('Do you want the result in lower case?');
  for (let i = 0; i < text.length; i++) {
    result = text[i] + result;
  }

  return toLowerCase ? result.toLowerCase() : result;
};

let test = solution1('GoLaZo', true)
console.log(test);