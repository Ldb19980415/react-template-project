import {
  createOrthographicCamera,
  createRenderer,
  createScene,
} from "@/utils/threesUtil";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { div } from "three/webgpu";
const PageA = () => {
  // var width = window.innerWidth; //窗口宽度
  // var height = window.innerHeight; //窗口高度
  // const createScene = () => {
  //   return new THREE.Scene();
  // };
  // const createMesh = () => {
  //   var geometry = new THREE.BoxGeometry(100, 100, 100); // 创建一个立方体几何对象
  //   var material = new THREE.MeshLambertMaterial({
  //     color: 0x0000ff,
  //   }); //材质对象Material

  //   var mesh = new THREE.Mesh(geometry, material);
  //   return mesh;
  // };

  // const createPointLight = () => {
  //   var point = new THREE.PointLight(0xffffff);
  //   point.position.set(400, 200, 300); //点光源位置
  //   return point;
  // };

  // const createAmbient = () => {
  //   var ambient = new THREE.AmbientLight(0x444444);
  //   return ambient;
  // };

  // const createCamera = () => {
  //   var k = width / height; //窗口宽高比
  //   var s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
  //   //创建相机对象
  //   var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
  //   camera.position.set(200, 300, 200); //设置相机位置

  //   return camera;
  // };

  // const createRenderer = () => {
  //   var renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(width, height); //设置渲染区域尺寸
  //   renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
  //   document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
  //   return renderer;
  // };

  // useEffect(() => {
  //   // 创建场景
  //   const scene = createScene();
  //   // 创建网络模型
  //   const mesh = createMesh();
  //   // 把网络模型加入到场景中
  //   scene.add(mesh);
  //   // 创建点光源
  //   const pointLight = createPointLight();
  //   // 把点光源加入到场景中
  //   scene.add(pointLight);
  //   // 创建环境光
  //   const ambient = createAmbient();
  //   // 将环境光加入到场景中
  //   scene.add(ambient);

  //   // 创建相机
  //   const camera = createCamera();
  //   // const camera = createOrthographicCamera();

  //   // 把相机对准场景
  //   camera.lookAt(scene.position);

  //   // 创建渲染器
  //   const renderer = createRenderer();

  //   // 开启渲染
  //   // renderer.render(scene, camera);

  //   const render = () => {
  //       renderer.render(scene, camera); //执行渲染操作
  //       // mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
  //       requestAnimationFrame(render); //请求再次执行渲染函数render
  //     };
  //     render();
  //     // const controls = new OrbitControls( camera, renderer.domElement );
  // }, []);

  useEffect(() => {
    const scene = createScene();
    const renderer = createRenderer();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);

    scene.add(line);
    renderer.render(scene, camera);
  }, []);

  return <div></div>;
};
export default PageA;
