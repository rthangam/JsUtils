function Words(str) {
    this._str = str;
}

Words.prototype[Symbol.iterator] = function() {
    var re = /\S+/g;
    var str = this._str;

    return {
        next: function() {
            var match = re.exec(str);
            if (match) {
                return { value: match[0], done: false };
            }
            return { value: undefined, done: true };
        }
    }
};


// Words.prototype[Symbol.iterator] = function*() {
//   var re = /\S+/g;
//   var str = this._str;
//   var match;
//   while (match = re.exec(str)) {
//     yield match[0];
//   }
// };

var helloWorld = new Words("The quick brown fox jumped over the lazy dog");

for (var word of helloWorld) {
    console.log(word);
}
// Result: "Hello"
// Result: "world"