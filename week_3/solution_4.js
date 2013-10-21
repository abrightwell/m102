
use zips

function map_closest() {
    var pitt = [-80.064879, 40.612044];
    var phil = [-74.978052, 40.089738];

    function distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        return Math.sqrt(dx * dx + dy * dy);
    }

    if (distance(this.loc, pitt) < distance(this.loc, phil)) {
        emit("pitt",1);
    } else {
        emit("phil",1);
    }
}

function reduce(key, values){
  var count = 0;  
  
  for (var index = 0; index < values.length; index++) {
    count += values[index];
  }

  return count;
};

db.zips.mapReduce(map_closest, reduce, 
  {out: {inline: 1}, query: {"state": "PA"}});
