<script lang="ts">
    import { browser } from "$app/environment";
    import { onMount } from "svelte";

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
        interval = setInterval(rotateColors, 200); // Rotate every second
        return () => clearInterval(interval); // Cleanup on component destroy
    });

    function spawnImage() {
        const imgs = ["/elmo.png", "/elmo3.webp"];
        let index = 0;
        const img = document.createElement("img");
        img.src = "/elmo.png";
        img.style.position = "absolute";
        img.style.width = "100px";
        document.body.appendChild(img);
        window.addEventListener("mousemove", (e) => {
            img.style.left = e.clientX + "px";
            img.style.top = e.clientY + "px";
        });
        window.addEventListener("click", () => {
            img.style.width = "200px";
            index = (index + 1) % imgs.length;
            img.src = imgs[index];
        });
    }
    if (browser) spawnImage();
</script>

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

    .rainbow-text {
        font-family: "Comic Neue", sans-serif;
        font-size: 3rem;
        display: inline-block;

        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: fit-content;
    }

    .rainbow-letter {
        display: inline-block;
        transition: color 0.5s ease; /* Smooth transition for the color change */
    }
</style>
