describe("test for caclPoints function", () => {
  it("returns total points and indicates if there is an ace", () => {
    const hand = [
      { suit: "heart", val: 10, displayVal: "10" },
      { suit: "spades", val: 2, displayVal: "2" },
    ];
    const result = calcPoints(hand);
    expect(result.total).toEqual(12);
    expect(result.isSoft).toEqual(false);
  });
  it("returns one ace and is soft", () => {
    const hand = [
      { suit: "heart", val: 11, displayVal: "Ace" },
      { suit: "spades", val: 2, displayVal: "2" },
    ];
    const result = calcPoints(hand);
    expect(result.total).toEqual(13);
    expect(result.isSoft).toEqual(true);
  });

  it("returns one ace and is not soft", () => {
    const hand = [
      { suit: "heart", val: 1, displayVal: "Ace" },
      { suit: "heart", val: 9, displayVal: "9" },
      { suit: "spades", val: 2, displayVal: "2" },
    ];
    const result = calcPoints(hand);
    expect(result.total).toEqual(12);
    expect(result.isSoft).toEqual(false);
  });
  it("returns multiples aces and is soft", () => {
    const hand = [
      { suit: "heart", val: 1, displayVal: "Ace" },
      { suit: "heart", val: 11, displayVal: "Ace" },
      { suit: "spades", val: 2, displayVal: "2" },
    ];
    const result = calcPoints(hand);
    expect(result.total).toEqual(14);
    expect(result.isSoft).toEqual(true);
  });
  it("returns multiples aces and is not soft", () => {
    const hand = [
      { suit: "heart", val: 1, displayVal: "Ace" },
      { suit: "heart", val: 1, displayVal: "Ace" },
      { suit: "spades", val: 2, displayVal: "2" },
      { suit: "club", val: 10, displayVal: "10" },
    ];
    const result = calcPoints(hand);
    expect(result.total).toEqual(14);
    expect(result.isSoft).toEqual(false);
  });
});
