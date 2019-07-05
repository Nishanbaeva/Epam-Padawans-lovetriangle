function  getLoveTrianglesCount(array)
{
    var a=[0];

    var id=0,d=0,c=1,tri=0;
    var i=1;

    var s,m;

    for (var j=0;j<array.length;j++)
    {
        a.push(array[j]);
    }

    for (var n=1;n<10;n++)
    {
        id=a[n];
        d=a[id];
        c=a[d];

        if (n==c) { tri++; id=0;d=0;c=0;}
    }
    tri=tri/3;
    return tri;
}