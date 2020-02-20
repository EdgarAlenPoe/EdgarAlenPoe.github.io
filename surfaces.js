import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r112/build/three.module.js';
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r112//examples/jsm/controls/OrbitControls.js';

function raiseGeom(geom, func) {
	var v = new THREE.Vector3();
	var positions = geom.attributes.position;

	for (var i = 0; i < positions.count; i++) {
	  v.fromBufferAttribute(positions, i);
	  positions.setY(i, ((v.x * v.x) - (v.z * v.z) + 1) * 0.5);
	}
	geom.computeVertexNormals();

	return geom;
}

function makeHyperbolicParaboloidFunc(a, b, xShift, zShift) {
	function hyperPara(x,y) {
		return (((v.x * v.x) + xShift) * a) - (((v.z * v.z) + zShift) * b);
	}
	return hyperPara;
}
