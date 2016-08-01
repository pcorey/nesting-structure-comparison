import _ from "lodash";

Array.prototype.sameStructureAs = function(other) {
    let comparisons = _.zipWith(this, other, (a, b) => {
        let bothArrays = _.isArray(a) && _.isArray(b);
        let bothNot = !_.isArray(a) && !_.isArray(b);
        return bothArrays || bothNot;
    });
    return _.every(comparisons);
}
