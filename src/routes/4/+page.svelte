<script>
	export let characterName = "Elendil";
	export let lesson = "Basic Greetings";
	export let phrase = "Mae govannen";

	let selectedOption = null;

	const options = [
		{ id: 1, text: "My heart sings", icon: "❤️" },
		{ id: 2, text: "Well met", icon: "✨" }, // Correct
		{ id: 3, text: "Good morning", icon: "☀️" },
		{ id: 4, text: "Safe travels", icon: "🛡️" }
	];

	function select(id) {
		selectedOption = id;
	}
</script>

<div class="cartoon-viewport">

	<!-- Wooden Table Background -->
	<div class="wooden-table">

		<!-- The Open Book -->
		<div class="open-book">

			<!-- Decorative Bookmarks stuck out -->
			<div class="bookmark top-purple"></div>
			<div class="bookmark right-pink">
				<span class="close-x">×</span>
			</div>
			<div class="bookmark bottom-blue"></div>

			<!-- LEFT PAGE: Character & Stats -->
			<div class="page left-page">
				<!-- Taped Photo Frame -->
				<div class="photo-container">
					<div class="tape top-tape"></div>
					<div class="tape bottom-tape"></div>

					<div class="polaroid-frame">
						<div class="name-tag">{characterName}</div>
						<div class="character-portrait">
							<!-- Simple Avatar Placeholder using CSS shapes -->
							<div class="avatar-head"></div>
							<div class="avatar-body"></div>
							<div class="sparkle">✦</div>
						</div>
					</div>
				</div>

				<!-- Stats Row -->
				<div class="stats-row">
					<div class="stat-card">
						<div class="stat-icon">🛡️</div>
						<div class="stat-val">19</div>
						<div class="corner-fold"></div>
					</div>
					<div class="stat-card">
						<div class="stat-icon">⚡</div>
						<div class="stat-val">10</div>
						<div class="corner-fold red"></div>
					</div>
					<div class="stat-card">
						<div class="stat-icon">💎</div>
						<div class="stat-val">x2</div>
						<div class="corner-fold blue"></div>
					</div>
				</div>

				<button class="action-btn orange-btn">
					Translate
				</button>
			</div>

			<!-- RIGHT PAGE: Interaction Grid -->
			<div class="page right-page">

				<h2 class="page-title">Options</h2>

				<!-- The Grid (Replacing Inventory) -->
				<div class="options-grid">
					{#each options as opt}
						<div
							class="grid-item"
							class:selected={selectedOption === opt.id}
							on:click={() => select(opt.id)}
						>
							<div class="item-icon">{opt.icon}</div>
							<!-- If selected, show checkmark like the 'Flight Potion' highlight in ref -->
							{#if selectedOption === opt.id}
								<div class="sparkles-decor">✨</div>
							{/if}
						</div>
					{/each}

					<!-- Empty Slots to match the 3x3 look of the reference -->
					<div class="grid-item empty"></div>
					<div class="grid-item empty"></div>
				</div>

				<!-- Sticky Note (Question/Context) -->
				<div class="sticky-note">
					<div class="tape center-tape"></div>
					<div class="note-title">{phrase}</div>
					<div class="note-body">
						This phrase is commonly used by Elves to greet friends.
						{#if selectedOption}
							<br><strong>Selected: {options.find(o => o.id === selectedOption).text}</strong>
						{/if}
					</div>
				</div>

			</div>

			<!-- Navigation Ears -->
			<button class="nav-ear left">←</button>
			<button class="nav-ear right">→</button>

		</div>
	</div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Patrick+Hand&display=swap');

    /* --- VARIABLES based on the image --- */
    :root {
        --bg-wood: #8d5e41; /* Darker wood tone */
        --page-color: #fcebd5; /* Warm cream/flesh tone */
        --accent-orange: #ff9f43;
        --accent-pink: #ff6b81;
        --accent-blue: #54a0ff;
        --accent-purple: #a55eea;
        --text-brown: #5d4037;
        --tape-color: rgba(255, 255, 255, 0.4);
        --border-dark: #8c6e5d; /* For outlines */
    }

    .cartoon-viewport {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        font-family: 'Fredoka One', cursive;
        background-color: #2c2c54; /* Fallback */
        margin: 0;
    }

    /* --- WOODEN TABLE BACKGROUND --- */
    .wooden-table {
        position: relative;
        width: 100%;
        min-height: 100vh;
        background-color: var(--bg-wood);
        /* Simulated wood planks via repeating gradient */
        background-image: repeating-linear-gradient(
                0deg,
                #7a4e32 0px,
                #7a4e32 90px,
                #6b422a 92px,
                #6b422a 100px
        );
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: inset 0 0 100px rgba(0,0,0,0.5);
    }

    /* --- THE BOOK CONTAINER --- */
    .open-book {
        position: relative;
        display: flex;
        width: 900px;
        height: 550px;
        background-color: #e6cba5; /* Cover edge color */
        border-radius: 12px;
        box-shadow:
                0 20px 40px rgba(0,0,0,0.4),
                0 5px 0 #5c3a21; /* Bottom thickness */
        padding: 10px; /* Cover poking out */
    }

    /* --- PAGES --- */
    .page {
        flex: 1;
        background-color: var(--page-color);
        position: relative;
        border: 2px solid #e0c3a1;
        box-shadow: inset 0 0 30px rgba(139, 69, 19, 0.1);
    }

    .left-page {
        border-radius: 8px 0 0 8px;
        border-right: 1px solid #dcc09e;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .right-page {
        border-radius: 0 8px 8px 0;
        border-left: 1px solid #dcc09e;
        padding: 30px;
        display: flex;
        flex-direction: column;
    }

    /* Spine shadow */
    .open-book::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 2%;
        bottom: 2%;
        width: 40px;
        background: linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent);
        transform: translateX(-50%);
        pointer-events: none;
        z-index: 10;
    }

    /* --- DECORATIVE BOOKMARKS --- */
    .bookmark {
        position: absolute;
        z-index: -1;
        width: 40px;
        height: 50px;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    }

    .top-purple {
        top: -15px;
        left: 45%;
        background-color: var(--accent-purple);
        /* Swallowtail shape */
        clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 80%, 0 100%);
    }

    .bottom-blue {
        bottom: -15px;
        left: 20px;
        width: 30px;
        height: 40px;
        background-color: var(--accent-blue);
        transform: rotate(-5deg);
    }

    /* The Close Button Bookmark */
    .right-pink {
        top: 40px;
        right: -25px;
        width: 60px;
        height: 50px;
        background-color: var(--accent-pink);
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 20; /* On top */
        cursor: pointer;
        box-shadow: -2px 2px 5px rgba(0,0,0,0.2);
        transform: rotate(2deg);
    }

    /* Tape effect on bookmark */
    .right-pink::after {
        content: '';
        position: absolute;
        left: -5px;
        top: 15px;
        width: 15px;
        height: 25px;
        background-color: rgba(255,255,255,0.5);
        transform: rotate(-10deg);
    }

    .close-x {
        color: white;
        font-size: 32px;
        font-weight: bold;
        line-height: 1;
        margin-left: 10px;
    }

    /* --- PHOTO AREA (LEFT PAGE) --- */
    .photo-container {
        position: relative;
        width: 260px;
        height: 260px;
        background-color: white;
        padding: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        transform: rotate(-2deg);
        margin-bottom: 20px;
    }

    .polaroid-frame {
        width: 100%;
        height: 100%;
        background-color: #a2d1ff; /* Sky blue background like in ref */
        border: 4px solid white;
        position: relative;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* Starburst pattern background */
        background-image: repeating-conic-gradient(#a2d1ff 0 15deg, #bde0ff 15deg 30deg);
    }

    .name-tag {
        position: absolute;
        top: -5px;
        right: 10px;
        background-color: #f7f1e3;
        padding: 4px 10px;
        font-size: 14px;
        color: var(--text-brown);
        transform: rotate(3deg);
        box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        z-index: 5;
    }

    /* TAPE CSS */
    .tape {
        position: absolute;
        background-color: var(--tape-color);
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        z-index: 10;
    }

    .top-tape {
        top: -10px;
        left: -10px;
        width: 60px;
        height: 20px;
        transform: rotate(-45deg);
    }

    .bottom-tape {
        bottom: -10px;
        right: -10px;
        width: 60px;
        height: 20px;
        transform: rotate(-45deg);
    }

    /* Avatar Drawing */
    .character-portrait {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .avatar-head {
        width: 80px;
        height: 70px;
        background-color: #ffcccc; /* Pink hair/skin */
        border-radius: 20px 20px 10px 10px;
        border: 3px solid #5d4037;
    }
    .avatar-body {
        width: 50px;
        height: 40px;
        background-color: #a55eea;
        border-radius: 20px 20px 0 0;
        margin-top: -5px;
        border: 3px solid #5d4037;
    }
    .sparkle {
        position: absolute;
        top: -20px;
        left: -20px;
        font-size: 24px;
        color: yellow;
        text-shadow: 1px 1px 0 orange;
    }

    /* --- STATS ROW --- */
    .stats-row {
        display: flex;
        gap: 15px;
        margin-bottom: 25px;
    }

    .stat-card {
        position: relative;
        width: 70px;
        height: 80px;
        background-color: #fff;
        border: 2px solid var(--text-brown);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
    }

    .stat-icon { font-size: 24px; margin-bottom: 5px; }
    .stat-val { font-size: 20px; color: var(--text-brown); }

    /* Corner Folds (Triangles) */
    .corner-fold {
        position: absolute;
        bottom: 4px;
        right: 4px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 15px 15px;
        border-color: transparent transparent var(--accent-pink) transparent;
    }
    .corner-fold.red { border-color: transparent transparent var(--accent-orange) transparent; }
    .corner-fold.blue { border-color: transparent transparent var(--accent-blue) transparent; }


    /* --- BUTTONS --- */
    .action-btn {
        border: none;
        outline: none;
        font-family: inherit;
        font-size: 20px;
        color: white;
        padding: 10px 40px;
        border-radius: 4px;
        cursor: pointer;
        box-shadow: 0 4px 0 #bf6a1f; /* 3D effect */
        transition: transform 0.1s, box-shadow 0.1s;
        text-transform: uppercase;
    }

    .orange-btn {
        background-color: var(--accent-orange);
        border: 2px solid #bf6a1f;
    }

    .action-btn:active {
        transform: translateY(4px);
        box-shadow: 0 0 0 #bf6a1f;
    }

    /* --- RIGHT PAGE CONTENT --- */
    .page-title {
        text-align: center;
        color: #bfa588; /* Faded text like "Items" in ref */
        font-size: 18px;
        margin-top: 0;
        margin-bottom: 20px;
        text-transform: uppercase;
    }

    /* GRID */
    .options-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 80px); /* Fixed height rows */
        gap: 15px;
        margin-bottom: 30px;
    }

    .grid-item {
        border: 3px solid #dcc09e;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        cursor: pointer;
        background-color: transparent;
        transition: all 0.2s;
        position: relative;
    }

    .grid-item:hover {
        background-color: rgba(255,255,255,0.4);
    }

    .grid-item.selected {
        border-color: var(--accent-blue);
        background-color: #e3f2fd;
        box-shadow: 0 0 0 2px #a2d1ff inset;
    }

    .sparkles-decor {
        position: absolute;
        top: 2px;
        right: 2px;
        font-size: 14px;
    }

    /* STICKY NOTE */
    .sticky-note {
        margin-top: auto; /* Push to bottom */
        background-color: #f7f1e3;
        padding: 15px;
        position: relative;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transform: rotate(1deg);
        border: 1px solid #e0e0e0;
    }

    .center-tape {
        top: -10px;
        left: 50%;
        transform: translateX(-50%) rotate(2deg);
        width: 40px;
        height: 15px;
    }

    .note-title {
        font-size: 18px;
        color: var(--text-brown);
        margin-bottom: 5px;
        text-align: center;
    }

    .note-body {
        font-family: 'Patrick Hand', cursive; /* Handwritten font */
        color: #7f8fa6;
        text-align: center;
        font-size: 16px;
        line-height: 1.2;
    }

    /* --- NAVIGATION EARS --- */
    .nav-ear {
        position: absolute;
        bottom: 30px;
        width: 50px;
        height: 40px;
        background-color: var(--accent-orange);
        border: none;
        color: white;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 4px 0 #bf6a1f;
    }

    .nav-ear.left {
        left: -25px;
        border-radius: 4px 0 0 4px;
    }

    .nav-ear.right {
        right: -25px;
        border-radius: 0 4px 4px 0;
    }

    .nav-ear:active {
        transform: translateY(4px);
        box-shadow: none;
    }

    /* Mobile Responsive */
    @media (max-width: 950px) {
        .open-book {
            flex-direction: column;
            width: 90%;
            height: auto;
        }
        .left-page {
            border-radius: 8px 8px 0 0;
            border-right: none;
            border-bottom: 1px solid #dcc09e;
        }
        .right-page {
            border-radius: 0 0 8px 8px;
            border-left: none;
        }
        .nav-ear { display: none; } /* Hide side nav on mobile */
    }
</style>