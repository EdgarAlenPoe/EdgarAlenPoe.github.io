import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r112/build/three.module.js';
//import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r112//examples/jsm/controls/OrbitControls.js';

export function raiseGeom(geom, func) {
	var v = new THREE.Vector3();
	var positions = geom.attributes.position;

	for (var i = 0; i < positions.count; i++) {
	  v.fromBufferAttribute(positions, i);
	  positions.setY(i, func(v.x,v.z));
	}
	geom.computeVertexNormals();

	return geom;
}

export function makeHyperParaFunc(a, b, c) {
	var xCoef = a**4 + (a**2 * b**2) - 2*(a**2) + 1;
	var xzCoef = 2*((a**3) * b) + 2*(a * (b**3)) - 2*(a*b);
	var zCoef = b**4 + (a**2 * b**2) - 2*(b**2);
	function hyperPara(x,z) {
		return (xCoef*(x * x)/(2*c)) + (xzCoef * x * z / (2*c)) + (zCoef*(z * z) / (2*c)) + (c/2);
	}
	return hyperPara;
}

export function makeParaSheet(xa, xb, za, zb, yb, k) {
	function paraSheet(x,z) {
		return ((xa * (x * x)) + (xb * x) + (za * (z * z)) + (zb * z) + k) / yb;
	}
	return paraSheet;
}

export function makePlane(vx, vy, vz, c) {
	function plane(x,z) {
		return ((vx * x) + (vz *z) + c) / vy;
	}
	return plane;
}
