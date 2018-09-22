/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences=[])
{
var lov1=0;
var lov2=0;
var lov3=0;
var count=0;

  for (n = 0; n < preferences.length; n++)
  {
  lov1=preferences[n]; 
  lov2=preferences[lov1-1]; 
  lov3=preferences[lov2-1];

    if ((lov3-1)==n && (lov2-1)==preferences.indexOf(lov3) && lov1!=lov2!=lov3)
    	{
			count++;
			preferences[n]=undefined;
     	};
  };
return count;
};