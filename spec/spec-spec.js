var kawaii = require('../kawaii');

describe('kawaii', function () {
  it("should say Brian Ford is cute when he's little", function () {
    expect(kawaii('brian ford')).toBe(true);
  });

  it("should say Brian Ford is cute when he's little", function () {
    expect(kawaii('BRIAN FORD')).toBe(true);
  });
});