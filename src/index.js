/**
 * @param preferences - an preferences of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = [])
{
    var a=[0];

    var id=0,d=0,c=1,tri=0;
    var i=1;

    var s,m;

    for (var j=0;j<preferences.length;j++)
    {
        a.push(preferences[j]);
    }

    for (var n=1;n<a.length;n++)
    {
        id=a[n];
        d=a[id];
        c=a[d];

        if (n==c) { tri++; id=0;d=0;c=0;}
    }
    tri=Math.floor(tri/3);
    return tri;
}
