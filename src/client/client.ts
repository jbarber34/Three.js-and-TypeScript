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

// --------------------- //
// Ambient Light Example //
// --------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.AmbientLight();
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 7;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const planeGeometry = new THREE.PlaneGeometry(20, 10); //, 360, 180)
// const plane = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial());
// plane.rotateX(-Math.PI / 2);
// //plane.position.y = -1.75
// scene.add(plane);

// const torusGeometry = [
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
// ];

// const material = [
//   new THREE.MeshBasicMaterial(),
//   new THREE.MeshLambertMaterial(),
//   new THREE.MeshPhongMaterial(),
//   new THREE.MeshPhysicalMaterial({}),
//   new THREE.MeshToonMaterial(),
// ];

// const torus = [
//   new THREE.Mesh(torusGeometry[0], material[0]),
//   new THREE.Mesh(torusGeometry[1], material[1]),
//   new THREE.Mesh(torusGeometry[2], material[2]),
//   new THREE.Mesh(torusGeometry[3], material[3]),
//   new THREE.Mesh(torusGeometry[4], material[4]),
// ];

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material[0].map = texture;
// material[1].map = texture;
// material[2].map = texture;
// material[3].map = texture;
// material[4].map = texture;

// torus[0].position.x = -8;
// torus[1].position.x = -4;
// torus[2].position.x = 0;
// torus[3].position.x = 4;
// torus[4].position.x = 8;

// scene.add(torus[0]);
// scene.add(torus[1]);
// scene.add(torus[2]);
// scene.add(torus[3]);
// scene.add(torus[4]);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const data = {
//   color: light.color.getHex(),
//   mapsEnabled: true,
// };

// const gui = new GUI();
// const lightFolder = gui.addFolder('THREE.Light');
// lightFolder.addColor(data, 'color').onChange(() => {
//   light.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// lightFolder.add(light, 'intensity', 0, 1, 0.01);

// const ambientLightFolder = gui.addFolder('THREE.AmbientLight');
// ambientLightFolder.open();

// const meshesFolder = gui.addFolder('Meshes');
// meshesFolder.add(data, 'mapsEnabled').onChange(() => {
//   material.forEach((m) => {
//     if (data.mapsEnabled) {
//       m.map = texture;
//     } else {
//       m.map = null;
//     }
//     m.needsUpdate = true;
//   });
// });

// function animate() {
//   requestAnimationFrame(animate);

//   torus.forEach((t) => {
//     t.rotation.y += 0.01;
//   });

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------- //
// Directional Light Example //
// ------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.DirectionalLight();
// scene.add(light);

// const helper = new THREE.DirectionalLightHelper(light);
// scene.add(helper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 7;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// // const planeGeometry = new THREE.PlaneGeometry(20, 10)//, 360, 180)
// // const plane = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial())
// // plane.rotateX(-Math.PI / 2)
// // //plane.position.y = -1.75
// // scene.add(plane)

// const torusGeometry = [
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
// ];

// const material = [
//   new THREE.MeshBasicMaterial(),
//   new THREE.MeshLambertMaterial(),
//   new THREE.MeshPhongMaterial(),
//   new THREE.MeshPhysicalMaterial({}),
//   new THREE.MeshToonMaterial(),
// ];

// const torus = [
//   new THREE.Mesh(torusGeometry[0], material[0]),
//   new THREE.Mesh(torusGeometry[1], material[1]),
//   new THREE.Mesh(torusGeometry[2], material[2]),
//   new THREE.Mesh(torusGeometry[3], material[3]),
//   new THREE.Mesh(torusGeometry[4], material[4]),
// ];

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material[0].map = texture;
// material[1].map = texture;
// material[2].map = texture;
// material[3].map = texture;
// material[4].map = texture;

// torus[0].position.x = -8;
// torus[1].position.x = -4;
// torus[2].position.x = 0;
// torus[3].position.x = 4;
// torus[4].position.x = 8;

// light.target = torus[0];

// scene.add(torus[0]);
// scene.add(torus[1]);
// scene.add(torus[2]);
// scene.add(torus[3]);
// scene.add(torus[4]);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const data = {
//   color: light.color.getHex(),
//   mapsEnabled: true,
// };

// const gui = new GUI();
// const lightFolder = gui.addFolder('THREE.Light');
// lightFolder.addColor(data, 'color').onChange(() => {
//   light.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// lightFolder.add(light, 'intensity', 0, 1, 0.01);

// const directionalLightFolder = gui.addFolder('THREE.DirectionalLight');
// directionalLightFolder.add(light.position, 'x', -100, 100, 0.01);
// directionalLightFolder.add(light.position, 'y', -100, 100, 0.01);
// directionalLightFolder.add(light.position, 'z', -100, 100, 0.01);
// directionalLightFolder.open();

// const meshesFolder = gui.addFolder('Meshes');
// meshesFolder.add(data, 'mapsEnabled').onChange(() => {
//   material.forEach((m) => {
//     if (data.mapsEnabled) {
//       m.map = texture;
//     } else {
//       m.map = null;
//     }
//     m.needsUpdate = true;
//   });
// });

// function animate() {
//   requestAnimationFrame(animate);

//   helper.update();

//   torus.forEach((t) => {
//     t.rotation.y += 0.01;
//   });

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------ //
// Hemisphere Light Example //
// ------------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.HemisphereLight();
// scene.add(light);

// const helper = new THREE.HemisphereLightHelper(light, 5);
// scene.add(helper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 7;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// // const planeGeometry = new THREE.PlaneGeometry(100, 10)
// // const plane = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial())
// // plane.rotateX(-Math.PI / 2)
// // //plane.position.y = -1.75
// // scene.add(plane)

// const torusGeometry = [
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
// ];

// const material = [
//   new THREE.MeshBasicMaterial(),
//   new THREE.MeshLambertMaterial(),
//   new THREE.MeshPhongMaterial(),
//   new THREE.MeshPhysicalMaterial({}),
//   new THREE.MeshToonMaterial(),
// ];

// const torus = [
//   new THREE.Mesh(torusGeometry[0], material[0]),
//   new THREE.Mesh(torusGeometry[1], material[1]),
//   new THREE.Mesh(torusGeometry[2], material[2]),
//   new THREE.Mesh(torusGeometry[3], material[3]),
//   new THREE.Mesh(torusGeometry[4], material[4]),
// ];

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material[0].map = texture;
// material[1].map = texture;
// material[2].map = texture;
// material[3].map = texture;
// material[4].map = texture;

// torus[0].position.x = -8;
// torus[1].position.x = -4;
// torus[2].position.x = 0;
// torus[3].position.x = 4;
// torus[4].position.x = 8;

// scene.add(torus[0]);
// scene.add(torus[1]);
// scene.add(torus[2]);
// scene.add(torus[3]);
// scene.add(torus[4]);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const data = {
//   color: light.color.getHex(),
//   groundColor: light.groundColor.getHex(),
//   mapsEnabled: true,
// };

// const gui = new GUI();
// const lightFolder = gui.addFolder('THREE.Light');
// lightFolder.addColor(data, 'color').onChange(() => {
//   light.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// lightFolder.add(light, 'intensity', 0, 1, 0.01);

// const hemisphereLightFolder = gui.addFolder('THREE.HemisphereLight');
// hemisphereLightFolder.addColor(data, 'groundColor').onChange(() => {
//   light.groundColor.setHex(
//     Number(data.groundColor.toString().replace('#', '0x'))
//   );
// });

// hemisphereLightFolder.add(light.position, 'x', -100, 100, 0.01);
// hemisphereLightFolder.add(light.position, 'y', -100, 100, 0.01);
// hemisphereLightFolder.add(light.position, 'z', -100, 100, 0.01);
// hemisphereLightFolder.open();

// const meshesFolder = gui.addFolder('Meshes');
// meshesFolder.add(data, 'mapsEnabled').onChange(() => {
//   material.forEach((m) => {
//     if (data.mapsEnabled) {
//       m.map = texture;
//     } else {
//       m.map = null;
//     }
//     m.needsUpdate = true;
//   });
// });

// function animate() {
//   requestAnimationFrame(animate);

//   //helper.update()

//   torus.forEach((t) => {
//     t.rotation.y += 0.01;
//   });

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------- //
// Point Light Example //
// ------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight();
// scene.add(light);

// const helper = new THREE.PointLightHelper(light);
// scene.add(helper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 7;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const planeGeometry = new THREE.PlaneGeometry(20, 10); //, 360, 180)
// const plane = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial());
// plane.rotateX(-Math.PI / 2);
// //plane.position.y = -1.75
// scene.add(plane);

// const torusGeometry = [
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
// ];

// const material = [
//   new THREE.MeshBasicMaterial(),
//   new THREE.MeshLambertMaterial(),
//   new THREE.MeshPhongMaterial(),
//   new THREE.MeshPhysicalMaterial({}),
//   new THREE.MeshToonMaterial(),
// ];

// const torus = [
//   new THREE.Mesh(torusGeometry[0], material[0]),
//   new THREE.Mesh(torusGeometry[1], material[1]),
//   new THREE.Mesh(torusGeometry[2], material[2]),
//   new THREE.Mesh(torusGeometry[3], material[3]),
//   new THREE.Mesh(torusGeometry[4], material[4]),
// ];

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material[0].map = texture;
// material[1].map = texture;
// material[2].map = texture;
// material[3].map = texture;
// material[4].map = texture;

// torus[0].position.x = -8;
// torus[1].position.x = -4;
// torus[2].position.x = 0;
// torus[3].position.x = 4;
// torus[4].position.x = 8;

// scene.add(torus[0]);
// scene.add(torus[1]);
// scene.add(torus[2]);
// scene.add(torus[3]);
// scene.add(torus[4]);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const data = {
//   color: light.color.getHex(),
//   mapsEnabled: true,
// };

// const gui = new GUI();
// const lightFolder = gui.addFolder('THREE.Light');
// lightFolder.addColor(data, 'color').onChange(() => {
//   light.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// lightFolder.add(light, 'intensity', 0, 1, 0.01);

// const pointLightFolder = gui.addFolder('THREE.PointLight');
// pointLightFolder.add(light, 'distance', 0, 100, 0.01);
// pointLightFolder.add(light, 'decay', 0, 4, 0.1);
// pointLightFolder.add(light.position, 'x', -50, 50, 0.01);
// pointLightFolder.add(light.position, 'y', -50, 50, 0.01);
// pointLightFolder.add(light.position, 'z', -50, 50, 0.01);
// pointLightFolder.open();

// const meshesFolder = gui.addFolder('Meshes');
// meshesFolder.add(data, 'mapsEnabled').onChange(() => {
//   material.forEach((m) => {
//     if (data.mapsEnabled) {
//       m.map = texture;
//     } else {
//       m.map = null;
//     }
//     m.needsUpdate = true;
//   });
// });

// function animate() {
//   requestAnimationFrame(animate);

//   //helper.update()

//   torus.forEach((t) => {
//     t.rotation.y += 0.01;
//   });

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------ //
// Spot Light Example //
// ------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.SpotLight();
// scene.add(light);

// const helper = new THREE.SpotLightHelper(light);
// scene.add(helper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 7;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const planeGeometry = new THREE.PlaneGeometry(100, 10);
// const plane = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial());
// plane.rotateX(-Math.PI / 2);
// plane.position.y = -1.75;
// scene.add(plane);

// const torusGeometry = [
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
// ];

// const material = [
//   new THREE.MeshBasicMaterial(),
//   new THREE.MeshLambertMaterial(),
//   new THREE.MeshPhongMaterial(),
//   new THREE.MeshPhysicalMaterial({}),
//   new THREE.MeshToonMaterial(),
// ];

// const torus = [
//   new THREE.Mesh(torusGeometry[0], material[0]),
//   new THREE.Mesh(torusGeometry[1], material[1]),
//   new THREE.Mesh(torusGeometry[2], material[2]),
//   new THREE.Mesh(torusGeometry[3], material[3]),
//   new THREE.Mesh(torusGeometry[4], material[4]),
// ];

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material[0].map = texture;
// material[1].map = texture;
// material[2].map = texture;
// material[3].map = texture;
// material[4].map = texture;

// torus[0].position.x = -8;
// torus[1].position.x = -4;
// torus[2].position.x = 0;
// torus[3].position.x = 4;
// torus[4].position.x = 8;

// scene.add(torus[0]);
// scene.add(torus[1]);
// scene.add(torus[2]);
// scene.add(torus[3]);
// scene.add(torus[4]);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const data = {
//   color: light.color.getHex(),
//   mapsEnabled: true,
// };

// const gui = new GUI();
// const lightFolder = gui.addFolder('THREE.Light');
// lightFolder.addColor(data, 'color').onChange(() => {
//   light.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// lightFolder.add(light, 'intensity', 0, 1, 0.01);
// lightFolder.open();
// const spotLightFolder = gui.addFolder('THREE.SpotLight');
// spotLightFolder.add(light, 'distance', 0, 100, 0.01);
// spotLightFolder.add(light, 'decay', 0, 4, 0.1);
// spotLightFolder.add(light, 'angle', 0, 1, 0.1);
// spotLightFolder.add(light, 'penumbra', 0, 1, 0.1);
// spotLightFolder.add(light.position, 'x', -50, 50, 0.01);
// spotLightFolder.add(light.position, 'y', -50, 50, 0.01);
// spotLightFolder.add(light.position, 'z', -50, 50, 0.01);
// spotLightFolder.open();
// const meshesFolder = gui.addFolder('Meshes');
// meshesFolder.add(data, 'mapsEnabled').onChange(() => {
//   material.forEach((m) => {
//     if (data.mapsEnabled) {
//       m.map = texture;
//     } else {
//       m.map = null;
//     }
//     m.needsUpdate = true;
//   });
// });

// function animate() {
//   requestAnimationFrame(animate);

//   helper.update();

//   torus.forEach((t) => {
//     t.rotation.y += 0.01;
//   });

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------- //
// Spot Light Shadow Example //
// ------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.SpotLight();
// light.castShadow = true;
// light.shadow.mapSize.width = 512;
// light.shadow.mapSize.height = 512;
// light.shadow.camera.near = 0.5;
// light.shadow.camera.far = 100;
// scene.add(light);

// // const helper = new THREE.SpotLightHelper(light);
// const helper = new THREE.CameraHelper(light.shadow.camera);
// scene.add(helper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 7;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// //renderer.shadowMap.type = THREE.BasicShadowMap
// //renderer.shadowMap.type = THREE.PCFShadowMap
// //renderer.shadowMap.type = THREE.VSMShadowMap
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const planeGeometry = new THREE.PlaneGeometry(100, 20);
// const plane = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial());
// plane.rotateX(-Math.PI / 2);
// plane.position.y = -1.75;
// plane.receiveShadow = true;
// scene.add(plane);

// const torusGeometry = [
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
// ];

// const material = [
//   new THREE.MeshBasicMaterial(),
//   new THREE.MeshLambertMaterial(),
//   new THREE.MeshPhongMaterial(),
//   new THREE.MeshPhysicalMaterial({}),
//   new THREE.MeshToonMaterial(),
// ];

// const torus = [
//   new THREE.Mesh(torusGeometry[0], material[0]),
//   new THREE.Mesh(torusGeometry[1], material[1]),
//   new THREE.Mesh(torusGeometry[2], material[2]),
//   new THREE.Mesh(torusGeometry[3], material[3]),
//   new THREE.Mesh(torusGeometry[4], material[4]),
// ];

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material[0].map = texture;
// material[1].map = texture;
// material[2].map = texture;
// material[3].map = texture;
// material[4].map = texture;

// torus[0].position.x = -8;
// torus[1].position.x = -4;
// torus[2].position.x = 0;
// torus[3].position.x = 4;
// torus[4].position.x = 8;

// torus[0].castShadow = true;
// torus[1].castShadow = true;
// torus[2].castShadow = true;
// torus[3].castShadow = true;
// torus[4].castShadow = true;

// torus[0].receiveShadow = true;
// torus[1].receiveShadow = true;
// torus[2].receiveShadow = true;
// torus[3].receiveShadow = true;
// torus[4].receiveShadow = true;

// scene.add(torus[0]);
// scene.add(torus[1]);
// scene.add(torus[2]);
// scene.add(torus[3]);
// scene.add(torus[4]);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const data = {
//   color: light.color.getHex(),
//   mapsEnabled: true,
//   shadowMapSizeWidth: 512,
//   shadowMapSizeHeight: 512,
// };

// const gui = new GUI();
// const lightFolder = gui.addFolder('THREE.Light');
// lightFolder.addColor(data, 'color').onChange(() => {
//   light.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// lightFolder.add(light, 'intensity', 0, 1, 0.01);

// const spotLightFolder = gui.addFolder('THREE.SpotLight');
// spotLightFolder.add(light, 'distance', 0, 100, 0.01);
// spotLightFolder.add(light, 'decay', 0, 4, 0.1);
// spotLightFolder.add(light, 'angle', 0, 1, 0.1);
// spotLightFolder.add(light, 'penumbra', 0, 1, 0.1);
// spotLightFolder
//   .add(light.shadow.camera, 'near', 0.1, 100)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// spotLightFolder
//   .add(light.shadow.camera, 'far', 0.1, 100)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// spotLightFolder
//   .add(data, 'shadowMapSizeWidth', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateShadowMapSize());
// spotLightFolder
//   .add(data, 'shadowMapSizeHeight', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateShadowMapSize());
// spotLightFolder.add(light.position, 'x', -50, 50, 0.01);
// spotLightFolder.add(light.position, 'y', -50, 50, 0.01);
// spotLightFolder.add(light.position, 'z', -50, 50, 0.01);
// spotLightFolder.open();

// function updateShadowMapSize() {
//   light.shadow.mapSize.width = data.shadowMapSizeWidth;
//   light.shadow.mapSize.height = data.shadowMapSizeHeight;
//   (light.shadow.map as any) = null;
// }

// const meshesFolder = gui.addFolder('Meshes');
// meshesFolder.add(data, 'mapsEnabled').onChange(() => {
//   material.forEach((m) => {
//     if (data.mapsEnabled) {
//       m.map = texture;
//     } else {
//       m.map = null;
//     }
//     m.needsUpdate = true;
//   });
// });

// function animate() {
//   requestAnimationFrame(animate);

//   helper.update();

//   torus.forEach((t) => {
//     t.rotation.y += 0.01;
//   });

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------------------- //
// Directional Light Shadow Example //
// -------------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.DirectionalLight();
// light.castShadow = true;
// light.shadow.mapSize.width = 512;
// light.shadow.mapSize.height = 512;
// light.shadow.camera.near = 0.5;
// light.shadow.camera.far = 100;
// scene.add(light);

// //const helper = new THREE.DirectionalLightHelper(light);
// const helper = new THREE.CameraHelper(light.shadow.camera);
// scene.add(helper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 7;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// //renderer.shadowMap.type = THREE.BasicShadowMap
// //renderer.shadowMap.type = THREE.PCFShadowMap
// //renderer.shadowMap.type = THREE.VSMShadowMap
// document.body.appendChild(renderer.domElement);

// new OrbitControls(camera, renderer.domElement);

// const planeGeometry = new THREE.PlaneGeometry(100, 20);
// const plane = new THREE.Mesh(planeGeometry, new THREE.MeshPhongMaterial());
// plane.rotateX(-Math.PI / 2);
// plane.position.y = -1.75;
// plane.receiveShadow = true;
// scene.add(plane);

// const torusGeometry = [
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
//   new THREE.TorusGeometry(),
// ];

// const material = [
//   new THREE.MeshBasicMaterial(),
//   new THREE.MeshLambertMaterial(),
//   new THREE.MeshPhongMaterial(),
//   new THREE.MeshPhysicalMaterial({}),
//   new THREE.MeshToonMaterial(),
// ];

// const torus = [
//   new THREE.Mesh(torusGeometry[0], material[0]),
//   new THREE.Mesh(torusGeometry[1], material[1]),
//   new THREE.Mesh(torusGeometry[2], material[2]),
//   new THREE.Mesh(torusGeometry[3], material[3]),
//   new THREE.Mesh(torusGeometry[4], material[4]),
// ];

// const texture = new THREE.TextureLoader().load('img/grid.png');
// material[0].map = texture;
// material[1].map = texture;
// material[2].map = texture;
// material[3].map = texture;
// material[4].map = texture;

// torus[0].position.x = -8;
// torus[1].position.x = -4;
// torus[2].position.x = 0;
// torus[3].position.x = 4;
// torus[4].position.x = 8;

// torus[0].castShadow = true;
// torus[1].castShadow = true;
// torus[2].castShadow = true;
// torus[3].castShadow = true;
// torus[4].castShadow = true;

// torus[0].receiveShadow = true;
// torus[1].receiveShadow = true;
// torus[2].receiveShadow = true;
// torus[3].receiveShadow = true;
// torus[4].receiveShadow = true;

// scene.add(torus[0]);
// scene.add(torus[1]);
// scene.add(torus[2]);
// scene.add(torus[3]);
// scene.add(torus[4]);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const data = {
//   color: light.color.getHex(),
//   mapsEnabled: true,
//   shadowMapSizeWidth: 512,
//   shadowMapSizeHeight: 512,
// };

// const gui = new GUI();
// const lightFolder = gui.addFolder('THREE.Light');
// lightFolder.addColor(data, 'color').onChange(() => {
//   light.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// lightFolder.add(light, 'intensity', 0, 1, 0.01);

// const directionalLightFolder = gui.addFolder('THREE.DirectionalLight');
// directionalLightFolder
//   .add(light.shadow.camera, 'left', -10, -1, 0.1)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'right', 1, 10, 0.1)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'top', 1, 10, 0.1)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'bottom', -10, -1, 0.1)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'near', 0.1, 100)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'far', 0.1, 100)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(data, 'shadowMapSizeWidth', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateShadowMapSize());
// directionalLightFolder
//   .add(data, 'shadowMapSizeHeight', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateShadowMapSize());
// directionalLightFolder.add(light.position, 'x', -50, 50, 0.01);
// directionalLightFolder.add(light.position, 'y', -50, 50, 0.01);
// directionalLightFolder.add(light.position, 'z', -50, 50, 0.01);
// directionalLightFolder.open();

// function updateShadowMapSize() {
//   light.shadow.mapSize.width = data.shadowMapSizeWidth;
//   light.shadow.mapSize.height = data.shadowMapSizeHeight;
//   (light.shadow.map as any) = null;
// }

// const meshesFolder = gui.addFolder('Meshes');
// meshesFolder.add(data, 'mapsEnabled').onChange(() => {
//   material.forEach((m) => {
//     if (data.mapsEnabled) {
//       m.map = texture;
//     } else {
//       m.map = null;
//     }
//     m.needsUpdate = true;
//   });
// });

// function animate() {
//   requestAnimationFrame(animate);

//   helper.update();

//   torus.forEach((t) => {
//     t.rotation.y += 0.01;
//   });

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------------------------- //
// DisplacementMap with Shadow Example //
// ----------------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GUI } from 'dat.gui';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// const light = new THREE.DirectionalLight(0xffffff, 10);
// light.position.set(-4.4, 3.3, 2.2);
// light.castShadow = true;
// light.shadow.bias = -0.003;
// light.shadow.mapSize.width = 2048;
// light.shadow.mapSize.height = 2048;
// light.shadow.camera.left = -5;
// light.shadow.camera.right = 5;
// light.shadow.camera.top = -2;
// light.shadow.camera.bottom = 2;
// light.shadow.camera.near = 1;
// light.shadow.camera.far = 10;

// scene.add(light);

// //const helper = new THREE.DirectionalLightHelper(light);
// const helper = new THREE.CameraHelper(light.shadow.camera);
// scene.add(helper);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 1, 1);

// const renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFShadowMap;
// //renderer.physicallyCorrectLights = true //deprecated
// renderer.useLegacyLights = false; //use this instead of setting physicallyCorrectLights=true property
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const planeGeometry = new THREE.PlaneGeometry(3.6, 1.8, 360, 180);

// const material = new THREE.MeshStandardMaterial();
// material.metalness = 0;
// material.roughness = 0;

// const texture = new THREE.TextureLoader().load('img/worldColour.5400x2700.jpg');
// material.map = texture;

// const displacementMap = new THREE.TextureLoader().load(
//   'img/gebco_bathy.5400x2700_8bit.jpg'
// );
// material.displacementMap = displacementMap;
// material.displacementScale = 0.3;

// const plane = new THREE.Mesh(planeGeometry, material);
// plane.rotation.x = -Math.PI / 2;
// plane.castShadow = true;
// plane.receiveShadow = true;

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
// var options = {
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
//   shadowMapSizeWidth: 2048,
//   shadowMapSizeHeight: 2048,
// };

// const meshStandardMaterialFolder = gui.addFolder('THREE.MeshStandardMaterial');

// meshStandardMaterialFolder.addColor(data, 'color').onChange(() => {
//   material.color.setHex(Number(data.color.toString().replace('#', '0x')));
// });
// meshStandardMaterialFolder.add(material, 'wireframe');
// meshStandardMaterialFolder
//   .add(material, 'flatShading')
//   .onChange(() => updateMaterial());
// meshStandardMaterialFolder.add(material, 'displacementScale', -1, 1, 0.01);
// meshStandardMaterialFolder.add(material, 'displacementBias', -1, 1, 0.01);

// meshStandardMaterialFolder.add(material, 'roughness', 0, 1);
// meshStandardMaterialFolder.add(material, 'metalness', 0, 1);
// //meshStandardMaterialFolder.open()

// var planeData = {
//   width: 3.6,
//   height: 1.8,
//   widthSegments: 180,
//   heightSegments: 90,
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
// //planePropertiesFolder.open()

// const directionalLightFolder = gui.addFolder('THREE.DirectionalLight');
// directionalLightFolder
//   .add(light.shadow.camera, 'left', -5, -1, 0.1)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'right', 1, 5, 0.1)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'top', 1, 5, 0.1)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'bottom', -5, -1, 0.1)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'near', 0.1, 100)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(light.shadow.camera, 'far', 0.1, 100)
//   .onChange(() => light.shadow.camera.updateProjectionMatrix());
// directionalLightFolder
//   .add(data, 'shadowMapSizeWidth', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateShadowMapSize());
// directionalLightFolder
//   .add(data, 'shadowMapSizeHeight', [256, 512, 1024, 2048, 4096])
//   .onChange(() => updateShadowMapSize());
// directionalLightFolder.add(light.position, 'x', -5, 5, 0.01);
// directionalLightFolder.add(light.position, 'y', -5, 5, 0.01);
// directionalLightFolder.add(light.position, 'z', -5, 5, 0.01);
// directionalLightFolder.open();

// function updateShadowMapSize() {
//   light.shadow.mapSize.width = data.shadowMapSizeWidth;
//   light.shadow.mapSize.height = data.shadowMapSizeHeight;
//   (light.shadow.map as any) = null;
// }

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
//   helper.update();
//   controls.update();
//   render();
//   stats.update();
// }
// function render() {
//   renderer.render(scene, camera);
// }
// animate();

// ---------------------- //
// Orbit Controls Example //
// ---------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
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

// // Use controls.target.set() rather than camera.lookAt() to adjust camera view to start
// // camera.lookAt() alone will reset to 0,0 when moved #MightUse
// // camera.lookAt(0.5, 0.5, 0.5);
// // controls.target.set(0.5, 0.5, 0.5);
// // controls.update();

// // controls.addEventListener('change', () => console.log("Controls Change"))
// // controls.addEventListener('start', () => console.log("Controls Start Event"))
// // controls.addEventListener('end', () => console.log("Controls End Event"))

// // Only works if controls.update() is listed in the animate function
// // controls.autoRotate = true;
// // controls.autoRotateSpeed = 10;
// // controls.enableDamping = true
// // controls.dampingFactor = .01
// // controls.enableKeys = true //older versions
// // controls.listenToKeyEvents(document.body);
// // controls.keys = {
// //   LEFT: 'ArrowLeft', //left arrow
// //   UP: 'ArrowUp', // up arrow
// //   RIGHT: 'ArrowRight', // right arrow
// //   BOTTOM: 'ArrowDown', // down arrow
// // };
// // controls.mouseButtons = {
// //     LEFT: THREE.MOUSE.ROTATE,
// //     MIDDLE: THREE.MOUSE.DOLLY,
// //     RIGHT: THREE.MOUSE.PAN
// // }
// // controls.touches = {
// //     ONE: THREE.TOUCH.ROTATE,
// //     TWO: THREE.TOUCH.DOLLY_PAN
// // }
// // controls.screenSpacePanning = true
// // controls.minAzimuthAngle = 0
// // controls.maxAzimuthAngle = Math.PI / 2
// // controls.minPolarAngle = 0
// // controls.maxPolarAngle = Math.PI

// // This prevents zooming too far in or out #MightUse
// controls.maxDistance = 4;
// controls.minDistance = 2;

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
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

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

// -------------------------- //
// Trackball Controls Example //
// -------------------------- //

// import * as THREE from 'three';
// import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
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

// const controls = new TrackballControls(camera, renderer.domElement);
// // controls.addEventListener('change', () => console.log("Controls Change"))
// // controls.addEventListener('start', () => console.log("Controls Start Event"))
// // controls.addEventListener('end', () => console.log("Controls End Event"))
// // controls.enabled = false
// // controls.rotateSpeed = 1.0
// // controls.zoomSpeed = 1.2
// // controls.panSpeed = 0.8
// // controls.keys = ['KeyA', 'KeyS', 'KeyD']
// // controls.noPan = true //default false
// // controls.noRotate = true //default false
// // controls.noZoom = true //default false
// // controls.staticMoving = true //default false
// // controls.dynamicDampingFactor = 0.1
// // controls.maxDistance = 4
// // controls.minDistance = 2

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
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   // trackball controls needs to be updated in the animation loop before it will work
//   controls.update();

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ---------------------------- //
// PointerLock Controls Example //
// ---------------------------- //

// import * as THREE from 'three';
// import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.y = 1;
// camera.position.z = 2;

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const menuPanel = document.getElementById('menuPanel') as HTMLDivElement;
// const startButton = document.getElementById('startButton') as HTMLInputElement;
// startButton.addEventListener(
//   'click',
//   function () {
//     controls.lock();
//   },
//   false
// );

// const controls = new PointerLockControls(camera, renderer.domElement);
// // controls.addEventListener('change', () => console.log("Controls Change"))
// controls.addEventListener('lock', () => (menuPanel.style.display = 'none'));
// controls.addEventListener('unlock', () => (menuPanel.style.display = 'block'));

// const planeGeometry = new THREE.PlaneGeometry(100, 100, 50, 50);
// const material = new THREE.MeshBasicMaterial({
//   color: 0x00ff00,
//   wireframe: true,
// });
// const plane = new THREE.Mesh(planeGeometry, material);
// plane.rotateX(-Math.PI / 2);
// scene.add(plane);

// const cubes: THREE.Mesh[] = [];
// for (let i = 0; i < 100; i++) {
//   const geo = new THREE.BoxGeometry(
//     Math.random() * 4,
//     Math.random() * 16,
//     Math.random() * 4
//   );
//   const mat = new THREE.MeshBasicMaterial({ wireframe: true });
//   switch (i % 3) {
//     case 0:
//       mat.color = new THREE.Color(0xff0000);
//       break;
//     case 1:
//       mat.color = new THREE.Color(0xffff00);
//       break;
//     case 2:
//       mat.color = new THREE.Color(0x0000ff);
//       break;
//   }
//   const cube = new THREE.Mesh(geo, mat);
//   cubes.push(cube);
// }
// cubes.forEach((c) => {
//   c.position.x = Math.random() * 100 - 50;
//   c.position.z = Math.random() * 100 - 50;
//   c.geometry.computeBoundingBox();
//   c.position.y =
//     ((c.geometry.boundingBox as THREE.Box3).max.y -
//       (c.geometry.boundingBox as THREE.Box3).min.y) /
//     2;
//   scene.add(c);
// });

// const onKeyDown = function (event: KeyboardEvent) {
//   switch (event.code) {
//     case 'KeyW':
//       controls.moveForward(0.25);
//       break;
//     case 'KeyA':
//       controls.moveRight(-0.25);
//       break;
//     case 'KeyS':
//       controls.moveForward(-0.25);
//       break;
//     case 'KeyD':
//       controls.moveRight(0.25);
//       break;
//   }
// };
// document.addEventListener('keydown', onKeyDown, false);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   //controls.update()

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------- //
// DragControls Example //
// -------------------- //

// import * as THREE from 'three';
// import { DragControls } from 'three/examples/jsm/controls/DragControls';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight();
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

// const geometry = new THREE.BoxGeometry();
// //const material: THREE.MeshPhongMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true })
// //const cube: THREE.Mesh = new THREE.Mesh(geometry, material)
// //scene.add(cube)

// const material = [
//   new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true }),
//   new THREE.MeshPhongMaterial({ color: 0x00ff00, transparent: true }),
//   new THREE.MeshPhongMaterial({ color: 0x0000ff, transparent: true }),
// ];

// const cubes = [
//   new THREE.Mesh(geometry, material[0]),
//   new THREE.Mesh(geometry, material[1]),
//   new THREE.Mesh(geometry, material[2]),
// ];
// cubes[0].position.x = -2;
// cubes[1].position.x = 0;
// cubes[2].position.x = 2;
// cubes.forEach((c) => scene.add(c));

// const controls = new DragControls(cubes, camera, renderer.domElement);
// controls.addEventListener('dragstart', function (event) {
//   event.object.material.opacity = 0.33;
// });
// controls.addEventListener('dragend', function (event) {
//   event.object.material.opacity = 1;
// });

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   cubes[0].rotation.x += 0.01;
//   cubes[0].rotation.y += 0.011;
//   cubes[1].rotation.x += 0.012;
//   cubes[1].rotation.y += 0.013;
//   cubes[2].rotation.x += 0.014;
//   cubes[2].rotation.y += 0.015;
//   //controls.update()

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------------- //
// Transform Controls Example //
// -------------------------- //

// import * as THREE from 'three';
// import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
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

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshNormalMaterial();

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// const controls = new TransformControls(camera, renderer.domElement);
// controls.attach(cube);
// scene.add(controls);

// window.addEventListener('keydown', function (event) {
//   switch (event.code) {
//     case 'KeyG':
//       controls.setMode('translate');
//       break;
//     case 'KeyR':
//       controls.setMode('rotate');
//       break;
//     case 'KeyS':
//       controls.setMode('scale');
//       break;
//   }
// });

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   // controls.update()

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------- //
// Multiple Controls Example //
// ------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { DragControls } from 'three/examples/jsm/controls/DragControls';
// // import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
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

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshNormalMaterial({ transparent: true });

// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// const orbitControls = new OrbitControls(camera, renderer.domElement);

// // OrbitControls + DragControls //
// const dragControls = new DragControls([cube], camera, renderer.domElement);
// dragControls.addEventListener('dragstart', function (event) {
//   orbitControls.enabled = false;
//   event.object.material.opacity = 0.33;
// });
// dragControls.addEventListener('dragend', function (event) {
//   orbitControls.enabled = true;
//   event.object.material.opacity = 1;
// });

// // OrbitControls + TransformControls
// // const transformControls = new TransformControls(camera, renderer.domElement)
// // transformControls.attach(cube)
// // transformControls.setMode('rotate')
// // scene.add(transformControls)

// // transformControls.addEventListener('dragging-changed', function (event) {
// //     orbitControls.enabled = !event.value
// //     //dragControls.enabled = !event.value
// // })

// // window.addEventListener('keydown', function (event) {
// //     switch (event.key) {
// //         case 'g':
// //             transformControls.setMode('translate')
// //             break
// //         case 'r':
// //             transformControls.setMode('rotate')
// //             break
// //         case 's':
// //             transformControls.setMode('scale')
// //             break
// //     }
// // })

// const backGroundTexture = new THREE.CubeTextureLoader().load([
//   'img/px_eso0932a.jpg',
//   'img/nx_eso0932a.jpg',
//   'img/py_eso0932a.jpg',
//   'img/ny_eso0932a.jpg',
//   'img/pz_eso0932a.jpg',
//   'img/nz_eso0932a.jpg',
// ]);
// scene.background = backGroundTexture;

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------ //
// OBJ Model Loader Example //
// ------------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight();
// light.position.set(2.5, 7.5, 15);
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
// controls.enableDamping = true;

// const material = new THREE.MeshNormalMaterial();

// const objLoader = new OBJLoader();
// objLoader.load(
//   'models/monkey2.obj',
//   (object) => {
//     // (object.children[0] as THREE.Mesh).material = material;
//     object.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         (child as THREE.Mesh).material = material;
//       }
//     });
//     scene.add(object);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// objLoader.load(
//   'models/cube.obj',
//   (object) => {
//     object.position.x = -2.5;
//     scene.add(object);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

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
// MTL Loader Example //
// ------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight();
// light.position.set(2.5, 7.5, 15);
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
// controls.enableDamping = true;

// const mtlLoader = new MTLLoader();
// mtlLoader.load(
//   'models/monkey.mtl',
//   (materials) => {
//     materials.preload();
//     // console.log(materials);
//     const objLoader = new OBJLoader();
//     objLoader.setMaterials(materials);
//     objLoader.load(
//       'models/monkey.obj',
//       (object) => {
//         scene.add(object);
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.log('An error happened');
//       }
//     );
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log('An error happened');
//   }
// );
// mtlLoader.load(
//   'models/monkeyTexture.mtl',
//   (materials) => {
//     materials.preload();
//     // console.log(materials);
//     const objLoader = new OBJLoader();
//     objLoader.setMaterials(materials);
//     objLoader.load(
//       'models/monkeyTexture.obj',
//       (object) => {
//         object.position.x = 2.5;
//         scene.add(object);
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.log('An error happened');
//       }
//     );
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log('An error happened');
//   }
// );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

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

// ------------------- //
// GLTF Loader Example //
// ------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// // const light = new THREE.SpotLight();
// // light.position.set(5, 5, 5);
// // scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 2;

// const renderer = new THREE.WebGLRenderer();
// // renderer.physicallyCorrectLights = true; //deprecated
// renderer.useLegacyLights = false; //use this instead of setting physicallyCorrectLights=true property
// renderer.shadowMap.enabled = true;
// // renderer.outputEncoding = THREE.sRGBEncoding
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const loader = new GLTFLoader();
// loader.load(
//   'models/monkey.glb',
//   function (gltf) {
//     gltf.scene.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         const m = child as THREE.Mesh;
//         m.receiveShadow = true;
//         m.castShadow = true;
//       }
//       if ((child as THREE.Light).isLight) {
//         const l = child as THREE.Light;
//         l.castShadow = true;
//         l.shadow.bias = -0.003;
//         l.shadow.mapSize.width = 2048;
//         l.shadow.mapSize.height = 2048;
//       }
//     });
//     scene.add(gltf.scene);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

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

// -------------------- //
// DRACO Loader Example //
// -------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 2;

// const renderer = new THREE.WebGLRenderer();
// //renderer.physicallyCorrectLights = true //deprecated
// renderer.useLegacyLights = false; //use this instead of setting physicallyCorrectLights=true property
// renderer.shadowMap.enabled = true;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// // Note that since Three release 148, you will find the Draco libraries in the `.\node_modules\three\examples\jsm\libs\draco\` folder.
// const draco = new DRACOLoader();
// draco.setDecoderConfig({ type: 'js' });
// draco.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');

// const loader = new GLTFLoader();
// loader.setDRACOLoader(draco);
// loader.load(
//   'models/monkey_compressed.glb',
//   function (gltf) {
//     gltf.scene.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         const m = child as THREE.Mesh;
//         m.receiveShadow = true;
//         m.castShadow = true;
//       }
//       if ((child as THREE.Light).isLight) {
//         const l = child as THREE.Light;
//         l.castShadow = true;
//         l.shadow.bias = -0.003;
//         l.shadow.mapSize.width = 2048;
//         l.shadow.mapSize.height = 2048;
//       }
//     });
//     scene.add(gltf.scene);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

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

// --------------------- //
// Textured GLTF Example //
// --------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.z = 2;

// const renderer = new THREE.WebGLRenderer();
// //renderer.physicallyCorrectLights = true //deprecated
// renderer.useLegacyLights = false; //use this instead of setting physicallyCorrectLights=true property
// renderer.shadowMap.enabled = true;
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const loader = new GLTFLoader();
// loader.load(
//   'models/monkey_textured.glb',
//   function (gltf) {
//     gltf.scene.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         const m = child as THREE.Mesh;
//         m.receiveShadow = true;
//         m.castShadow = true;
//       }
//       if ((child as THREE.Light).isLight) {
//         const l = child as THREE.Light;
//         l.castShadow = true;
//         l.shadow.bias = -0.003;
//         l.shadow.mapSize.width = 2048;
//         l.shadow.mapSize.height = 2048;
//       }
//     });
//     scene.add(gltf.scene);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

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
// FBX Loader Example //
// ------------------ //

// #MightUse
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight();
// light.position.set(0.8, 1.4, 1.0);
// scene.add(light);

// const ambientLight = new THREE.AmbientLight();
// scene.add(ambientLight);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0.8, 1.4, 1.0);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.set(0, 1, 0);

// //const material = new THREE.MeshNormalMaterial()

// const fbxLoader = new FBXLoader();
// fbxLoader.load(
//   'models/ninja.fbx',
//   (object) => {
//     object.traverse(function (child) {
//       //   console.log(child.name);
//       if ((child as THREE.Mesh).isMesh) {
//         // (child as THREE.Mesh).material = material
//         if ((child as THREE.Mesh).material) {
//           (
//             (child as THREE.Mesh).material as THREE.MeshBasicMaterial
//           ).transparent = false;
//         }
//       }
//     });
//     object.scale.set(0.01, 0.01, 0.01);
//     scene.add(object);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

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

// ---------------------- //
// FBX Animations Example //
// ---------------------- //

// #MightUse
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.PointLight();
// light.position.set(2.5, 7.5, 15);
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0.8, 1.4, 1.0);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.set(0, 1, 0);

// let mixer: THREE.AnimationMixer;
// let modelReady = false;
// const animationActions: THREE.AnimationAction[] = [];
// let activeAction: THREE.AnimationAction;
// let lastAction: THREE.AnimationAction;
// const fbxLoader: FBXLoader = new FBXLoader();

// fbxLoader.load(
//   'models/ninja.fbx',
//   (object) => {
//     object.scale.set(0.01, 0.01, 0.01);
//     mixer = new THREE.AnimationMixer(object);

//     const animationAction = mixer.clipAction(
//       (object as THREE.Object3D).animations[0]
//     );
//     animationActions.push(animationAction);
//     animationsFolder.add(animations, 'default');
//     activeAction = animationActions[0];

//     scene.add(object);

//     // // add an animation from another file
//     fbxLoader.load(
//       'models/ninja@baseballSwing.fbx',
//       (object) => {
//         console.log('loaded swing');
//         const animationAction = mixer.clipAction(
//           (object as THREE.Object3D).animations[0]
//         );
//         animationActions.push(animationAction);
//         animationsFolder.add(animations, 'baseballSwing');

//         // add an animation from another file
//         fbxLoader.load(
//           'models/ninja@baseballPitch.fbx',
//           (object) => {
//             console.log('loaded pitch');
//             console.log((object as THREE.Object3D).animations);

//             const animationAction = mixer.clipAction(
//               (object as THREE.Object3D).animations[0]
//             );
//             animationActions.push(animationAction);
//             animationsFolder.add(animations, 'baseballPitch');

//             // add an animation from another file
//             fbxLoader.load(
//               'models/ninja@mmaKick.fbx',
//               (object) => {
//                 console.log('loaded kick');
//                 // (object as THREE.Object3D).animations[0].tracks.shift(); //delete the specific track that moves the object forward while running
//                 //console.dir((object as THREE.Object3D).animations[0])
//                 const animationAction = mixer.clipAction(
//                   (object as THREE.Object3D).animations[0]
//                 );
//                 animationActions.push(animationAction);
//                 animationsFolder.add(animations, 'mmaKick');

//                 modelReady = true;
//               },
//               (xhr) => {
//                 console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//               },
//               (error) => {
//                 console.log(error);
//               }
//             );
//           },
//           (xhr) => {
//             console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const animations = {
//   default: function () {
//     setAction(animationActions[0]);
//   },
//   baseballSwing: function () {
//     setAction(animationActions[1]);
//   },
//   baseballPitch: function () {
//     setAction(animationActions[2]);
//   },
//   mmaKick: function () {
//     setAction(animationActions[3]);
//   },
// };

// const setAction = (toAction: THREE.AnimationAction) => {
//   if (toAction != activeAction) {
//     lastAction = activeAction;
//     activeAction = toAction;
//     // lastAction.stop();
//     lastAction.fadeOut(1);
//     activeAction.reset();
//     activeAction.fadeIn(1);
//     activeAction.play();
//   }
// };

// const gui = new GUI();
// const animationsFolder = gui.addFolder('Animations');
// animationsFolder.open();

// const clock = new THREE.Clock();

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   if (modelReady) mixer.update(clock.getDelta());

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------------- //
// GLTF Animations Example //
// ----------------------- //

// #MightUse #BaseballField
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light1 = new THREE.PointLight(0xffffff, 2);
// light1.position.set(2.5, 2.5, 2.5);
// scene.add(light1);

// const light2 = new THREE.PointLight(0xffffff, 2);
// light2.position.set(-2.5, 2.5, 2.5);
// scene.add(light2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0.8, 1.4, 1.0);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.set(0, 1, 0);

// let mixer: THREE.AnimationMixer;
// let modelReady = false;
// const animationActions: THREE.AnimationAction[] = [];
// let activeAction: THREE.AnimationAction;
// let lastAction: THREE.AnimationAction;
// const gltfLoader = new GLTFLoader();

// gltfLoader.load(
//   'models/ninja.glb',
//   (gltf) => {
//     // gltf.scene.scale.set(.01, .01, .01)

//     mixer = new THREE.AnimationMixer(gltf.scene);

//     const animationAction = mixer.clipAction((gltf as any).animations[0]);
//     animationActions.push(animationAction);
//     animationsFolder.add(animations, 'default');
//     activeAction = animationActions[0];

//     gltf.scene.rotateY(Math.PI / 2);

//     scene.add(gltf.scene);

//     //add an animation from another file
//     gltfLoader.load(
//       'models/ninja@baseballSwing.glb',
//       (gltf) => {
//         console.log('loaded baseballSwing');
//         const animationAction = mixer.clipAction((gltf as any).animations[0]);
//         animationActions.push(animationAction);
//         animationsFolder.add(animations, 'baseballSwing');

//         //add an animation from another file
//         gltfLoader.load(
//           'models/ninja@baseballPitch.glb',
//           (gltf) => {
//             console.log('loaded baseballPitch');
//             const animationAction = mixer.clipAction(
//               (gltf as any).animations[0]
//             );
//             animationActions.push(animationAction);
//             animationsFolder.add(animations, 'baseballPitch');

//             //add an animation from another file
//             gltfLoader.load(
//               'models/ninja@mmaKick.glb',
//               (gltf) => {
//                 console.log('loaded mmaKick');
//                 (gltf as any).animations[0].tracks.shift(); //delete the specific track that moves the object forward while running
//                 const animationAction = mixer.clipAction(
//                   (gltf as any).animations[0]
//                 );
//                 animationActions.push(animationAction);
//                 animationsFolder.add(animations, 'mmaKick');

//                 modelReady = true;
//               },
//               (xhr) => {
//                 console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//               },
//               (error) => {
//                 console.log(error);
//               }
//             );
//           },
//           (xhr) => {
//             console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//       },
//       (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// gltfLoader.load(
//   'models/baseballField.glb',
//   (gltf) => {
//     gltf.scene.position.set(15, -0.1, 1.2);

//     mixer = new THREE.AnimationMixer(gltf.scene);

//     scene.add(gltf.scene);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// const animations = {
//   default: function () {
//     setAction(animationActions[0]);
//   },
//   baseballSwing: function () {
//     setAction(animationActions[1]);
//   },
//   baseballPitch: function () {
//     setAction(animationActions[2]);
//   },
//   mmaKick: function () {
//     setAction(animationActions[3]);
//   },
// };

// const setAction = (toAction: THREE.AnimationAction) => {
//   if (toAction != activeAction) {
//     lastAction = activeAction;
//     activeAction = toAction;
//     //lastAction.stop()
//     lastAction.fadeOut(1);
//     activeAction.reset();
//     activeAction.fadeIn(1);
//     activeAction.play();
//   }
// };

// const gui = new GUI();
// const animationsFolder = gui.addFolder('Animations');
// animationsFolder.open();

// const clock = new THREE.Clock();

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   if (modelReady) mixer.update(clock.getDelta());

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------------ //
// GLTF Custom Animations Example //
// ------------------------------ //

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Stats from 'three/examples/jsm/libs/stats.module';

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5));

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(4, 4, 4);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

let mixer: THREE.AnimationMixer;
let modelReady = false;

const gltfLoader = new GLTFLoader();

const dropzone = document.getElementById('dropzone') as HTMLDivElement;

dropzone.ondragover = dropzone.ondragenter = function (evt) {
  evt.preventDefault();
};
dropzone.ondrop = function (evt: DragEvent) {
  evt.stopPropagation();
  evt.preventDefault();

  //clear the scene
  for (let i = scene.children.length - 1; i >= 0; i--) {
    scene.remove(scene.children[i]);
  }
  //clear the checkboxes
  const myNode = document.getElementById('animationsPanel') as HTMLDivElement;
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild as any);
  }

  const axesHelper = new THREE.AxesHelper(5);
  scene.add(axesHelper);

  const light1 = new THREE.DirectionalLight(new THREE.Color(0xffcccc));
  light1.position.set(-1, 1, 1);
  scene.add(light1);

  const light2 = new THREE.DirectionalLight(new THREE.Color(0xccffcc));
  light2.position.set(1, 1, 1);
  scene.add(light2);

  const light3 = new THREE.DirectionalLight(new THREE.Color(0xccccff));
  light3.position.set(0, -1, 0);
  scene.add(light3);

  const files = (evt.dataTransfer as DataTransfer).files;
  const reader = new FileReader();
  reader.onload = function () {
    gltfLoader.parse(
      reader.result as string,
      '/',
      (gltf: GLTF) => {
        console.log(gltf.scene);

        mixer = new THREE.AnimationMixer(gltf.scene);

        console.log(gltf.animations);

        if (gltf.animations.length > 0) {
          const animationsPanel = document.getElementById(
            'animationsPanel'
          ) as HTMLDivElement;
          const ul = document.createElement('UL') as HTMLUListElement;
          const ulElem = animationsPanel.appendChild(ul);

          gltf.animations.forEach((a: THREE.AnimationClip, i) => {
            const li = document.createElement('UL') as HTMLLIElement;
            const liElem = ulElem.appendChild(li);

            const checkBox = document.createElement(
              'INPUT'
            ) as HTMLInputElement;
            checkBox.id = 'checkbox_' + i;
            checkBox.type = 'checkbox';
            checkBox.addEventListener('change', (e: Event) => {
              if ((e.target as HTMLInputElement).checked) {
                mixer.clipAction((gltf as any).animations[i]).play();
              } else {
                mixer.clipAction((gltf as any).animations[i]).stop();
              }
            });
            liElem.appendChild(checkBox);

            const label = document.createElement('LABEL') as HTMLLabelElement;
            label.htmlFor = 'checkbox_' + i;
            label.innerHTML = a.name;
            liElem.appendChild(label);

            mixer.clipAction((gltf as any).animations[i]).play();
          });

          if (gltf.animations.length > 1) {
            const btnPlayAll = document.getElementById(
              'btnPlayAll'
            ) as HTMLButtonElement;
            btnPlayAll.addEventListener('click', (e: Event) => {
              mixer.stopAllAction();
              gltf.animations.forEach((a: THREE.AnimationClip) => {
                mixer.clipAction(a).play();
              });
            });

            btnPlayAll.style.display = 'block';
          }
        } else {
          const animationsPanel = document.getElementById(
            'animationsPanel'
          ) as HTMLDivElement;
          animationsPanel.innerHTML = 'No animations found in model';
        }

        scene.add(gltf.scene);

        const bbox = new THREE.Box3().setFromObject(gltf.scene);
        controls.target.x = (bbox.min.x + bbox.max.x) / 2;
        controls.target.y = (bbox.min.y + bbox.max.y) / 2;
        controls.target.z = (bbox.min.z + bbox.max.z) / 2;

        modelReady = true;
      },
      (error) => {
        console.log(error);
      }
    );
  };
  reader.readAsArrayBuffer(files[0]);
};

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

const stats = new Stats();
document.body.appendChild(stats.dom);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  if (modelReady) mixer.update(clock.getDelta());

  render();

  stats.update();
}

function render() {
  renderer.render(scene, camera);
}

animate();
