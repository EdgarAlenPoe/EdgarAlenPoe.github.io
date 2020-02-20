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

function makeHyperParaFunc(a, b, xShift, zShift) {
	function hyperPara(x,z) {
		return (((x * x) + xShift) / a) - (((z * z) + zShift) / b);
	}
	return hyperPara;
}

function makeParaSheet(xa, xb, za, k) {
	function paraSheet(x,z) {
		xa * (x * x) + (xb * x) - (za * z) + k;
	}
}
