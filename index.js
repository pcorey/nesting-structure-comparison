import _ from "lodash";

Array.prototype.sameStructureAs = function(other) {
    if (!_.isArray(other)) {
        return false;
    }
    let comparisons = _.zipWith(this, other, (a, b) => {
        if (_.isUndefined(a) || _.isUndefined(b)) {
            return false;
        }
        let bothArrays = _.isArray(a) && _.isArray(b);
        let bothNot = !_.isArray(a) && !_.isArray(b);
        return (bothArrays && a.sameStructureAs(b)) || bothNot;
    });
    return _.every(comparisons);
}
