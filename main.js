import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45, window.innerWidth / window.innerHeight, 1, 500
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const material = new THREE.LineBasicMaterial({color: 0xff0000} );

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

//const geometry = new THREE.BoxGeometry(1, 1, 1);
//const material = new THREE.MeshBasicMaterial( {color: 0xff0000} );
//const cube = new THREE.Mesh(geometry, material);
//scene.add(cube);

//camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};
animate();

if(WebGL.isWebGLAvailable()) {
    animate();
} else {
    const warning = WebGl.getWebGLErrorMessage();
    document.getElementById('container').appendChild(warning);
}