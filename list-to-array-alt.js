function listToArray(list) {
  arr = [];
  (function keepPushing() {
    arr.push(list.value);
    if (list.next !== null) {
      list = list.next;
      keepPushing();
    }
    else {
      console.log( arr);
    }
  })();
}

listToArray({value:1, next: {value:2, next:null}});
