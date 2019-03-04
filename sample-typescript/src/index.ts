
import * as BABYLON from 'babylonjs';
import { EditControl } from 'babylonjs-editcontrol';

window.onload = function () {
    main();
}

let main = function() {

    let canvas:HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("renderCanvas");
    let engine = new BABYLON.Engine(canvas, true);
    let scene = addScene(engine);
    let camera = addCamera(scene,canvas);
    let grid = addGrid(scene);
    let box = addBox(scene);
    let editControl = addEditControl(box, camera, canvas)

    setButtons(editControl);

    engine.runRenderLoop(function () {
        scene.render();
    });

    window.addEventListener("resize", function () {
        engine.resize();
    });
}


let addScene = function (engine) {
    let scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0.75, 0.75, 0.75,1);
    let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = .5;
    return scene;
};

let addCamera = function (scene,canvas) {
    let camera = new BABYLON.ArcRotateCamera("ArcRotateCamera", Math.PI / 4, Math.PI / 4,
        20, new BABYLON.Vector3(0, 0, 0), scene);
    camera.wheelPrecision = 15;
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);
    return camera;
}

let addGrid = function (scene) {
    let ground = BABYLON.Mesh.CreateGround("ground1", 20, 20, 10, scene);
    let gridMaterial = new BABYLON.StandardMaterial("Grid Material", scene);
    gridMaterial.wireframe = true;
    ground.material = gridMaterial;
}

let addBox = function (scene) {
    let mat = new BABYLON.StandardMaterial("mat", scene);
    mat.diffuseColor = new BABYLON.Color3(1, 0, 0);

    let box = BABYLON.MeshBuilder.CreateBox("", { height: 5, width: 3, depth: 2 });
    box.material = mat;

    box.position = new BABYLON.Vector3(0, 1, 0);

    return box;
}

let addEditControl = function (mesh, camera, canvas) {

    //if we are planning on doing rotation in quaternion then make sure the rotationQuaternion is atleast initialized
    //else edit control will throw following exception
    //"Eulerian is set to false but the mesh's rotationQuaternion is not set."
    mesh.rotationQuaternion = BABYLON.Quaternion.Identity();

    
    //create edit control (mesh to attach to,camera, canvas, scale of editcontrol, if doing rotation in euler)
    let ec:EditControl = new EditControl(mesh, camera, canvas, 0.75, false, 0.02);
    
    //show translation controls
    ec.enableTranslation();

    return ec;
}

let setButtons = function (editControl) {
    let transButton = document.getElementById("trans");
    let rotButton = document.getElementById("rotate");
    let scaleButton = document.getElementById("scale");

    transButton.onclick = function () {
        editControl.enableTranslation();
    };
    rotButton.onclick = function () {
        editControl.enableRotation();
    };
    scaleButton.onclick = function () {
        editControl.enableScaling()
    };

}





