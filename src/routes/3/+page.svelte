<script>
	export let lesson = "Sindarin: Basics";
	export let phrase = "Elen síla lúmenn' omentielvo";
	export let translation = "A star shines on the hour of our meeting";

	// State for the metallic toggle
	let audioEnabled = true;
</script>

<!-- Outer background: Dark Wood Desk -->
<div class="desk-container">

	<!-- Desk Texture/Grain -->
	<div class="desk-texture"></div>

	<!-- Main App Container: The Leather Portfolio -->
	<div class="portfolio-wrapper">

		<!-- Sidebar Tabs (From Image 2) -->
		<div class="sidebar-tabs">
			<div class="tab tab-red"></div>
			<div class="tab tab-gold"></div>
			<div class="tab tab-grey"></div>
		</div>

		<!-- The Leather Pad -->
		<div class="leather-pad">

			<!-- Leather Texture Overlay -->
			<div class="leather-texture"></div>

			<!-- The Stitching (From Image 1) -->
			<div class="stitching"></div>

			<!-- Top Control Panel (Metallic & Inset) -->
			<div class="control-panel">

				<!-- The Metallic Toggle Switch (From Image 1) -->
				<div class="toggle-group">
					<span class="label-text">Audio</span>
					<button
						class="toggle-switch"
						on:click={() => audioEnabled = !audioEnabled}
					>
						<!-- The Switch Nub -->
						<div class="toggle-nub"
								 style="transform: translateY({audioEnabled ? '0' : '20px'})">
							<!-- Grip Lines -->
							<div class="grip-line grip-top"></div>
							<div class="grip-line grip-middle"></div>
							<div class="grip-line grip-bottom"></div>
						</div>
					</button>
				</div>

				<!-- Center Header: Debossed Leather -->
				<div class="header-group">
					<h2 class="header-title">
						Sindarin
					</h2>
					<div class="header-subtitle">Unit One</div>
				</div>

				<!-- The Inset Date/Streak Counter (From Image 1) -->
				<div class="streak-group">
					<span class="label-text">Streak</span>
					<div class="streak-frame">
						<div class="streak-display">
							<span>14</span>
							<!-- Gloss overlay -->
							<div class="streak-gloss"></div>
						</div>
					</div>
				</div>

			</div>

			<!-- Main Paper Sheet (From Image 2 - Taped Down) -->
			<div class="paper-section">

				<!-- The Tape (Top Center) -->
				<div class="tape tape-main-left"></div>
				<div class="tape tape-main-right"></div>

				<!-- The Paper -->
				<div class="paper-sheet">

					<!-- Ragged Bottom Edge (CSS Mask) -->
					<div class="paper-ragged-edge">
					</div>

					<!-- Content -->
					<div class="paper-content">
						<h1 class="phrase-text">
							"{phrase}"
						</h1>
						<p class="instruction-text">Translate into English</p>
					</div>

					<!-- Slips of Paper Options -->
					<div class="options-container">

						<!-- Option A -->
						<button class="option-button group">
							<!-- Tape on the left -->
							<div class="option-tape option-tape-a"></div>

							<div class="option-card option-card-default">
								<span class="option-text-default">A star shines on our meeting</span>
							</div>
						</button>

						<!-- Option B (Correct) -->
						<button class="option-button group">
							<!-- Tape on the left -->
							<div class="option-tape option-tape-b"></div>

							<div class="option-card option-card-selected">
								<span class="option-text-selected">{translation}</span>
								<!-- Watercolor stain background -->
								<div class="watercolor-stain"></div>

								<div class="check-icon-container">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
								</div>
							</div>
						</button>

						<!-- Option C -->
						<button class="option-button group">
							<div class="option-tape option-tape-c"></div>

							<div class="option-card option-card-default option-card-hover-rotate">
								<span class="option-text-default">The sun rises on the West</span>
							</div>
						</button>

					</div>
				</div>

			</div>

			<!-- Footer Button: Metallic Plate (From Image 1) -->
			<div class="footer-section">
				<button class="footer-button">
					<!-- Dark recessed slot -->
					<div class="footer-button-slot"></div>

					<!-- Metallic Button -->
					<div class="footer-button-plate">
						<span class="footer-button-text">Check Answer</span>
					</div>
				</button>
			</div>

		</div>
	</div>
</div>

<style>
    /* Fonts */
    .desk-container {
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    }

    .header-title, .streak-display, .label-text, .check-icon-container {
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }

    /* Outer Background */
    .desk-container {
        min-height: 100vh;
        background-color: #1a120b;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        color: #2B2B2B;
        overflow: hidden;
        position: relative;
    }

    /* Desk Texture */
    .desk-texture {
        position: fixed;
        inset: 0;
        pointer-events: none;
        opacity: 0.2;
        background-image: url('https://www.transparenttextures.com/patterns/wood-pattern.png');
    }

    /* Portfolio Wrapper */
    .portfolio-wrapper {
        position: relative;
        /* Group behavior is handled via nesting */
    }

    /* Sidebar Tabs */
    .sidebar-tabs {
        position: absolute;
        top: 3rem;
        left: -0.75rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        z-index: 0;
    }

    .tab {
        width: 2rem;
        height: 2.5rem;
        border-top-left-radius: 0.375rem;
        border-bottom-left-radius: 0.375rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        border-left-width: 1px;
        border-top-width: 1px;
        border-bottom-width: 1px;
        border-style: solid;
        transform: skewY(-6deg);
    }

    .tab-red {
        background-color: #8A2323;
        border-color: #5e1616;
    }

    .tab-gold {
        width: 2.5rem; /* w-10 */
        background-color: #C5A059;
        border-color: #8b6508;
        transform: skewY(-6deg) translateX(0.25rem);
    }

    .tab-grey {
        background-color: #3D4652;
        border-color: #1a1e24;
    }

    /* Leather Pad */
    .leather-pad {
        width: 100%;
        max-width: 28rem; /* max-w-md */
        background-color: #3e2723;
        border-radius: 2rem;
        box-shadow: 0 30px 60px rgba(0,0,0,0.6), inset 0 2px 5px rgba(255,255,255,0.15);
        position: relative;
        z-index: 10;
        /* ring-1 ring-white/5 */
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 30px 60px rgba(0,0,0,0.6), inset 0 2px 5px rgba(255,255,255,0.15);
        padding-bottom: 2rem;
    }

    .leather-texture {
        position: absolute;
        inset: 0;
        border-radius: 2rem;
        opacity: 0.4;
        pointer-events: none;
        background-image: url('https://www.transparenttextures.com/patterns/black-scales.png');
        mix-blend-mode: multiply;
    }

    .stitching {
        position: absolute;
        inset: 0.75rem;
        border: 2px dashed #6d4c41;
        border-radius: 1.5rem;
        pointer-events: none;
        z-index: 20;
        opacity: 0.7;
        box-shadow: 0 1px 0 rgba(255,255,255,0.1);
    }

    .control-panel {
        padding: 2rem;
        padding-bottom: 1rem;
        position: relative;
        z-index: 30;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    /* Toggle Group */
    .toggle-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }

    .label-text {
        font-size: 10px;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.1em; /* tracking-widest */
        color: #8d6e63;
        filter: drop-shadow(0 1px 1px rgba(0,0,0,1));
    }

    .toggle-switch {
        position: relative;
        width: 2.5rem; /* w-10 */
        height: 4rem; /* h-16 */
        background-image: linear-gradient(to bottom, #2d1b15, #1a120b);
        border-radius: 9999px;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.1);
        border: 1px solid #4e342e;
        padding: 0.25rem;
        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
    }

    .toggle-nub {
        width: 100%;
        height: 2rem; /* h-8 */
        border-radius: 9999px;
        background-image: linear-gradient(to bottom, #e6c985, #c5a059, #8b6508);
        box-shadow: 0 4px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.6);
        transform: translateY(0); /* Default, overridden inline */
        transition-property: transform;
        transition-duration: 300ms;
        border: 1px solid #5d4037;
        position: relative;
    }

    .grip-line {
        position: absolute;
        left: 0.25rem;
        right: 0.25rem;
        height: 1px;
        top: 50%;
    }

    .grip-top {
        background-color: #5d4037;
        opacity: 0.3;
    }

    .grip-middle {
        background-color: white;
        opacity: 0.4;
        transform: translateY(-2px);
    }

    .grip-bottom {
        background-color: #5d4037;
        opacity: 0.3;
        transform: translateY(2px);
    }

    /* Header Group */
    .header-group {
        margin-top: 0.5rem;
        text-align: center;
    }

    .header-title {
        color: #1a120b;
        font-weight: 900;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        font-size: 0.75rem; /* text-xs */
        filter: drop-shadow(0 1px 0 rgba(255,255,255,0.1));
        text-shadow: 0 -1px 0 rgba(0,0,0,0.8);
        mix-blend-mode: overlay;
    }

    .header-subtitle {
        color: #8d6e63;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-top: 0.25rem;
        opacity: 0.8;
    }

    /* Streak Group */
    .streak-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }

    .streak-frame {
        background-color: #1a120b;
        border-radius: 0.375rem;
        border: 1px solid #4e342e;
        padding: 0.25rem;
        box-shadow: inset 0 2px 5px rgba(0,0,0,0.8);
    }

    .streak-display {
        background-color: #f4ebd0;
        padding: 0.25rem 0.5rem;
        border-radius: 0.125rem;
        box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
        font-weight: 700;
        color: #3e2723;
        font-size: 1.125rem; /* text-lg */
        line-height: 1;
        border: 1px solid #d7ccc8;
        min-width: 2.5rem;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .streak-gloss {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 50%;
        background-image: linear-gradient(to bottom, rgba(255,255,255,0.4), transparent);
        pointer-events: none;
    }

    /* Paper Section */
    .paper-section {
        position: relative;
        margin-left: 1.25rem;
        margin-right: 1.25rem;
        margin-top: 0.5rem;
        z-index: 30;
    }

    /* Tapes */
    .tape {
        position: absolute;
        z-index: 40;
    }

    .tape-main-left {
        top: -0.75rem;
        left: 50%;
        transform: translateX(-50%) rotate(1deg);
        width: 4rem;
        height: 2rem;
        background-color: #ffffff;
        opacity: 0.3;
        backdrop-filter: blur(1px);
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        /* Mask Image */
        -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent), url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='100%' height='100%' fill='black'/><path d='M0 0 L10 10 L0 20 Z' fill='white'/></svg>");
        mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent), url("data:image/svg+xml;utf8,<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><rect x='0' y='0' width='100%' height='100%' fill='black'/><path d='M0 0 L10 10 L0 20 Z' fill='white'/></svg>");
    }

    .tape-main-right {
        top: -0.75rem;
        left: 50%;
        transform: translateX(-50%) rotate(1deg);
        width: 4rem;
        height: 2rem;
        background-color: #fef9c3; /* yellow-100 */
        mix-blend-mode: overlay;
        opacity: 0.6;
        border-left: 1px solid rgba(255,255,255,0.2);
        border-right: 1px solid rgba(255,255,255,0.2);
    }

    .paper-sheet {
        background-color: #f4ebd0;
        border-radius: 0.125rem;
        padding: 1.5rem;
        padding-top: 2.5rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transform: rotate(-0.5deg);
        position: relative;
        overflow: hidden;
    }

    .paper-ragged-edge {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0.5rem;
        background-color: #f4ebd0;
        mask-image: radial-gradient(circle, transparent 2px, black 3px);
        mask-size: 10px 10px;
        mask-position: bottom;
        -webkit-mask-image: radial-gradient(circle, transparent 2px, black 3px);
        -webkit-mask-size: 10px 10px;
        -webkit-mask-position: bottom;
    }

    .paper-content {
        text-align: center;
        margin-bottom: 2rem;
        position: relative;
    }

    .phrase-text {
        font-size: 1.5rem;
        line-height: 1.625;
        color: #3e2723;
        font-weight: 700;
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)); /* drop-shadow-sm, approx */
    }

    @media (min-width: 768px) {
        .phrase-text {
            font-size: 1.875rem;
        }
    }

    .instruction-text {
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #8d6e63;
        margin-top: 1rem;
        border-top: 1px solid #d7ccc8;
        padding-top: 1rem;
        display: inline-block;
        padding-left: 1rem;
        padding-right: 1rem;
    }

    /* Options */
    .options-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .option-button {
        width: 100%;
        position: relative;
        text-align: left;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
    }

    .option-tape {
        position: absolute;
        left: -0.5rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1rem;
        height: 2rem;
        background-color: rgba(254, 252, 232, 0.5); /* yellow-50/50 */
        z-index: 20;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        border: 1px solid rgba(255,255,255,0.2);
    }

    .option-tape-a {
        transform: translateY(-50%) rotate(-12deg);
    }

    .option-tape-b {
        transform: translateY(-50%) rotate(6deg);
    }

    .option-tape-c {
        transform: translateY(-50%) rotate(-3deg);
    }

    .option-card {
        padding: 0.75rem;
        padding-left: 1.5rem;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        transition: transform 150ms;
    }

    .option-button:active .option-card {
        transform: scale(0.99);
    }

    .option-card-default {
        background-color: white;
        border: 2px solid #e5e5e5;
        transform: rotate(0); /* implicitly 0 */
    }

    .option-button:hover .option-card-default {
        border-color: #C5A059;
        transform: rotate(-1deg);
    }

    .option-card-hover-rotate.option-card-default {
        /* Specific override for C */
    }

    .option-button:hover .option-card-hover-rotate {
        transform: rotate(1deg);
    }

    .option-card-selected {
        background-color: #fff8e1;
        border: 2px solid #C5A059;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
        transform: rotate(-1deg);
        position: relative;
        overflow: hidden;
    }

    .option-text-default {
        font-size: 1.125rem;
        color: #3e2723;
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    }

    .option-text-selected {
        font-size: 1.125rem;
        color: #3e2723;
        font-weight: 700;
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
        position: relative;
        z-index: 10;
    }

    .watercolor-stain {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 5rem;
        height: 5rem;
        background-color: #C5A059;
        opacity: 0.1;
        border-radius: 9999px;
        filter: blur(24px); /* blur-xl approx */
        transform: translate(1rem, 1rem);
    }

    .check-icon-container {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: #C5A059;
    }

    /* Footer Section */
    .footer-section {
        margin-top: 2rem;
        padding-left: 2rem;
        padding-right: 2rem;
        position: relative;
        z-index: 30;
    }

    .footer-button {
        width: 100%;
        position: relative;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        outline: none;
        transition: all 150ms;
    }

    .footer-button:active {
        top: 2px;
    }

    .footer-button-slot {
        position: absolute;
        inset: 0;
        background-color: #1a120b;
        border-radius: 0.5rem;
        transform: translateY(0.5rem);
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.8);
    }

    .footer-button-plate {
        position: relative;
        background-image: linear-gradient(to bottom, #f0e68c, #daa520, #b8860b);
        color: #3e2723;
        font-weight: 700;
        font-size: 1.125rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #8b6508;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 5px 10px rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .footer-button-text {
        filter: drop-shadow(0 1px 0 rgba(255,255,255,0.4));
    }
</style>