function foo(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  } else {
    return a === b; 
  }
} 