describe("OpinionExchange", function() {
  let opinionExchange;

  beforeEach(function() {
    // Set up before each test
    opinionExchange = new OpinionExchange();
  });

  it("should add an object to the exchange", function() {
    opinionExchange.addObject("Object1");
    expect(opinionExchange.objects["Object1"]).toBeDefined();
  });

  it("should add an opinion to an existing object", function() {
    opinionExchange.addObject("Object1");
    opinionExchange.addOpinion("Object1", "This is an opinion.");
    expect(opinionExchange.objects["Object1"]).toContain("This is an opinion.");
  });

  it("should retrieve opinions for an existing object", function() {
    opinionExchange.addObject("Object1");
    opinionExchange.addOpinion("Object1", "Opinion 1");
    opinionExchange.addOpinion("Object1", "Opinion 2");
    const opinions = opinionExchange.getOpinions("Object1");
    expect(opinions.length).toBe(2);
    expect(opinions).toContain("Opinion 1");
    expect(opinions).toContain("Opinion 2");
  });
});
