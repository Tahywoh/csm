
function geocompleteFields(arg) {
  let fields;

  if(isString(arg)) {
 	fields = arg;
  };

  if (isArray(arg)) {
 	fields = convertToString(arg);
  }

  $(fields).geocomplete();
}

function isArray(ar) {
  return Array.isArray(ar);
}

function isString(arg) {
  return typeof arg === 'string';
}

function convertToString(arr) {
  /*
  when an array arg is only supplied, convert it to a string
	but if
  */
  let arr = arg.length === 0 ? arg : 
  	makeArrayFromArrays(arguments);
  	return arr.join(',');
}

function makeArrayFromArrays(arg) {
  let finalArray;

  arg.map(function(value){
    finalArray.concat(value);
  });

  return finalArray;
}
