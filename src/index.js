/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;
    var used = [];

    for(var i = 0; i < preferences.length; i++){
        var first_i = i;
        if(used.indexOf(preferences[first_i]) !== -1){
            continue;
        }

        var second_i = preferences[first_i] - 1;

        if(first_i === preferences[second_i] - 1){
            continue;
        }

        var third_i = preferences[second_i] - 1;

        if(preferences[third_i] - 1 !== first_i){
            continue;
        }
        count++;
        used.push(preferences[first_i], preferences[second_i], preferences[third_i]);
    }

    return count;
};