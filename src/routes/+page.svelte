<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    import HomePage from "./Michael Barrr Homepage.svg";
    import { db } from "$lib/firebase";
    import { doc, onSnapshot, setDoc } from "firebase/firestore";

    // Array of rainbow colors
    let colors = [
        "#FF0000",
        "#FF7F00",
        "#FFFF00",
        "#00FF00",
        "#0000FF",
        "#4B0082",
        "#8B00FF",
    ];
    let text = "Michael Barr".split(""); // Split text into individual characters
    let interval: number; // Store the interval to rotate colors
    let colorIndices = text.map((_, index) => index % colors.length); // Initial color indices for each letter

    // Function to rotate colors
    const rotateColors = () => {
        colorIndices = colorIndices.map((index) => (index + 1) % colors.length);
    };

    onMount(() => {
        interval = setInterval(rotateColors, 200) as any; // Rotate every second
        return () => clearInterval(interval); // Cleanup on component destroy
    });

    function spawnImage() {
        const imgs = ["/elmo.png", "/elmo3.webp"];
        let index = 0;
        // read index from cookie
        const cookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("index="));
        if (cookie) index = parseInt(cookie.split("=")[1]);
        console.log("cookie", cookie, index);
        const img = document.createElement("img");
        img.src = imgs[index];
        img.style.position = "absolute";
        img.style.width = "100px";
        document.body.appendChild(img);
        img.style.left = 20 + "px";
        img.style.bottom = 20 + "px";

        window.addEventListener("click", () => {
            if (index === 0) incrementBounces();
            img.style.width = "200px";
            index = (index + 1) % imgs.length;
            img.src = imgs[index];
            document.cookie = `index=${index}; path=/; max-age=31536000`;
        });
    }
    if (browser) spawnImage();

    const bouncesDoc = doc(db, "bounces", "bounces");
    let bounces = 0;
    onMount(async () => {
        onSnapshot(bouncesDoc, (doc) => {
            if (doc && doc.exists()) bounces = doc.data().bounces;
        });
    });
    function incrementBounces() {
        bounces++;
        setDoc(bouncesDoc, { bounces });
    }
    if (browser)
        try {
            const parsedUrl = new URL(window.location.href);
            console.log(parsedUrl.hostname);
            if (
                parsedUrl.hostname !== "topics.michaelbarr.dev" &&
                parsedUrl.hostname !== "localhost"
            ) {
                parsedUrl.hostname = "topics.michaelbarr.dev";
                setTimeout(() => {
                    window.location.href = parsedUrl.href;
                }, 5000);
            }
        } catch (error) {
            console.error("Invalid URL:", error);
        }
</script>

<svelte:head>
    <title>Michael Barr</title>
    <script src="/addedscript.js"></script>
</svelte:head>

<div class="bottomleft">bounces: {bounces}</div>
<div id="inverter"></div>
<img class="bkg" src={HomePage} alt="" srcset="" />
<div class="rainbow-text">
    <b>
        {#each text as letter, i}
            <span
                class="rainbow-letter"
                style="color: {colors[colorIndices[i]]};"
            >
                {letter}
            </span>
        {/each}
    </b>
</div>
<a href="/bit">part 1</a>

<style>
    /* Load Comic Sans from Google Fonts */
    @import url("https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400&display=swap");

    .bottomleft {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 1000;
        background-color: #f1f1f1;
        color: black;
        padding: 10px;
    }

    #inverter {
        position: fixed;
        width: 80px;
        height: 80px;
        pointer-events: none;
        mix-blend-mode: difference;
        background: white;
        transform: translate(-50%, -50%) rotate(-7deg);
        z-index: 1000;
    }

    .bkg {
        position: fixed;
        top: 50vh;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
        z-index: -1;
    }

    .rainbow-text {
        font-family: "Comic Neue", sans-serif;
        font-size: 3rem;
        display: inline-block;

        position: fixed;
        right: 20px;
        bottom: 20px;
        width: fit-content;
    }

    .rainbow-letter {
        display: inline-block;
        transition: color 0.5s ease; /* Smooth transition for the color change */
    }
</style>
