# JSDocumentify

A simpler version of the jsdom package that only uses its `document` feature

```js
const expect = require("chai").expect;
const jsDocify = require("../index");

describe("JS Docify", () => {
  it("selects something from html text", () => {
    expect(
      jsDocify("<p>Hi</p><p>Wow</p>").querySelectorAll("p").length
    ).to.equal(2);
  });
});
```