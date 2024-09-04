import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const createScene = () => {
  return new THREE.Scene();
};
export const createPerspectiveCamera = () => {
    const camera = new THREE.PerspectiveCamera()
    return camera
}

// 受键盘鼠标控制的相机
export const createOrthographicCamera = () => {
    const camera = new THREE.OrthographicCamera()
    return camera

    // 如何控制
    // import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

    // const controls = new OrbitControls( camera, renderer.domElement );
    // controls.addEventListener('change', render);//监听鼠标、键盘事件
}


export const createRenderer = (width?: number, height?: number) => {
    width  = width ?? window.innerWidth
    height  = height ?? window.innerHeight

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height); //设置渲染区域尺寸
    // renderer.setClearColor(0xb9d3ff, 1); //设置背景颜色
    document.body.appendChild(renderer.domElement); //body元素中插入canvas对象
    return renderer;
  };


  /**
   * 预设的集合体还挺多的
export * from "./BoxGeometry.js";
export * from "./CapsuleGeometry.js";
export * from "./CircleGeometry.js";
export * from "./ConeGeometry.js";
export * from "./CylinderGeometry.js";
export * from "./DodecahedronGeometry.js";
export * from "./EdgesGeometry.js";
export * from "./ExtrudeGeometry.js";
export * from "./IcosahedronGeometry.js";
export * from "./LatheGeometry.js";
export * from "./OctahedronGeometry.js";
export * from "./PlaneGeometry.js";
export * from "./PolyhedronGeometry.js";
export * from "./RingGeometry.js";
export * from "./ShapeGeometry.js";
export * from "./SphereGeometry.js";
export * from "./TetrahedronGeometry.js";
export * from "./TorusGeometry.js";
export * from "./TorusKnotGeometry.js";
export * from "./TubeGeometry.js";
export * from "./WireframeGeometry.js";
   */

/**
 * 预设的材质也挺多的
export * from "./LineBasicMaterial.js";
export * from "./LineDashedMaterial.js";
export * from "./Material.js";
export * from "./MeshBasicMaterial.js";
export * from "./MeshDepthMaterial.js";
export * from "./MeshDistanceMaterial.js";
export * from "./MeshLambertMaterial.js";
export * from "./MeshMatcapMaterial.js";
export * from "./MeshNormalMaterial.js";
export * from "./MeshPhongMaterial.js";
export * from "./MeshPhysicalMaterial.js";
export * from "./MeshStandardMaterial.js";
export * from "./MeshToonMaterial.js";
export * from "./PointsMaterial.js";
export * from "./RawShaderMaterial.js";
export * from "./ShaderMaterial.js";
export * from "./ShadowMaterial.js";
export * from "./SpriteMaterial.js";
 */