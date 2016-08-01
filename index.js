import _ from "lodash";

Array.prototype.sameStructureAs = function(other) {
    if (_.isArray(this[0]) && _.isArray(other[0])) {
        return true;
    }
    else if (!_.isArray(this[0]) && !_.isArray(other[0])) {
        return true;
    }
    return false;
}
