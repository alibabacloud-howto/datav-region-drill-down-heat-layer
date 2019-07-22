const fs = require('fs');
const Area = require('../Area.js').default;


//*
console.log('================== [ begin ] ==================');

const path = './t_area.json';
const area = getAreaContentWithFilePath(path);
const childrenNames = {};
area.objects.collection.geometries.forEach((g, index) => {
  const name = g.properties.name;
  childrenNames[name] = 280000 + (index + 1) * 100;
  console.log(`filter 'NAME_1 == "${name}"'`)
});
fs.writeFileSync('t_area_children_name.json', JSON.stringify(childrenNames));

console.log('================== [  end  ] ====================');
// */


/** HELPER */

/**
 * creating Area object from map data file
 */
function getAreaContentWithFilePath(path) {
  console.log('---', path, '---');
  const fileContents = fs.readFileSync(path);
  const json = JSON.parse(fileContents);
  return new Area(json);
}
