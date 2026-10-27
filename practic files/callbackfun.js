function great(name, callback) {
  console.log("helo", name);

callback();
}

function callme() {
  console.log("iam a callback function");
}

great("shoaib", callme);
