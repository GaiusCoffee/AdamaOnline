var util = {};

util.errors = [];
util.errors["NOERROR"] = {};
util.errors["NOERROR"].code = 200;
util.errors["NOERROR"].desc = "OK";
util.errors["NOERROR"].iCode = 0;
util.errors["NOERROR"].iDesc = "No Error";
util.errors["TIMEOUT"] = {};
util.errors["TIMEOUT"].code = 408;
util.errors["TIMEOUT"].desc = "Request Timeout";
util.errors["TIMEOUT"].iCode = 1;
util.errors["TIMEOUT"].iDesc = "Timeout: API request exceeded 30 seconds.";
util.errors["INTERNAL"] = {};
util.errors["INTERNAL"].code = 500;
util.errors["INTERNAL"].desc = "Internal Server Error";
util.errors["INTERNAL"].iCode = 2;
util.errors["INTERNAL"].iDesc = "Internal Server Error";

util.getError = function(error, message){
  var status = {};
  status.code = util.errors[error].code;
  status.desc = util.errors[error].desc;
  status.iCode = util.errors[error].iCode;
  if (!message) status.iDesc = util.errors[error].iDesc;
  else status.iDesc = util.errors[error].iDesc + ": " + message;
  return status;
};

util.validate = function(reqQuery, validParamsArray){
  var valid = true;
  for (var param in reqQuery){
    if (reqQuery.hasOwnProperty(param)) {
      if (param == "q")
        continue;
      var foundIt = false;
      validParamsArray.forEach(function(validParam){
        if (param == validParam) {
          foundIt = true;
        }
      });
      if (!foundIt)
        valid = false;
    }
  }
  return valid;
}

module.exports = util;
