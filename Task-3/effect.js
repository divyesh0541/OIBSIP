function f_to_cf(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputc").innerHTML=(valNum-32)/1.8;
  }
  
  function c_to_ff(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputf").innerHTML=(valNum*1.8)+32;
  }