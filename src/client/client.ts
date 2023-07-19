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

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(4, 4, 4);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// let mixer: THREE.AnimationMixer;
// let modelReady = false;

// const gltfLoader = new GLTFLoader();

// const dropzone = document.getElementById('dropzone') as HTMLDivElement;

// dropzone.ondragover = dropzone.ondragenter = function (evt) {
//   evt.preventDefault();
// };
// dropzone.ondrop = function (evt: DragEvent) {
//   evt.stopPropagation();
//   evt.preventDefault();

//   //clear the scene
//   for (let i = scene.children.length - 1; i >= 0; i--) {
//     scene.remove(scene.children[i]);
//   }
//   //clear the checkboxes
//   const myNode = document.getElementById('animationsPanel') as HTMLDivElement;
//   while (myNode.firstChild) {
//     myNode.removeChild(myNode.lastChild as any);
//   }

//   const axesHelper = new THREE.AxesHelper(5);
//   scene.add(axesHelper);

//   const light1 = new THREE.DirectionalLight(new THREE.Color(0xffcccc));
//   light1.position.set(-1, 1, 1);
//   scene.add(light1);

//   const light2 = new THREE.DirectionalLight(new THREE.Color(0xccffcc));
//   light2.position.set(1, 1, 1);
//   scene.add(light2);

//   const light3 = new THREE.DirectionalLight(new THREE.Color(0xccccff));
//   light3.position.set(0, -1, 0);
//   scene.add(light3);

//   const files = (evt.dataTransfer as DataTransfer).files;
//   const reader = new FileReader();
//   reader.onload = function () {
//     gltfLoader.parse(
//       reader.result as string,
//       '/',
//       (gltf: GLTF) => {
//         console.log(gltf.scene);

//         mixer = new THREE.AnimationMixer(gltf.scene);

//         console.log(gltf.animations);

//         if (gltf.animations.length > 0) {
//           const animationsPanel = document.getElementById(
//             'animationsPanel'
//           ) as HTMLDivElement;
//           const ul = document.createElement('UL') as HTMLUListElement;
//           const ulElem = animationsPanel.appendChild(ul);

//           gltf.animations.forEach((a: THREE.AnimationClip, i) => {
//             const li = document.createElement('UL') as HTMLLIElement;
//             const liElem = ulElem.appendChild(li);

//             const checkBox = document.createElement(
//               'INPUT'
//             ) as HTMLInputElement;
//             checkBox.id = 'checkbox_' + i;
//             checkBox.type = 'checkbox';
//             checkBox.addEventListener('change', (e: Event) => {
//               if ((e.target as HTMLInputElement).checked) {
//                 mixer.clipAction((gltf as any).animations[i]).play();
//               } else {
//                 mixer.clipAction((gltf as any).animations[i]).stop();
//               }
//             });
//             liElem.appendChild(checkBox);

//             const label = document.createElement('LABEL') as HTMLLabelElement;
//             label.htmlFor = 'checkbox_' + i;
//             label.innerHTML = a.name;
//             liElem.appendChild(label);

//             mixer.clipAction((gltf as any).animations[i]).play();
//           });

//           if (gltf.animations.length > 1) {
//             const btnPlayAll = document.getElementById(
//               'btnPlayAll'
//             ) as HTMLButtonElement;
//             btnPlayAll.addEventListener('click', (e: Event) => {
//               mixer.stopAllAction();
//               gltf.animations.forEach((a: THREE.AnimationClip) => {
//                 mixer.clipAction(a).play();
//               });
//             });

//             btnPlayAll.style.display = 'block';
//           }
//         } else {
//           const animationsPanel = document.getElementById(
//             'animationsPanel'
//           ) as HTMLDivElement;
//           animationsPanel.innerHTML = 'No animations found in model';
//         }

//         scene.add(gltf.scene);

//         const bbox = new THREE.Box3().setFromObject(gltf.scene);
//         controls.target.x = (bbox.min.x + bbox.max.x) / 2;
//         controls.target.y = (bbox.min.y + bbox.max.y) / 2;
//         controls.target.z = (bbox.min.z + bbox.max.z) / 2;

//         modelReady = true;
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   };
//   reader.readAsArrayBuffer(files[0]);
// };

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

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

// ----------------- //
// Raycaster Example //
// ----------------- //

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

// // const material = new THREE.LineBasicMaterial({ color: 0xff0000 });
// // const points = new Array();
// // points.push(new THREE.Vector3(0, 0, 0));
// // points.push(new THREE.Vector3(0, 0, 0.25));
// // const geometry = new THREE.BufferGeometry().setFromPoints(points);
// // const line = new THREE.Line(geometry, material);
// // scene.add(line);

// const arrowHelper = new THREE.ArrowHelper(
//   new THREE.Vector3(),
//   new THREE.Vector3(),
//   0.25,
//   0xff0000
// );
// scene.add(arrowHelper);

// const material = new THREE.MeshNormalMaterial();

// // const boxGeometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
// const coneGeometry = new THREE.ConeGeometry(0.05, 0.2, 8);

// const raycaster = new THREE.Raycaster();
// const sceneMeshes: THREE.Object3D[] = [];

// const loader = new GLTFLoader();
// loader.load(
//   'models/monkey_textured.glb',
//   function (gltf) {
//     gltf.scene.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         const m = child as THREE.Mesh;
//         m.receiveShadow = true;
//         m.castShadow = true;
//         (m.material as THREE.MeshStandardMaterial).flatShading = true;
//         sceneMeshes.push(m);
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
//     //sceneMeshes.push(gltf.scene)
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

// renderer.domElement.addEventListener('dblclick', onDoubleClick, false);
// renderer.domElement.addEventListener('mousemove', onMouseMove, false);

// function onMouseMove(event: MouseEvent) {
//   const mouse = {
//     x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   };

//   // console.log(mouse)
//   // @ts-ignore
//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(sceneMeshes, false);

//   if (intersects.length > 0) {
//     //     // console.log(sceneMeshes.length + " " + intersects.length)
//     //     // console.log(intersects[0])
//     //     // console.log(intersects[0].object.userData.name + " " + intersects[0].distance + " ")
//     //     // console.log((intersects[0].face as THREE.Face).normal)
//     // line.position.set(0, 0, 0)
//     // line.lookAt((intersects[0].face as THREE.Face).normal)
//     // line.position.copy(intersects[0].point)
//     const n = new THREE.Vector3();
//     n.copy((intersects[0].face as THREE.Face).normal);
//     n.transformDirection(intersects[0].object.matrixWorld);
//     arrowHelper.setDirection(n);
//     arrowHelper.position.copy(intersects[0].point);
//   }
// }

// function onDoubleClick(event: MouseEvent) {
//   const mouse = {
//     x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   };
//   // @ts-ignore
//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(sceneMeshes, false);

//   if (intersects.length > 0) {
//     const n = new THREE.Vector3();
//     n.copy((intersects[0].face as THREE.Face).normal);
//     n.transformDirection(intersects[0].object.matrixWorld);

//     // const cube = new THREE.Mesh(boxGeometry, material);
//     const cube = new THREE.Mesh(coneGeometry, material);

//     cube.lookAt(n);
//     cube.rotateX(Math.PI / 2);
//     cube.position.copy(intersects[0].point);
//     cube.position.addScaledVector(n, 0.1);

//     scene.add(cube);
//     sceneMeshes.push(cube);
//   }
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   // if (sceneMeshes.length > 1) {
//   //   sceneMeshes[0].rotation.x += 0.002;
//   // }

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------ //
// ChatGPT Skeleton Example //
// ------------------------ //

// // #Might Use
// // Import necessary libraries
// // DANE EXAMPLE
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// // Set up the scene, camera, and renderer
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// // Create a material for the skeleton body
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// material.wireframe = true;

// // Define the skeleton body parts
// const head = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), material);
// const body = new THREE.Mesh(new THREE.BoxGeometry(1, 1.5, 0.5), material);
// const leftUpperArm = new THREE.Mesh(
//   new THREE.BoxGeometry(0.5, 0.7, 0.5),
//   material
// );
// const leftLowerArm = new THREE.Mesh(
//   new THREE.BoxGeometry(0.4, 0.8, 0.2),
//   material
// );
// const rightUpperArm = new THREE.Mesh(
//   new THREE.BoxGeometry(0.5, 0.7, 0.5),
//   material
// );
// const rightLowerArm = new THREE.Mesh(
//   new THREE.BoxGeometry(0.4, 0.8, 0.2),
//   material
// );
// const leftUpperLeg = new THREE.Mesh(
//   new THREE.BoxGeometry(0.5, 0.7, 0.5),
//   material
// );
// const leftLowerLeg = new THREE.Mesh(
//   new THREE.BoxGeometry(0.4, 0.8, 0.5),
//   material
// );
// const rightUpperLeg = new THREE.Mesh(
//   new THREE.BoxGeometry(0.5, 0.7, 0.5),
//   material
// );
// const rightLowerLeg = new THREE.Mesh(
//   new THREE.BoxGeometry(0.4, 0.8, 0.5),
//   material
// );

// // Position the body parts
// head.position.y = 2.5;
// body.position.y = 1;
// leftUpperArm.position.set(-1, 1.5, 0);
// leftLowerArm.position.set(-1, 0.65, 0);
// rightUpperArm.position.set(1, 1.5, 0);
// rightLowerArm.position.set(1, 0.65, 0);
// leftUpperLeg.position.set(-0.5, -0.2, 0);
// leftLowerLeg.position.set(-0.5, -0.85, 0);
// rightUpperLeg.position.set(0.5, -0.2, 0);
// rightLowerLeg.position.set(0.5, -0.85, 0);

// // Add the body parts to the scene
// scene.add(head);
// scene.add(body);
// scene.add(leftUpperArm);
// scene.add(leftLowerArm);
// scene.add(rightUpperArm);
// scene.add(rightLowerArm);
// scene.add(leftUpperLeg);
// scene.add(leftLowerLeg);
// scene.add(rightUpperLeg);
// scene.add(rightLowerLeg);

// const bodyBone = new THREE.Bone();

// const headBone = new THREE.Bone();

// const leftShoulderBone = new THREE.Bone();
// const leftHandBone = new THREE.Bone();

// const rightShoulderBone = new THREE.Bone();
// const rightHandBone = new THREE.Bone();

// const leftHipBone = new THREE.Bone();
// const leftFootBone = new THREE.Bone();

// const rightHipBone = new THREE.Bone();
// const rightFootBone = new THREE.Bone();

// bodyBone.position.set(0, 1, 0);

// headBone.position.set(0, 2.5, 0);

// leftShoulderBone.position.set(6, 6, 0);
// leftHandBone.position.set(0, -6, 0);

// rightShoulderBone.position.set(-6, 6, 0);
// rightHandBone.position.set(0, -6, 0);

// leftHipBone.position.set(2, -6, 0);
// leftFootBone.position.set(0, -6, 0);

// rightHipBone.position.set(-2, -6, 0);
// rightFootBone.position.set(0, -6, 0);

// bodyBone.add(headBone);

// bodyBone.add(leftShoulderBone);
// leftShoulderBone.add(leftHandBone);

// bodyBone.add(rightShoulderBone);
// rightShoulderBone.add(rightHandBone);

// bodyBone.add(leftHipBone);
// leftHipBone.add(leftFootBone);

// bodyBone.add(rightHipBone);
// rightHipBone.add(rightFootBone);

// const bones = [];
// bones.push(bodyBone);
// bones.push(headBone);
// bones.push(leftShoulderBone);
// bones.push(leftHandBone);
// bones.push(rightShoulderBone);
// bones.push(rightHandBone);
// bones.push(leftHipBone);
// bones.push(leftFootBone);
// bones.push(rightHipBone);
// bones.push(rightFootBone);

// // Interesting, we don't actually need a skeleton ???
// // skeleton = new THREE.Skeleton(bones);

// const helper = new THREE.SkeletonHelper(bodyBone);

// scene.add(helper);
// scene.add(bodyBone);

// // Define animation parameters
// const animationDuration = 1; // Animation duration in seconds
// const legRotationAngle = Math.PI / 4; // Angle to rotate the legs
// let animationStartTime: any = null;

// // Define your own arrays of data for each animation frame
// const headRotations = [0, 2, 0, 2]; // Example array for head rotations
// const legRotations = [0, Math.PI / 4, 0, -Math.PI / 4]; // Example array for leg rotations

// let animationFrameIndex = 0; // Index to track the current animation frame

// // Define the animation update function
// function updateAnimation() {
//   if (animationStartTime === null) {
//     animationStartTime = Date.now();
//   }

//   const elapsedTime = (Date.now() - animationStartTime) / 1000; // Elapsed time in seconds
//   const progress = (elapsedTime % animationDuration) / animationDuration; // Animation progress from 0 to 1

//   // Calculate the current animation frame index
//   animationFrameIndex = Math.floor(progress * (headRotations.length - 1));

//   // Update the rotation of the head
//   head.rotation.y = headRotations[animationFrameIndex];

//   // Update the rotation of the legs
//   const legRotation = legRotations[animationFrameIndex];
//   leftLowerLeg.rotation.x = legRotation;
//   rightLowerLeg.rotation.x = -legRotation;

//   // Render the scene
//   renderer.render(scene, camera);

//   // Request the next animation frame
//   requestAnimationFrame(updateAnimation);
// }

// // Adjust camera position
// camera.position.z = 5;

// // Start the animation
// updateAnimation();

// ------------------------------------- //
// Raycaster Collision Detection Example //
// ------------------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();

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

// const raycaster = new THREE.Raycaster();
// const sceneMeshes: THREE.Mesh[] = [];
// const dir = new THREE.Vector3();
// let intersects: THREE.Intersection[] = [];

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.addEventListener('change', function () {
//   xLine.position.copy(controls.target);
//   yLine.position.copy(controls.target);
//   zLine.position.copy(controls.target);

//   raycaster.set(
//     controls.target,
//     dir.subVectors(camera.position, controls.target).normalize()
//   );

//   intersects = raycaster.intersectObjects(sceneMeshes, false);
//   if (intersects.length > 0) {
//     if (intersects[0].distance < controls.target.distanceTo(camera.position)) {
//       camera.position.copy(intersects[0].point);
//     }
//   }
// });

// const floor = new THREE.Mesh(
//   new THREE.PlaneGeometry(10, 10),
//   new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })
// );
// floor.rotateX(-Math.PI / 2);
// floor.position.y = -1;
// scene.add(floor);
// sceneMeshes.push(floor);

// const wall1 = new THREE.Mesh(
//   new THREE.PlaneGeometry(2, 2),
//   new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })
// );
// wall1.position.x = 4;
// wall1.rotateY(-Math.PI / 2);
// scene.add(wall1);
// sceneMeshes.push(wall1);

// const wall2 = new THREE.Mesh(
//   new THREE.PlaneGeometry(2, 2),
//   new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })
// );
// wall2.position.z = -3;
// scene.add(wall2);
// sceneMeshes.push(wall2);

// const cube: THREE.Mesh = new THREE.Mesh(
//   new THREE.BoxGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// cube.position.set(-3, 0, 0);
// scene.add(cube);
// sceneMeshes.push(cube);

// const ceiling = new THREE.Mesh(
//   new THREE.PlaneGeometry(10, 10),
//   new THREE.MeshNormalMaterial({ side: THREE.DoubleSide })
// );
// ceiling.rotateX(Math.PI / 2);
// ceiling.position.y = 3;
// scene.add(ceiling);
// sceneMeshes.push(ceiling);

// //crosshair
// const lineMaterial = new THREE.LineBasicMaterial({
//   color: 0x0000ff,
// });
// const points: THREE.Vector3[] = [];
// points[0] = new THREE.Vector3(-0.1, 0, 0);
// points[1] = new THREE.Vector3(0.1, 0, 0);
// let lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
// const xLine = new THREE.Line(lineGeometry, lineMaterial);
// scene.add(xLine);
// points[0] = new THREE.Vector3(0, -0.1, 0);
// points[1] = new THREE.Vector3(0, 0.1, 0);
// lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
// const yLine = new THREE.Line(lineGeometry, lineMaterial);
// scene.add(yLine);
// points[0] = new THREE.Vector3(0, 0, -0.1);
// points[1] = new THREE.Vector3(0, 0, 0.1);
// lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
// const zLine = new THREE.Line(lineGeometry, lineMaterial);
// scene.add(zLine);

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

// ------------------------------- //
// Raycaster Mouse Picking Example //
// ------------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light = new THREE.SpotLight();
// light.position.set(12.5, 12.5, 12.5);
// light.castShadow = true;
// light.shadow.mapSize.width = 1024;
// light.shadow.mapSize.height = 1024;
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(15, 15, 15);

// const renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true;
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const pickableObjects: THREE.Mesh[] = [];
// let intersectedObject: THREE.Object3D | null;
// const originalMaterials: { [id: string]: THREE.Material | THREE.Material[] } =
//   {};
// const highlightedMaterial = new THREE.MeshBasicMaterial({
//   wireframe: true,
//   color: 0x00ff00,
// });

// const loader = new GLTFLoader();
// loader.load(
//   'models/simplescene.glb',
//   function (gltf) {
//     gltf.scene.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         const m = child as THREE.Mesh;
//         //the sphere and plane will not be mouse picked. THe plane will receive shadows while everything else casts shadows.
//         switch (m.name) {
//           case 'Plane':
//             m.receiveShadow = true;
//             break;
//           case 'Sphere':
//             m.castShadow = true;
//             break;
//           default:
//             m.castShadow = true;
//             pickableObjects.push(m);
//             //store reference to original materials for later
//             originalMaterials[m.name] = (m as THREE.Mesh).material;
//         }
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

// const raycaster = new THREE.Raycaster();
// let intersects: THREE.Intersection[];

// const mouse = new THREE.Vector2();

// function onDocumentMouseMove(event: MouseEvent) {
//   mouse.set(
//     (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
//   );
//   raycaster.setFromCamera(mouse, camera);
//   intersects = raycaster.intersectObjects(pickableObjects, false);

//   if (intersects.length > 0) {
//     intersectedObject = intersects[0].object;
//   } else {
//     intersectedObject = null;
//   }
//   pickableObjects.forEach((o: THREE.Mesh, i) => {
//     if (intersectedObject && intersectedObject.name === o.name) {
//       pickableObjects[i].material = highlightedMaterial;
//     } else {
//       pickableObjects[i].material = originalMaterials[o.name];
//     }
//   });
// }
// document.addEventListener('mousemove', onDocumentMouseMove, false);

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

// ------------------------------ //
// Raycaster Measurements Example //
// ------------------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import {
//   CSS2DRenderer,
//   CSS2DObject,
// } from 'three/examples/jsm/renderers/CSS2DRenderer';

// const scene = new THREE.Scene();

// const light = new THREE.SpotLight();
// light.position.set(12.5, 12.5, 12.5);
// light.castShadow = true;
// light.shadow.mapSize.width = 1024;
// light.shadow.mapSize.height = 1024;
// scene.add(light);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(15, 15, 15);

// const renderer = new THREE.WebGLRenderer();
// renderer.shadowMap.enabled = true;
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const labelRenderer = new CSS2DRenderer();
// labelRenderer.setSize(window.innerWidth, window.innerHeight);
// labelRenderer.domElement.style.position = 'absolute';
// labelRenderer.domElement.style.top = '0px';
// labelRenderer.domElement.style.pointerEvents = 'none';
// document.body.appendChild(labelRenderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// const pickableObjects: THREE.Mesh[] = [];

// const loader = new GLTFLoader();
// loader.load(
//   'models/simplescene.glb',
//   function (gltf) {
//     gltf.scene.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         const m = child as THREE.Mesh;
//         switch (m.name) {
//           case 'Plane':
//             m.receiveShadow = true;
//             break;
//           default:
//             m.castShadow = true;
//         }
//         pickableObjects.push(m);
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
//   labelRenderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// let ctrlDown = false;
// let lineId = 0;
// let line: THREE.Line;
// let drawingLine = false;
// const measurementLabels: { [key: number]: CSS2DObject } = {};

// window.addEventListener('keydown', function (event) {
//   if (event.key === 'Control') {
//     ctrlDown = true;
//     controls.enabled = false;
//     renderer.domElement.style.cursor = 'crosshair';
//   }
// });

// window.addEventListener('keyup', function (event) {
//   if (event.key === 'Control') {
//     ctrlDown = false;
//     controls.enabled = true;
//     renderer.domElement.style.cursor = 'pointer';
//     if (drawingLine) {
//       //delete the last line because it wasn't committed
//       scene.remove(line);
//       scene.remove(measurementLabels[lineId]);
//       drawingLine = false;
//     }
//   }
// });

// const raycaster = new THREE.Raycaster();
// let intersects: THREE.Intersection[];
// const mouse = new THREE.Vector2();

// renderer.domElement.addEventListener('pointerdown', onClick, false);
// function onClick() {
//   if (ctrlDown) {
//     raycaster.setFromCamera(mouse, camera);
//     intersects = raycaster.intersectObjects(pickableObjects, false);
//     if (intersects.length > 0) {
//       if (!drawingLine) {
//         //start the line
//         const points = [];
//         points.push(intersects[0].point);
//         points.push(intersects[0].point.clone());
//         const geometry = new THREE.BufferGeometry().setFromPoints(points);
//         line = new THREE.LineSegments(
//           geometry,
//           new THREE.LineBasicMaterial({
//             color: 0xffffff,
//             transparent: true,
//             opacity: 0.75,
//             // depthTest: false,
//             // depthWrite: false
//           })
//         );
//         line.frustumCulled = false;
//         scene.add(line);

//         const measurementDiv = document.createElement('div') as HTMLDivElement;
//         measurementDiv.className = 'measurementLabel';
//         measurementDiv.innerText = '0.0m';
//         const measurementLabel = new CSS2DObject(measurementDiv);
//         measurementLabel.position.copy(intersects[0].point);
//         measurementLabels[lineId] = measurementLabel;
//         scene.add(measurementLabels[lineId]);
//         drawingLine = true;
//       } else {
//         //finish the line
//         const positions = (
//           line.geometry.attributes.position as THREE.BufferAttribute
//         ).array as Array<number>;
//         positions[3] = intersects[0].point.x;
//         positions[4] = intersects[0].point.y;
//         positions[5] = intersects[0].point.z;
//         line.geometry.attributes.position.needsUpdate = true;
//         lineId++;
//         drawingLine = false;
//       }
//     }
//   }
// }

// document.addEventListener('mousemove', onDocumentMouseMove, false);
// function onDocumentMouseMove(event: MouseEvent) {
//   event.preventDefault();

//   mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//   mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//   if (drawingLine) {
//     raycaster.setFromCamera(mouse, camera);
//     intersects = raycaster.intersectObjects(pickableObjects, false);
//     if (intersects.length > 0) {
//       const positions = (
//         line.geometry.attributes.position as THREE.BufferAttribute
//       ).array as Array<number>;
//       const v0 = new THREE.Vector3(positions[0], positions[1], positions[2]);
//       const v1 = new THREE.Vector3(
//         intersects[0].point.x,
//         intersects[0].point.y,
//         intersects[0].point.z
//       );
//       positions[3] = intersects[0].point.x;
//       positions[4] = intersects[0].point.y;
//       positions[5] = intersects[0].point.z;
//       line.geometry.attributes.position.needsUpdate = true;
//       const distance = v0.distanceTo(v1);
//       measurementLabels[lineId].element.innerText = distance.toFixed(2) + 'm';
//       measurementLabels[lineId].position.lerpVectors(v0, v1, 0.5);
//     }
//   }
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
//   labelRenderer.render(scene, camera);
//   renderer.render(scene, camera);
// }

// animate();

// ---------------------- //
// Using tween.js Example //
// ---------------------- //

// // #Might Use
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import TWEEN from '@tweenjs/tween.js';

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

// const sceneMeshes: THREE.Mesh[] = [];
// let monkey: THREE.Mesh;

// const loader = new GLTFLoader();
// loader.load(
//   'models/monkey_textured.glb',
//   function (gltf) {
//     gltf.scene.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         let m = child as THREE.Mesh;
//         m.receiveShadow = true;
//         m.castShadow = true;
//         if (child.name === 'Plane') {
//           sceneMeshes.push(m);
//         } else if (child.name === 'Suzanne') {
//           monkey = m;
//         }
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

// const raycaster = new THREE.Raycaster();
// const mouse = new THREE.Vector2();

// function onDoubleClick(event: MouseEvent) {
//   mouse.set(
//     (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
//   );
//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(sceneMeshes, false);

//   if (intersects.length > 0) {
//     const p = intersects[0].point;

//     controls.target.set(p.x, p.y, p.z);

//     // new TWEEN.Tween(controls.target)
//     //     .to({
//     //         x: p.x,
//     //         y: p.y,
//     //         z: p.z
//     //     }, 500)
//     //     //.delay (1000)
//     //     .easing(TWEEN.Easing.Cubic.Out)
//     //     //.onUpdate(() => render())
//     //     .start()

//     new TWEEN.Tween(monkey.position)
//       .to(
//         {
//           x: p.x,
//           // y: p.y + 1,
//           z: p.z,
//         },
//         500
//       )
//       .start();

//     // This can give added bounce
//     // new TWEEN.Tween(monkey.position)
//     //   .to(
//     //     {
//     //       // x: p.x,
//     //       y: p.y + 1,
//     //       // z: p.z,
//     //     },
//     //     250
//     //   )
//     //   //.delay (1000)
//     //   .easing(TWEEN.Easing.Linear.None)
//     //   //.onUpdate(() => render())
//     //   .start()
//     //   .onComplete(() => {
//     //     new TWEEN.Tween(monkey.position)
//     //       .to(
//     //         {
//     //           // x: p.x,
//     //           y: p.y + 1,
//     //           // z: p.z,
//     //         },
//     //         250
//     //       )
//     //       //.delay (250)
//     //       .easing(TWEEN.Easing.Linear.None)
//     //       //.onUpdate(() => render())
//     //       .start();
//     //   });
//   }
// }
// renderer.domElement.addEventListener('dblclick', onDoubleClick, false);

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   TWEEN.update();

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ---------------------- //
// tween w/Slider Example //
// ---------------------- //

// #Might Use This could actually work.
// DANE EXAMPLE
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import TWEEN from '@tweenjs/tween.js';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.y = 1;
// camera.position.z = 4;

// const light1 = new THREE.AmbientLight();
// light1.position.set(2.5, 5, 2.5);
// scene.add(light1);

// const renderer = new THREE.WebGLRenderer();
// renderer.useLegacyLights = false;
// renderer.shadowMap.enabled = true;
// renderer.outputEncoding = THREE.sRGBEncoding;
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;

// // const sceneMeshes: THREE.Mesh[] = [];
// // const planeGeometry = new THREE.PlaneGeometry(32.5, 25);
// // const texture = new THREE.TextureLoader().load('img/baseballField.png');
// // const plane = new THREE.Mesh(
// //   planeGeometry,
// //   new THREE.MeshPhongMaterial({ map: texture })
// // );

// const loader = new GLTFLoader();
// loader.load(
//   'models/TargetField3Condensed.glb',
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
//     gltf.scene.position.set(-0.155, -2.1, -1.38);
//     gltf.scene.rotateY(-1.52);
//     scene.add(gltf.scene);
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log(error);
//   }
// );
// const light = new THREE.DirectionalLight();
// scene.add(light);
// const gui = new GUI();
// const lightFolder = gui.addFolder('THREE.Light');
// // lightFolder.addColor(data, 'color').onChange(() => {
// //   light.color.setHex(Number(data.color.toString().replace('#', '0x')));
// // });
// lightFolder.add(light, 'intensity', 0, 1, 0.01);
// const directionalLightFolder = gui.addFolder('THREE.DirectionalLight');
// directionalLightFolder.add(light.position, 'x', -100, 200, 0.01);
// directionalLightFolder.add(light.position, 'y', -100, 200, 0.01);
// directionalLightFolder.add(light.position, 'z', -100, 200, 0.01);
// directionalLightFolder.open();
// let batTop: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let batBottom: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let handLead: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let handTrail: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let wristLead: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let wristTrail: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let elbowLead: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let elbowTrail: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let shoulderLead: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let shoulderTrail: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let spineHigh: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let hipLead: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let hipTrail: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let kneeLead: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let kneeTrail: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let ankleLead: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let ankleTrail: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let midfootLead: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let midfootTrail: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let centerOfMass: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );
// let pelvisCOM: THREE.Mesh = new THREE.Mesh(
//   new THREE.SphereGeometry(),
//   new THREE.MeshNormalMaterial()
// );

// // plane.rotateX(-Math.PI / 2);
// // plane.rotateZ(-Math.PI);
// // plane.position.set(0.135, 0, 9.4);
// batTop.scale.set(0.05, 0.05, 0.05);
// batBottom.scale.set(0.05, 0.05, 0.05);
// handLead.scale.set(0.05, 0.05, 0.05);
// handTrail.scale.set(0.05, 0.05, 0.05);
// wristLead.scale.set(0.05, 0.05, 0.05);
// wristTrail.scale.set(0.05, 0.05, 0.05);
// elbowLead.scale.set(0.05, 0.05, 0.05);
// elbowTrail.scale.set(0.05, 0.05, 0.05);
// shoulderLead.scale.set(0.05, 0.05, 0.05);
// shoulderTrail.scale.set(0.05, 0.05, 0.05);
// spineHigh.scale.set(0.05, 0.05, 0.05);
// hipLead.scale.set(0.05, 0.05, 0.05);
// hipTrail.scale.set(0.05, 0.05, 0.05);
// kneeLead.scale.set(0.05, 0.05, 0.05);
// kneeTrail.scale.set(0.05, 0.05, 0.05);
// ankleLead.scale.set(0.05, 0.05, 0.05);
// ankleTrail.scale.set(0.05, 0.05, 0.05);
// midfootLead.scale.set(0.05, 0.05, 0.05);
// midfootTrail.scale.set(0.05, 0.05, 0.05);
// centerOfMass.scale.set(0.05, 0.05, 0.05);
// pelvisCOM.scale.set(0.05, 0.05, 0.05);

// // scene.add(plane);
// scene.add(batTop);
// scene.add(batBottom);
// scene.add(handLead);
// scene.add(handTrail);
// scene.add(wristLead);
// scene.add(wristTrail);
// scene.add(elbowLead);
// scene.add(elbowTrail);
// scene.add(shoulderLead);
// scene.add(shoulderTrail);
// scene.add(spineHigh);
// scene.add(hipLead);
// scene.add(hipTrail);
// scene.add(kneeLead);
// scene.add(kneeTrail);
// scene.add(ankleLead);
// scene.add(ankleTrail);
// scene.add(midfootLead);
// scene.add(midfootTrail);
// scene.add(centerOfMass);
// scene.add(pelvisCOM);

// // const loader = new GLTFLoader();
// // loader.load(
// //   'models/monkey_textured.glb',
// //   function (gltf) {
// //     gltf.scene.traverse(function (child) {
// //       if ((child as THREE.Mesh).isMesh) {
// //         const m = child as THREE.Mesh;
// //         m.receiveShadow = true;
// //         m.castShadow = true;
// //         if (child.name === 'Plane') {
// //           sceneMeshes.push(m);
// //         } else if (child.name === 'Suzanne') {
// //           monkey = m;
// //         }
// //       }
// //       if ((child as THREE.Light).isLight) {
// //         const l = child as THREE.Light;
// //         l.castShadow = true;
// //         l.shadow.bias = -0.003;
// //         l.shadow.mapSize.width = 2048;
// //         l.shadow.mapSize.height = 2048;
// //       }
// //     });
// //     scene.add(gltf.scene);
// //   },
// //   (xhr) => {
// //     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
// //   },
// //   (error) => {
// //     console.log(error);
// //   }
// // );

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const slider = document.createElement('input');
// slider.type = 'range';
// slider.min = '1';
// slider.max = '100';
// slider.step = '1';
// slider.value = '1';
// slider.style.position = 'absolute';
// slider.style.top = '100px';
// slider.style.left = '10px';
// slider.style.zIndex = '1';
// document.body.appendChild(slider);

// slider.addEventListener('input', onSliderChange);

// function onSliderChange(event) {
//   const value = parseFloat(event.target.value);
//   updateSwingPosition(value);
// }

// const playButton = document.createElement('button');
// playButton.innerText = 'Play';
// playButton.style.position = 'absolute';
// playButton.style.top = '130px';
// playButton.style.left = '10px';
// playButton.style.zIndex = '1';
// document.body.appendChild(playButton);

// let isPlaying = false;
// let currentFrame = 1;
// let intervalId;

// playButton.addEventListener('click', onPlayButtonClick);

// function onPlayButtonClick() {
//   if (isPlaying) {
//     // Pause the animation
//     clearInterval(intervalId);
//     playButton.innerText = 'Play';
//     isPlaying = false;
//   } else {
//     // Start the animation
//     intervalId = setInterval(() => {
//       currentFrame++;
//       if (currentFrame > 100) {
//         currentFrame = 1;
//       }
//       slider.value = currentFrame.toString(); // Update the slider value
//       updateSwingPosition(currentFrame);
//       // Speed of the animation
//     }, 100);
//     playButton.innerText = 'Pause';
//     isPlaying = true;
//   }
// }

// function updateSwingPosition(frame) {
//   const batTopData = {
//     x: [
//       1.287, 1.285, 1.286, 1.283, 1.281, 1.284, 1.284, 1.287, 1.294, 1.286,
//       1.277, 1.268, 1.261, 1.253, 1.243, 1.229, 1.219, 1.212, 1.207, 1.199,
//       1.19, 1.187, 1.181, 1.175, 1.168, 1.166, 1.16, 1.16, 1.157, 1.157, 1.159,
//       1.162, 1.161, 1.16, 1.155, 1.159, 1.164, 1.166, 1.168, 1.164, 1.168,
//       1.168, 1.169, 1.165, 1.16, 1.158, 1.159, 1.153, 1.156, 1.152, 1.151,
//       1.147, 1.142, 1.136, 1.131, 1.13, 1.121, 1.118, 1.112, 1.103, 1.098,
//       1.092, 1.089, 1.083, 1.074, 1.068, 1.062, 1.056, 1.053, 1.039, 1.036,
//       1.04, 1.037, 1.037, 1.035, 1.038, 1.038, 1.048, 1.058, 1.072, 1.082,
//       1.096, 1.105, 1.096, 1.055, 0.967, 0.797, 0.542, 0.246, -0.058, -0.185,
//       -0.204, -0.014, 0.225, 0.464, 0.708, 0.936, 1.128, 1.289, 1.424,
//     ],
//     y: [
//       -0.084, -0.083, -0.085, -0.088, -0.087, -0.086, -0.083, -0.08, -0.071,
//       -0.066, -0.067, -0.064, -0.06, -0.06, -0.055, -0.054, -0.052, -0.049,
//       -0.048, -0.05, -0.052, -0.05, -0.053, -0.053, -0.06, -0.061, -0.058,
//       -0.054, -0.05, -0.046, -0.036, -0.025, -0.02, -0.014, -0.007, 0.006,
//       0.017, 0.022, 0.027, 0.033, 0.046, 0.053, 0.058, 0.063, 0.072, 0.077,
//       0.084, 0.086, 0.084, 0.082, 0.079, 0.083, 0.085, 0.087, 0.086, 0.087,
//       0.086, 0.083, 0.077, 0.069, 0.064, 0.062, 0.061, 0.055, 0.047, 0.04,
//       0.035, 0.027, 0.011, 0.001, -0.007, -0.021, -0.035, -0.054, -0.068,
//       -0.066, -0.077, -0.083, -0.089, -0.086, -0.058, -0.005, 0.072, 0.172,
//       0.298, 0.427, 0.537, 0.595, 0.572, 0.317, -0.158, -0.605, -0.866, -1.14,
//       -1.26, -1.269, -1.22, -1.132, -1.019, -0.878,
//     ],
//     z: [
//       1.72, 1.721, 1.721, 1.724, 1.723, 1.723, 1.726, 1.726, 1.738, 1.754,
//       1.772, 1.786, 1.791, 1.79, 1.784, 1.774, 1.787, 1.785, 1.782, 1.782,
//       1.783, 1.783, 1.78, 1.779, 1.779, 1.778, 1.777, 1.779, 1.779, 1.776,
//       1.775, 1.774, 1.774, 1.773, 1.766, 1.769, 1.77, 1.774, 1.767, 1.759,
//       1.754, 1.748, 1.745, 1.744, 1.747, 1.749, 1.75, 1.749, 1.75, 1.754, 1.755,
//       1.754, 1.754, 1.753, 1.753, 1.753, 1.754, 1.755, 1.76, 1.764, 1.765,
//       1.761, 1.762, 1.761, 1.767, 1.769, 1.766, 1.765, 1.766, 1.767, 1.769,
//       1.767, 1.765, 1.757, 1.748, 1.743, 1.731, 1.721, 1.717, 1.709, 1.702,
//       1.692, 1.68, 1.657, 1.61, 1.495, 1.322, 1.085, 0.913, 0.768, 0.632, 0.623,
//       0.725, 0.805, 0.955, 1.174, 1.396, 1.546, 1.65, 1.739,
//     ],
//   };
//   const batBottomData = {
//     x: [
//       0.597, 0.598, 0.597, 0.596, 0.596, 0.594, 0.592, 0.592, 0.592, 0.592,
//       0.591, 0.59, 0.589, 0.589, 0.589, 0.585, 0.583, 0.582, 0.583, 0.583,
//       0.584, 0.583, 0.582, 0.582, 0.582, 0.583, 0.583, 0.583, 0.581, 0.58,
//       0.577, 0.574, 0.57, 0.565, 0.56, 0.555, 0.554, 0.554, 0.552, 0.548, 0.545,
//       0.544, 0.543, 0.542, 0.542, 0.543, 0.544, 0.544, 0.544, 0.543, 0.544,
//       0.543, 0.544, 0.544, 0.545, 0.545, 0.545, 0.544, 0.543, 0.542, 0.541,
//       0.541, 0.541, 0.541, 0.542, 0.543, 0.543, 0.544, 0.545, 0.547, 0.547,
//       0.548, 0.551, 0.55, 0.55, 0.549, 0.545, 0.536, 0.528, 0.521, 0.511, 0.494,
//       0.467, 0.428, 0.38, 0.338, 0.314, 0.32, 0.335, 0.393, 0.469, 0.537, 0.589,
//       0.633, 0.688, 0.737, 0.787, 0.845, 0.912, 0.97,
//     ],
//     y: [
//       0.332, 0.333, 0.336, 0.339, 0.346, 0.353, 0.36, 0.366, 0.37, 0.375, 0.38,
//       0.385, 0.387, 0.39, 0.393, 0.395, 0.397, 0.4, 0.402, 0.402, 0.403, 0.404,
//       0.406, 0.41, 0.416, 0.422, 0.428, 0.432, 0.433, 0.436, 0.442, 0.448,
//       0.455, 0.463, 0.47, 0.478, 0.485, 0.49, 0.497, 0.504, 0.512, 0.52, 0.528,
//       0.538, 0.548, 0.555, 0.559, 0.563, 0.569, 0.57, 0.568, 0.572, 0.575,
//       0.578, 0.581, 0.582, 0.58, 0.577, 0.573, 0.569, 0.564, 0.56, 0.556, 0.555,
//       0.553, 0.552, 0.549, 0.544, 0.541, 0.538, 0.534, 0.53, 0.525, 0.52, 0.514,
//       0.507, 0.499, 0.494, 0.486, 0.474, 0.456, 0.433, 0.403, 0.358, 0.274,
//       0.155, 0.018, -0.122, -0.251, -0.326, -0.377, -0.413, -0.434, -0.449,
//       -0.455, -0.476, -0.457, -0.445, -0.417, -0.377,
//     ],
//     z: [
//       1.506, 1.504, 1.502, 1.5, 1.498, 1.496, 1.497, 1.498, 1.498, 1.498, 1.498,
//       1.497, 1.495, 1.495, 1.492, 1.489, 1.485, 1.481, 1.479, 1.476, 1.474,
//       1.469, 1.463, 1.458, 1.453, 1.445, 1.437, 1.431, 1.424, 1.419, 1.414,
//       1.407, 1.403, 1.399, 1.395, 1.389, 1.385, 1.381, 1.378, 1.373, 1.37,
//       1.367, 1.365, 1.363, 1.36, 1.356, 1.354, 1.352, 1.35, 1.346, 1.343, 1.339,
//       1.336, 1.332, 1.328, 1.325, 1.321, 1.32, 1.318, 1.317, 1.315, 1.315,
//       1.316, 1.318, 1.321, 1.322, 1.322, 1.323, 1.324, 1.326, 1.327, 1.33,
//       1.332, 1.333, 1.332, 1.332, 1.324, 1.323, 1.321, 1.313, 1.291, 1.251,
//       1.203, 1.143, 1.089, 1.066, 1.034, 1.011, 1.009, 1.026, 1.044, 1.056,
//       1.074, 1.1, 1.135, 1.177, 1.198, 1.222, 1.246, 1.271,
//     ],
//   };

//   const handLeadData = {
//     x: [
//       0.624, 0.623, 0.622, 0.621, 0.62, 0.619, 0.617, 0.618, 0.617, 0.615,
//       0.615, 0.615, 0.615, 0.614, 0.612, 0.609, 0.607, 0.607, 0.607, 0.606,
//       0.606, 0.606, 0.604, 0.602, 0.601, 0.601, 0.602, 0.601, 0.6, 0.598, 0.596,
//       0.594, 0.59, 0.585, 0.581, 0.577, 0.573, 0.569, 0.567, 0.565, 0.563,
//       0.562, 0.561, 0.559, 0.559, 0.558, 0.557, 0.556, 0.555, 0.555, 0.554,
//       0.552, 0.551, 0.551, 0.55, 0.55, 0.549, 0.548, 0.548, 0.547, 0.547, 0.547,
//       0.548, 0.548, 0.548, 0.548, 0.547, 0.549, 0.552, 0.553, 0.553, 0.554,
//       0.555, 0.554, 0.554, 0.553, 0.551, 0.543, 0.538, 0.533, 0.527, 0.513,
//       0.488, 0.456, 0.412, 0.368, 0.339, 0.337, 0.353, 0.388, 0.442, 0.494,
//       0.547, 0.607, 0.68, 0.754, 0.819, 0.878, 0.941, 0.999,
//     ],
//     y: [
//       0.291, 0.293, 0.297, 0.299, 0.305, 0.31, 0.316, 0.321, 0.324, 0.328,
//       0.332, 0.337, 0.341, 0.343, 0.346, 0.349, 0.351, 0.353, 0.355, 0.356,
//       0.358, 0.36, 0.363, 0.367, 0.371, 0.375, 0.378, 0.38, 0.384, 0.388, 0.396,
//       0.403, 0.409, 0.414, 0.424, 0.434, 0.442, 0.451, 0.457, 0.464, 0.471,
//       0.478, 0.485, 0.493, 0.504, 0.511, 0.516, 0.521, 0.526, 0.53, 0.53, 0.533,
//       0.537, 0.54, 0.542, 0.54, 0.538, 0.534, 0.531, 0.527, 0.523, 0.519, 0.517,
//       0.514, 0.511, 0.508, 0.506, 0.503, 0.499, 0.496, 0.492, 0.489, 0.483,
//       0.477, 0.472, 0.463, 0.455, 0.446, 0.44, 0.43, 0.414, 0.393, 0.366, 0.329,
//       0.272, 0.177, 0.049, -0.088, -0.21, -0.288, -0.356, -0.412, -0.457,
//       -0.487, -0.5, -0.506, -0.5, -0.483, -0.451, -0.405,
//     ],
//     z: [
//       1.511, 1.511, 1.511, 1.511, 1.512, 1.512, 1.513, 1.514, 1.514, 1.515,
//       1.515, 1.516, 1.514, 1.513, 1.511, 1.507, 1.504, 1.5, 1.497, 1.494, 1.489,
//       1.483, 1.478, 1.473, 1.468, 1.464, 1.459, 1.455, 1.449, 1.443, 1.438,
//       1.434, 1.428, 1.424, 1.42, 1.416, 1.411, 1.409, 1.404, 1.402, 1.398,
//       1.396, 1.393, 1.389, 1.386, 1.383, 1.38, 1.378, 1.375, 1.372, 1.368,
//       1.365, 1.362, 1.36, 1.357, 1.355, 1.352, 1.35, 1.348, 1.346, 1.345, 1.344,
//       1.344, 1.343, 1.344, 1.346, 1.346, 1.347, 1.348, 1.349, 1.35, 1.352,
//       1.353, 1.355, 1.357, 1.358, 1.351, 1.355, 1.354, 1.347, 1.329, 1.294,
//       1.248, 1.192, 1.138, 1.11, 1.08, 1.047, 1.034, 1.036, 1.048, 1.06, 1.076,
//       1.102, 1.137, 1.182, 1.215, 1.237, 1.263, 1.291,
//     ],
//   };

//   const handTrailData = {
//     x: [
//       0.714, 0.712, 0.71, 0.708, 0.708, 0.708, 0.707, 0.708, 0.709, 0.708,
//       0.706, 0.704, 0.703, 0.702, 0.699, 0.696, 0.695, 0.695, 0.694, 0.692,
//       0.692, 0.692, 0.692, 0.69, 0.689, 0.688, 0.686, 0.684, 0.68, 0.678, 0.676,
//       0.675, 0.672, 0.669, 0.667, 0.662, 0.657, 0.655, 0.653, 0.653, 0.655,
//       0.653, 0.65, 0.649, 0.648, 0.647, 0.646, 0.645, 0.645, 0.645, 0.646,
//       0.647, 0.647, 0.647, 0.645, 0.643, 0.64, 0.638, 0.636, 0.635, 0.636,
//       0.636, 0.635, 0.633, 0.632, 0.631, 0.631, 0.632, 0.631, 0.629, 0.628,
//       0.627, 0.626, 0.625, 0.625, 0.63, 0.633, 0.635, 0.633, 0.629, 0.62, 0.607,
//       0.583, 0.546, 0.497, 0.442, 0.387, 0.355, 0.348, 0.363, 0.389, 0.426,
//       0.484, 0.553, 0.628, 0.698, 0.773, 0.85, 0.927, 0.991,
//     ],
//     y: [
//       0.278, 0.28, 0.282, 0.284, 0.287, 0.29, 0.292, 0.295, 0.301, 0.305, 0.309,
//       0.312, 0.315, 0.317, 0.319, 0.322, 0.324, 0.328, 0.33, 0.332, 0.332,
//       0.333, 0.335, 0.339, 0.341, 0.344, 0.347, 0.351, 0.355, 0.361, 0.367,
//       0.374, 0.381, 0.388, 0.396, 0.404, 0.414, 0.422, 0.428, 0.435, 0.442,
//       0.447, 0.454, 0.461, 0.472, 0.48, 0.487, 0.494, 0.501, 0.502, 0.506,
//       0.511, 0.513, 0.515, 0.519, 0.517, 0.513, 0.509, 0.503, 0.499, 0.495,
//       0.493, 0.491, 0.488, 0.485, 0.482, 0.479, 0.473, 0.468, 0.464, 0.458,
//       0.452, 0.445, 0.436, 0.426, 0.416, 0.408, 0.403, 0.396, 0.388, 0.377,
//       0.364, 0.347, 0.322, 0.28, 0.215, 0.117, -0.01, -0.137, -0.239, -0.34,
//       -0.426, -0.49, -0.533, -0.559, -0.574, -0.57, -0.549, -0.514, -0.46,
//     ],
//     z: [
//       1.559, 1.559, 1.559, 1.559, 1.561, 1.562, 1.563, 1.564, 1.566, 1.569,
//       1.571, 1.572, 1.57, 1.567, 1.564, 1.56, 1.556, 1.552, 1.548, 1.543, 1.54,
//       1.536, 1.533, 1.529, 1.523, 1.518, 1.512, 1.508, 1.504, 1.499, 1.495,
//       1.492, 1.487, 1.482, 1.48, 1.476, 1.473, 1.471, 1.468, 1.463, 1.459,
//       1.457, 1.454, 1.452, 1.45, 1.447, 1.445, 1.442, 1.439, 1.436, 1.432,
//       1.429, 1.427, 1.425, 1.423, 1.421, 1.419, 1.418, 1.417, 1.415, 1.413,
//       1.413, 1.412, 1.413, 1.417, 1.419, 1.419, 1.419, 1.419, 1.419, 1.418,
//       1.417, 1.419, 1.424, 1.414, 1.415, 1.414, 1.412, 1.405, 1.394, 1.367,
//       1.328, 1.282, 1.224, 1.157, 1.109, 1.081, 1.04, 1.007, 0.989, 0.983,
//       0.987, 1.007, 1.047, 1.106, 1.137, 1.168, 1.206, 1.245, 1.297,
//     ],
//   };

//   const wristLeadData = {
//     x: [
//       0.609, 0.609, 0.608, 0.608, 0.609, 0.608, 0.605, 0.606, 0.606, 0.605,
//       0.605, 0.605, 0.604, 0.603, 0.599, 0.596, 0.597, 0.597, 0.597, 0.597,
//       0.597, 0.597, 0.597, 0.597, 0.597, 0.596, 0.598, 0.597, 0.596, 0.594,
//       0.59, 0.588, 0.585, 0.58, 0.574, 0.571, 0.569, 0.566, 0.565, 0.564, 0.562,
//       0.562, 0.561, 0.561, 0.56, 0.556, 0.556, 0.558, 0.559, 0.558, 0.557,
//       0.557, 0.557, 0.556, 0.555, 0.555, 0.553, 0.553, 0.552, 0.551, 0.551,
//       0.554, 0.555, 0.554, 0.552, 0.552, 0.552, 0.551, 0.551, 0.555, 0.555,
//       0.555, 0.556, 0.556, 0.553, 0.549, 0.544, 0.539, 0.534, 0.526, 0.519,
//       0.505, 0.483, 0.454, 0.419, 0.39, 0.381, 0.388, 0.404, 0.441, 0.491,
//       0.536, 0.577, 0.624, 0.687, 0.756, 0.811, 0.868, 0.928, 0.979,
//     ],
//     y: [
//       0.274, 0.275, 0.279, 0.286, 0.291, 0.296, 0.303, 0.308, 0.311, 0.316,
//       0.322, 0.327, 0.329, 0.33, 0.334, 0.335, 0.337, 0.338, 0.339, 0.34, 0.343,
//       0.346, 0.348, 0.352, 0.354, 0.356, 0.359, 0.361, 0.364, 0.369, 0.376,
//       0.382, 0.388, 0.394, 0.402, 0.41, 0.417, 0.423, 0.432, 0.442, 0.449,
//       0.457, 0.464, 0.473, 0.482, 0.486, 0.49, 0.494, 0.498, 0.5, 0.498, 0.502,
//       0.505, 0.507, 0.508, 0.505, 0.502, 0.499, 0.496, 0.492, 0.489, 0.486,
//       0.484, 0.48, 0.474, 0.471, 0.467, 0.463, 0.459, 0.456, 0.453, 0.451,
//       0.447, 0.442, 0.437, 0.429, 0.421, 0.411, 0.403, 0.392, 0.372, 0.347,
//       0.313, 0.27, 0.207, 0.112, -0.005, -0.139, -0.223, -0.282, -0.335, -0.376,
//       -0.409, -0.432, -0.443, -0.443, -0.437, -0.417, -0.383, -0.336,
//     ],
//     z: [
//       1.441, 1.441, 1.441, 1.441, 1.442, 1.442, 1.443, 1.444, 1.445, 1.446,
//       1.446, 1.446, 1.444, 1.443, 1.44, 1.437, 1.433, 1.43, 1.426, 1.424, 1.419,
//       1.413, 1.407, 1.403, 1.399, 1.394, 1.39, 1.385, 1.38, 1.373, 1.369, 1.365,
//       1.36, 1.355, 1.351, 1.345, 1.341, 1.34, 1.338, 1.333, 1.328, 1.325, 1.323,
//       1.32, 1.319, 1.316, 1.312, 1.312, 1.308, 1.304, 1.3, 1.297, 1.294, 1.292,
//       1.289, 1.287, 1.284, 1.283, 1.281, 1.278, 1.278, 1.277, 1.278, 1.278,
//       1.278, 1.28, 1.28, 1.281, 1.282, 1.282, 1.282, 1.285, 1.287, 1.289, 1.292,
//       1.292, 1.29, 1.289, 1.289, 1.285, 1.27, 1.244, 1.208, 1.165, 1.133, 1.116,
//       1.087, 1.071, 1.071, 1.083, 1.1, 1.113, 1.128, 1.151, 1.184, 1.229, 1.253,
//       1.276, 1.3, 1.324,
//     ],
//   };

//   const wristTrailData = {
//     x: [
//       0.75, 0.749, 0.748, 0.747, 0.747, 0.748, 0.748, 0.749, 0.748, 0.745,
//       0.742, 0.74, 0.739, 0.738, 0.738, 0.737, 0.737, 0.738, 0.739, 0.739,
//       0.739, 0.739, 0.739, 0.737, 0.735, 0.733, 0.732, 0.732, 0.73, 0.729,
//       0.728, 0.725, 0.722, 0.721, 0.72, 0.717, 0.715, 0.714, 0.712, 0.713,
//       0.712, 0.708, 0.705, 0.705, 0.706, 0.706, 0.707, 0.707, 0.707, 0.706,
//       0.707, 0.708, 0.707, 0.706, 0.706, 0.706, 0.705, 0.702, 0.7, 0.7, 0.702,
//       0.704, 0.704, 0.703, 0.702, 0.701, 0.702, 0.703, 0.702, 0.7, 0.699, 0.698,
//       0.698, 0.698, 0.698, 0.703, 0.702, 0.699, 0.691, 0.679, 0.662, 0.643,
//       0.616, 0.581, 0.54, 0.495, 0.453, 0.429, 0.424, 0.432, 0.453, 0.477,
//       0.511, 0.555, 0.608, 0.668, 0.734, 0.801, 0.87, 0.926,
//     ],
//     y: [
//       0.344, 0.345, 0.347, 0.349, 0.353, 0.357, 0.36, 0.362, 0.365, 0.37, 0.375,
//       0.377, 0.379, 0.382, 0.384, 0.387, 0.388, 0.389, 0.391, 0.393, 0.394,
//       0.394, 0.396, 0.397, 0.4, 0.404, 0.407, 0.41, 0.414, 0.42, 0.425, 0.431,
//       0.439, 0.447, 0.453, 0.459, 0.467, 0.475, 0.482, 0.487, 0.495, 0.502,
//       0.51, 0.516, 0.528, 0.536, 0.539, 0.544, 0.549, 0.551, 0.556, 0.561,
//       0.561, 0.558, 0.554, 0.55, 0.546, 0.542, 0.539, 0.538, 0.535, 0.533,
//       0.531, 0.529, 0.525, 0.522, 0.517, 0.51, 0.502, 0.496, 0.49, 0.483, 0.472,
//       0.466, 0.458, 0.443, 0.435, 0.429, 0.421, 0.41, 0.396, 0.378, 0.353,
//       0.319, 0.267, 0.196, 0.098, -0.019, -0.133, -0.202, -0.286, -0.357,
//       -0.413, -0.454, -0.482, -0.5, -0.5, -0.486, -0.458, -0.415,
//     ],
//     z: [
//       1.53, 1.53, 1.531, 1.532, 1.532, 1.533, 1.533, 1.534, 1.536, 1.537, 1.539,
//       1.541, 1.539, 1.537, 1.534, 1.53, 1.528, 1.527, 1.525, 1.522, 1.519,
//       1.514, 1.51, 1.505, 1.498, 1.493, 1.488, 1.484, 1.48, 1.475, 1.471, 1.467,
//       1.463, 1.461, 1.459, 1.456, 1.452, 1.448, 1.446, 1.443, 1.441, 1.44,
//       1.438, 1.435, 1.432, 1.43, 1.427, 1.423, 1.42, 1.418, 1.417, 1.416, 1.414,
//       1.412, 1.411, 1.408, 1.407, 1.405, 1.402, 1.4, 1.398, 1.4, 1.401, 1.403,
//       1.404, 1.404, 1.405, 1.405, 1.404, 1.403, 1.403, 1.401, 1.4, 1.4, 1.399,
//       1.396, 1.391, 1.381, 1.366, 1.337, 1.3, 1.257, 1.209, 1.154, 1.095, 1.053,
//       1.032, 1, 0.983, 0.979, 0.979, 0.987, 1.008, 1.048, 1.104, 1.139, 1.172,
//       1.207, 1.245, 1.298,
//     ],
//   };

//   const elbowLeadData = {
//     x: [
//       0.566, 0.566, 0.567, 0.567, 0.566, 0.563, 0.56, 0.558, 0.557, 0.557,
//       0.557, 0.558, 0.558, 0.558, 0.557, 0.556, 0.557, 0.556, 0.558, 0.561,
//       0.563, 0.564, 0.564, 0.562, 0.561, 0.559, 0.557, 0.554, 0.554, 0.554,
//       0.552, 0.548, 0.544, 0.542, 0.545, 0.546, 0.542, 0.539, 0.537, 0.536,
//       0.536, 0.537, 0.536, 0.534, 0.532, 0.532, 0.532, 0.533, 0.535, 0.535,
//       0.533, 0.533, 0.533, 0.533, 0.533, 0.53, 0.529, 0.526, 0.523, 0.523,
//       0.524, 0.523, 0.522, 0.522, 0.521, 0.519, 0.517, 0.516, 0.516, 0.515,
//       0.513, 0.511, 0.51, 0.505, 0.502, 0.502, 0.502, 0.506, 0.507, 0.506,
//       0.504, 0.501, 0.5, 0.502, 0.502, 0.517, 0.55, 0.583, 0.625, 0.677, 0.707,
//       0.718, 0.732, 0.759, 0.793, 0.833, 0.875, 0.918, 0.957, 0.99,
//     ],
//     y: [
//       0.082, 0.085, 0.088, 0.093, 0.099, 0.104, 0.112, 0.117, 0.119, 0.123,
//       0.13, 0.136, 0.139, 0.143, 0.146, 0.148, 0.153, 0.155, 0.156, 0.158,
//       0.158, 0.158, 0.159, 0.161, 0.162, 0.163, 0.165, 0.165, 0.165, 0.166,
//       0.17, 0.174, 0.178, 0.183, 0.189, 0.197, 0.204, 0.21, 0.216, 0.223, 0.229,
//       0.235, 0.243, 0.251, 0.258, 0.261, 0.264, 0.263, 0.26, 0.258, 0.255,
//       0.259, 0.262, 0.264, 0.26, 0.256, 0.253, 0.25, 0.246, 0.244, 0.241, 0.238,
//       0.233, 0.23, 0.225, 0.221, 0.219, 0.216, 0.212, 0.207, 0.201, 0.198,
//       0.195, 0.192, 0.189, 0.185, 0.179, 0.172, 0.164, 0.149, 0.122, 0.087,
//       0.043, -0.011, -0.077, -0.154, -0.214, -0.243, -0.269, -0.299, -0.304,
//       -0.299, -0.277, -0.248, -0.227, -0.214, -0.191, -0.155, -0.106, -0.05,
//     ],
//     z: [
//       1.245, 1.244, 1.244, 1.244, 1.245, 1.245, 1.246, 1.245, 1.244, 1.242,
//       1.242, 1.241, 1.239, 1.238, 1.237, 1.233, 1.231, 1.227, 1.226, 1.223,
//       1.22, 1.217, 1.212, 1.208, 1.204, 1.201, 1.199, 1.195, 1.188, 1.183,
//       1.182, 1.178, 1.173, 1.168, 1.166, 1.163, 1.16, 1.157, 1.155, 1.153,
//       1.153, 1.153, 1.153, 1.15, 1.147, 1.145, 1.144, 1.144, 1.143, 1.142,
//       1.141, 1.141, 1.14, 1.138, 1.138, 1.137, 1.137, 1.136, 1.134, 1.131,
//       1.134, 1.135, 1.138, 1.138, 1.139, 1.14, 1.141, 1.142, 1.143, 1.143,
//       1.143, 1.145, 1.148, 1.148, 1.148, 1.146, 1.144, 1.144, 1.146, 1.149,
//       1.151, 1.151, 1.152, 1.155, 1.153, 1.156, 1.166, 1.182, 1.204, 1.234,
//       1.261, 1.28, 1.293, 1.309, 1.321, 1.33, 1.341, 1.36, 1.367, 1.338,
//     ],
//   };

//   const elbowTrailData = {
//     x: [
//       0.938, 0.935, 0.932, 0.932, 0.931, 0.931, 0.931, 0.931, 0.931, 0.929,
//       0.929, 0.928, 0.929, 0.93, 0.931, 0.933, 0.934, 0.935, 0.935, 0.936,
//       0.937, 0.941, 0.947, 0.95, 0.951, 0.951, 0.952, 0.953, 0.953, 0.953,
//       0.954, 0.953, 0.955, 0.957, 0.957, 0.958, 0.956, 0.954, 0.953, 0.952,
//       0.951, 0.952, 0.95, 0.954, 0.959, 0.961, 0.962, 0.965, 0.97, 0.971, 0.97,
//       0.969, 0.97, 0.971, 0.975, 0.978, 0.978, 0.977, 0.975, 0.973, 0.976,
//       0.979, 0.98, 0.98, 0.98, 0.98, 0.983, 0.985, 0.986, 0.985, 0.984, 0.984,
//       0.983, 0.982, 0.982, 0.986, 0.983, 0.974, 0.956, 0.932, 0.903, 0.872,
//       0.838, 0.809, 0.786, 0.76, 0.726, 0.691, 0.66, 0.635, 0.61, 0.584, 0.563,
//       0.557, 0.564, 0.584, 0.614, 0.655, 0.703, 0.748,
//     ],
//     y: [
//       0.565, 0.568, 0.571, 0.575, 0.578, 0.581, 0.585, 0.588, 0.59, 0.594,
//       0.597, 0.6, 0.604, 0.607, 0.61, 0.612, 0.612, 0.612, 0.612, 0.612, 0.612,
//       0.612, 0.612, 0.611, 0.611, 0.612, 0.614, 0.616, 0.617, 0.618, 0.622,
//       0.626, 0.629, 0.633, 0.639, 0.644, 0.649, 0.653, 0.659, 0.665, 0.67,
//       0.675, 0.679, 0.677, 0.673, 0.674, 0.675, 0.676, 0.677, 0.677, 0.676,
//       0.674, 0.672, 0.67, 0.667, 0.663, 0.66, 0.656, 0.651, 0.645, 0.639, 0.634,
//       0.629, 0.621, 0.612, 0.602, 0.592, 0.581, 0.57, 0.56, 0.549, 0.537, 0.523,
//       0.511, 0.501, 0.48, 0.457, 0.439, 0.424, 0.405, 0.387, 0.362, 0.327,
//       0.282, 0.228, 0.169, 0.108, 0.053, 0, -0.051, -0.086, -0.116, -0.142,
//       -0.17, -0.198, -0.222, -0.236, -0.252, -0.275, -0.244,
//     ],
//     z: [
//       1.475, 1.474, 1.474, 1.474, 1.474, 1.475, 1.476, 1.477, 1.478, 1.48,
//       1.482, 1.484, 1.485, 1.485, 1.485, 1.484, 1.483, 1.481, 1.476, 1.471,
//       1.467, 1.463, 1.459, 1.453, 1.449, 1.442, 1.436, 1.428, 1.423, 1.419,
//       1.414, 1.412, 1.407, 1.402, 1.399, 1.398, 1.397, 1.396, 1.394, 1.393,
//       1.393, 1.393, 1.394, 1.394, 1.393, 1.394, 1.393, 1.393, 1.392, 1.391,
//       1.389, 1.385, 1.382, 1.379, 1.378, 1.377, 1.376, 1.375, 1.376, 1.376,
//       1.375, 1.375, 1.376, 1.378, 1.38, 1.383, 1.385, 1.388, 1.388, 1.392,
//       1.391, 1.393, 1.394, 1.395, 1.388, 1.367, 1.338, 1.299, 1.252, 1.197,
//       1.14, 1.081, 1.027, 0.985, 0.954, 0.932, 0.924, 0.927, 0.933, 0.943,
//       0.955, 0.98, 1.014, 1.051, 1.087, 1.126, 1.166, 1.19, 1.208, 1.224,
//     ],
//   };

//   const shoulderLeadData = {
//     x: [
//       0.773, 0.773, 0.773, 0.775, 0.775, 0.773, 0.769, 0.766, 0.764, 0.764,
//       0.763, 0.762, 0.762, 0.762, 0.76, 0.759, 0.759, 0.757, 0.756, 0.756,
//       0.755, 0.754, 0.752, 0.749, 0.747, 0.743, 0.738, 0.735, 0.735, 0.734,
//       0.732, 0.73, 0.724, 0.719, 0.718, 0.716, 0.714, 0.712, 0.71, 0.71, 0.711,
//       0.713, 0.71, 0.705, 0.701, 0.699, 0.699, 0.7, 0.699, 0.699, 0.698, 0.696,
//       0.693, 0.688, 0.684, 0.682, 0.679, 0.676, 0.674, 0.672, 0.671, 0.668,
//       0.664, 0.661, 0.656, 0.659, 0.651, 0.653, 0.635, 0.645, 0.623, 0.628,
//       0.614, 0.618, 0.612, 0.613, 0.615, 0.614, 0.629, 0.62, 0.658, 0.637, 0.71,
//       0.681, 0.761, 0.738, 0.807, 0.787, 0.841, 0.833, 0.85, 0.848, 0.847, 0.85,
//       0.837, 0.842, 0.8, 0.818, 0.77, 0.785,
//     ],
//     y: [
//       -0.094, -0.09, -0.085, -0.081, -0.076, -0.072, -0.068, -0.064, -0.061,
//       -0.058, -0.054, -0.051, -0.049, -0.047, -0.045, -0.043, -0.041, -0.04,
//       -0.038, -0.037, -0.036, -0.036, -0.035, -0.035, -0.034, -0.033, -0.031,
//       -0.029, -0.027, -0.025, -0.022, -0.019, -0.015, -0.009, -0.003, 0.003,
//       0.01, 0.016, 0.022, 0.029, 0.034, 0.04, 0.046, 0.052, 0.057, 0.057, 0.054,
//       0.052, 0.054, 0.057, 0.06, 0.062, 0.062, 0.057, 0.052, 0.049, 0.047,
//       0.045, 0.044, 0.041, 0.036, 0.032, 0.027, 0.022, 0.015, 0.009, 0.003,
//       -0.003, -0.011, -0.018, -0.025, -0.032, -0.04, -0.048, -0.056, -0.065,
//       -0.074, -0.085, -0.1, -0.118, -0.141, -0.164, -0.185, -0.202, -0.203,
//       -0.199, -0.19, -0.17, -0.147, -0.119, -0.082, -0.044, -0.01, 0.008, 0.03,
//       0.055, 0.08, 0.107, 0.13, 0.146,
//     ],
//     z: [
//       1.426, 1.425, 1.424, 1.424, 1.424, 1.423, 1.422, 1.42, 1.417, 1.415,
//       1.415, 1.414, 1.414, 1.414, 1.411, 1.41, 1.41, 1.409, 1.407, 1.408, 1.405,
//       1.403, 1.4, 1.397, 1.395, 1.39, 1.387, 1.384, 1.38, 1.378, 1.375, 1.372,
//       1.367, 1.366, 1.364, 1.361, 1.358, 1.356, 1.351, 1.346, 1.343, 1.341,
//       1.341, 1.34, 1.339, 1.337, 1.335, 1.334, 1.334, 1.333, 1.333, 1.333,
//       1.333, 1.333, 1.335, 1.334, 1.333, 1.333, 1.332, 1.332, 1.332, 1.333,
//       1.333, 1.332, 1.333, 1.329, 1.324, 1.32, 1.316, 1.315, 1.314, 1.313, 1.31,
//       1.303, 1.297, 1.294, 1.294, 1.298, 1.296, 1.292, 1.298, 1.314, 1.329,
//       1.34, 1.358, 1.372, 1.386, 1.399, 1.408, 1.423, 1.434, 1.437, 1.437,
//       1.436, 1.436, 1.438, 1.424, 1.402, 1.401, 1.397,
//     ],
//   };

//   const shoulderTrailData = {
//     x: [
//       0.904, 0.904, 0.905, 0.906, 0.905, 0.904, 0.903, 0.903, 0.903, 0.903,
//       0.902, 0.898, 0.895, 0.896, 0.895, 0.895, 0.897, 0.897, 0.897, 0.897,
//       0.898, 0.897, 0.896, 0.896, 0.894, 0.891, 0.89, 0.888, 0.885, 0.882,
//       0.878, 0.876, 0.874, 0.871, 0.869, 0.865, 0.859, 0.857, 0.857, 0.856,
//       0.857, 0.857, 0.855, 0.855, 0.854, 0.851, 0.848, 0.846, 0.845, 0.844,
//       0.845, 0.845, 0.844, 0.843, 0.84, 0.836, 0.833, 0.83, 0.829, 0.828, 0.829,
//       0.829, 0.827, 0.824, 0.823, 0.823, 0.821, 0.819, 0.814, 0.809, 0.809,
//       0.807, 0.805, 0.805, 0.804, 0.806, 0.807, 0.8, 0.79, 0.784, 0.777, 0.772,
//       0.761, 0.747, 0.734, 0.713, 0.687, 0.657, 0.626, 0.6, 0.578, 0.56, 0.546,
//       0.536, 0.531, 0.524, 0.515, 0.51, 0.515, 0.519,
//     ],
//     y: [
//       0.248, 0.249, 0.252, 0.256, 0.259, 0.262, 0.266, 0.268, 0.271, 0.274,
//       0.279, 0.282, 0.285, 0.288, 0.291, 0.294, 0.294, 0.294, 0.294, 0.294,
//       0.293, 0.294, 0.294, 0.294, 0.294, 0.296, 0.298, 0.301, 0.302, 0.305,
//       0.309, 0.313, 0.318, 0.324, 0.331, 0.337, 0.342, 0.346, 0.353, 0.359,
//       0.364, 0.369, 0.373, 0.38, 0.379, 0.378, 0.382, 0.385, 0.388, 0.389,
//       0.384, 0.382, 0.382, 0.381, 0.379, 0.377, 0.376, 0.373, 0.37, 0.366,
//       0.362, 0.358, 0.353, 0.346, 0.339, 0.33, 0.322, 0.312, 0.304, 0.296,
//       0.284, 0.269, 0.252, 0.24, 0.232, 0.215, 0.197, 0.183, 0.18, 0.175, 0.169,
//       0.158, 0.148, 0.141, 0.135, 0.131, 0.127, 0.118, 0.104, 0.088, 0.083,
//       0.077, 0.071, 0.068, 0.068, 0.062, 0.048, 0.031, 0.01, -0.013,
//     ],
//     z: [
//       1.511, 1.51, 1.509, 1.507, 1.507, 1.506, 1.507, 1.506, 1.505, 1.505,
//       1.503, 1.503, 1.504, 1.504, 1.503, 1.501, 1.5, 1.499, 1.496, 1.494, 1.491,
//       1.487, 1.485, 1.483, 1.48, 1.476, 1.473, 1.469, 1.466, 1.462, 1.46, 1.456,
//       1.454, 1.454, 1.454, 1.454, 1.453, 1.452, 1.45, 1.449, 1.447, 1.446,
//       1.446, 1.446, 1.445, 1.444, 1.445, 1.446, 1.445, 1.444, 1.444, 1.444,
//       1.444, 1.445, 1.444, 1.444, 1.444, 1.443, 1.443, 1.444, 1.446, 1.447,
//       1.447, 1.449, 1.449, 1.45, 1.447, 1.445, 1.444, 1.443, 1.441, 1.439,
//       1.439, 1.437, 1.432, 1.427, 1.42, 1.411, 1.396, 1.379, 1.357, 1.333,
//       1.308, 1.285, 1.246, 1.265, 1.232, 1.234, 1.235, 1.234, 1.242, 1.237,
//       1.245, 1.246, 1.235, 1.24, 1.232, 1.234, 1.234, 1.232,
//     ],
//   };

//   const spineHighData = {
//     x: [
//       0.863, 0.863, 0.863, 0.863, 0.862, 0.863, 0.863, 0.864, 0.865, 0.866,
//       0.866, 0.866, 0.866, 0.865, 0.864, 0.863, 0.863, 0.863, 0.863, 0.861,
//       0.86, 0.859, 0.859, 0.858, 0.857, 0.857, 0.858, 0.857, 0.857, 0.856,
//       0.855, 0.854, 0.853, 0.851, 0.848, 0.847, 0.845, 0.847, 0.848, 0.851,
//       0.852, 0.851, 0.85, 0.849, 0.85, 0.85, 0.85, 0.85, 0.85, 0.849, 0.848,
//       0.846, 0.845, 0.843, 0.843, 0.842, 0.84, 0.838, 0.836, 0.834, 0.833,
//       0.833, 0.832, 0.832, 0.83, 0.826, 0.822, 0.82, 0.818, 0.814, 0.81, 0.809,
//       0.808, 0.806, 0.806, 0.806, 0.805, 0.802, 0.803, 0.806, 0.807, 0.81,
//       0.814, 0.819, 0.818, 0.814, 0.813, 0.809, 0.812, 0.813, 0.812, 0.81,
//       0.807, 0.804, 0.799, 0.792, 0.782, 0.772, 0.761, 0.747,
//     ],
//     y: [
//       0.11, 0.112, 0.114, 0.118, 0.122, 0.126, 0.131, 0.137, 0.141, 0.145,
//       0.149, 0.153, 0.155, 0.157, 0.158, 0.16, 0.16, 0.162, 0.162, 0.161, 0.159,
//       0.159, 0.157, 0.155, 0.154, 0.153, 0.155, 0.157, 0.158, 0.16, 0.163,
//       0.166, 0.17, 0.175, 0.18, 0.185, 0.191, 0.196, 0.202, 0.207, 0.212, 0.218,
//       0.224, 0.225, 0.222, 0.219, 0.222, 0.225, 0.227, 0.228, 0.23, 0.225,
//       0.222, 0.22, 0.216, 0.213, 0.212, 0.21, 0.208, 0.205, 0.201, 0.196, 0.189,
//       0.182, 0.175, 0.168, 0.161, 0.152, 0.144, 0.136, 0.125, 0.114, 0.105,
//       0.095, 0.083, 0.069, 0.053, 0.039, 0.023, 0.006, -0.012, -0.031, -0.043,
//       -0.047, -0.048, -0.046, -0.042, -0.038, -0.034, -0.029, -0.023, -0.017,
//       -0.011, -0.006, 0.003, 0.006, 0.008, 0.014, 0.018, 0.02,
//     ],
//     z: [
//       1.266, 1.266, 1.265, 1.264, 1.263, 1.263, 1.263, 1.262, 1.261, 1.261,
//       1.261, 1.259, 1.258, 1.257, 1.255, 1.254, 1.253, 1.251, 1.25, 1.248,
//       1.246, 1.244, 1.24, 1.237, 1.234, 1.231, 1.229, 1.226, 1.223, 1.221,
//       1.219, 1.217, 1.215, 1.213, 1.211, 1.209, 1.207, 1.206, 1.206, 1.204,
//       1.202, 1.201, 1.199, 1.197, 1.198, 1.198, 1.199, 1.2, 1.2, 1.2, 1.199,
//       1.198, 1.197, 1.198, 1.199, 1.199, 1.2, 1.2, 1.2, 1.2, 1.202, 1.202,
//       1.202, 1.203, 1.204, 1.202, 1.198, 1.196, 1.196, 1.198, 1.196, 1.195,
//       1.192, 1.187, 1.182, 1.178, 1.173, 1.169, 1.162, 1.153, 1.145, 1.144,
//       1.143, 1.142, 1.143, 1.144, 1.146, 1.147, 1.149, 1.155, 1.158, 1.16,
//       1.162, 1.163, 1.163, 1.162, 1.155, 1.144, 1.138, 1.134,
//     ],
//   };

//   const hipLeadData = {
//     x: [
//       0.942, 0.941, 0.944, 0.946, 0.947, 0.945, 0.945, 0.948, 0.953, 0.955,
//       0.956, 0.96, 0.962, 0.964, 0.967, 0.967, 0.966, 0.966, 0.966, 0.968,
//       0.969, 0.969, 0.969, 0.969, 0.97, 0.971, 0.971, 0.971, 0.972, 0.973,
//       0.975, 0.976, 0.976, 0.977, 0.978, 0.979, 0.98, 0.98, 0.979, 0.981, 0.984,
//       0.987, 0.988, 0.99, 0.992, 0.995, 0.994, 0.995, 0.996, 0.997, 0.996,
//       0.994, 0.992, 0.991, 0.992, 0.993, 0.991, 0.989, 0.988, 0.987, 0.987,
//       0.988, 0.987, 0.983, 0.981, 0.978, 0.976, 0.974, 0.973, 0.97, 0.974,
//       0.979, 0.983, 0.989, 0.997, 1.003, 1.005, 1.009, 1.017, 1.023, 1.029,
//       1.038, 1.044, 1.05, 1.058, 1.062, 1.063, 1.064, 1.066, 1.067, 1.066,
//       1.066, 1.066, 1.063, 1.06, 1.057, 1.053, 1.048, 1.041, 1.034,
//     ],
//     y: [
//       0.038, 0.04, 0.042, 0.047, 0.054, 0.06, 0.065, 0.069, 0.074, 0.078, 0.082,
//       0.085, 0.087, 0.089, 0.089, 0.088, 0.087, 0.086, 0.083, 0.08, 0.077,
//       0.074, 0.072, 0.069, 0.067, 0.066, 0.065, 0.065, 0.064, 0.064, 0.064,
//       0.066, 0.068, 0.07, 0.074, 0.078, 0.084, 0.092, 0.099, 0.104, 0.11, 0.107,
//       0.104, 0.105, 0.107, 0.109, 0.108, 0.108, 0.108, 0.108, 0.107, 0.106,
//       0.104, 0.101, 0.096, 0.092, 0.088, 0.085, 0.082, 0.076, 0.071, 0.065,
//       0.058, 0.051, 0.044, 0.036, 0.028, 0.019, 0.009, -0.002, -0.014, -0.026,
//       -0.039, -0.051, -0.061, -0.075, -0.08, -0.08, -0.08, -0.085, -0.09,
//       -0.091, -0.091, -0.091, -0.09, -0.084, -0.074, -0.064, -0.051, -0.036,
//       -0.023, -0.011, -0.001, 0.005, 0.01, 0.014, 0.017, 0.016, 0.014, 0.013,
//     ],
//     z: [
//       0.939, 0.939, 0.939, 0.938, 0.937, 0.936, 0.935, 0.934, 0.933, 0.933,
//       0.933, 0.934, 0.934, 0.932, 0.932, 0.93, 0.929, 0.928, 0.927, 0.926,
//       0.925, 0.922, 0.92, 0.918, 0.916, 0.914, 0.913, 0.912, 0.911, 0.91, 0.912,
//       0.91, 0.909, 0.908, 0.907, 0.906, 0.905, 0.904, 0.903, 0.904, 0.904,
//       0.905, 0.906, 0.906, 0.903, 0.903, 0.906, 0.908, 0.909, 0.911, 0.912,
//       0.913, 0.914, 0.915, 0.916, 0.918, 0.919, 0.92, 0.922, 0.925, 0.928, 0.93,
//       0.932, 0.934, 0.936, 0.938, 0.937, 0.938, 0.939, 0.94, 0.941, 0.939,
//       0.937, 0.935, 0.934, 0.93, 0.925, 0.914, 0.901, 0.893, 0.885, 0.884,
//       0.884, 0.88, 0.875, 0.87, 0.868, 0.87, 0.87, 0.871, 0.875, 0.881, 0.89,
//       0.898, 0.905, 0.907, 0.905, 0.903, 0.9, 0.892,
//     ],
//   };

//   const hipTrailData = {
//     x: [
//       0.997, 0.997, 0.997, 0.998, 0.998, 0.998, 0.999, 1.001, 1.004, 1.007,
//       1.008, 1.009, 1.011, 1.012, 1.015, 1.017, 1.019, 1.02, 1.022, 1.023,
//       1.023, 1.023, 1.024, 1.024, 1.025, 1.026, 1.027, 1.028, 1.029, 1.03,
//       1.032, 1.033, 1.034, 1.035, 1.036, 1.037, 1.038, 1.039, 1.038, 1.039,
//       1.043, 1.046, 1.047, 1.05, 1.053, 1.057, 1.06, 1.062, 1.065, 1.065, 1.065,
//       1.063, 1.061, 1.061, 1.062, 1.062, 1.061, 1.06, 1.059, 1.06, 1.061, 1.059,
//       1.058, 1.056, 1.054, 1.053, 1.053, 1.053, 1.053, 1.051, 1.049, 1.048,
//       1.047, 1.045, 1.042, 1.038, 1.03, 1.02, 1.013, 1.008, 1.003, 0.998, 0.99,
//       0.978, 0.96, 0.943, 0.93, 0.92, 0.918, 0.915, 0.913, 0.912, 0.911, 0.91,
//       0.908, 0.905, 0.901, 0.897, 0.892, 0.887,
//     ],
//     y: [
//       0.19, 0.192, 0.195, 0.2, 0.206, 0.211, 0.216, 0.221, 0.226, 0.231, 0.235,
//       0.238, 0.241, 0.243, 0.243, 0.242, 0.241, 0.239, 0.236, 0.232, 0.229,
//       0.225, 0.223, 0.22, 0.217, 0.215, 0.214, 0.213, 0.212, 0.211, 0.212,
//       0.215, 0.217, 0.219, 0.223, 0.226, 0.231, 0.239, 0.246, 0.251, 0.257,
//       0.252, 0.252, 0.253, 0.255, 0.257, 0.257, 0.257, 0.256, 0.254, 0.253,
//       0.252, 0.249, 0.246, 0.241, 0.237, 0.233, 0.228, 0.224, 0.218, 0.212,
//       0.206, 0.199, 0.192, 0.184, 0.176, 0.166, 0.155, 0.144, 0.133, 0.118,
//       0.104, 0.091, 0.084, 0.081, 0.079, 0.077, 0.076, 0.075, 0.073, 0.069,
//       0.065, 0.059, 0.053, 0.049, 0.045, 0.044, 0.041, 0.036, 0.034, 0.033,
//       0.035, 0.036, 0.034, 0.029, 0.023, 0.016, 0.007, -0.002, -0.011,
//     ],
//     z: [
//       0.917, 0.917, 0.917, 0.917, 0.917, 0.917, 0.916, 0.915, 0.915, 0.916,
//       0.918, 0.919, 0.921, 0.921, 0.92, 0.918, 0.916, 0.915, 0.913, 0.91, 0.909,
//       0.905, 0.902, 0.899, 0.897, 0.895, 0.893, 0.89, 0.889, 0.888, 0.889,
//       0.889, 0.89, 0.888, 0.887, 0.885, 0.883, 0.882, 0.882, 0.882, 0.884,
//       0.885, 0.884, 0.886, 0.889, 0.89, 0.892, 0.893, 0.893, 0.894, 0.896,
//       0.898, 0.899, 0.901, 0.902, 0.904, 0.905, 0.906, 0.909, 0.911, 0.912,
//       0.914, 0.916, 0.918, 0.917, 0.919, 0.922, 0.923, 0.926, 0.926, 0.926,
//       0.925, 0.922, 0.918, 0.914, 0.909, 0.902, 0.894, 0.885, 0.878, 0.87,
//       0.862, 0.859, 0.856, 0.853, 0.847, 0.841, 0.838, 0.837, 0.84, 0.844,
//       0.852, 0.853, 0.854, 0.854, 0.854, 0.852, 0.849, 0.845, 0.837,
//     ],
//   };

//   const kneeLeadData = {
//     x: [
//       0.802, 0.803, 0.804, 0.804, 0.803, 0.801, 0.798, 0.794, 0.785, 0.777,
//       0.768, 0.759, 0.75, 0.745, 0.742, 0.74, 0.739, 0.742, 0.745, 0.752, 0.759,
//       0.766, 0.771, 0.774, 0.776, 0.777, 0.776, 0.777, 0.778, 0.777, 0.777,
//       0.776, 0.775, 0.776, 0.775, 0.775, 0.773, 0.768, 0.761, 0.751, 0.739,
//       0.723, 0.703, 0.683, 0.66, 0.64, 0.627, 0.618, 0.611, 0.604, 0.595, 0.586,
//       0.581, 0.585, 0.582, 0.58, 0.577, 0.575, 0.578, 0.585, 0.59, 0.593, 0.597,
//       0.601, 0.605, 0.613, 0.62, 0.631, 0.642, 0.652, 0.663, 0.676, 0.693,
//       0.712, 0.723, 0.735, 0.745, 0.758, 0.773, 0.787, 0.801, 0.815, 0.828,
//       0.841, 0.858, 0.876, 0.891, 0.908, 0.924, 0.936, 0.945, 0.953, 0.97,
//       0.983, 0.989, 0.995, 1.001, 1.007, 1.015, 1.024,
//     ],
//     y: [
//       -0.225, -0.221, -0.216, -0.21, -0.206, -0.203, -0.199, -0.194, -0.189,
//       -0.186, -0.184, -0.182, -0.178, -0.177, -0.175, -0.175, -0.175, -0.174,
//       -0.172, -0.172, -0.173, -0.175, -0.176, -0.178, -0.181, -0.184, -0.188,
//       -0.191, -0.192, -0.191, -0.189, -0.187, -0.183, -0.178, -0.173, -0.166,
//       -0.155, -0.144, -0.132, -0.116, -0.099, -0.083, -0.06, -0.038, -0.014,
//       0.01, 0.018, 0.033, 0.048, 0.059, 0.069, 0.075, 0.065, 0.053, 0.039,
//       0.025, 0.025, 0.024, 0.021, 0.017, 0.011, 0.003, -0.006, -0.016, -0.028,
//       -0.041, -0.056, -0.07, -0.085, -0.102, -0.122, -0.142, -0.165, -0.195,
//       -0.224, -0.255, -0.285, -0.316, -0.347, -0.375, -0.401, -0.415, -0.43,
//       -0.443, -0.454, -0.459, -0.46, -0.459, -0.451, -0.438, -0.419, -0.4,
//       -0.377, -0.355, -0.341, -0.334, -0.33, -0.328, -0.331, -0.335,
//     ],
//     z: [
//       0.493, 0.493, 0.494, 0.494, 0.494, 0.494, 0.496, 0.499, 0.504, 0.508,
//       0.513, 0.519, 0.522, 0.524, 0.524, 0.52, 0.517, 0.514, 0.508, 0.505,
//       0.502, 0.498, 0.494, 0.491, 0.49, 0.49, 0.49, 0.488, 0.487, 0.485, 0.483,
//       0.483, 0.483, 0.481, 0.48, 0.479, 0.478, 0.476, 0.478, 0.479, 0.48, 0.485,
//       0.492, 0.503, 0.514, 0.526, 0.537, 0.548, 0.557, 0.568, 0.58, 0.585,
//       0.595, 0.604, 0.611, 0.617, 0.611, 0.605, 0.597, 0.592, 0.593, 0.591,
//       0.589, 0.584, 0.579, 0.573, 0.566, 0.561, 0.557, 0.551, 0.542, 0.535,
//       0.533, 0.531, 0.534, 0.536, 0.535, 0.536, 0.537, 0.537, 0.537, 0.54,
//       0.544, 0.542, 0.546, 0.547, 0.544, 0.54, 0.533, 0.524, 0.517, 0.509,
//       0.505, 0.499, 0.492, 0.495, 0.499, 0.504, 0.503, 0.503,
//     ],
//   };

//   const kneeTrailData = {
//     x: [
//       0.713, 0.714, 0.715, 0.715, 0.715, 0.715, 0.715, 0.715, 0.715, 0.716,
//       0.718, 0.721, 0.722, 0.723, 0.723, 0.722, 0.721, 0.721, 0.72, 0.718,
//       0.716, 0.713, 0.71, 0.708, 0.708, 0.707, 0.709, 0.711, 0.711, 0.711,
//       0.711, 0.71, 0.71, 0.71, 0.713, 0.715, 0.717, 0.719, 0.72, 0.722, 0.723,
//       0.726, 0.729, 0.731, 0.733, 0.735, 0.736, 0.737, 0.739, 0.741, 0.744,
//       0.747, 0.75, 0.753, 0.756, 0.759, 0.762, 0.764, 0.767, 0.769, 0.774,
//       0.775, 0.776, 0.78, 0.784, 0.789, 0.793, 0.798, 0.803, 0.804, 0.799,
//       0.794, 0.785, 0.776, 0.766, 0.752, 0.734, 0.724, 0.717, 0.721, 0.715,
//       0.712, 0.716, 0.723, 0.733, 0.742, 0.752, 0.763, 0.774, 0.789, 0.808,
//       0.823, 0.833, 0.836, 0.837, 0.839, 0.85, 0.862, 0.875, 0.881,
//     ],
//     y: [
//       0.413, 0.416, 0.418, 0.421, 0.423, 0.425, 0.428, 0.43, 0.433, 0.438,
//       0.443, 0.447, 0.449, 0.452, 0.455, 0.456, 0.457, 0.457, 0.456, 0.454,
//       0.452, 0.45, 0.447, 0.444, 0.44, 0.435, 0.43, 0.427, 0.422, 0.421, 0.42,
//       0.419, 0.42, 0.423, 0.428, 0.435, 0.441, 0.445, 0.448, 0.45, 0.454, 0.46,
//       0.468, 0.472, 0.472, 0.47, 0.468, 0.467, 0.466, 0.464, 0.463, 0.461, 0.46,
//       0.457, 0.455, 0.455, 0.455, 0.455, 0.455, 0.454, 0.453, 0.451, 0.448,
//       0.446, 0.445, 0.444, 0.44, 0.434, 0.428, 0.424, 0.415, 0.403, 0.39, 0.38,
//       0.366, 0.349, 0.33, 0.306, 0.276, 0.239, 0.202, 0.169, 0.137, 0.109,
//       0.081, 0.059, 0.032, 0.007, -0.015, -0.034, -0.056, -0.075, -0.091,
//       -0.103, -0.107, -0.104, -0.096, -0.083, -0.068, -0.055,
//     ],
//     z: [
//       0.507, 0.506, 0.507, 0.508, 0.508, 0.509, 0.509, 0.509, 0.51, 0.51, 0.511,
//       0.512, 0.513, 0.514, 0.514, 0.513, 0.513, 0.513, 0.513, 0.514, 0.515,
//       0.515, 0.515, 0.515, 0.514, 0.515, 0.513, 0.511, 0.51, 0.51, 0.51, 0.511,
//       0.511, 0.512, 0.512, 0.513, 0.513, 0.513, 0.514, 0.517, 0.519, 0.519,
//       0.519, 0.521, 0.523, 0.525, 0.527, 0.527, 0.529, 0.531, 0.531, 0.532,
//       0.534, 0.536, 0.537, 0.539, 0.54, 0.541, 0.544, 0.546, 0.549, 0.551,
//       0.552, 0.554, 0.554, 0.555, 0.556, 0.559, 0.562, 0.563, 0.564, 0.564,
//       0.562, 0.558, 0.551, 0.542, 0.53, 0.512, 0.494, 0.479, 0.463, 0.446,
//       0.429, 0.412, 0.39, 0.368, 0.352, 0.338, 0.33, 0.326, 0.326, 0.329, 0.333,
//       0.336, 0.337, 0.335, 0.331, 0.322, 0.315, 0.31,
//     ],
//   };

//   const ankleLeadData = {
//     x: [
//       0.994, 0.994, 0.993, 0.994, 0.994, 0.993, 0.99, 0.988, 0.986, 0.983,
//       0.978, 0.973, 0.97, 0.969, 0.969, 0.972, 0.973, 0.975, 0.98, 0.985, 0.991,
//       0.995, 0.996, 0.994, 0.994, 0.993, 0.993, 0.993, 0.993, 0.993, 0.992,
//       0.991, 0.992, 0.991, 0.989, 0.987, 0.983, 0.977, 0.973, 0.965, 0.955,
//       0.942, 0.928, 0.914, 0.893, 0.87, 0.852, 0.837, 0.824, 0.811, 0.798,
//       0.787, 0.775, 0.762, 0.751, 0.74, 0.737, 0.732, 0.728, 0.723, 0.719,
//       0.716, 0.715, 0.72, 0.731, 0.739, 0.747, 0.76, 0.772, 0.787, 0.803, 0.819,
//       0.838, 0.859, 0.861, 0.865, 0.869, 0.87, 0.876, 0.882, 0.887, 0.89, 0.89,
//       0.889, 0.89, 0.891, 0.892, 0.893, 0.894, 0.895, 0.897, 0.898, 0.9, 0.907,
//       0.916, 0.923, 0.931, 0.943, 0.959, 0.977,
//     ],
//     y: [
//       -0.441, -0.439, -0.438, -0.437, -0.435, -0.435, -0.434, -0.433, -0.431,
//       -0.429, -0.426, -0.422, -0.418, -0.413, -0.408, -0.401, -0.392, -0.386,
//       -0.386, -0.386, -0.39, -0.393, -0.394, -0.394, -0.396, -0.398, -0.4,
//       -0.402, -0.403, -0.404, -0.404, -0.403, -0.4, -0.399, -0.396, -0.394,
//       -0.392, -0.389, -0.385, -0.379, -0.374, -0.365, -0.351, -0.337, -0.317,
//       -0.297, -0.279, -0.269, -0.261, -0.244, -0.226, -0.21, -0.194, -0.207,
//       -0.225, -0.246, -0.267, -0.274, -0.278, -0.284, -0.292, -0.305, -0.32,
//       -0.335, -0.352, -0.372, -0.39, -0.409, -0.427, -0.445, -0.466, -0.485,
//       -0.518, -0.538, -0.543, -0.561, -0.571, -0.572, -0.571, -0.573, -0.578,
//       -0.588, -0.596, -0.599, -0.601, -0.603, -0.606, -0.607, -0.607, -0.607,
//       -0.604, -0.601, -0.597, -0.592, -0.585, -0.582, -0.585, -0.595, -0.603,
//       -0.609,
//     ],
//     z: [
//       0.12, 0.12, 0.122, 0.123, 0.124, 0.126, 0.13, 0.138, 0.146, 0.15, 0.154,
//       0.159, 0.164, 0.17, 0.175, 0.175, 0.172, 0.166, 0.158, 0.15, 0.144, 0.139,
//       0.134, 0.13, 0.128, 0.126, 0.125, 0.126, 0.125, 0.124, 0.126, 0.127,
//       0.128, 0.128, 0.13, 0.133, 0.137, 0.144, 0.153, 0.165, 0.177, 0.19, 0.205,
//       0.22, 0.234, 0.239, 0.243, 0.239, 0.239, 0.244, 0.247, 0.248, 0.248,
//       0.249, 0.25, 0.25, 0.248, 0.249, 0.25, 0.252, 0.253, 0.251, 0.249, 0.246,
//       0.246, 0.244, 0.244, 0.244, 0.244, 0.242, 0.241, 0.235, 0.225, 0.213,
//       0.195, 0.175, 0.158, 0.14, 0.124, 0.113, 0.105, 0.102, 0.101, 0.1, 0.1,
//       0.102, 0.1, 0.099, 0.098, 0.098, 0.098, 0.099, 0.1, 0.101, 0.101, 0.105,
//       0.108, 0.11, 0.11, 0.109,
//     ],
//   };

//   const ankleTrailData = {
//     x: [
//       0.959, 0.96, 0.96, 0.96, 0.96, 0.96, 0.96, 0.959, 0.959, 0.959, 0.959,
//       0.959, 0.96, 0.96, 0.961, 0.96, 0.959, 0.96, 0.96, 0.96, 0.959, 0.959,
//       0.959, 0.959, 0.959, 0.959, 0.959, 0.96, 0.96, 0.959, 0.959, 0.958, 0.958,
//       0.957, 0.957, 0.957, 0.957, 0.957, 0.956, 0.956, 0.956, 0.957, 0.958,
//       0.958, 0.957, 0.957, 0.958, 0.959, 0.958, 0.959, 0.96, 0.961, 0.961,
//       0.961, 0.962, 0.962, 0.961, 0.96, 0.96, 0.961, 0.96, 0.959, 0.957, 0.957,
//       0.957, 0.956, 0.957, 0.958, 0.958, 0.959, 0.956, 0.954, 0.955, 0.955,
//       0.954, 0.952, 0.949, 0.946, 0.942, 0.941, 0.936, 0.928, 0.918, 0.91,
//       0.901, 0.893, 0.885, 0.881, 0.883, 0.896, 0.907, 0.922, 0.939, 0.956,
//       0.971, 0.989, 1.002, 1.01, 1.013, 1.015,
//     ],
//     y: [
//       0.512, 0.512, 0.512, 0.513, 0.514, 0.514, 0.515, 0.516, 0.517, 0.517,
//       0.517, 0.518, 0.517, 0.517, 0.517, 0.517, 0.517, 0.518, 0.518, 0.518,
//       0.518, 0.518, 0.518, 0.518, 0.518, 0.518, 0.518, 0.517, 0.515, 0.516,
//       0.516, 0.515, 0.516, 0.516, 0.516, 0.515, 0.515, 0.514, 0.514, 0.513,
//       0.513, 0.514, 0.515, 0.516, 0.516, 0.515, 0.514, 0.515, 0.515, 0.515,
//       0.514, 0.513, 0.513, 0.513, 0.513, 0.512, 0.512, 0.511, 0.51, 0.508,
//       0.507, 0.505, 0.504, 0.502, 0.5, 0.497, 0.496, 0.495, 0.494, 0.494, 0.494,
//       0.494, 0.493, 0.491, 0.487, 0.483, 0.482, 0.48, 0.478, 0.476, 0.473, 0.47,
//       0.466, 0.461, 0.456, 0.456, 0.453, 0.444, 0.432, 0.415, 0.396, 0.376,
//       0.355, 0.337, 0.328, 0.327, 0.334, 0.351, 0.371, 0.391,
//     ],
//     z: [
//       0.118, 0.118, 0.118, 0.116, 0.114, 0.113, 0.113, 0.113, 0.113, 0.113,
//       0.113, 0.113, 0.114, 0.114, 0.114, 0.114, 0.113, 0.113, 0.113, 0.112,
//       0.112, 0.114, 0.114, 0.114, 0.114, 0.114, 0.115, 0.116, 0.116, 0.116,
//       0.116, 0.116, 0.116, 0.116, 0.117, 0.116, 0.116, 0.116, 0.116, 0.116,
//       0.116, 0.115, 0.115, 0.114, 0.114, 0.115, 0.114, 0.113, 0.113, 0.112,
//       0.113, 0.113, 0.114, 0.114, 0.113, 0.113, 0.112, 0.112, 0.113, 0.114,
//       0.114, 0.114, 0.115, 0.116, 0.117, 0.117, 0.118, 0.119, 0.118, 0.119,
//       0.119, 0.119, 0.119, 0.121, 0.122, 0.124, 0.127, 0.133, 0.137, 0.139,
//       0.145, 0.156, 0.167, 0.177, 0.186, 0.195, 0.207, 0.225, 0.231, 0.239,
//       0.245, 0.248, 0.245, 0.236, 0.223, 0.216, 0.211, 0.208, 0.209, 0.212,
//     ],
//   };

//   const midfootLeadData = {
//     x: [
//       0.837, 0.837, 0.836, 0.837, 0.838, 0.838, 0.837, 0.837, 0.837, 0.837,
//       0.836, 0.834, 0.833, 0.832, 0.831, 0.832, 0.832, 0.832, 0.832, 0.834,
//       0.837, 0.839, 0.84, 0.838, 0.838, 0.838, 0.838, 0.838, 0.837, 0.837,
//       0.836, 0.836, 0.836, 0.834, 0.833, 0.832, 0.831, 0.83, 0.832, 0.834,
//       0.833, 0.831, 0.828, 0.826, 0.823, 0.816, 0.808, 0.799, 0.79, 0.778,
//       0.763, 0.746, 0.73, 0.712, 0.695, 0.678, 0.666, 0.654, 0.651, 0.646,
//       0.642, 0.638, 0.632, 0.631, 0.635, 0.647, 0.655, 0.663, 0.674, 0.688,
//       0.707, 0.712, 0.712, 0.731, 0.739, 0.738, 0.738, 0.74, 0.741, 0.744,
//       0.745, 0.746, 0.746, 0.746, 0.747, 0.749, 0.751, 0.752, 0.751, 0.753,
//       0.755, 0.755, 0.76, 0.774, 0.795, 0.82, 0.841, 0.86, 0.887, 0.924,
//     ],
//     y: [
//       -0.439, -0.441, -0.442, -0.442, -0.441, -0.44, -0.44, -0.44, -0.439,
//       -0.439, -0.439, -0.439, -0.438, -0.437, -0.436, -0.434, -0.43, -0.426,
//       -0.422, -0.417, -0.412, -0.406, -0.399, -0.396, -0.396, -0.396, -0.396,
//       -0.397, -0.397, -0.397, -0.397, -0.397, -0.397, -0.397, -0.397, -0.397,
//       -0.398, -0.398, -0.399, -0.4, -0.4, -0.397, -0.395, -0.39, -0.38, -0.367,
//       -0.354, -0.336, -0.326, -0.304, -0.286, -0.269, -0.252, -0.253, -0.276,
//       -0.3, -0.325, -0.328, -0.332, -0.34, -0.35, -0.363, -0.378, -0.394,
//       -0.412, -0.432, -0.454, -0.474, -0.494, -0.515, -0.535, -0.552, -0.585,
//       -0.605, -0.617, -0.635, -0.642, -0.645, -0.652, -0.661, -0.668, -0.677,
//       -0.684, -0.686, -0.688, -0.689, -0.689, -0.69, -0.69, -0.69, -0.69,
//       -0.688, -0.686, -0.683, -0.683, -0.687, -0.701, -0.721, -0.74, -0.759,
//     ],
//     z: [
//       0.046, 0.046, 0.046, 0.046, 0.046, 0.046, 0.045, 0.044, 0.043, 0.043,
//       0.042, 0.044, 0.047, 0.048, 0.049, 0.052, 0.056, 0.053, 0.049, 0.046,
//       0.047, 0.048, 0.048, 0.048, 0.047, 0.047, 0.046, 0.046, 0.046, 0.047,
//       0.048, 0.049, 0.048, 0.049, 0.049, 0.048, 0.047, 0.045, 0.044, 0.045,
//       0.048, 0.053, 0.062, 0.074, 0.085, 0.092, 0.093, 0.094, 0.095, 0.096,
//       0.097, 0.098, 0.099, 0.101, 0.103, 0.103, 0.105, 0.106, 0.105, 0.104,
//       0.106, 0.107, 0.107, 0.109, 0.11, 0.111, 0.113, 0.116, 0.116, 0.115,
//       0.111, 0.105, 0.096, 0.087, 0.075, 0.066, 0.06, 0.055, 0.051, 0.053,
//       0.051, 0.051, 0.052, 0.052, 0.052, 0.053, 0.053, 0.053, 0.053, 0.054,
//       0.056, 0.059, 0.062, 0.065, 0.069, 0.075, 0.075, 0.074, 0.073, 0.073,
//     ],
//   };

//   const midfootTrailData = {
//     x: [
//       0.821, 0.821, 0.822, 0.821, 0.819, 0.819, 0.819, 0.819, 0.819, 0.818,
//       0.818, 0.818, 0.818, 0.818, 0.818, 0.817, 0.817, 0.817, 0.819, 0.819,
//       0.82, 0.821, 0.821, 0.822, 0.824, 0.826, 0.825, 0.824, 0.825, 0.826,
//       0.823, 0.824, 0.826, 0.829, 0.829, 0.831, 0.832, 0.833, 0.835, 0.836,
//       0.833, 0.824, 0.824, 0.822, 0.822, 0.823, 0.824, 0.826, 0.826, 0.823,
//       0.823, 0.823, 0.823, 0.823, 0.821, 0.823, 0.821, 0.823, 0.822, 0.822,
//       0.82, 0.82, 0.821, 0.822, 0.823, 0.822, 0.823, 0.825, 0.827, 0.826, 0.825,
//       0.825, 0.824, 0.823, 0.824, 0.825, 0.826, 0.828, 0.828, 0.825, 0.822,
//       0.821, 0.817, 0.814, 0.812, 0.813, 0.815, 0.819, 0.826, 0.835, 0.847,
//       0.862, 0.874, 0.89, 0.904, 0.916, 0.927, 0.927, 0.925, 0.921,
//     ],
//     y: [
//       0.58, 0.58, 0.581, 0.582, 0.582, 0.58, 0.581, 0.582, 0.584, 0.584, 0.585,
//       0.587, 0.586, 0.585, 0.584, 0.581, 0.583, 0.585, 0.586, 0.587, 0.587,
//       0.588, 0.587, 0.588, 0.586, 0.585, 0.586, 0.586, 0.584, 0.583, 0.581,
//       0.581, 0.581, 0.582, 0.582, 0.582, 0.585, 0.588, 0.586, 0.586, 0.587,
//       0.587, 0.59, 0.591, 0.591, 0.592, 0.592, 0.594, 0.592, 0.589, 0.586,
//       0.585, 0.583, 0.583, 0.583, 0.584, 0.585, 0.586, 0.586, 0.583, 0.581,
//       0.582, 0.583, 0.583, 0.584, 0.584, 0.583, 0.583, 0.581, 0.58, 0.578,
//       0.579, 0.578, 0.573, 0.571, 0.568, 0.57, 0.572, 0.57, 0.568, 0.566, 0.564,
//       0.56, 0.556, 0.556, 0.555, 0.552, 0.542, 0.526, 0.506, 0.482, 0.458,
//       0.438, 0.422, 0.412, 0.41, 0.416, 0.424, 0.433, 0.443,
//     ],
//     z: [
//       0.038, 0.038, 0.038, 0.038, 0.038, 0.038, 0.038, 0.039, 0.039, 0.038,
//       0.038, 0.037, 0.036, 0.036, 0.037, 0.036, 0.036, 0.036, 0.036, 0.035,
//       0.036, 0.036, 0.035, 0.035, 0.036, 0.038, 0.037, 0.038, 0.038, 0.037,
//       0.037, 0.037, 0.038, 0.038, 0.038, 0.038, 0.038, 0.037, 0.036, 0.036,
//       0.036, 0.038, 0.037, 0.037, 0.037, 0.037, 0.037, 0.036, 0.038, 0.04,
//       0.041, 0.042, 0.043, 0.043, 0.042, 0.043, 0.043, 0.043, 0.044, 0.045,
//       0.045, 0.045, 0.044, 0.043, 0.043, 0.043, 0.044, 0.044, 0.043, 0.044,
//       0.043, 0.045, 0.046, 0.047, 0.045, 0.045, 0.044, 0.045, 0.046, 0.046,
//       0.047, 0.05, 0.053, 0.06, 0.065, 0.072, 0.083, 0.093, 0.1, 0.106, 0.108,
//       0.107, 0.103, 0.095, 0.088, 0.083, 0.079, 0.076, 0.074, 0.072,
//     ],
//   };

//   const centerOfMassData = {
//     x: [
//       0.875, 0.875, 0.875, 0.875, 0.875, 0.876, 0.876, 0.876, 0.876, 0.876,
//       0.875, 0.875, 0.875, 0.875, 0.874, 0.874, 0.875, 0.875, 0.876, 0.875,
//       0.875, 0.875, 0.875, 0.874, 0.874, 0.874, 0.875, 0.875, 0.875, 0.874,
//       0.875, 0.876, 0.877, 0.876, 0.876, 0.876, 0.875, 0.874, 0.874, 0.874,
//       0.874, 0.872, 0.871, 0.872, 0.872, 0.872, 0.871, 0.871, 0.87, 0.87, 0.87,
//       0.87, 0.87, 0.869, 0.868, 0.867, 0.866, 0.864, 0.863, 0.863, 0.863, 0.864,
//       0.864, 0.863, 0.863, 0.862, 0.861, 0.861, 0.861, 0.859, 0.857, 0.857,
//       0.856, 0.857, 0.858, 0.859, 0.857, 0.854, 0.855, 0.857, 0.857, 0.858,
//       0.859, 0.859, 0.858, 0.856, 0.855, 0.854, 0.857, 0.86, 0.861, 0.863,
//       0.864, 0.864, 0.864, 0.865, 0.865, 0.865, 0.864, 0.862,
//     ],
//     y: [
//       0.113, 0.116, 0.119, 0.123, 0.128, 0.132, 0.136, 0.14, 0.144, 0.148,
//       0.152, 0.155, 0.158, 0.16, 0.161, 0.162, 0.162, 0.162, 0.161, 0.159,
//       0.158, 0.156, 0.154, 0.152, 0.151, 0.15, 0.149, 0.149, 0.149, 0.149,
//       0.151, 0.154, 0.156, 0.16, 0.164, 0.169, 0.175, 0.181, 0.187, 0.193,
//       0.199, 0.205, 0.212, 0.217, 0.213, 0.21, 0.213, 0.215, 0.217, 0.218,
//       0.218, 0.219, 0.219, 0.218, 0.216, 0.214, 0.212, 0.209, 0.205, 0.201,
//       0.196, 0.191, 0.184, 0.177, 0.17, 0.162, 0.153, 0.143, 0.133, 0.122, 0.11,
//       0.097, 0.085, 0.072, 0.06, 0.046, 0.032, 0.02, 0.008, -0.004, -0.014,
//       -0.019, -0.025, -0.03, -0.034, -0.039, -0.046, -0.051, -0.054, -0.055,
//       -0.054, -0.05, -0.045, -0.041, -0.038, -0.038, -0.039, -0.04, -0.041,
//       -0.042,
//     ],
//     z: [
//       0.986, 0.986, 0.986, 0.986, 0.986, 0.986, 0.985, 0.985, 0.986, 0.986,
//       0.987, 0.988, 0.988, 0.987, 0.986, 0.984, 0.983, 0.981, 0.979, 0.977,
//       0.975, 0.973, 0.97, 0.967, 0.964, 0.962, 0.96, 0.958, 0.956, 0.956, 0.954,
//       0.954, 0.953, 0.952, 0.95, 0.949, 0.947, 0.946, 0.946, 0.946, 0.946,
//       0.947, 0.948, 0.949, 0.95, 0.951, 0.953, 0.954, 0.955, 0.956, 0.957,
//       0.959, 0.96, 0.961, 0.962, 0.963, 0.964, 0.964, 0.965, 0.966, 0.967,
//       0.968, 0.968, 0.968, 0.966, 0.966, 0.967, 0.967, 0.967, 0.967, 0.966,
//       0.964, 0.961, 0.958, 0.954, 0.95, 0.943, 0.935, 0.926, 0.918, 0.909,
//       0.899, 0.891, 0.886, 0.884, 0.882, 0.882, 0.883, 0.886, 0.888, 0.892,
//       0.894, 0.896, 0.898, 0.9, 0.901, 0.901, 0.901, 0.9, 0.899,
//     ],
//   };

//   const pelvisCOMData = {
//     x: [
//       0.969, 0.969, 0.97, 0.97, 0.97, 0.97, 0.97, 0.973, 0.976, 0.977, 0.978,
//       0.981, 0.983, 0.985, 0.987, 0.987, 0.989, 0.992, 0.994, 0.996, 0.996,
//       0.996, 0.996, 0.997, 0.997, 0.998, 0.999, 0.999, 1.001, 1.002, 1.003,
//       1.004, 1.005, 1.006, 1.007, 1.008, 1.009, 1.009, 1.009, 1.01, 1.013,
//       1.017, 1.018, 1.02, 1.023, 1.026, 1.029, 1.03, 1.031, 1.031, 1.03, 1.028,
//       1.026, 1.025, 1.024, 1.024, 1.023, 1.021, 1.02, 1.019, 1.02, 1.021, 1.02,
//       1.018, 1.017, 1.015, 1.014, 1.013, 1.013, 1.01, 1.011, 1.012, 1.011, 1.01,
//       1.012, 1.012, 1.011, 1.009, 1.012, 1.015, 1.016, 1.017, 1.017, 1.014,
//       1.009, 1.002, 0.997, 0.992, 0.991, 0.991, 0.989, 0.989, 0.988, 0.985,
//       0.982, 0.979, 0.975, 0.971, 0.966, 0.961,
//     ],
//     y: [
//       0.114, 0.116, 0.119, 0.123, 0.13, 0.136, 0.141, 0.145, 0.15, 0.154, 0.159,
//       0.162, 0.164, 0.166, 0.166, 0.165, 0.164, 0.163, 0.16, 0.156, 0.153, 0.15,
//       0.147, 0.144, 0.142, 0.14, 0.139, 0.139, 0.138, 0.137, 0.138, 0.14, 0.142,
//       0.145, 0.148, 0.152, 0.158, 0.166, 0.172, 0.177, 0.183, 0.18, 0.178,
//       0.179, 0.181, 0.183, 0.183, 0.182, 0.182, 0.181, 0.18, 0.179, 0.177,
//       0.174, 0.169, 0.164, 0.161, 0.157, 0.153, 0.147, 0.141, 0.135, 0.128,
//       0.121, 0.114, 0.106, 0.097, 0.087, 0.076, 0.065, 0.052, 0.039, 0.026,
//       0.014, 0.004, 0, -0.002, -0.002, -0.002, -0.006, -0.01, -0.013, -0.014,
//       -0.015, -0.016, -0.014, -0.014, -0.011, -0.008, -0.001, 0.005, 0.012,
//       0.018, 0.019, 0.02, 0.019, 0.016, 0.012, 0.006, 0.001,
//     ],
//     z: [
//       0.928, 0.928, 0.928, 0.928, 0.928, 0.928, 0.927, 0.927, 0.927, 0.927,
//       0.927, 0.928, 0.928, 0.928, 0.926, 0.924, 0.923, 0.923, 0.921, 0.92,
//       0.918, 0.915, 0.912, 0.909, 0.907, 0.905, 0.903, 0.901, 0.9, 0.9, 0.901,
//       0.901, 0.899, 0.898, 0.897, 0.896, 0.894, 0.893, 0.893, 0.893, 0.894,
//       0.895, 0.895, 0.896, 0.896, 0.897, 0.899, 0.9, 0.901, 0.902, 0.904, 0.906,
//       0.907, 0.908, 0.909, 0.911, 0.912, 0.913, 0.915, 0.917, 0.919, 0.921,
//       0.923, 0.924, 0.926, 0.927, 0.929, 0.931, 0.932, 0.933, 0.933, 0.932,
//       0.929, 0.927, 0.924, 0.92, 0.913, 0.904, 0.893, 0.885, 0.877, 0.873,
//       0.871, 0.869, 0.864, 0.859, 0.855, 0.854, 0.853, 0.855, 0.858, 0.867,
//       0.874, 0.88, 0.881, 0.881, 0.879, 0.876, 0.872, 0.865,
//     ],
//   };

//   const index = frame - 1;

//   const positions = [
//     { data: batTopData, object: batTop, name: 'BatTop' },
//     { data: batBottomData, object: batBottom, name: 'BatBottom' },
//     { data: handLeadData, object: handLead, name: 'HandLead' },
//     { data: handTrailData, object: handTrail, name: 'HandTrail' },
//     { data: wristLeadData, object: wristLead, name: 'WristLead' },
//     { data: wristTrailData, object: wristTrail, name: 'WristTrail' },
//     { data: elbowLeadData, object: elbowLead, name: 'ElbowLead' },
//     { data: elbowTrailData, object: elbowTrail, name: 'ElbowTrail' },
//     { data: shoulderLeadData, object: shoulderLead, name: 'ShoulderLead' },
//     { data: shoulderTrailData, object: shoulderTrail, name: 'ShoulderTrail' },
//     { data: spineHighData, object: spineHigh, name: 'SpineHigh' },
//     { data: hipLeadData, object: hipLead, name: 'HipLead' },
//     { data: hipTrailData, object: hipTrail, name: 'HipTrail' },
//     { data: kneeLeadData, object: kneeLead, name: 'KneeLead' },
//     { data: kneeTrailData, object: kneeTrail, name: 'KneeTrail' },
//     { data: ankleLeadData, object: ankleLead, name: 'AnkleLead' },
//     { data: ankleTrailData, object: ankleTrail, name: 'AnkleTrail' },
//     { data: midfootLeadData, object: midfootLead, name: 'MidfootLead' },
//     { data: midfootTrailData, object: midfootTrail, name: 'MidfootTrail' },
//     { data: centerOfMassData, object: centerOfMass, name: 'CenterOfMass' },
//     { data: pelvisCOMData, object: pelvisCOM, name: 'PelvisCOM' },
//   ];

//   positions.forEach(({ data, object, name }) => {
//     const position = new THREE.Vector3(
//       data.x[index],
//       data.y[index],
//       data.z[index]
//     );

//     // console.log(frame, name, object.position);

//     new TWEEN.Tween(object.position)
//       .to(
//         {
//           x: position.x,
//           y: position.z,
//           z: position.y * -1,
//         },
//         100
//       )
//       .start();
//   });
// }

// const stats = new Stats();
// document.body.appendChild(stats.dom);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   TWEEN.update();

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------------------------ //
// Using tween.js with AnimationMixer Example //
// ------------------------------------------ //
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';
// import TWEEN from '@tweenjs/tween.js';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light1 = new THREE.SpotLight(); //new THREE.SpotLight();
// light1.position.set(2.5, 5, 2.5);
// light1.angle = Math.PI / 8;
// light1.penumbra = 0.5;
// light1.castShadow = true;
// light1.shadow.mapSize.width = 1024;
// light1.shadow.mapSize.height = 1024;
// light1.shadow.camera.near = 0.5;
// light1.shadow.camera.far = 20;
// scene.add(light1);

// const light2 = new THREE.SpotLight(); //new THREE.SpotLight();
// light2.position.set(-2.5, 5, 2.5);
// light2.angle = Math.PI / 8;
// light2.penumbra = 0.5;
// light2.castShadow = true;
// light2.shadow.mapSize.width = 1024;
// light2.shadow.mapSize.height = 1024;
// light2.shadow.camera.near = 0.5;
// light2.shadow.camera.far = 20;
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
// renderer.shadowMap.enabled = true;
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.set(0, 1, 0);

// const sceneMeshes: THREE.Mesh[] = [];

// const planeGeometry = new THREE.PlaneGeometry(25, 25);
// const texture = new THREE.TextureLoader().load('img/grid.png');
// const plane = new THREE.Mesh(
//   planeGeometry,
//   new THREE.MeshPhongMaterial({ map: texture })
// );
// plane.rotateX(-Math.PI / 2);
// plane.receiveShadow = true;
// scene.add(plane);
// sceneMeshes.push(plane);

// let mixer: THREE.AnimationMixer;
// let modelReady = false;
// let modelMesh: THREE.Object3D;
// const animationActions: THREE.AnimationAction[] = [];
// let activeAction: THREE.AnimationAction;
// let lastAction: THREE.AnimationAction;
// const gltfLoader = new GLTFLoader();

// gltfLoader.load(
//   'models/ninja.glb',
//   (gltf) => {
//     gltf.scene.traverse(function (child) {
//       if ((child as THREE.Mesh).isMesh) {
//         let m = child as THREE.Mesh;
//         m.castShadow = true;
//         m.frustumCulled = false;
//       }
//     });

//     mixer = new THREE.AnimationMixer(gltf.scene);

//     const animationAction = mixer.clipAction((gltf as any).animations[0]);
//     animationActions.push(animationAction);
//     animationsFolder.add(animations, 'default');
//     activeAction = animationActions[0];

//     scene.add(gltf.scene);
//     modelMesh = gltf.scene;

//     //add an animation from another file
//     gltfLoader.load(
//       'models/ninja@baseballSwing.glb',
//       (gltf) => {
//         console.log('loaded samba');
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

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const raycaster = new THREE.Raycaster();
// const targetQuaternion = new THREE.Quaternion();

// renderer.domElement.addEventListener('dblclick', onDoubleClick, false);
// function onDoubleClick(event: MouseEvent) {
//   const mouse = {
//     x: (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     y: -(event.clientY / renderer.domElement.clientHeight) * 2 + 1,
//   };
//   // @ts-ignore
//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObjects(sceneMeshes, false);

//   if (intersects.length > 0) {
//     const p = intersects[0].point;

//     const distance = modelMesh.position.distanceTo(p);

//     // modelMesh.lookAt(p);

//     const rotationMatrix = new THREE.Matrix4();
//     rotationMatrix.lookAt(p, modelMesh.position, modelMesh.up);
//     targetQuaternion.setFromRotationMatrix(rotationMatrix);

//     setAction(animationActions[2]);

//     TWEEN.removeAll();
//     new TWEEN.Tween(modelMesh.position)
//       .to(
//         {
//           x: p.x,
//           y: p.y,
//           z: p.z,
//         },
//         (1000 / 2) * distance
//       ) //walks 2 meters a second * the distance
//       .onUpdate(() => {
//         controls.target.set(
//           modelMesh.position.x,
//           modelMesh.position.y + 1,
//           modelMesh.position.z
//         );
//         light1.target = modelMesh;
//         light2.target = modelMesh;
//       })
//       .start()
//       .onComplete(() => {
//         setAction(animationActions[1]);
//         activeAction.clampWhenFinished = true;
//         activeAction.loop = THREE.LoopOnce;
//       });
//   }
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
//     lastAction.fadeOut(0.2);
//     activeAction.reset();
//     activeAction.fadeIn(0.2);
//     activeAction.play();
//   }
// };

// const gui = new GUI();
// const animationsFolder = gui.addFolder('Animations');
// animationsFolder.open();

// const clock = new THREE.Clock();
// let delta = 0;

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   if (modelReady) {
//     delta = clock.getDelta();
//     mixer.update(delta);

//     if (!modelMesh.quaternion.equals(targetQuaternion)) {
//       modelMesh.quaternion.rotateTowards(targetQuaternion, delta * 1000);
//     }
//   }

//   TWEEN.update();

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------- //
// Vector3 Lerp Example //
// -------------------- //

// #Might Use
// This could be much better than tween. Try converting this to use the slider and play button like the ChatGPT example a few up
// Don't think I'll need lerpVectors, just the regular lerp
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';

// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(1, 2, 5);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);

// const floor = new THREE.Mesh(
//   new THREE.PlaneGeometry(20, 20, 10, 10),
//   new THREE.MeshBasicMaterial({ color: 0xaec6cf, wireframe: true })
// );
// floor.rotateX(-Math.PI / 2);
// scene.add(floor);

// const geometry = new THREE.BoxGeometry();
// //the cube used for .lerp
// const cube1 = new THREE.Mesh(
//   geometry,
//   new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
// );
// cube1.position.y = 0.5;
// scene.add(cube1);

// //the cube used for .lerpVectors
// const cube2 = new THREE.Mesh(
//   geometry,
//   new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
// );
// cube2.position.y = 0.5;
// scene.add(cube2);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

// const raycaster = new THREE.Raycaster();
// let v1 = new THREE.Vector3(2, 0.5, 2);
// let v2 = new THREE.Vector3(0, 0.5, 0);
// const mouse = new THREE.Vector2();

// function onDoubleClick(event: THREE.Event) {
//   mouse.set(
//     (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
//     -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
//   );
//   raycaster.setFromCamera(mouse, camera);

//   const intersects = raycaster.intersectObject(floor, false);
//   if (intersects.length > 0) {
//     v1 = intersects[0].point;
//     v1.y += 0.5; //raise it so it appears to sit on grid
//     //console.log(v1)
//   }
// }
// renderer.domElement.addEventListener('dblclick', onDoubleClick, false);

// const stats = new Stats();
// document.body.appendChild(stats.dom);
// const data = {
//   lerpAlpha: 0.1,
//   lerpVectorsAlpha: 1.0,
// };
// const gui = new GUI();

// const lerpFolder = gui.addFolder('.lerp');
// lerpFolder.add(data, 'lerpAlpha', 0, 1.0, 0.01);
// lerpFolder.open();

// const lerpVectorsFolder = gui.addFolder('.lerpVectors');
// lerpVectorsFolder.add(data, 'lerpVectorsAlpha', 0, 1.0, 0.01);
// lerpVectorsFolder.open();

// function animate() {
//   requestAnimationFrame(animate);
//   controls.update();
//   cube1.position.lerp(v1, data.lerpAlpha);
//   cube2.position.lerpVectors(v1, v2, data.lerpVectorsAlpha);
//   controls.target.copy(cube1.position);
//   render();
//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ------------------------ //
// Physics w/Cannon Example //
// ------------------------ //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';
// import * as CANNON from 'cannon-es';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light1 = new THREE.SpotLight();
// light1.position.set(2.5, 5, 5);
// light1.angle = Math.PI / 4;
// light1.penumbra = 0.5;
// light1.castShadow = true;
// light1.shadow.mapSize.width = 1024;
// light1.shadow.mapSize.height = 1024;
// light1.shadow.camera.near = 0.5;
// light1.shadow.camera.far = 20;
// scene.add(light1);

// const light2 = new THREE.SpotLight();
// light2.position.set(-2.5, 5, 5);
// light2.angle = Math.PI / 4;
// light2.penumbra = 0.5;
// light2.castShadow = true;
// light2.shadow.mapSize.width = 1024;
// light2.shadow.mapSize.height = 1024;
// light2.shadow.camera.near = 0.5;
// light2.shadow.camera.far = 20;
// scene.add(light2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 2, 8);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.y = 0.5;

// const world = new CANNON.World();
// world.gravity.set(0, -9.82, 0);
// // world.broadphase = new CANNON.NaiveBroadphase()
// // ;(world.solver as CANNON.GSSolver).iterations = 10
// // world.allowSleep = true

// const normalMaterial = new THREE.MeshNormalMaterial();
// const phongMaterial = new THREE.MeshPhongMaterial();

// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// const cubeMesh = new THREE.Mesh(cubeGeometry, normalMaterial);
// cubeMesh.position.x = -3;
// cubeMesh.position.y = 3;
// cubeMesh.castShadow = true;
// scene.add(cubeMesh);
// const cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
// const cubeBody = new CANNON.Body({ mass: 1 });
// cubeBody.addShape(cubeShape);
// cubeBody.position.x = cubeMesh.position.x;
// cubeBody.position.y = cubeMesh.position.y;
// cubeBody.position.z = cubeMesh.position.z;
// world.addBody(cubeBody);

// const sphereGeometry = new THREE.SphereGeometry();
// const sphereMesh = new THREE.Mesh(sphereGeometry, normalMaterial);
// sphereMesh.position.x = -1;
// sphereMesh.position.y = 3;
// sphereMesh.castShadow = true;
// scene.add(sphereMesh);
// const sphereShape = new CANNON.Sphere(1);
// const sphereBody = new CANNON.Body({ mass: 1 });
// sphereBody.addShape(sphereShape);
// sphereBody.position.x = sphereMesh.position.x;
// sphereBody.position.y = sphereMesh.position.y;
// sphereBody.position.z = sphereMesh.position.z;
// world.addBody(sphereBody);

// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const icosahedronMesh = new THREE.Mesh(icosahedronGeometry, normalMaterial);
// icosahedronMesh.position.x = 1;
// icosahedronMesh.position.y = 3;
// icosahedronMesh.castShadow = true;
// scene.add(icosahedronMesh);
// let position = (
//   icosahedronMesh.geometry.attributes.position as THREE.BufferAttribute
// ).array;
// const icosahedronPoints: CANNON.Vec3[] = [];
// for (let i = 0; i < position.length; i += 3) {
//   icosahedronPoints.push(
//     new CANNON.Vec3(position[i], position[i + 1], position[i + 2])
//   );
// }
// const icosahedronFaces: number[][] = [];
// for (let i = 0; i < position.length / 3; i += 3) {
//   icosahedronFaces.push([i, i + 1, i + 2]);
// }
// const icosahedronShape = new CANNON.ConvexPolyhedron({
//   vertices: icosahedronPoints,
//   faces: icosahedronFaces,
// });
// const icosahedronBody = new CANNON.Body({ mass: 1 });
// icosahedronBody.addShape(icosahedronShape);
// icosahedronBody.position.x = icosahedronMesh.position.x;
// icosahedronBody.position.y = icosahedronMesh.position.y;
// icosahedronBody.position.z = icosahedronMesh.position.z;
// world.addBody(icosahedronBody);

// const torusKnotGeometry = new THREE.TorusKnotGeometry();
// const torusKnotMesh = new THREE.Mesh(torusKnotGeometry, normalMaterial);
// torusKnotMesh.position.x = 4;
// torusKnotMesh.position.y = 3;
// torusKnotMesh.castShadow = true;
// scene.add(torusKnotMesh);
// // position = (torusKnotMesh.geometry.attributes.position as THREE.BufferAttribute)
// //   .array;
// // const torusKnotPoints: CANNON.Vec3[] = [];
// // for (let i = 0; i < position.length; i += 3) {
// //   torusKnotPoints.push(
// //     new CANNON.Vec3(position[i], position[i + 1], position[i + 2])
// //   );
// // }
// // const torusKnotFaces: number[][] = [];
// // for (let i = 0; i < position.length / 3; i += 3) {
// //   torusKnotFaces.push([i, i + 1, i + 2]);
// // }
// // const torusKnotShape = new CANNON.ConvexPolyhedron({
// //   vertices: torusKnotPoints,
// //   faces: torusKnotFaces,
// // });
// const torusKnotShape = CreateTrimesh(torusKnotMesh.geometry);
// const torusKnotBody = new CANNON.Body({ mass: 1 });
// torusKnotBody.addShape(torusKnotShape);
// torusKnotBody.position.x = torusKnotMesh.position.x;
// torusKnotBody.position.y = torusKnotMesh.position.y;
// torusKnotBody.position.z = torusKnotMesh.position.z;
// world.addBody(torusKnotBody);

// function CreateTrimesh(geometry: THREE.BufferGeometry) {
//   const vertices = (geometry.attributes.position as THREE.BufferAttribute)
//     .array;
//   const indices = Object.keys(vertices).map(Number);
//   return new CANNON.Trimesh(vertices as [], indices);
// }

// const planeGeometry = new THREE.PlaneGeometry(25, 25);
// const planeMesh = new THREE.Mesh(planeGeometry, phongMaterial);
// planeMesh.rotateX(-Math.PI / 2);
// planeMesh.receiveShadow = true;
// scene.add(planeMesh);
// const planeShape = new CANNON.Plane();
// const planeBody = new CANNON.Body({ mass: 0 });
// planeBody.addShape(planeShape);
// planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
// world.addBody(planeBody);

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
// const physicsFolder = gui.addFolder('Physics');
// physicsFolder.add(world.gravity, 'x', -10.0, 10.0, 0.1);
// physicsFolder.add(world.gravity, 'y', -10.0, 10.0, 0.1);
// physicsFolder.add(world.gravity, 'z', -10.0, 10.0, 0.1);
// physicsFolder.open();

// const clock = new THREE.Clock();
// let delta;

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   // delta = clock.getDelta();
//   delta = Math.min(clock.getDelta(), 0.1);
//   world.step(delta);

//   // Copy coordinates from Cannon to Three.js
//   cubeMesh.position.set(
//     cubeBody.position.x,
//     cubeBody.position.y,
//     cubeBody.position.z
//   );
//   cubeMesh.quaternion.set(
//     cubeBody.quaternion.x,
//     cubeBody.quaternion.y,
//     cubeBody.quaternion.z,
//     cubeBody.quaternion.w
//   );
//   sphereMesh.position.set(
//     sphereBody.position.x,
//     sphereBody.position.y,
//     sphereBody.position.z
//   );
//   sphereMesh.quaternion.set(
//     sphereBody.quaternion.x,
//     sphereBody.quaternion.y,
//     sphereBody.quaternion.z,
//     sphereBody.quaternion.w
//   );
//   icosahedronMesh.position.set(
//     icosahedronBody.position.x,
//     icosahedronBody.position.y,
//     icosahedronBody.position.z
//   );
//   icosahedronMesh.quaternion.set(
//     icosahedronBody.quaternion.x,
//     icosahedronBody.quaternion.y,
//     icosahedronBody.quaternion.z,
//     icosahedronBody.quaternion.w
//   );
//   torusKnotMesh.position.set(
//     torusKnotBody.position.x,
//     torusKnotBody.position.y,
//     torusKnotBody.position.z
//   );
//   torusKnotMesh.quaternion.set(
//     torusKnotBody.quaternion.x,
//     torusKnotBody.quaternion.y,
//     torusKnotBody.quaternion.z,
//     torusKnotBody.quaternion.w
//   );

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// ----------------------------- //
// Cannon Debug Renderer Example //
// ----------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import * as CANNON from 'cannon-es';
// import CannonUtils from './utils/cannonUtils';
// import CannonDebugRenderer from './utils/cannonDebugRenderer';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// const light1 = new THREE.SpotLight();
// light1.position.set(2.5, 5, 5);
// light1.angle = Math.PI / 4;
// light1.penumbra = 0.5;
// light1.castShadow = true;
// light1.shadow.mapSize.width = 1024;
// light1.shadow.mapSize.height = 1024;
// light1.shadow.camera.near = 0.5;
// light1.shadow.camera.far = 20;
// scene.add(light1);

// const light2 = new THREE.SpotLight();
// light2.position.set(-2.5, 5, 5);
// light2.angle = Math.PI / 4;
// light2.penumbra = 0.5;
// light2.castShadow = true;
// light2.shadow.mapSize.width = 1024;
// light2.shadow.mapSize.height = 1024;
// light2.shadow.camera.near = 0.5;
// light2.shadow.camera.far = 20;
// scene.add(light2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 3, 10);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.y = 0.5;

// const world = new CANNON.World();
// world.gravity.set(0, -9.82, 0);
// // world.broadphase = new CANNON.NaiveBroadphase()
// // ;(world.solver as CANNON.GSSolver).iterations = 10
// // world.allowSleep = true

// const normalMaterial = new THREE.MeshNormalMaterial();
// const phongMaterial = new THREE.MeshPhongMaterial();

// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
// const cubeMesh = new THREE.Mesh(cubeGeometry, normalMaterial);
// cubeMesh.position.x = -4;
// cubeMesh.position.y = 3;
// cubeMesh.castShadow = true;
// scene.add(cubeMesh);
// const cubeShape = new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5));
// const cubeBody = new CANNON.Body({ mass: 1 });
// cubeBody.addShape(cubeShape);
// cubeBody.position.x = cubeMesh.position.x;
// cubeBody.position.y = cubeMesh.position.y;
// cubeBody.position.z = cubeMesh.position.z;
// world.addBody(cubeBody);

// const sphereGeometry = new THREE.SphereGeometry();
// const sphereMesh = new THREE.Mesh(sphereGeometry, normalMaterial);
// sphereMesh.position.x = -2;
// sphereMesh.position.y = 3;
// sphereMesh.castShadow = true;
// scene.add(sphereMesh);
// const sphereShape = new CANNON.Sphere(1);
// const sphereBody = new CANNON.Body({ mass: 1 });
// sphereBody.addShape(sphereShape);
// sphereBody.position.x = sphereMesh.position.x;
// sphereBody.position.y = sphereMesh.position.y;
// sphereBody.position.z = sphereMesh.position.z;
// world.addBody(sphereBody);

// const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 8);
// const cylinderMesh = new THREE.Mesh(cylinderGeometry, normalMaterial);
// cylinderMesh.position.x = 0;
// cylinderMesh.position.y = 3;
// cylinderMesh.castShadow = true;
// scene.add(cylinderMesh);
// const cylinderShape = new CANNON.Cylinder(1, 1, 2, 8);
// const cylinderBody = new CANNON.Body({ mass: 1 });
// cylinderBody.addShape(cylinderShape);
// cylinderBody.position.x = cylinderMesh.position.x;
// cylinderBody.position.y = cylinderMesh.position.y;
// cylinderBody.position.z = cylinderMesh.position.z;
// world.addBody(cylinderBody);

// const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
// const icosahedronMesh = new THREE.Mesh(icosahedronGeometry, normalMaterial);
// icosahedronMesh.position.x = 2;
// icosahedronMesh.position.y = 3;
// icosahedronMesh.castShadow = true;
// scene.add(icosahedronMesh);
// const icosahedronShape = CannonUtils.CreateConvexPolyhedron(
//   icosahedronMesh.geometry
// );
// const icosahedronBody = new CANNON.Body({ mass: 1 });
// icosahedronBody.addShape(icosahedronShape);
// icosahedronBody.position.x = icosahedronMesh.position.x;
// icosahedronBody.position.y = icosahedronMesh.position.y;
// icosahedronBody.position.z = icosahedronMesh.position.z;
// world.addBody(icosahedronBody);

// const torusKnotGeometry = new THREE.TorusKnotGeometry();
// const torusKnotMesh = new THREE.Mesh(torusKnotGeometry, normalMaterial);
// torusKnotMesh.position.x = 4;
// torusKnotMesh.position.y = 3;
// torusKnotMesh.castShadow = true;
// scene.add(torusKnotMesh);
// const torusKnotShape = CannonUtils.CreateTrimesh(torusKnotMesh.geometry);
// const torusKnotBody = new CANNON.Body({ mass: 1 });
// torusKnotBody.addShape(torusKnotShape);
// torusKnotBody.position.x = torusKnotMesh.position.x;
// torusKnotBody.position.y = torusKnotMesh.position.y;
// torusKnotBody.position.z = torusKnotMesh.position.z;
// world.addBody(torusKnotBody);

// let monkeyMesh: THREE.Object3D;
// let monkeyBody: CANNON.Body;
// let monkeyLoaded = false;
// const objLoader = new OBJLoader();
// objLoader.load(
//   'models/monkey.obj',
//   (object) => {
//     scene.add(object);
//     monkeyMesh = object.children[0];
//     (monkeyMesh as THREE.Mesh).material = normalMaterial;
//     monkeyMesh.position.x = -2;
//     monkeyMesh.position.y = 20;
//     const monkeyShape = CannonUtils.CreateTrimesh(
//       (monkeyMesh as THREE.Mesh).geometry
//     );
//     // const monkeyShape = CannonUtils.CreateConvexPolyhedron(
//     //     (monkeyMesh as THREE.Mesh).geometry
//     // )
//     monkeyBody = new CANNON.Body({ mass: 1 });
//     // monkeyBody.addShape(monkeyShape);
//     // monkeyBody.addShape(cubeShape);
//     // monkeyBody.addShape(sphereShape);
//     // monkeyBody.addShape(cylinderShape);
//     monkeyBody.addShape(icosahedronShape);
//     // monkeyBody.addShape(new CANNON.Plane())
//     // monkeyBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), Math.PI / 2)
//     monkeyBody.position.x = monkeyMesh.position.x;
//     monkeyBody.position.y = monkeyMesh.position.y;
//     monkeyBody.position.z = monkeyMesh.position.z;
//     world.addBody(monkeyBody);
//     monkeyLoaded = true;
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log('An error happened');
//   }
// );

// const planeGeometry = new THREE.PlaneGeometry(25, 25);
// const planeMesh = new THREE.Mesh(planeGeometry, phongMaterial);
// planeMesh.position.y = -0.01;
// planeMesh.rotateX(-Math.PI / 2);
// planeMesh.receiveShadow = true;
// scene.add(planeMesh);
// const planeShape = new CANNON.Plane();
// const planeBody = new CANNON.Body({ mass: 0 });
// planeBody.addShape(planeShape);
// planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
// world.addBody(planeBody);

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
// const physicsFolder = gui.addFolder('Physics');
// physicsFolder.add(world.gravity, 'x', -10.0, 10.0, 0.1);
// physicsFolder.add(world.gravity, 'y', -10.0, 10.0, 0.1);
// physicsFolder.add(world.gravity, 'z', -10.0, 10.0, 0.1);
// physicsFolder.open();

// const clock = new THREE.Clock();
// let delta;

// const cannonDebugRenderer = new CannonDebugRenderer(scene, world);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   delta = Math.min(clock.getDelta(), 0.1);
//   world.step(delta);

//   cannonDebugRenderer.update();

//   // Copy coordinates from Cannon to Three.js
//   cubeMesh.position.set(
//     cubeBody.position.x,
//     cubeBody.position.y,
//     cubeBody.position.z
//   );
//   cubeMesh.quaternion.set(
//     cubeBody.quaternion.x,
//     cubeBody.quaternion.y,
//     cubeBody.quaternion.z,
//     cubeBody.quaternion.w
//   );
//   sphereMesh.position.set(
//     sphereBody.position.x,
//     sphereBody.position.y,
//     sphereBody.position.z
//   );
//   sphereMesh.quaternion.set(
//     sphereBody.quaternion.x,
//     sphereBody.quaternion.y,
//     sphereBody.quaternion.z,
//     sphereBody.quaternion.w
//   );
//   cylinderMesh.position.set(
//     cylinderBody.position.x,
//     cylinderBody.position.y,
//     cylinderBody.position.z
//   );
//   cylinderMesh.quaternion.set(
//     cylinderBody.quaternion.x,
//     cylinderBody.quaternion.y,
//     cylinderBody.quaternion.z,
//     cylinderBody.quaternion.w
//   );
//   icosahedronMesh.position.set(
//     icosahedronBody.position.x,
//     icosahedronBody.position.y,
//     icosahedronBody.position.z
//   );
//   icosahedronMesh.quaternion.set(
//     icosahedronBody.quaternion.x,
//     icosahedronBody.quaternion.y,
//     icosahedronBody.quaternion.z,
//     icosahedronBody.quaternion.w
//   );
//   torusKnotMesh.position.set(
//     torusKnotBody.position.x,
//     torusKnotBody.position.y,
//     torusKnotBody.position.z
//   );
//   torusKnotMesh.quaternion.set(
//     torusKnotBody.quaternion.x,
//     torusKnotBody.quaternion.y,
//     torusKnotBody.quaternion.z,
//     torusKnotBody.quaternion.w
//   );
//   if (monkeyLoaded) {
//     monkeyMesh.position.set(
//       monkeyBody.position.x,
//       monkeyBody.position.y,
//       monkeyBody.position.z
//     );
//     monkeyMesh.quaternion.set(
//       monkeyBody.quaternion.x,
//       monkeyBody.quaternion.y,
//       monkeyBody.quaternion.z,
//       monkeyBody.quaternion.w
//     );
//   }

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }

// animate();

// -------------------------------------------------------- //
// Trimeshes, ConvexPolyhedrons and Compound Shapes Example //
// -------------------------------------------------------- //

// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';
// import { GUI } from 'dat.gui';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
// import * as CANNON from 'cannon-es';
// import CannonUtils from './utils/cannonUtils';
// import CannonDebugRenderer from './utils/cannonDebugRenderer';
// import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';

// const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

// var light1 = new THREE.SpotLight();
// light1.position.set(2.5, 5, 5);
// light1.angle = Math.PI / 4;
// light1.penumbra = 0.5;
// light1.castShadow = true;
// light1.shadow.mapSize.width = 1024;
// light1.shadow.mapSize.height = 1024;
// light1.shadow.camera.near = 0.5;
// light1.shadow.camera.far = 20;
// scene.add(light1);

// var light2 = new THREE.SpotLight();
// light2.position.set(-2.5, 5, 5);
// light2.angle = Math.PI / 4;
// light2.penumbra = 0.5;
// light2.castShadow = true;
// light2.shadow.mapSize.width = 1024;
// light2.shadow.mapSize.height = 1024;
// light2.shadow.camera.near = 0.5;
// light2.shadow.camera.far = 20;
// scene.add(light2);

// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// camera.position.set(0, 4, 8);

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.shadowMap.enabled = true;
// renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// document.body.appendChild(renderer.domElement);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.screenSpacePanning = true;
// controls.target.y = 2;

// const world = new CANNON.World();
// world.gravity.set(0, -9.82, 0);

// const normalMaterial = new THREE.MeshNormalMaterial();
// const phongMaterial = new THREE.MeshPhongMaterial();

// let monkeyMeshes: THREE.Object3D[] = [];
// let monkeyBodies: CANNON.Body[] = [];
// let monkeyLoaded = false;

// const objLoader = new OBJLoader();
// objLoader.load(
//   'models/monkey.obj',
//   (object) => {
//     const monkeyMesh = object.children[0] as THREE.Mesh;
//     monkeyMesh.material = normalMaterial;

//     // const positions = monkeyMesh.geometry.attributes.position.array
//     // const points: THREE.Vector3[] = []
//     // for (let i = 0; i < positions.length; i += 3) {
//     //     points.push(new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]))
//     // }
//     // const convexHull = new ConvexGeometry(points)

//     for (let i = 0; i < 200; i++) {
//       const monkeyMeshClone = monkeyMesh.clone();
//       monkeyMeshClone.position.x = Math.floor(Math.random() * 10) - 5;
//       monkeyMeshClone.position.z = Math.floor(Math.random() * 10) - 5;
//       monkeyMeshClone.position.y = 5 + i;
//       scene.add(monkeyMeshClone);
//       monkeyMeshes.push(monkeyMeshClone);

//       const monkeyShape = CannonUtils.CreateTrimesh(
//         (monkeyMesh as THREE.Mesh).geometry
//       );
//       // const monkeyShape = CannonUtils.CreateConvexPolyhedron(new THREE.IcosahedronGeometry(1))
//       // const monkeyShape = CannonUtils.CreateConvexPolyhedron((monkeyMesh as THREE.Mesh).geometry)
//       // const monkeyShape = CannonUtils.CreateConvexPolyhedron(convexHull)

//       const monkeyBody = new CANNON.Body({ mass: 1 });
//       // monkeyBody.addShape(monkeyShape);
//       // monkeyBody.addShape(new CANNON.Sphere(1))// head,
//       monkeyBody.addShape(new CANNON.Sphere(0.8), new CANNON.Vec3(0, 0.2, 0)); // head,
//       monkeyBody.addShape(
//         new CANNON.Sphere(0.05),
//         new CANNON.Vec3(0, -0.97, 0.46)
//       ); // chin,
//       monkeyBody.addShape(
//         new CANNON.Sphere(0.05),
//         new CANNON.Vec3(-1.36, 0.29, -0.5)
//       ); //left ear
//       monkeyBody.addShape(
//         new CANNON.Sphere(0.05),
//         new CANNON.Vec3(1.36, 0.29, -0.5)
//       ); //right ear
//       monkeyBody.position.x = monkeyMeshClone.position.x;
//       monkeyBody.position.y = monkeyMeshClone.position.y;
//       monkeyBody.position.z = monkeyMeshClone.position.z;
//       world.addBody(monkeyBody);
//       monkeyBodies.push(monkeyBody);
//     }

//     monkeyLoaded = true;
//   },
//   (xhr) => {
//     console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
//   },
//   (error) => {
//     console.log('An error happened');
//   }
// );

// const planeGeometry = new THREE.PlaneGeometry(25, 25);
// const planeMesh = new THREE.Mesh(planeGeometry, phongMaterial);
// planeMesh.rotateX(-Math.PI / 2);
// planeMesh.receiveShadow = true;
// scene.add(planeMesh);
// const planeShape = new CANNON.Plane();
// const planeBody = new CANNON.Body({ mass: 0 });
// planeBody.addShape(planeShape);
// planeBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
// world.addBody(planeBody);

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
// const physicsFolder = gui.addFolder('Physics');
// physicsFolder.add(world.gravity, 'x', -10.0, 10.0, 0.1);
// physicsFolder.add(world.gravity, 'y', -10.0, 10.0, 0.1);
// physicsFolder.add(world.gravity, 'z', -10.0, 10.0, 0.1);
// physicsFolder.open();

// const clock = new THREE.Clock();
// let delta;

// const cannonDebugRenderer = new CannonDebugRenderer(scene, world);

// function animate() {
//   requestAnimationFrame(animate);

//   controls.update();

//   delta = Math.min(clock.getDelta(), 0.1);
//   world.step(delta);

//   cannonDebugRenderer.update();

//   // Copy coordinates from Cannon to Three.js
//   if (monkeyLoaded) {
//     monkeyMeshes.forEach((m, i) => {
//       m.position.set(
//         monkeyBodies[i].position.x,
//         monkeyBodies[i].position.y,
//         monkeyBodies[i].position.z
//       );
//       m.quaternion.set(
//         monkeyBodies[i].quaternion.x,
//         monkeyBodies[i].quaternion.y,
//         monkeyBodies[i].quaternion.z,
//         monkeyBodies[i].quaternion.w
//       );
//     });
//   }

//   render();

//   stats.update();
// }

// function render() {
//   renderer.render(scene, camera);
// }
// animate();

// ---------------------------------------------------------- //
// Convert three.js Javascript examples to Typescript Example //
// ---------------------------------------------------------- //

// import * as THREE from 'three';

// import Stats from 'three/examples/jsm/libs/stats.module';

// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { Water } from 'three/examples/jsm/objects/Water';
// import { Sky } from 'three/examples/jsm/objects/Sky';

// THREE.ColorManagement.enabled = false; // TODO: Confirm correct color management.

// let container: HTMLDivElement, stats: Stats;
// let camera: THREE.PerspectiveCamera,
//   scene: THREE.Scene,
//   renderer: THREE.WebGLRenderer;
// let controls: OrbitControls, water: Water, sun: THREE.Vector3, mesh: THREE.Mesh;

// init();
// animate();

// function init() {
//   container = document.getElementById('container') as HTMLDivElement;

//   //

//   renderer = new THREE.WebGLRenderer();
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
//   renderer.toneMapping = THREE.ACESFilmicToneMapping;
//   container.appendChild(renderer.domElement);

//   //

//   scene = new THREE.Scene();

//   camera = new THREE.PerspectiveCamera(
//     55,
//     window.innerWidth / window.innerHeight,
//     1,
//     20000
//   );
//   camera.position.set(30, 30, 100);

//   //

//   sun = new THREE.Vector3();

//   // Water

//   const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

//   water = new Water(waterGeometry, {
//     textureWidth: 512,
//     textureHeight: 512,
//     waterNormals: new THREE.TextureLoader().load(
//       'textures/waternormals.jpg',
//       function (texture) {
//         texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
//       }
//     ),
//     sunDirection: new THREE.Vector3(),
//     sunColor: 0xffffff,
//     waterColor: 0x001e0f,
//     distortionScale: 3.7,
//     fog: scene.fog !== undefined,
//   });

//   water.rotation.x = -Math.PI / 2;

//   scene.add(water);

//   // Skybox

//   const sky = new Sky();
//   sky.scale.setScalar(10000);
//   scene.add(sky);

//   const skyUniforms = sky.material.uniforms;

//   skyUniforms['turbidity'].value = 10;
//   skyUniforms['rayleigh'].value = 2;
//   skyUniforms['mieCoefficient'].value = 0.005;
//   skyUniforms['mieDirectionalG'].value = 0.8;

//   const parameters = {
//     elevation: 2,
//     azimuth: 180,
//   };

//   const pmremGenerator = new THREE.PMREMGenerator(renderer);
//   let renderTarget: any;

//   function updateSun() {
//     const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
//     const theta = THREE.MathUtils.degToRad(parameters.azimuth);

//     sun.setFromSphericalCoords(1, phi, theta);

//     sky.material.uniforms['sunPosition'].value.copy(sun);
//     water.material.uniforms['sunDirection'].value.copy(sun).normalize();

//     if (renderTarget !== undefined) renderTarget.dispose();

//     renderTarget = pmremGenerator.fromScene(sky as any);

//     scene.environment = renderTarget.texture;
//   }

//   updateSun();

//   //

//   const geometry = new THREE.BoxGeometry(30, 30, 30);
//   const material = new THREE.MeshStandardMaterial({ roughness: 0 });

//   mesh = new THREE.Mesh(geometry, material);
//   scene.add(mesh);

//   //

//   controls = new OrbitControls(camera, renderer.domElement);
//   controls.maxPolarAngle = Math.PI * 0.495;
//   controls.target.set(0, 10, 0);
//   controls.minDistance = 40.0;
//   controls.maxDistance = 200.0;
//   controls.update();

//   //

//   stats = new Stats();
//   container.appendChild(stats.dom);

//   // GUI

//   const gui = new GUI();

//   const folderSky = gui.addFolder('Sky');
//   folderSky.add(parameters, 'elevation', 0, 90, 0.1).onChange(updateSun);
//   folderSky.add(parameters, 'azimuth', -180, 180, 0.1).onChange(updateSun);
//   folderSky.open();

//   const waterUniforms = water.material.uniforms;

//   const folderWater = gui.addFolder('Water');
//   folderWater
//     .add(waterUniforms.distortionScale, 'value', 0, 8, 0.1)
//     .name('distortionScale');
//   folderWater.add(waterUniforms.size, 'value', 0.1, 10, 0.1).name('size');
//   folderWater.open();

//   //

//   window.addEventListener('resize', onWindowResize);
// }

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate() {
//   requestAnimationFrame(animate);
//   render();
//   stats.update();
// }

// function render() {
//   const time = performance.now() * 0.001;

//   mesh.position.y = Math.sin(time) * 20 + 5;
//   mesh.rotation.x = time * 0.5;
//   mesh.rotation.z = time * 0.51;

//   water.material.uniforms['time'].value += 1.0 / 60.0;

//   renderer.render(scene, camera);
// }

// ------------------------------------------------------------------ //
// Convert Another three.js Javascript examples to Typescript Example //
// ------------------------------------------------------------------ //

// import * as THREE from 'three';

// import Stats from 'three/examples/jsm/libs/stats.module.js';
// import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// let scene: THREE.Scene,
//   renderer: THREE.WebGLRenderer,
//   camera: THREE.PerspectiveCamera,
//   stats: Stats;
// let model: any,
//   skeleton: THREE.SkeletonHelper,
//   mixer: THREE.AnimationMixer,
//   clock: THREE.Clock;

// const crossFadeControls: any = [];

// let idleAction: any, walkAction: any, runAction: any;
// let idleWeight: any, walkWeight: any, runWeight: any;
// let actions: any, settings: any;

// let singleStepMode = false;
// let sizeOfNextStep = 0;

// init();

// function init() {
//   const container = document.getElementById('container') as HTMLDivElement;

//   camera = new THREE.PerspectiveCamera(
//     45,
//     window.innerWidth / window.innerHeight,
//     1,
//     1000
//   );
//   camera.position.set(1, 2, -3);
//   camera.lookAt(0, 1, 0);

//   clock = new THREE.Clock();

//   scene = new THREE.Scene();
//   scene.background = new THREE.Color(0xa0a0a0);
//   scene.fog = new THREE.Fog(0xa0a0a0, 10, 50);

//   const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
//   hemiLight.position.set(0, 20, 0);
//   scene.add(hemiLight);

//   const dirLight = new THREE.DirectionalLight(0xffffff);
//   dirLight.position.set(-3, 10, -10);
//   dirLight.castShadow = true;
//   dirLight.shadow.camera.top = 2;
//   dirLight.shadow.camera.bottom = -2;
//   dirLight.shadow.camera.left = -2;
//   dirLight.shadow.camera.right = 2;
//   dirLight.shadow.camera.near = 0.1;
//   dirLight.shadow.camera.far = 40;
//   scene.add(dirLight);

//   // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

//   // ground

//   const mesh = new THREE.Mesh(
//     new THREE.PlaneGeometry(100, 100),
//     new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
//   );
//   mesh.rotation.x = -Math.PI / 2;
//   mesh.receiveShadow = true;
//   scene.add(mesh);

//   const loader = new GLTFLoader();
//   loader.load('models/Soldier.glb', function (gltf) {
//     model = gltf.scene;
//     scene.add(model);

//     model.traverse(function (object: any) {
//       if (object.isMesh) object.castShadow = true;
//     });

//     //

//     skeleton = new THREE.SkeletonHelper(model);
//     skeleton.visible = false;
//     scene.add(skeleton);

//     //

//     createPanel();

//     //

//     const animations = gltf.animations;

//     mixer = new THREE.AnimationMixer(model);

//     idleAction = mixer.clipAction(animations[0]);
//     walkAction = mixer.clipAction(animations[3]);
//     runAction = mixer.clipAction(animations[1]);

//     actions = [idleAction, walkAction, runAction];

//     activateAllActions();

//     animate();
//   });

//   renderer = new THREE.WebGLRenderer({ antialias: true });
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   renderer.shadowMap.enabled = true;
//   container.appendChild(renderer.domElement);

//   stats = new Stats();
//   container.appendChild(stats.dom);

//   window.addEventListener('resize', onWindowResize);
// }

// function createPanel() {
//   const panel = new GUI({ width: 310 });

//   const folder1 = panel.addFolder('Visibility');
//   const folder2 = panel.addFolder('Activation/Deactivation');
//   const folder3 = panel.addFolder('Pausing/Stepping');
//   const folder4 = panel.addFolder('Crossfading');
//   const folder5 = panel.addFolder('Blend Weights');
//   const folder6 = panel.addFolder('General Speed');

//   settings = {
//     'show model': true,
//     'show skeleton': false,
//     'deactivate all': deactivateAllActions,
//     'activate all': activateAllActions,
//     'pause/continue': pauseContinue,
//     'make single step': toSingleStepMode,
//     'modify step size': 0.05,
//     'from walk to idle': function () {
//       prepareCrossFade(walkAction, idleAction, 1.0);
//     },
//     'from idle to walk': function () {
//       prepareCrossFade(idleAction, walkAction, 0.5);
//     },
//     'from walk to run': function () {
//       prepareCrossFade(walkAction, runAction, 2.5);
//     },
//     'from run to walk': function () {
//       prepareCrossFade(runAction, walkAction, 5.0);
//     },
//     'use default duration': true,
//     'set custom duration': 3.5,
//     'modify idle weight': 0.0,
//     'modify walk weight': 1.0,
//     'modify run weight': 0.0,
//     'modify time scale': 1.0,
//   };

//   folder1.add(settings, 'show model').onChange(showModel);
//   folder1.add(settings, 'show skeleton').onChange(showSkeleton);
//   folder2.add(settings, 'deactivate all');
//   folder2.add(settings, 'activate all');
//   folder3.add(settings, 'pause/continue');
//   folder3.add(settings, 'make single step');
//   folder3.add(settings, 'modify step size', 0.01, 0.1, 0.001);
//   crossFadeControls.push(folder4.add(settings, 'from walk to idle'));
//   crossFadeControls.push(folder4.add(settings, 'from idle to walk'));
//   crossFadeControls.push(folder4.add(settings, 'from walk to run'));
//   crossFadeControls.push(folder4.add(settings, 'from run to walk'));
//   folder4.add(settings, 'use default duration');
//   folder4.add(settings, 'set custom duration', 0, 10, 0.01);
//   folder5
//     .add(settings, 'modify idle weight', 0.0, 1.0, 0.01)
//     .listen()
//     .onChange(function (weight: any) {
//       setWeight(idleAction, weight);
//     });
//   folder5
//     .add(settings, 'modify walk weight', 0.0, 1.0, 0.01)
//     .listen()
//     .onChange(function (weight: any) {
//       setWeight(walkAction, weight);
//     });
//   folder5
//     .add(settings, 'modify run weight', 0.0, 1.0, 0.01)
//     .listen()
//     .onChange(function (weight: any) {
//       setWeight(runAction, weight);
//     });
//   folder6
//     .add(settings, 'modify time scale', 0.0, 1.5, 0.01)
//     .onChange(modifyTimeScale);

//   folder1.open();
//   folder2.open();
//   folder3.open();
//   folder4.open();
//   folder5.open();
//   folder6.open();
// }

// function showModel(visibility: any) {
//   model.visible = visibility;
// }

// function showSkeleton(visibility: any) {
//   skeleton.visible = visibility;
// }

// function modifyTimeScale(speed: any) {
//   mixer.timeScale = speed;
// }

// function deactivateAllActions() {
//   actions.forEach(function (action: any) {
//     action.stop();
//   });
// }

// function activateAllActions() {
//   setWeight(idleAction, settings['modify idle weight']);
//   setWeight(walkAction, settings['modify walk weight']);
//   setWeight(runAction, settings['modify run weight']);

//   actions.forEach(function (action: any) {
//     action.play();
//   });
// }

// function pauseContinue() {
//   if (singleStepMode) {
//     singleStepMode = false;
//     unPauseAllActions();
//   } else {
//     if (idleAction.paused) {
//       unPauseAllActions();
//     } else {
//       pauseAllActions();
//     }
//   }
// }

// function pauseAllActions() {
//   actions.forEach(function (action: any) {
//     action.paused = true;
//   });
// }

// function unPauseAllActions() {
//   actions.forEach(function (action: any) {
//     action.paused = false;
//   });
// }

// function toSingleStepMode() {
//   unPauseAllActions();

//   singleStepMode = true;
//   sizeOfNextStep = settings['modify step size'];
// }

// function prepareCrossFade(
//   startAction: any,
//   endAction: any,
//   defaultDuration: any
// ) {
//   // Switch default / custom crossfade duration (according to the user's choice)

//   const duration = setCrossFadeDuration(defaultDuration);

//   // Make sure that we don't go on in singleStepMode, and that all actions are unpaused

//   singleStepMode = false;
//   unPauseAllActions();

//   // If the current action is 'idle' (duration 4 sec), execute the crossfade immediately;
//   // else wait until the current action has finished its current loop

//   if (startAction === idleAction) {
//     executeCrossFade(startAction, endAction, duration);
//   } else {
//     synchronizeCrossFade(startAction, endAction, duration);
//   }
// }

// function setCrossFadeDuration(defaultDuration: any) {
//   // Switch default crossfade duration <-> custom crossfade duration

//   if (settings['use default duration']) {
//     return defaultDuration;
//   } else {
//     return settings['set custom duration'];
//   }
// }

// function synchronizeCrossFade(startAction: any, endAction: any, duration: any) {
//   mixer.addEventListener('loop', onLoopFinished);

//   function onLoopFinished(event: any) {
//     if (event.action === startAction) {
//       mixer.removeEventListener('loop', onLoopFinished);

//       executeCrossFade(startAction, endAction, duration);
//     }
//   }
// }

// function executeCrossFade(startAction: any, endAction: any, duration: any) {
//   // Not only the start action, but also the end action must get a weight of 1 before fading
//   // (concerning the start action this is already guaranteed in this place)

//   setWeight(endAction, 1);
//   endAction.time = 0;

//   // Crossfade with warping - you can also try without warping by setting the third parameter to false

//   startAction.crossFadeTo(endAction, duration, true);
// }

// // This function is needed, since animationAction.crossFadeTo() disables its start action and sets
// // the start action's timeScale to ((start animation's duration) / (end animation's duration))

// function setWeight(action: any, weight: any) {
//   action.enabled = true;
//   action.setEffectiveTimeScale(1);
//   action.setEffectiveWeight(weight);
// }

// // Called by the render loop

// function updateWeightSliders() {
//   settings['modify idle weight'] = idleWeight;
//   settings['modify walk weight'] = walkWeight;
//   settings['modify run weight'] = runWeight;
// }

// // Called by the render loop

// function updateCrossFadeControls() {
//   if (idleWeight === 1 && walkWeight === 0 && runWeight === 0) {
//     crossFadeControls[0].disable();
//     crossFadeControls[1].enable();
//     crossFadeControls[2].disable();
//     crossFadeControls[3].disable();
//   }

//   if (idleWeight === 0 && walkWeight === 1 && runWeight === 0) {
//     crossFadeControls[0].enable();
//     crossFadeControls[1].disable();
//     crossFadeControls[2].enable();
//     crossFadeControls[3].disable();
//   }

//   if (idleWeight === 0 && walkWeight === 0 && runWeight === 1) {
//     crossFadeControls[0].disable();
//     crossFadeControls[1].disable();
//     crossFadeControls[2].disable();
//     crossFadeControls[3].enable();
//   }
// }

// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();

//   renderer.setSize(window.innerWidth, window.innerHeight);
// }

// function animate() {
//   // Render loop

//   requestAnimationFrame(animate);

//   idleWeight = idleAction.getEffectiveWeight();
//   walkWeight = walkAction.getEffectiveWeight();
//   runWeight = runAction.getEffectiveWeight();

//   // Update the panel values if weights are modified from "outside" (by crossfadings)

//   updateWeightSliders();

//   // Enable/disable crossfade controls according to current weight values

//   updateCrossFadeControls();

//   // Get the time elapsed since the last frame, used for mixer update (if not in single step mode)

//   let mixerUpdateDelta = clock.getDelta();

//   // If in single step mode, make one step and then do nothing (until the user clicks again)

//   if (singleStepMode) {
//     mixerUpdateDelta = sizeOfNextStep;
//     sizeOfNextStep = 0;
//   }

//   // Update the animation mixer, the stats panel, and render this frame

//   mixer.update(mixerUpdateDelta);

//   stats.update();

//   renderer.render(scene, camera);
// }

// ---------------------------- //
// Three.js SkinnedMesh Example //
// ---------------------------- //

// #Might Use
// DANE EXAMPLE
import * as THREE from 'three';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { PointLight } from 'three';
// import { Color } from 'three';

let gui: any,
  scene: any,
  camera: any,
  renderer: any,
  orbit,
  lights,
  mesh: any,
  controls,
  bones = [],
  cylinders = [],
  skeletonHelper;

const state = {
  animateBones: false,
};

function initScene() {
  gui = new GUI();

  scene = new THREE.Scene();
  //   scene.background = new Color(0x444444);

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(0, 20, 40);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  controls = new OrbitControls(camera, renderer.domElement);

  //   lights = [];
  //   lights[0] = new PointLight(0xffffff, 1, 0);
  //   lights[1] = new PointLight(0xffffff, 1, 0);
  //   lights[2] = new PointLight(0xffffff, 1, 0);

  //   lights[0].position.set(0, 200, 0);
  //   lights[1].position.set(100, 200, 100);
  //   lights[2].position.set(-100, -200, -100);

  //   scene.add(lights[0]);
  //   scene.add(lights[1]);
  //   scene.add(lights[2]);

  window.addEventListener(
    'resize',
    function () {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    },
    false
  );

  const skeleton = createBones();
  setupGUI(skeleton);
  createCylinders();

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 1, 0);
  scene.add(directionalLight);

  const skeletonHelper = new THREE.SkeletonHelper(bones[0]);
  skeletonHelper.visible = true;
  scene.add(skeletonHelper);
}

function createBones() {
  //   const segmentCount = 2;
  //   const segmentHeight = 8;

  //   const geometry = new THREE.CylinderGeometry(1, 1, 4, 8);
  //   const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });

  const rootBone = new THREE.Bone();
  //   scene.add(rootBone);
  bones.push(rootBone);

  const bodyBone = new THREE.Bone();
  bodyBone.position.set(0, 1, 0);
  rootBone.add(bodyBone);
  bones.push(bodyBone);

  const headBone = new THREE.Bone();
  headBone.position.set(0, 5.5, 0);
  bodyBone.add(headBone);
  bones.push(headBone);

  const leftShoulderBone = new THREE.Bone();
  const leftHandBone = new THREE.Bone();
  leftShoulderBone.position.set(6, 6, 0);
  leftHandBone.position.set(0, -6, 0);
  bodyBone.add(leftShoulderBone);
  leftShoulderBone.add(leftHandBone);
  bones.push(leftShoulderBone, leftHandBone);

  const rightShoulderBone = new THREE.Bone();
  const rightHandBone = new THREE.Bone();
  rightShoulderBone.position.set(-6, 6, 0);
  rightHandBone.position.set(0, -6, 0);
  bodyBone.add(rightShoulderBone);
  rightShoulderBone.add(rightHandBone);
  bones.push(rightShoulderBone, rightHandBone);

  const leftHipBone = new THREE.Bone();
  const leftFootBone = new THREE.Bone();
  leftHipBone.position.set(2, -6, 0);
  leftFootBone.position.set(0, -6, 0);
  bodyBone.add(leftHipBone);
  leftHipBone.add(leftFootBone);
  bones.push(leftHipBone, leftFootBone);

  const rightHipBone = new THREE.Bone();
  const rightFootBone = new THREE.Bone();
  rightHipBone.position.set(-2, -6, 0);
  rightFootBone.position.set(0, -6, 0);
  bodyBone.add(rightHipBone);
  rightHipBone.add(rightFootBone);
  bones.push(rightHipBone, rightFootBone);

  //   for (let i = 0; i < segmentCount; i++) {
  //     const bone = new THREE.Bone();
  //     bone.position.y = i * segmentHeight;
  //     bones.push(bone);

  //     if (i > 0) {
  //       bones[i - 1].add(bone);
  //     }

  //     const cylinder = new THREE.Mesh(geometry, material);
  //     cylinder.position.y = segmentHeight / 2;
  //     bone.add(cylinder);
  //   }

  const skeleton = new THREE.Skeleton(bones);
  scene.add(rootBone);
  return skeleton;
}

function createCylinders() {
  const cylinderMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });

  const createCylinderMesh = (bone, cylinderHeight, cylinderWidth) => {
    const geometry = new THREE.CylinderGeometry(
      cylinderWidth,
      cylinderWidth,
      cylinderHeight,
      8
    );
    const cylinder = new THREE.Mesh(geometry, cylinderMaterial);
    cylinder.position.y = cylinderHeight / 2;
    cylinders.push(cylinder);
    bone.add(cylinder);
  };

  // Create cylinders for the new bones
  const bodyBone = bones[1];
  createCylinderMesh(bodyBone, 3, 0.5); // Adjust the cylinder height here

  const headBone = bones[2];
  createCylinderMesh(headBone, 3, 1.5);

  const leftShoulderBone = bones[3];
  const leftHandBone = bones[4];
  createCylinderMesh(leftShoulderBone, -4, 0.5);
  createCylinderMesh(leftHandBone, -0.5, 0.5);

  const rightShoulderBone = bones[5];
  const rightHandBone = bones[6];
  createCylinderMesh(rightShoulderBone, -4, 0.5);
  createCylinderMesh(rightHandBone, -0.5, 0.5);

  const leftHipBone = bones[7];
  const leftFootBone = bones[8];
  createCylinderMesh(leftHipBone, -4, 0.5); // Adjust the cylinder height here
  createCylinderMesh(leftFootBone, -0.5, 0.5);

  const rightHipBone = bones[9];
  const rightFootBone = bones[10];
  createCylinderMesh(rightHipBone, -4, 0.5); // Adjust the cylinder height here
  createCylinderMesh(rightFootBone, -0.5, 0.5);
}

function setupGUI(skeleton) {
  const folder = gui.addFolder('General Options');
  folder.add(state, 'animateBones').name('Animate Bones');
  //   folder.add(mesh, 'pose').name('.pose()');

  //   const bones = mesh.skeleton.bones;

  for (let i = 0; i < bones.length; i++) {
    const bone = bones[i];
    const boneFolder = gui.addFolder('Bone ' + i);

    boneFolder
      .add(bone.position, 'x', -10 + bone.position.x, 10 + bone.position.x)
      .name('position.x');
    boneFolder
      .add(bone.position, 'y', -10 + bone.position.y, 10 + bone.position.y)
      .name('position.y');
    boneFolder
      .add(bone.position, 'z', -10 + bone.position.z, 10 + bone.position.z)
      .name('position.z');

    boneFolder
      .add(bone.rotation, 'x', -Math.PI * 2, Math.PI * 2)
      .name('rotation.x');
    boneFolder
      .add(bone.rotation, 'y', -Math.PI * 2, Math.PI * 2)
      .name('rotation.y');
    boneFolder
      .add(bone.rotation, 'z', -Math.PI * 2, Math.PI * 2)
      .name('rotation.z');

    boneFolder.add(bone.scale, 'x', 0, 2).name('scale.x');
    boneFolder.add(bone.scale, 'y', 0, 2).name('scale.y');
    boneFolder.add(bone.scale, 'z', 0, 2).name('scale.z');
  }
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

initScene();
// setupGUI();
animate();
