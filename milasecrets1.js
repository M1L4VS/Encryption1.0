// message to send
var clearMessageToSend = ""; 
var encodedToSend = encode(clearMessageToSend);
console.log("Clear text = " + clearMessageToSend);
console.log("Encoded text = " + encodedToSend);
console.log("Decoded text = " + decode(encodedToSend));


// put encoded message here
var encodedMessageReceived = "";
var decodedMessageReceived = decode(encodedMessageReceived);
console.log("Decoded text = " + decodedMessageReceived);

function encode(characters)
{
  var data = "";
  var base = 16;
  for (const c of characters)
  {
    var number = parseInt(c.charCodeAt(0));  
    var s = shift(c, number, base, base);
    data += "!" + s;
    base = (number % 14) + 2;
  }
  return data;
}

function decode(characters)
{
  var data = "";
  var base = 16;
  var chunks = characters.split("!");
  for (const chunk of chunks)
  {      
      if (chunk == "") continue;
      //console.log("chunk=" + chunk);
      var c = unshift(chunk, base, base);
      var s = String.fromCharCode(c);
      data += s;
      //console.log("c=" + c);
      base = c % 14 + 2;
  }
  return data;
}

function shift(char, number, base, y){
    //Change var y each message, y is the 'key'.
    var w = 7 + (y/10)
    var v = (15-y*y);
    var x = number*15
    x = Math.ceil(x / w);
    x = x + v;
    x = x.toString(base);
    //console.log("char = " + char + " number = " + number + " shift = " + x + " base = " + base);
    return x;
}
function unshift(data, base, y){
    var x = parseInt(data, base);
    var z = 0;
    var w = 7 + (y/10);
    var v = (15 - y * y);
    z = x - v;
    z = z/15;
    z = Math.floor(z * w);
    //console.log("number = " + x + " unshift = "+ z + " base = " + base);
    return z;
}