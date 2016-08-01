import "../";
import { expect } from "chai";

describe("sameStructureAs", function() {

    it("works", () => {
        expect([].sameStructureAs([])).to.be.true;
        expect([1].sameStructureAs([[]])).to.be.false;
        expect([[], []].sameStructureAs([[], []])).to.be.true;
        expect([[], 1].sameStructureAs([[], []])).to.be.false;
    });

});
