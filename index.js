import _ from "lodash";

Array.prototype.sameStructureAs = function(other) {
    if (!_.isArray(other)) {
        return false;
    }
    let comparisons = _.zipWith(this, other, (a, b) => {
        let bothArrays = _.isArray(a) && _.isArray(b);
        let bothDefined = !_.isUndefined(a) && !_.isUndefined(b);
        let bothNot = bothDefined && !_.isArray(a) && !_.isArray(b);
        return (bothArrays && a.sameStructureAs(b)) || bothNot;
    });
    return _.every(comparisons);
}
