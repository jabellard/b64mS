var b64 = require("base-64");

exports.validateString = function(str){
  if(typeof(str) !== 'string'){
     return false;
 }
 for(var i = 0; i < str.length; i++){
     if(str.charCodeAt(i) > 127){
         return false;
     }
 }
 return true;
}

exports.encodeString = function(str){
  return b64.encode(str);
}

exports.decodeString = function(str){
  return b64.decode(str);
}
