// ------------ //
// CUBE Example //
//  ----------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// // Add Axes Helper
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 2;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// //controls.addEventListener('change', render)

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   wireframe: true,
// });

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   //render()
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// // Build the GUI
// const gui = new GUI();
// // Add the cube overall folder
// const cubeFolder = gui.addFolder('Cube');
// // Add cube rotation folder
// const cubeRotationFolder = cubeFolder.addFolder('Rotation');
// cubeRotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
// cubeRotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
// cubeRotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2);
// cubeFolder.open();
// cubeRotationFolder.open();
// // Add cube position folder
// const cubePositionFolder = cubeFolder.addFolder('Position');
// cubePositionFolder.add(cube.position, 'x', -10, 10, 2); // third number param is the 'step'
// cubePositionFolder.add(cube.position, 'y', -10, 10, 2); // third number param is the 'step'
// cubePositionFolder.add(cube.position, 'z', -10, 10, 2); // third number param is the 'step'
// // cubeFolder.open();
// cubePositionFolder.open();
// // Add cube scale folder
// const cubeScaleFolder = cubeFolder.addFolder('Scale');
// cubeScaleFolder.add(cube.scale, 'x', -5, 5);
// cubeScaleFolder.add(cube.scale, 'y', -5, 5);
// cubeScaleFolder.add(cube.scale, 'z', -5, 5);
// cubeScaleFolder.open();
// // Add camera folder
// const cameraFolder = gui.addFolder('Camera');
// cameraFolder.add(camera.position, 'z', 0, 20);
// cameraFolder.open();
// cubeFolder.add(cube, 'visible');

// function animate() {
//   requestAnimationFrame(animate);

//   //   cube.rotation.x += 0.01;
//   //   cube.rotation.y += 0.01;

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();
// //render()

// --------------------- //
// COLORED Balls Example //
// --------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.x = 4;
// camera.position.y = 4;
// camera.position.z = 4;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.target.set(8, 0, 0);

// const light1 = new THREE.PointLight();
// light1.position.set(10, 10, 10);
// scene.add(light1);

// const light2 = new THREE.PointLight();
// light2.position.set(-10, 10, 10);
// scene.add(light2);

// const object1 = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshPhongMaterial({ color: 0xff0000 })
// );
// object1.position.set(4, 0, 0);
// scene.add(object1);
// object1.add(new THREE.AxesHelper(5));

// const object2 = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshPhongMaterial({ color: 0x00ff00 })
// );
// object2.position.set(4, 0, 0);
// object1.add(object2);
// object2.add(new THREE.AxesHelper(5));

// const object3 = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshPhongMaterial({ color: 0x0000ff })
// );
// object3.position.set(4, 0, 0);
// object2.add(object3);
// object3.add(new THREE.AxesHelper(5));

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const gui = new GUI();
// const object1Folder = gui.addFolder('Object1');
// object1Folder.add(object1.position, 'x', 0, 10, 0.01).name('X Position');
// object1Folder
//   .add(object1.rotation, 'x', 0, Math.PI * 2, 0.01)
//   .name('X Rotation');
// object1Folder.add(object1.scale, 'x', 0, 2, 0.01).name('X Scale');
// object1Folder.open();
// const object2Folder = gui.addFolder('Object2');
// object2Folder.add(object2.position, 'x', 0, 10, 0.01).name('X Position');
// object2Folder.add(object2.position, 'x', 0, 10, 0.01).name('X Position');
// object2Folder
//   .add(object2.rotation, 'x', 0, Math.PI * 2, 0.01)
//   .name('X Rotation');
// object2Folder.add(object2.scale, 'x', 0, 2, 0.01).name('X Scale');
// object2Folder.open();
// const object3Folder = gui.addFolder('Object3');
// object3Folder.add(object3.position, 'x', 0, 10, 0.01).name('X Position');
// object3Folder
//   .add(object3.rotation, 'x', 0, Math.PI * 2, 0.01)
//   .name('X Rotation');
// object3Folder.add(object3.scale, 'x', 0, 2, 0.01).name('X Scale');
// object3Folder.open();

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const debug = document.getElementById('debug1') as HTMLDivElement;

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   render();
//   const object1WorldPosition = new THREE.Vector3();
//   object1.getWorldPosition(object1WorldPosition);
//   const object2WorldPosition = new THREE.Vector3();
//   object2.getWorldPosition(object2WorldPosition);
//   const object3WorldPosition = new THREE.Vector3();
//   object3.getWorldPosition(object3WorldPosition);
//   debug.innerText =
//     'Red\n' +
//     'Local Pos X : ' +
//     object1.position.x.toFixed(2) +
//     '\n' +
//     'World Pos X : ' +
//     object1WorldPosition.x.toFixed(2) +
//     '\n' +
//     '\nGreen\n' +
//     'Local Pos X : ' +
//     object2.position.x.toFixed(2) +
//     '\n' +
//     'World Pos X : ' +
//     object2WorldPosition.x.toFixed(2) +
//     '\n' +
//     '\nBlue\n' +
//     'Local Pos X : ' +
//     object3.position.x.toFixed(2) +
//     '\n' +
//     'World Pos X : ' +
//     object3WorldPosition.x.toFixed(2) +
//     '\n';
//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

//  ----------------- //
// Geometries Example //
// ------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.x = -2;
// camera.position.y = 4;
// camera.position.z = 5;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry();

// //console.log(boxGeometry)

// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   wireframe: true,
// });

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = -5;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// scene.add(icosahedron);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const gui = new GUI();
// const cubeFolder = gui.addFolder('Cube');
// const cubeRotationFolder = cubeFolder.addFolder('Rotation');
// cubeRotationFolder.add(cube.rotation, 'x', 0, Math.PI * 2, 0.01);
// cubeRotationFolder.add(cube.rotation, 'y', 0, Math.PI * 2, 0.01);
// cubeRotationFolder.add(cube.rotation, 'z', 0, Math.PI * 2, 0.01);
// const cubePositionFolder = cubeFolder.addFolder('Position');
// cubePositionFolder.add(cube.position, 'x', -10, 10);
// cubePositionFolder.add(cube.position, 'y', -10, 10);
// cubePositionFolder.add(cube.position, 'z', -10, 10);
// const cubeScaleFolder = cubeFolder.addFolder('Scale');
// cubeScaleFolder.add(cube.scale, 'x', -5, 5, 0.1); //.onFinishChange(() => console.dir(cube.geometry))
// cubeScaleFolder.add(cube.scale, 'y', -5, 5, 0.1);
// cubeScaleFolder.add(cube.scale, 'z', -5, 5, 0.1);
// cubeFolder.add(cube, 'visible', true);
// cubeFolder.open();

// const cubeData = {
//   width: 1,
//   height: 1,
//   depth: 1,
//   widthSegments: 1,
//   heightSegments: 1,
//   depthSegments: 1,
// };
// const cubePropertiesFolder = cubeFolder.addFolder('Properties');
// cubePropertiesFolder
//   .add(cubeData, 'width', 1, 30)
//   .onChange(regenerateBoxGeometry)
//   .onFinishChange(() => console.dir(cube.geometry));
// cubePropertiesFolder
//   .add(cubeData, 'height', 1, 30)
//   .onChange(regenerateBoxGeometry);
// cubePropertiesFolder
//   .add(cubeData, 'depth', 1, 30)
//   .onChange(regenerateBoxGeometry);
// cubePropertiesFolder
//   .add(cubeData, 'widthSegments', 1, 30)
//   .onChange(regenerateBoxGeometry);
// cubePropertiesFolder
//   .add(cubeData, 'heightSegments', 1, 30)
//   .onChange(regenerateBoxGeometry);
// cubePropertiesFolder
//   .add(cubeData, 'depthSegments', 1, 30)
//   .onChange(regenerateBoxGeometry);

// function regenerateBoxGeometry() {
//   const newGeometry = new THREE.BoxGeometry(
//     cubeData.width,
//     cubeData.height,
//     cubeData.depth,
//     cubeData.widthSegments,
//     cubeData.heightSegments,
//     cubeData.depthSegments
//   );
//   cube.geometry.dispose();
//   cube.geometry = newGeometry;
// }

// const sphereData = {
//   radius: 1,
//   widthSegments: 8,
//   heightSegments: 6,
//   phiStart: 0,
//   phiLength: Math.PI * 2,
//   thetaStart: 0,
//   thetaLength: Math.PI,
// };
// const sphereFolder = gui.addFolder('Sphere');
// const spherePropertiesFolder = sphereFolder.addFolder('Properties');
// spherePropertiesFolder
//   .add(sphereData, 'radius', 0.1, 30)
//   .onChange(regenerateSphereGeometry);
// spherePropertiesFolder
//   .add(sphereData, 'widthSegments', 1, 32)
//   .onChange(regenerateSphereGeometry);
// spherePropertiesFolder
//   .add(sphereData, 'heightSegments', 1, 16)
//   .onChange(regenerateSphereGeometry);
// spherePropertiesFolder
//   .add(sphereData, 'phiStart', 0, Math.PI * 2)
//   .onChange(regenerateSphereGeometry);
// spherePropertiesFolder
//   .add(sphereData, 'phiLength', 0, Math.PI * 2)
//   .onChange(regenerateSphereGeometry);
// spherePropertiesFolder
//   .add(sphereData, 'thetaStart', 0, Math.PI)
//   .onChange(regenerateSphereGeometry);
// spherePropertiesFolder
//   .add(sphereData, 'thetaLength', 0, Math.PI)
//   .onChange(regenerateSphereGeometry);

// function regenerateSphereGeometry() {
//   const newGeometry = new THREE.SphereGeometry(
//     sphereData.radius,
//     sphereData.widthSegments,
//     sphereData.heightSegments,
//     sphereData.phiStart,
//     sphereData.phiLength,
//     sphereData.thetaStart,
//     sphereData.thetaLength
//   );
//   sphere.geometry.dispose();
//   sphere.geometry = newGeometry;
// }

// const icosahedronData = {
//   radius: 1,
//   detail: 0,
// };
// const icosahedronFolder = gui.addFolder('Icosahedron');
// const icosahedronPropertiesFolder = icosahedronFolder.addFolder('Properties');
// icosahedronPropertiesFolder
//   .add(icosahedronData, 'radius', 0.1, 10)
//   .onChange(regenerateIcosahedronGeometry);
// icosahedronPropertiesFolder
//   .add(icosahedronData, 'detail', 0, 5)
//   .step(1)
//   .onChange(regenerateIcosahedronGeometry);

// function regenerateIcosahedronGeometry() {
//   const newGeometry = new THREE.IcosahedronGeometry(
//     icosahedronData.radius,
//     icosahedronData.detail
//   );
//   icosahedron.geometry.dispose();
//   icosahedron.geometry = newGeometry;
// }

// const debug = document.getElementById('debug1') as HTMLDivElement;

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   debug.innerText =
//     'Matrix\n' + cube.matrix.elements.toString().replace(/,/g, '\n');

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------- //
// Materials Example //
// ----------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// // const material = new THREE.MeshBasicMaterial({
// //   //   color: 0x00ff00,
// //   //   wireframe: true,
// // });
// const material = new THREE.MeshNormalMaterial();

// // Can also declare transparency without GUI
// // material.transparent = true;
// // material.opacity = 0.5;

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 3;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 0;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };

// const gui = new GUI();
// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------- //
// MeshBasic Example //
// ----------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const material = new THREE.MeshBasicMaterial(); // Can also start with custom default -> { color: 0x00ff00, wireframe: true })

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material.map = texture;
// const envTexture = new THREE.CubeTextureLoader().load([
//   'img/px_50.png',
//   'img/nx_50.png',
//   'img/py_50.png',
//   'img/ny_50.png',
//   'img/pz_50.png',
//   'img/nz_50.png',
// ]);
// envTexture.mapping = THREE.CubeReflectionMapping;
// envTexture.mapping = THREE.CubeRefractionMapping;
// material.envMap = envTexture;

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 3;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 0;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
//   combine: {
//     MultiplyOperation: THREE.MultiplyOperation,
//     MixOperation: THREE.MixOperation,
//     AddOperation: THREE.AddOperation,
//   },
// };

// const gui = new GUI();
// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// const data = {
//   color: material.color.getHex(),
// };

// const meshBasicMaterialFolder = gui.addFolder('THREE.MeshBasicMaterial');
// meshBasicMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshBasicMaterialFolder.add(material, 'wireframe');
// // meshBasicMaterialFolder.add(material, 'wireframeLinewidth', 0, 10); // No longer works with three.js
// meshBasicMaterialFolder
//   .add(material, 'combine', options.combine)
//   .onChange(() => updateMaterial());
// meshBasicMaterialFolder.add(material, 'reflectivity', 0, 1);
// meshBasicMaterialFolder.add(material, 'refractionRatio', 0, 1);
// meshBasicMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.combine = Number(material.combine) as THREE.Combine;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------- //
// MeshNormal Example //
// ----------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const material = new THREE.MeshNormalMaterial();

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 3;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 0;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };

// const gui = new GUI();
// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// const meshNormalMaterialFolder = gui.addFolder('THREE.MeshNormalMaterial');

// meshNormalMaterialFolder.add(material, 'wireframe');
// meshNormalMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshNormalMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------- //
// MeshLambert Example //
// ------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xff0000);

// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(10, 10, 10);
// scene.add(light);

// // Add second light at opposite for light in both directions
// // const light2 = new THREE.PointLight(0xffffff, 2);
// // light2.position.set(-10, -10, -10);
// // scene.add(light2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const material = new THREE.MeshLambertMaterial();

// // const texture = new THREE.TextureLoader().load('img/grid.png');
// // material.map = texture;
// // const envTexture = new THREE.CubeTextureLoader().load([
// //   'img/px_50.png',
// //   'img/nx_50.png',
// //   'img/py_50.png',
// //   'img/ny_50.png',
// //   'img/pz_50.png',
// //   'img/nz_50.png',
// // ]);
// // //envTexture.mapping = THREE.CubeReflectionMapping
// // envTexture.mapping = THREE.CubeRefractionMapping;
// // material.envMap = envTexture;

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 3;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 0;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
//   combine: {
//     MultiplyOperation: THREE.MultiplyOperation,
//     MixOperation: THREE.MixOperation,
//     AddOperation: THREE.AddOperation,
//   },
// };

// const gui = new GUI();
// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
// };

// const meshLambertMaterialFolder = gui.addFolder('THREE.MeshLambertMaterial');

// meshLambertMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshLambertMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });
// meshLambertMaterialFolder.add(material, 'wireframe');
// meshLambertMaterialFolder.add(material, 'wireframeLinewidth', 0, 10);
// meshLambertMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshLambertMaterialFolder
//   .add(material, 'combine', options.combine)
//   .onChange(() => updateMaterial());
// meshLambertMaterialFolder.add(material, 'reflectivity', 0, 1);
// meshLambertMaterialFolder.add(material, 'refractionRatio', 0, 1);
// meshLambertMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.combine = Number(material.combine) as THREE.Combine;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------- //
// MeshPhong Example //
// ----------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(10, 10, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const material = new THREE.MeshPhongMaterial();

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material.map = texture;
// const envTexture = new THREE.CubeTextureLoader().load([
//   'img/px_50.png',
//   'img/nx_50.png',
//   'img/py_50.png',
//   'img/ny_50.png',
//   'img/pz_50.png',
//   'img/nz_50.png',
// ]);
// envTexture.mapping = THREE.CubeReflectionMapping;
// // envTexture.mapping = THREE.CubeRefractionMapping;
// material.envMap = envTexture;

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 3;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 0;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
//   combine: {
//     MultiplyOperation: THREE.MultiplyOperation,
//     MixOperation: THREE.MixOperation,
//     AddOperation: THREE.AddOperation,
//   },
// };

// const gui = new GUI();
// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
//   specular: material.specular.getHex(),
// };

// const meshPhongMaterialFolder = gui.addFolder('THREE.MeshPhongMaterial');
// meshPhongMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'specular').onChange(() => {
//   material.specular.setHex(Number(data.specular.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.add(material, 'shininess', 0, 1024);
// meshPhongMaterialFolder.add(material, 'wireframe');
// meshPhongMaterialFolder.add(material, 'wireframeLinewidth', 0, 10);
// meshPhongMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshPhongMaterialFolder
//   .add(material, 'combine', options.combine)
//   .onChange(() => updateMaterial());
// meshPhongMaterialFolder.add(material, 'reflectivity', 0, 1);
// meshPhongMaterialFolder.add(material, 'refractionRatio', 0, 1);
// meshPhongMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.combine = Number(material.combine) as THREE.Combine;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------- //
// MeshStandard Example //
// -------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(10, 10, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const material = new THREE.MeshStandardMaterial();

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material.map = texture;
// const pmremGenerator = new THREE.PMREMGenerator(renderer);
// const envTexture = new THREE.CubeTextureLoader().load(
//   [
//     'img/px_50.png',
//     'img/nx_50.png',
//     'img/py_50.png',
//     'img/ny_50.png',
//     'img/pz_50.png',
//     'img/nz_50.png',
//   ],
//   () => {
//     material.envMap = pmremGenerator.fromCubemap(envTexture).texture;
//     pmremGenerator.dispose();
//   }
// );

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 3;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 0;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };

// const gui = new GUI();
// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
// };

// const meshStandardMaterialFolder = gui.addFolder('THREE.MeshStandardMaterial');

// meshStandardMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshStandardMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });
// meshStandardMaterialFolder.add(material, 'wireframe');
// meshStandardMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshStandardMaterialFolder.add(material, 'roughness', 0, 1);
// meshStandardMaterialFolder.add(material, 'metalness', 0, 1);
// meshStandardMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------- //
// MeshPhysical Example //
// -------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(10, 10, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const material = new THREE.MeshPhysicalMaterial({});
// material.reflectivity = 0;
// material.transmission = 1.0;
// material.roughness = 0.2;
// material.metalness = 0;
// material.clearcoat = 0.3;
// material.clearcoatRoughness = 0.25;
// material.color = new THREE.Color(0xffffff);
// material.ior = 1.2;
// material.thickness = 10.0;

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material.map = texture;

// const pmremGenerator = new THREE.PMREMGenerator(renderer);
// const envTexture = new THREE.CubeTextureLoader().load(
//   [
//     'img/px_50.png',
//     'img/nx_50.png',
//     'img/py_50.png',
//     'img/ny_50.png',
//     'img/pz_50.png',
//     'img/nz_50.png',
//   ],
//   () => {
//     material.envMap = pmremGenerator.fromCubemap(envTexture).texture;
//     pmremGenerator.dispose();
//     scene.background = material.envMap;
//   }
// );

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 0;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 3;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };

// const gui = new GUI();
// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
// };

// const meshPhysicalMaterialFolder = gui.addFolder('THREE.MeshPhysicalMaterial');

// meshPhysicalMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshPhysicalMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });

// meshPhysicalMaterialFolder.add(material, 'wireframe');
// meshPhysicalMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshPhysicalMaterialFolder.add(material, 'reflectivity', 0, 1);
// meshPhysicalMaterialFolder.add(material, 'roughness', 0, 1);
// meshPhysicalMaterialFolder.add(material, 'metalness', 0, 1);
// meshPhysicalMaterialFolder.add(material, 'clearcoat', 0, 1, 0.01);
// meshPhysicalMaterialFolder.add(material, 'clearcoatRoughness', 0, 1, 0.01);
// meshPhysicalMaterialFolder.add(material, 'transmission', 0, 1, 0.01);
// meshPhysicalMaterialFolder.add(material, 'ior', 1.0, 2.333);
// meshPhysicalMaterialFolder.add(material, 'thickness', 0, 10.0);
// meshPhysicalMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   torusKnot.rotation.x += 0.01;
//   torusKnot.rotation.y += 0.01;

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------- //
// MeshMatcap Example //
// ----------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// // const light = new THREE.PointLight(0xffffff, 2);
// // light.position.set(10, 10, 10);
// // scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const material = new THREE.MeshMatcapMaterial();

// // const texture = new THREE.TextureLoader().load("img/grid.png")
// // material.map = texture
// // const envTexture = new THREE.CubeTextureLoader().load(["img/px_50.png", "img/nx_50.png", "img/py_50.png", "img/ny_50.png", "img/pz_50.png", "img/nz_50.png"])
// // //envTexture.mapping = THREE.CubeReflectionMapping
// // envTexture.mapping = THREE.CubeRefractionMapping
// // material.envMap = envTexture

// const matcapTexture = new THREE.TextureLoader().load('img/matcap-opal.png');
// //const matcapTexture = new THREE.TextureLoader().load("img/matcap-crystal.png")
// //const matcapTexture = new THREE.TextureLoader().load("img/matcap-gold.png")
// //const matcapTexture = new THREE.TextureLoader().load("img/matcap-red-light.png")
// //const matcapTexture = new THREE.TextureLoader().load("img/matcap-green-yellow-pink.png")
// material.matcap = matcapTexture;

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 3;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 0;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };

// const gui = new GUI();
// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// materialFolder.open();

// const data = {
//   color: material.color.getHex(),
// };

// const meshMatcapMaterialFolder = gui.addFolder('THREE.MeshMatcapMaterial');
// meshMatcapMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshMatcapMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshMatcapMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ---------------- //
// MeshToon Example //
// ---------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 1);
// light.position.set(10, 10, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const boxGeometry = new THREE.BoxGeometry();
// const sphereGeometry = new THREE.SphereGeometry();
// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const planeGeometry = new THREE.PlaneGeometry();
// const torusKnotGeometry = new THREE.TorusKnotGeometry();

// const threeTone = new THREE.TextureLoader().load('img/threeTone.jpg');
// threeTone.minFilter = THREE.NearestFilter;
// threeTone.magFilter = THREE.NearestFilter;

// const fourTone = new THREE.TextureLoader().load('img/fourTone.jpg');
// fourTone.minFilter = THREE.NearestFilter;
// fourTone.magFilter = THREE.NearestFilter;

// const fiveTone = new THREE.TextureLoader().load('img/fiveTone.jpg');
// fiveTone.minFilter = THREE.NearestFilter;
// fiveTone.magFilter = THREE.NearestFilter;

// const material: THREE.MeshToonMaterial = new THREE.MeshToonMaterial();

// const cube = new THREE.Mesh(boxGeometry, material);
// cube.position.x = 5;
// scene.add(cube);

// const sphere = new THREE.Mesh(sphereGeometry, material);
// sphere.position.x = 3;
// scene.add(sphere);

// const icosahedron = new THREE.Mesh(icosahedronGeometry, material);
// icosahedron.position.x = 0;
// scene.add(icosahedron);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.position.x = -2;
// scene.add(plane);

// const torusKnot = new THREE.Mesh(torusKnotGeometry, material);
// torusKnot.position.x = -5;
// scene.add(torusKnot);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
//   gradientMap: {
//     Default: null,
//     threeTone: 'threeTone',
//     fourTone: 'fourTone',
//     fiveTone: 'fiveTone',
//   },
// };

// const gui = new GUI();

// const data = {
//   lightColor: light.color.getHex(),
//   color: material.color.getHex(),
//   gradientMap: 'threeTone',
// };

// material.gradientMap = threeTone;

// const lightFolder = gui.addFolder('THREE.Light');
// lightFolder.addColor(data, 'lightColor').onChange(() => {
//   light.color.setHex(Number(data.lightColor.toString().replace('#', '0x')));
// });
// lightFolder.add(light, 'intensity', 0, 4);

// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// //materialFolder.open()

// const meshToonMaterialFolder = gui.addFolder('THREE.MeshToonMaterial');
// meshToonMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });

// //shininess, specular and flatShading no longer supported in MeshToonMaterial

// meshToonMaterialFolder
//   .add(data, 'gradientMap', options.gradientMap)
//   .onChange(() => updateMaterial());
// meshToonMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.gradientMap = eval(data.gradientMap as string);
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);
//   plane.rotation.x += 0.01;
//   plane.rotation.y += 0.01;
//   sphere.rotation.x += 0.01;
//   sphere.rotation.y += 0.01;
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   icosahedron.rotation.x += 0.01;
//   icosahedron.rotation.y += 0.01;
//   torusKnot.rotation.x += 0.01;
//   torusKnot.rotation.y += 0.01;

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------- //
// Specular Map Example //
// -------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 1);
// light.position.set(0, 5, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// // controls.screenSpacePanning = true; // default is now true since three r118. Used so that panning up and down doesn't zoom in/out
// // controls.addEventListener('change', render);

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8);

// const material = new THREE.MeshPhongMaterial();

// // const texture = new THREE.TextureLoader().load('img/grid.png');
// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg');
// material.map = texture;
// // const envTexture = new THREE.CubeTextureLoader().load([
// //   'img/px_50.png',
// //   'img/nx_50.png',
// //   'img/py_50.png',
// //   'img/ny_50.png',
// //   'img/pz_50.png',
// //   'img/nz_50.png',
// // ]);
// const envTexture = new THREE.CubeTextureLoader().load([
//   'img/px_eso0932a.jpg',
//   'img/nx_eso0932a.jpg',
//   'img/py_eso0932a.jpg',
//   'img/ny_eso0932a.jpg',
//   'img/pz_eso0932a.jpg',
//   'img/nz_eso0932a.jpg',
// ]);
// envTexture.mapping = THREE.CubeReflectionMapping;
// material.envMap = envTexture;

// // const specularTexture = new THREE.TextureLoader().load(
// //   'img/grayscale-test.png'
// // );
// const specularTexture = new THREE.TextureLoader().load('img/earthSpecular.jpg');
// material.specularMap = specularTexture;

// const plane = new THREE.Mesh(planeGeometry, material);
// scene.add(plane);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
//   combine: {
//     MultiplyOperation: THREE.MultiplyOperation,
//     MixOperation: THREE.MixOperation,
//     AddOperation: THREE.AddOperation,
//   },
// };
// const gui = new GUI();

// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder.add(material, 'transparent');
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// //materialFolder.open()

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
//   specular: material.specular.getHex(),
// };

// const meshPhongMaterialFolder = gui.addFolder('THREE.MeshPhongMaterial');

// meshPhongMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'specular').onChange(() => {
//   material.specular.setHex(Number(data.specular.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.add(material, 'shininess', 0, 1024);
// meshPhongMaterialFolder.add(material, 'wireframe');
// meshPhongMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshPhongMaterialFolder
//   .add(material, 'combine', options.combine)
//   .onChange(() => updateMaterial());
// meshPhongMaterialFolder.add(material, 'reflectivity', 0, 1);
// meshPhongMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.combine = Number(material.combine) as THREE.Combine;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------------------- //
// RoughnessMap and MetalnessMap Example //
// ------------------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(0, 5, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.screenSpacePanning = true; //so that panning up and down doesn't zoom in/out
// //controls.addEventListener('change', render)

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8);

// const material = new THREE.MeshPhysicalMaterial({});

// //const texture = new THREE.TextureLoader().load("img/grid.png")
// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg');
// material.map = texture;
// // const envTexture = new THREE.CubeTextureLoader().load(["img/px_50.png", "img/nx_50.png", "img/py_50.png", "img/ny_50.png", "img/pz_50.png", "img/nz_50.png"])
// const envTexture = new THREE.CubeTextureLoader().load([
//   'img/px_eso0932a.jpg',
//   'img/nx_eso0932a.jpg',
//   'img/py_eso0932a.jpg',
//   'img/ny_eso0932a.jpg',
//   'img/pz_eso0932a.jpg',
//   'img/nz_eso0932a.jpg',
// ]);
// envTexture.mapping = THREE.CubeReflectionMapping;
// material.envMap = envTexture;

// //const specularTexture = new THREE.TextureLoader().load("img/grayscale-test.png")
// const specularTexture = new THREE.TextureLoader().load('img/earthSpecular.jpg');
// material.roughnessMap = specularTexture;
// material.metalnessMap = specularTexture;

// const plane: THREE.Mesh = new THREE.Mesh(planeGeometry, material);
// scene.add(plane);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };
// const gui = new GUI();

// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder.add(material, 'transparent');
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// //materialFolder.open()

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
// };

// const meshPhysicalMaterialFolder = gui.addFolder(
//   'THREE.meshPhysicalMaterialFolder'
// );

// meshPhysicalMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshPhysicalMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });
// meshPhysicalMaterialFolder.add(material, 'wireframe');
// meshPhysicalMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshPhysicalMaterialFolder.add(material, 'reflectivity', 0, 1);
// meshPhysicalMaterialFolder.add(material, 'envMapIntensity', 0, 1);
// meshPhysicalMaterialFolder.add(material, 'roughness', 0, 1);
// meshPhysicalMaterialFolder.add(material, 'metalness', 0, 1);
// meshPhysicalMaterialFolder.add(material, 'clearcoat', 0, 1, 0.01);
// meshPhysicalMaterialFolder.add(material, 'clearcoatRoughness', 0, 1, 0.01);
// meshPhysicalMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// --------------- //
// BumpMap Example //
// --------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(0, 5, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 1;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8);

// const material = new THREE.MeshPhongMaterial();

// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg');
// material.map = texture;

// const bumpTexture = new THREE.TextureLoader().load('img/earth_bumpmap.jpg');
// material.bumpMap = bumpTexture;
// material.bumpScale = 0.015;

// const plane = new THREE.Mesh(planeGeometry, material);
// scene.add(plane);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const gui = new GUI();
// gui.add(material, 'bumpScale', 0, 1, 0.01);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------ //
// NormalMap Example //
// ------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(0, 2, 5);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 1;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8);

// const material = new THREE.MeshPhongMaterial();

// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg');
// material.map = texture;

// const normalTexture = new THREE.TextureLoader().load(
//   'img/earth_normalmap_8192x4096.jpg'
// );
// material.normalMap = normalTexture;
// material.normalScale.set(2, 2);

// const plane = new THREE.Mesh(planeGeometry, material);
// scene.add(plane);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const gui = new GUI();
// gui.add(material.normalScale, 'x', 0, 10, 0.01);
// gui.add(material.normalScale, 'y', 0, 10, 0.01);
// gui.add(light.position, 'x', -20, 20).name('Light Pos X');

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------ //
// DisplacementMap Example //
// ------------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(0, 5, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.screenSpacePanning = true; //so that panning up and down doesn't zoom in/out
// //controls.addEventListener('change', render)

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8); //, 360, 180)

// const material = new THREE.MeshPhongMaterial();

// //const texture = new THREE.TextureLoader().load("img/grid.png")
// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg');
// material.map = texture;
// // const envTexture = new THREE.CubeTextureLoader().load(["img/px_50.png", "img/nx_50.png", "img/py_50.png", "img/ny_50.png", "img/pz_50.png", "img/nz_50.png"])
// // const envTexture = new THREE.CubeTextureLoader().load(["img/px_eso0932a.jpg", "img/nx_eso0932a.jpg", "img/py_eso0932a.jpg", "img/ny_eso0932a.jpg", "img/pz_eso0932a.jpg", "img/nz_eso0932a.jpg"])
// // envTexture.mapping = THREE.CubeReflectionMapping
// // material.envMap = envTexture

// //const specularTexture = new THREE.TextureLoader().load("img/earthSpecular.jpg")
// // material.specularMap = specularTexture

// const displacementMap = new THREE.TextureLoader().load(
//   'img/gebco_bathy.5400x2700_8bit.jpg'
// );
// material.displacementMap = displacementMap;

// const plane: THREE.Mesh = new THREE.Mesh(planeGeometry, material);
// scene.add(plane);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };
// const gui = new GUI();

// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// //materialFolder.open()

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
//   specular: material.specular.getHex(),
// };

// const meshPhongMaterialFolder = gui.addFolder('THREE.meshPhongMaterialFolder');

// meshPhongMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'specular').onChange(() => {
//   material.specular.setHex(Number(data.specular.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.add(material, 'shininess', 0, 1024);
// meshPhongMaterialFolder.add(material, 'wireframe');
// meshPhongMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshPhongMaterialFolder.add(material, 'reflectivity', 0, 1);
// meshPhongMaterialFolder.add(material, 'refractionRatio', 0, 1);
// meshPhongMaterialFolder.add(material, 'displacementScale', 0, 1, 0.01);
// meshPhongMaterialFolder.add(material, 'displacementBias', -1, 1, 0.01);
// meshPhongMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// const planeData = {
//   width: 3.6,
//   height: 1.8,
//   widthSegments: 1,
//   heightSegments: 1,
// };
// const planePropertiesFolder = gui.addFolder('PlaneGeometry');
// //planePropertiesFolder.add(planeData, 'width', 1, 30).onChange(regeneratePlaneGeometry)
// //planePropertiesFolder.add(planeData, 'height', 1, 30).onChange(regeneratePlaneGeometry)
// planePropertiesFolder
//   .add(planeData, 'widthSegments', 1, 360)
//   .onChange(regeneratePlaneGeometry);
// planePropertiesFolder
//   .add(planeData, 'heightSegments', 1, 180)
//   .onChange(regeneratePlaneGeometry);
// planePropertiesFolder.open();

// function regeneratePlaneGeometry() {
//   let newGeometry = new THREE.PlaneGeometry(
//     planeData.width,
//     planeData.height,
//     planeData.widthSegments,
//     planeData.heightSegments
//   );
//   plane.geometry.dispose();
//   plane.geometry = newGeometry;
// }

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------------------------- //
// DisplacementMap with NormalMap Example //
// -------------------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GUI } from 'dat.gui';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(0, 10, 0);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 1, 1);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8, 360, 180);

// const material = new THREE.MeshPhongMaterial();

// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg');
// material.map = texture;

// const displacementMap = new THREE.TextureLoader().load(
//   'img/gebco_bathy.5400x2700_8bit.jpg'
// );
// material.displacementMap = displacementMap;
// material.displacementScale = 0.3;

// const normalTexture = new THREE.TextureLoader().load(
//   'img/earth_normalmap_8192x4096.jpg'
// );
// material.normalMap = normalTexture;
// material.normalScale.set(5, 5);

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.rotation.x = -Math.PI / 2;
// scene.add(plane);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };

// const gui = new GUI();

// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder
//   .add(material, 'transparent')
//   .onChange(() => (material.needsUpdate = true));
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// //materialFolder.open()

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
// };

// const meshPhongMaterialFolder = gui.addFolder('THREE.MeshPhongMaterial');
// meshPhongMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.add(material, 'wireframe');
// meshPhongMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshPhongMaterialFolder.add(material, 'displacementScale', -1, 1, 0.01);
// meshPhongMaterialFolder.add(material, 'displacementBias', -1, 1, 0.01);
// meshPhongMaterialFolder.open();

// const planeData = {
//   width: 3.6,
//   height: 1.8,
//   widthSegments: 180,
//   heightSegments: 90,
// };

// const planePropertiesFolder = gui.addFolder('PlaneGeometry');
// planePropertiesFolder
//   .add(planeData, 'widthSegments', 1, 360)
//   .onChange(regeneratePlaneGeometry);
// planePropertiesFolder
//   .add(planeData, 'heightSegments', 1, 180)
//   .onChange(regeneratePlaneGeometry);
// planePropertiesFolder.open();

// const lightFolder = gui.addFolder('Light');
// lightFolder.add(light.position, 'x', -10, 10).name('position.x');
// lightFolder.add(material.normalScale, 'x', 0, 10, 0.01).name('normalScale.x');
// lightFolder.add(material.normalScale, 'y', 0, 10, 0.01).name('normalScale.y');
// lightFolder.open();

// function regeneratePlaneGeometry() {
//   let newGeometry = new THREE.PlaneGeometry(
//     planeData.width,
//     planeData.height,
//     planeData.widthSegments,
//     planeData.heightSegments
//   );
//   plane.geometry.dispose();
//   plane.geometry = newGeometry;
// }

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// function animate() {
//   requestAnimationFrame(animate);
//   render();
//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ---------------------------------- //
// Material Repeat and Center Example //
// ---------------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight(0xffffff, 2);
// light.position.set(0, 5, 10);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 3;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.screenSpacePanning = true; //so that panning up and down doesn't zoom in/out
// //controls.addEventListener('change', render)

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8, 360, 180);

// const material = new THREE.MeshPhongMaterial();

// //const texture = new THREE.TextureLoader().load("img/grid.png")
// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg');
// material.map = texture;
// // const envTexture = new THREE.CubeTextureLoader().load(["img/px_50.png", "img/nx_50.png", "img/py_50.png", "img/ny_50.png", "img/pz_50.png", "img/nz_50.png"])
// // const envTexture = new THREE.CubeTextureLoader().load(["img/px_eso0932a.jpg", "img/nx_eso0932a.jpg", "img/py_eso0932a.jpg", "img/ny_eso0932a.jpg", "img/pz_eso0932a.jpg", "img/nz_eso0932a.jpg"])
// // envTexture.mapping = THREE.CubeReflectionMapping
// // material.envMap = envTexture

// //const specularTexture = new THREE.TextureLoader().load("img/earthSpecular.jpg")
// // material.specularMap = specularTexture

// const displacementMap = new THREE.TextureLoader().load(
//   'img/gebco_bathy.5400x2700_8bit.jpg'
// );
// material.displacementMap = displacementMap;

// const plane: THREE.Mesh = new THREE.Mesh(planeGeometry, material);
// scene.add(plane);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const options = {
//   side: {
//     FrontSide: THREE.FrontSide,
//     BackSide: THREE.BackSide,
//     DoubleSide: THREE.DoubleSide,
//   },
// };
// const gui = new GUI();

// const materialFolder = gui.addFolder('THREE.Material');
// materialFolder.add(material, 'transparent');
// materialFolder.add(material, 'opacity', 0, 1, 0.01);
// materialFolder.add(material, 'depthTest');
// materialFolder.add(material, 'depthWrite');
// materialFolder
//   .add(material, 'alphaTest', 0, 1, 0.01)
//   .onChange(() => updateMaterial());
// materialFolder.add(material, 'visible');
// materialFolder
//   .add(material, 'side', options.side)
//   .onChange(() => updateMaterial());
// //materialFolder.open()

// const data = {
//   color: material.color.getHex(),
//   emissive: material.emissive.getHex(),
//   specular: material.specular.getHex(),
// };

// const meshPhongMaterialFolder = gui.addFolder('THREE.meshPhongMaterialFolder');

// meshPhongMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'emissive').onChange(() => {
//   material.emissive.setHex(Number(data.emissive.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.addColor(data, 'specular').onChange(() => {
//   material.specular.setHex(Number(data.specular.toString().replace('#', '0x')));
// });
// meshPhongMaterialFolder.add(material, 'shininess', 0, 1024);
// meshPhongMaterialFolder.add(material, 'wireframe');
// meshPhongMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshPhongMaterialFolder.add(material, 'reflectivity', 0, 1);
// meshPhongMaterialFolder.add(material, 'refractionRatio', 0, 1);
// meshPhongMaterialFolder.add(material, 'displacementScale', 0, 1, 0.01);
// meshPhongMaterialFolder.add(material, 'displacementBias', -1, 1, 0.01);
// meshPhongMaterialFolder.open();

// function updateMaterial() {
//   material.side = Number(material.side) as THREE.Side;
//   material.needsUpdate = true;
// }

// const planeData = {
//   width: 3.6,
//   height: 1.8,
//   widthSegments: 360,
//   heightSegments: 180,
// };

// const planePropertiesFolder = gui.addFolder('PlaneGeometry');
// //planePropertiesFolder.add(planeData, 'width', 1, 30).onChange(regeneratePlaneGeometry)
// //planePropertiesFolder.add(planeData, 'height', 1, 30).onChange(regeneratePlaneGeometry)
// planePropertiesFolder
//   .add(planeData, 'widthSegments', 1, 360)
//   .onChange(regeneratePlaneGeometry);
// planePropertiesFolder
//   .add(planeData, 'heightSegments', 1, 180)
//   .onChange(regeneratePlaneGeometry);
// planePropertiesFolder.open();

// function regeneratePlaneGeometry() {
//   const newGeometry = new THREE.PlaneGeometry(
//     planeData.width,
//     planeData.height,
//     planeData.widthSegments,
//     planeData.heightSegments
//   );
//   plane.geometry.dispose();
//   plane.geometry = newGeometry;
// }

// const textureFolder = gui.addFolder('Texture');
// textureFolder.add(texture.repeat, 'x', 0.1, 1, 0.1);
// textureFolder.add(texture.repeat, 'y', 0.1, 1, 0.1);
// textureFolder.add(texture.center, 'x', 0, 1, 0.001);
// textureFolder.add(texture.center, 'y', 0, 1, 0.001);

// textureFolder.open();

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------------- //
// Texture Mipmaps Example //
// ----------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene1 = new THREE.Scene();
// const scene2 = new THREE.Scene();

// const axesHelper1 = new THREE.AxesHelper(5);
// scene1.add(axesHelper1);
// const axesHelper2 = new THREE.AxesHelper(5);
// scene2.add(axesHelper2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 1;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const planeGeometry1 = new THREE.PlaneGeometry();
// const planeGeometry2 = new THREE.PlaneGeometry();

// const texture1 = new THREE.TextureLoader().load('img/grid.png');
// const texture2 = texture1.clone();

// const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
// const material2 = new THREE.MeshBasicMaterial({ map: texture2 });

// texture2.minFilter = THREE.NearestFilter;
// texture2.magFilter = THREE.NearestFilter;

// const plane1 = new THREE.Mesh(planeGeometry1, material1);
// const plane2 = new THREE.Mesh(planeGeometry2, material2);

// scene1.add(plane1);
// scene2.add(plane2);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const options = {
//   minFilters: {
//     NearestFilter: THREE.NearestFilter,
//     NearestMipMapLinearFilter: THREE.NearestMipMapLinearFilter,
//     NearestMipMapNearestFilter: THREE.NearestMipMapNearestFilter,
//     'LinearFilter ': THREE.LinearFilter,
//     'LinearMipMapLinearFilter (Default)': THREE.LinearMipMapLinearFilter,
//     LinearMipmapNearestFilter: THREE.LinearMipmapNearestFilter,
//   },
//   magFilters: {
//     NearestFilter: THREE.NearestFilter,
//     'LinearFilter (Default)': THREE.LinearFilter,
//   },
// };
// const gui = new GUI();
// const textureFolder = gui.addFolder('THREE.Texture');
// textureFolder
//   .add(texture2, 'minFilter', options.minFilters)
//   .onChange(() => updateMinFilter());
// textureFolder
//   .add(texture2, 'magFilter', options.magFilters)
//   .onChange(() => updateMagFilter());
// textureFolder.open();

// function updateMinFilter() {
//   texture2.minFilter = Number(texture2.minFilter) as THREE.TextureFilter;
//   texture2.needsUpdate = true;
// }
// function updateMagFilter() {
//   texture2.magFilter = Number(texture2.magFilter) as THREE.TextureFilter;
//   texture2.needsUpdate = true;
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.setScissorTest(true);

//   renderer.setScissor(0, 0, window.innerWidth / 2 - 2, window.innerHeight);
//   renderer.render(scene1, camera);

//   renderer.setScissor(
//     window.innerWidth / 2,
//     0,
//     window.innerWidth / 2 - 2,
//     window.innerHeight
//   );
//   renderer.render(scene2, camera);

//   renderer.setScissorTest(false);
// }
// animate();

// ---------------------- //
// Custom Mipmaps Example //
// ---------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene1 = new THREE.Scene();
// const scene2 = new THREE.Scene();

// const axesHelper1 = new THREE.AxesHelper(5);
// scene1.add(axesHelper1);
// const axesHelper2 = new THREE.AxesHelper(5);
// scene2.add(axesHelper2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 1;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const planeGeometry1 = new THREE.PlaneGeometry();
// const planeGeometry2 = new THREE.PlaneGeometry();

// // const texture1 = new THREE.TextureLoader().load("img/grid.png")
// // const texture2 = new THREE.TextureLoader().load("img/grid.png")

// const mipmap = (size: number, color: string) => {
//   const imageCanvas = document.createElement('canvas') as HTMLCanvasElement;
//   const context = imageCanvas.getContext('2d') as CanvasRenderingContext2D;
//   imageCanvas.width = size;
//   imageCanvas.height = size;
//   context.fillStyle = '#888888';
//   context.fillRect(0, 0, size, size);
//   context.fillStyle = color;
//   context.fillRect(0, 0, size / 2, size / 2);
//   context.fillRect(size / 2, size / 2, size / 2, size / 2);
//   return imageCanvas;
// };

// const blankCanvas = document.createElement('canvas') as HTMLCanvasElement;
// blankCanvas.width = 128;
// blankCanvas.height = 128;

// const texture1 = new THREE.CanvasTexture(blankCanvas);
// texture1.mipmaps[0] = mipmap(128, '#ff0000');
// texture1.mipmaps[1] = mipmap(64, '#00ff00');
// texture1.mipmaps[2] = mipmap(32, '#0000ff');
// texture1.mipmaps[3] = mipmap(16, '#880000');
// texture1.mipmaps[4] = mipmap(8, '#008800');
// texture1.mipmaps[5] = mipmap(4, '#000088');
// texture1.mipmaps[6] = mipmap(2, '#008888');
// texture1.mipmaps[7] = mipmap(1, '#880088');
// texture1.repeat.set(5, 5);
// texture1.wrapS = THREE.RepeatWrapping;
// texture1.wrapT = THREE.RepeatWrapping;

// const texture2 = texture1.clone();
// texture2.minFilter = THREE.NearestFilter;
// texture2.magFilter = THREE.NearestFilter;

// const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
// const material2 = new THREE.MeshBasicMaterial({ map: texture2 });

// const plane1 = new THREE.Mesh(planeGeometry1, material1);
// const plane2 = new THREE.Mesh(planeGeometry2, material2);

// scene1.add(plane1);
// scene2.add(plane2);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const options = {
//   minFilters: {
//     NearestFilter: THREE.NearestFilter,
//     NearestMipMapLinearFilter: THREE.NearestMipMapLinearFilter,
//     NearestMipMapNearestFilter: THREE.NearestMipMapNearestFilter,
//     'LinearFilter ': THREE.LinearFilter,
//     'LinearMipMapLinearFilter (Default)': THREE.LinearMipMapLinearFilter,
//     LinearMipmapNearestFilter: THREE.LinearMipmapNearestFilter,
//   },
//   magFilters: {
//     NearestFilter: THREE.NearestFilter,
//     'LinearFilter (Default)': THREE.LinearFilter,
//   },
// };
// const gui = new GUI();
// const textureFolder = gui.addFolder('THREE.Texture');
// textureFolder
//   .add(texture2, 'minFilter', options.minFilters)
//   .onChange(() => updateMinFilter());
// // textureFolder
// //   .add(texture2, 'magFilter', options.magFilters)
// //   .onChange(() => updateMagFilter());
// // textureFolder.open();

// function updateMinFilter() {
//   texture2.minFilter = Number(texture2.minFilter) as THREE.TextureFilter;
//   texture2.needsUpdate = true;
// }
// // function updateMagFilter() {
// //   texture2.magFilter = Number(texture2.magFilter) as THREE.TextureFilter;
// //   texture2.needsUpdate = true;
// // }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.setScissorTest(true);

//   renderer.setScissor(0, 0, window.innerWidth / 2 - 2, window.innerHeight);
//   renderer.render(scene1, camera);

//   renderer.setScissor(
//     window.innerWidth / 2,
//     0,
//     window.innerWidth / 2 - 2,
//     window.innerHeight
//   );
//   renderer.render(scene2, camera);

//   renderer.setScissorTest(false);
// }
// animate();

// ----------------------------- //
// Anisotropic Filtering Example //
// ----------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene1 = new THREE.Scene();
// const scene2 = new THREE.Scene();

// const axesHelper1 = new THREE.AxesHelper(5);
// scene1.add(axesHelper1);
// const axesHelper2 = new THREE.AxesHelper(5);
// scene2.add(axesHelper2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, -0.35, 0.2);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const planeGeometry1 = new THREE.PlaneGeometry(2, 25);
// const planeGeometry2 = new THREE.PlaneGeometry(2, 25);

// // const texture1 = new THREE.TextureLoader().load("img/grid.png")
// // const texture2 = new THREE.TextureLoader().load("img/grid.png")

// const mipmap = (size: number, color: string): HTMLCanvasElement => {
//   const imageCanvas = document.createElement('canvas') as HTMLCanvasElement;
//   const context = imageCanvas.getContext('2d') as CanvasRenderingContext2D;
//   imageCanvas.width = size;
//   imageCanvas.height = size;
//   context.fillStyle = '#888888';
//   context.fillRect(0, 0, size, size);
//   context.fillStyle = color;
//   context.fillRect(0, 0, size / 2, size / 2);
//   context.fillRect(size / 2, size / 2, size / 2, size / 2);
//   return imageCanvas;
// };

// const blankCanvas = document.createElement('canvas') as HTMLCanvasElement;
// blankCanvas.width = 128;
// blankCanvas.height = 128;

// const texture1 = new THREE.CanvasTexture(blankCanvas);
// texture1.mipmaps[0] = mipmap(128, '#ff0000');
// texture1.mipmaps[1] = mipmap(64, '#00ff00');
// texture1.mipmaps[2] = mipmap(32, '#0000ff');
// texture1.mipmaps[3] = mipmap(16, '#880000');
// texture1.mipmaps[4] = mipmap(8, '#008800');
// texture1.mipmaps[5] = mipmap(4, '#000088');
// texture1.mipmaps[6] = mipmap(2, '#008888');
// texture1.mipmaps[7] = mipmap(1, '#880088');
// texture1.repeat.set(5, 50);
// texture1.wrapS = THREE.RepeatWrapping;
// texture1.wrapT = THREE.RepeatWrapping;

// const texture2 = texture1.clone();
// texture2.minFilter = THREE.NearestFilter;
// texture2.magFilter = THREE.NearestFilter;

// const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
// const material2 = new THREE.MeshBasicMaterial({ map: texture2 });

// const plane1 = new THREE.Mesh(planeGeometry1, material1);
// const plane2 = new THREE.Mesh(planeGeometry2, material2);

// scene1.add(plane1);
// scene2.add(plane2);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const options = {
//   minFilters: {
//     NearestFilter: THREE.NearestFilter,
//     NearestMipMapLinearFilter: THREE.NearestMipMapLinearFilter,
//     NearestMipMapNearestFilter: THREE.NearestMipMapNearestFilter,
//     'LinearFilter ': THREE.LinearFilter,
//     'LinearMipMapLinearFilter (Default)': THREE.LinearMipMapLinearFilter,
//     LinearMipmapNearestFilter: THREE.LinearMipmapNearestFilter,
//   },
//   magFilters: {
//     NearestFilter: THREE.NearestFilter,
//     'LinearFilter (Default)': THREE.LinearFilter,
//   },
// };
// const gui = new GUI();
// const textureFolder = gui.addFolder('THREE.Texture');
// textureFolder
//   .add(texture2, 'minFilter', options.minFilters)
//   .onChange(() => updateMinFilter());
// // textureFolder
// //     .add(texture2, 'magFilter', options.magFilters)
// //     .onChange(() => updateMagFilter())
// textureFolder
//   .add(texture2, 'anisotropy', 1, renderer.capabilities.getMaxAnisotropy())
//   .onChange(() => updateAnistropy());
// textureFolder.open();

// function updateAnistropy() {
//   material2.map = texture2.clone();
// }
// function updateMinFilter() {
//   texture2.minFilter = Number(texture2.minFilter) as THREE.TextureFilter;
//   texture2.needsUpdate = true;
// }
// // function updateMagFilter() {
// //     texture2.magFilter = Number(texture2.magFilter) as THREE.TextureFilter
// //     texture2.needsUpdate = true
// // }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.setScissorTest(true);

//   renderer.setScissor(0, 0, window.innerWidth / 2 - 2, window.innerHeight);
//   renderer.render(scene1, camera);

//   renderer.setScissor(
//     window.innerWidth / 2,
//     0,
//     window.innerWidth / 2 - 2,
//     window.innerHeight
//   );
//   renderer.render(scene2, camera);

//   renderer.setScissorTest(false);
// }
// animate();

// --------------- //
// Lights Example //
// -------------- //
