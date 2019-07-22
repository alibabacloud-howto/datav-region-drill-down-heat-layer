const fs = require('fs');
const Area = require('./Area.js').default;
const ROOT_AREA = require('./AreaCode.js').ROOT_AREA;
const TARGET_AREAS = require('./AreaCode.js').TARGET_AREAS;
const NO_CITY_DATA_AREAS = require('./AreaCode.js').NO_CITY_DATA_AREAS;


/** EXECUTE (MAIN) */

//*
console.log('================== [ begin ] ==================');

console.log('[Load area data]');
const areaContainer = {}
for (let k of Object.keys(TARGET_AREAS)) {
  console.log(k);
  const targetArea = TARGET_AREAS[k];
  for (let placeName of Object.keys(targetArea)) {
    const placeAdcode = targetArea[placeName];
    const path = `../gadm/${k.toLowerCase()}/t_${placeName.replace(/ /g, '_')}.json`;
    areaContainer[placeAdcode] = getAreaContentWithFilePath(path);
  }
}

console.log('[Fix adCode of no city data area]');
fixNoCityDataAreaAdCode(areaContainer);

console.log('[Create output files]');
const southeastAsiaAreaName = Object.keys(ROOT_AREA)[0];
const southeastAsiaAdcode = Object.values(ROOT_AREA)[0];
const areaTree = [ createAreaTree(southeastAsiaAdcode, southeastAsiaAreaName, areaContainer) ];

fs.writeFileSync('area_tree.json', JSON.stringify(areaTree));
fs.writeFileSync('area_topo_json.topo.json', JSON.stringify(areaContainer));

console.log('================== [  end  ] ====================');
// */


/** HELPER */

/**
 * Creating Area object from map data file
 */
function getAreaContentWithFilePath(path) {
  console.log('---', path, '---');
  const fileContents = fs.readFileSync(path);
  const json = JSON.parse(fileContents);
  return new Area(json);
}

/**
 * Creating area_tree.json
 */
function createAreaTree(area_id, name, areaContainer) {
  // console.log(area_id, name);
  const area = areaContainer[area_id];
  if (!area) return { area_id, name };

  const childrenProperties = area.objects.collection.geometries.map(g => g.properties);

  const children = [];
  for (let p of childrenProperties) {
    const child = createAreaTree(p.adcode, p.name, areaContainer);
    children.push(child);
  }

  return { area_id, name, children };
}

/**
 * Fixing the adcode of the area which has no city data.
 * 
 * Some country may has no public data for its City level data. For example, Singapore.
 * To solve the problem, You can use Province level data which is same as Country level data,
 * and use City level data which is same as original Province level data.
 * Hence, some adcode must be adjusted. Otherwise, a problem, recursive function called infinitely,
 * will be happened while creating area_tree.json. This function do the adcode adjustment.
 */
function fixNoCityDataAreaAdCode(areaContainer) {
  for (let k of Object.keys(NO_CITY_DATA_AREAS)) {
    console.log(k);
    const country = NO_CITY_DATA_AREAS[k];
    for (let provinceAdCode of Object.values(country)) {
      const area = areaContainer[provinceAdCode];
      area.objects.collection.geometries.forEach((g) => {
        g.properties.adcode += 99;
      });
    }
  }
}

