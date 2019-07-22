'use strict'

/** Structure *//*
Area
  type
  objects
    collection
      type
      geometries
  arcs
  transform
    scale
    translate
  bbox
*/
/**
 * Web console Error sign memo
 *
 * map -> debug true
 * lengh -> same id
 * objects -> default id
 * map collaps -> id roop
 */

const ROOT_AREA = require('./AreaCode.js').ROOT_AREA;
const TARGET_AREAS = require('./AreaCode.js').TARGET_AREAS;

const debug = false;


exports.default = class Area {
  constructor(params, parentId) {
    if (!params) {
      console.log('params error [Area]');
    }
    this.type = params.type || "Topology";
    this.objects = new Objects(params.objects, parentId);
    if (debug) { this.arcs = []; } else { this.arcs = params.arcs || []; }
    this.transform = new Transform(params.transform);
    this.bbox = params.bbox;  // [73.502355, 7.320122, 135.09567, 53.563269]
  }
}

class Objects {
  constructor(params) {
    if (!params) {
      console.log('params error [Objects]');
    }
    this.collection = new Collection(params.collection);  // "collection" derive from geojson file name
  }
}

class Collection {
  constructor(params) {
    if (!params) {
      console.log('params error [Collection]');
    }
    this.type = params.type;  // "GeometryCollection";
    this.geometries = params.geometries.map((x, index) => new Geometries(x, index));
  }
}

class Geometries {
  constructor(params, index) {
    if (!params) {
      console.log('params error [Geometries]');
    }
    if (debug) console.log(params.type, params.properties.NAME_0, '>', params.properties.NAME_1, '>', params.properties.NAME_2);
    this.type = params.type;
    this.properties = new Properties(params.properties, index);
    if (debug) { this.arcs = []; } else { this.arcs = params.arcs || []; }
  }
}

class Properties {
  constructor(params, index) {
    if (!params) {
      console.log('params error [Properties]');
    }
    this.adcode = params.adcode || this.getAdCode(params, index);  // 330000
    this.level = params.level;  // "province"
    this.name = params.name || params.NAME_2 || params.NAME_1 || params.NAME_0;  // "浙江省"
    this.center = params.center;  // [120.153576, 30.287459]
    this.subFeatureIndex = params.subFeatureIndex || index;  // 10
    this.childrenNum = params.childrenNum;  // 11
    if (debug) console.log(this.adcode, this.name);
  }

  getAdCode(params, index) {
    if (!params.NAME_0) return 999999;

    if (!params.NAME_1) return ROOT_AREA[params.NAME_0];

    let adcode;
    for (let k of Object.keys(TARGET_AREAS)) {
      const targetArea = TARGET_AREAS[k];
      adcode = adcode || targetArea[params.NAME_1];
    }
    if (!params.NAME_2) return adcode;

    return adcode + (index + 1);

    // if (!params.NAME_1) return 180000;
    // if (params.NAME_1 === 'Belait') {
      // if (!params.NAME_2) return 180100;
      // if (params.NAME_2 === 'Bukit Sawat') return 180101;
      // if (params.NAME_2 === 'Kuala Balai') return 180102;
      // if (params.NAME_2 === 'Kuala Belait') return 180103;
      // if (params.NAME_2 === 'Labi') return 180104;
      // if (params.NAME_2 === 'Liang') return 180105;
      // if (params.NAME_2 === 'Melilas') return 180106;
      // if (params.NAME_2 === 'Seria') return 180107;
      // if (params.NAME_2 === 'Sukang') return 180108;
    // }
  }
}

class Transform {
  constructor(params) {
    if (!params) {
      console.log('params error [Transform]');
    }
    this.scale = params.scale;  // [0.0061599474947494764, 0.004624777177717772]
    this.translate = params.translate;  // [73.502355, 7.320122]
  }
}
