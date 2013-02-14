eval(loadFile("src/test/lib/env.rhino.1.2.js"));
eval(loadFile("src/test/lib/jquery-1.8.2.js"));
eval(loadFile("src/js/projectjs.js"));


testCases(test,
  function setUp() {

  },

  function basicTest() {
    assert.that("Hello World!", eq("Hello " + "World!"));
  }
);