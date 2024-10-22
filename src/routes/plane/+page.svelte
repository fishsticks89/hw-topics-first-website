<script>
    import * as THREE from 'three';
    let scene,
        camera,
        renderer,
        plane,
        obstacles = [],
        score = 0;
    const scoreElement = document.getElementById("score");

    function init() {
        // Create scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87ceeb); // Sky blue

        // Create camera
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        camera.position.z = 5;
        camera.position.y = 2;

        // Create renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // Create plane
        const geometry = new THREE.ConeGeometry(0.5, 2, 4);
        const material = new THREE.MeshPhongMaterial({ color: 0xff0000 });
        plane = new THREE.Mesh(geometry, material);
        plane.rotation.z = -Math.PI / 2;
        scene.add(plane);

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(0, 10, 5);
        scene.add(directionalLight);

        // Create ground
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x228b22 });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -2;
        scene.add(ground);

        // Create initial obstacles
        createObstacles();

        // Handle window resize
        window.addEventListener("resize", onWindowResize, false);
    }

    function createObstacles() {
        // Create collectible cubes
        for (let i = 0; i < 5; i++) {
            const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
            const material = new THREE.MeshPhongMaterial({ color: 0xffff00 });
            const cube = new THREE.Mesh(geometry, material);
            cube.position.x = Math.random() * 10 - 5;
            cube.position.y = Math.random() * 4 - 2;
            cube.position.z = Math.random() * 10 - 15;
            obstacles.push(cube);
            scene.add(cube);
        }
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    const keys = {};
    document.addEventListener("keydown", (e) => (keys[e.key] = true));
    document.addEventListener("keyup", (e) => (keys[e.key] = false));

    function updatePlane() {
        // Plane controls
        const moveSpeed = 0.1;
        const rotateSpeed = 0.05;

        if (keys["ArrowUp"] || keys["w"]) plane.position.z -= moveSpeed;
        if (keys["ArrowDown"] || keys["s"]) plane.position.z += moveSpeed;
        if (keys["ArrowLeft"] || keys["a"]) {
            plane.position.x -= moveSpeed;
            plane.rotation.y = Math.min(plane.rotation.y + rotateSpeed, 0.5);
        }
        if (keys["ArrowRight"] || keys["d"]) {
            plane.position.x += moveSpeed;
            plane.rotation.y = Math.max(plane.rotation.y - rotateSpeed, -0.5);
        }

        // Reset rotation when not turning
        if (
            !keys["ArrowLeft"] &&
            !keys["ArrowRight"] &&
            !keys["a"] &&
            !keys["d"]
        ) {
            plane.rotation.y *= 0.95;
        }

        // Keep plane within bounds
        plane.position.x = Math.max(Math.min(plane.position.x, 10), -10);
        plane.position.z = Math.max(Math.min(plane.position.z, 10), -20);
    }

    function checkCollisions() {
        const planeBox = new THREE.Box3().setFromObject(plane);

        for (let i = obstacles.length - 1; i >= 0; i--) {
            const obstacleBox = new THREE.Box3().setFromObject(obstacles[i]);

            if (planeBox.intersectsBox(obstacleBox)) {
                // Remove collected cube
                scene.remove(obstacles[i]);
                obstacles.splice(i, 1);
                score += 10;
                scoreElement.textContent = `Score: ${score}`;

                // Create new cube
                const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
                const material = new THREE.MeshPhongMaterial({
                    color: 0xffff00,
                });
                const cube = new THREE.Mesh(geometry, material);
                cube.position.x = Math.random() * 10 - 5;
                cube.position.y = Math.random() * 4 - 2;
                cube.position.z = -20;
                obstacles.push(cube);
                scene.add(cube);
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);

        updatePlane();
        checkCollisions();

        // Move camera to follow plane
        camera.position.x = plane.position.x;
        camera.position.z = plane.position.z + 5;
        camera.lookAt(plane.position);

        renderer.render(scene, camera);
    }

    init();
    animate();
</script>

<svelte:head>
    <title>Simple Plane Game</title>
    <style>
        body {
            margin: 0;
        }
        canvas {
            display: block;
        }
        #score {
            position: fixed;
            top: 20px;
            left: 20px;
            color: white;
            font-family: Arial;
            font-size: 24px;
            z-index: 100;
        }
        #instructions {
            position: fixed;
            bottom: 20px;
            left: 20px;
            color: white;
            font-family: Arial;
            font-size: 16px;
            z-index: 100;
        }
    </style>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
    ></script>
</svelte:head>
<div id="score">Score: 0</div>
<div id="instructions">
    Use arrow keys or WASD to control the plane. Collect yellow cubes to score
    points!
</div>
