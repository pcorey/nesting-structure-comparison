import "../";
import { expect } from "chai";

describe("sameStructureAs", function() {

    it("works", () => {
        expect([].sameStructureAs([])).to.be.true;
    });

});
