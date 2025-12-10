<script>
	export let lesson = "Sindarin: Basics";
	export let phrase = "Elen síla lúmenn' omentielvo";
	export let translation = "A star shines on the hour of our meeting";
</script>

<!-- Outer background: Dark Wood Desk -->
<div class="min-h-screen bg-[#1a120b] flex items-center justify-center p-4 font-serif text-[#2B2B2B]">

	<!-- Main App Container: The Leather Portfolio -->
	<!-- Added subtle leather texture pattern and stitching -->
	<div class="w-full max-w-md bg-[#3e2723] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_2px_5px_rgba(255,255,255,0.1)] relative overflow-hidden ring-1 ring-white/10">

		<!-- The Stitching Effect (Inner Dashed Border) -->
		<div class="absolute inset-2 border-2 border-dashed border-[#5d4037] rounded-2xl pointer-events-none z-0 opacity-50"></div>

		<!-- Top Bar: Embedded in the leather -->
		<div class="p-6 pb-2 relative z-10">
			<div class="flex justify-between items-center mb-6">
				<!-- Close Button: Metallic Stud -->
				<button class="w-10 h-10 rounded-full bg-gradient-to-b from-[#5d4037] to-[#3e2723] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.5)] flex items-center justify-center border border-[#2d1b15] active:scale-95 transition-transform group">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-[#8d6e63] group-hover:text-[#bcaaa4]"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
				</button>

				<!-- Header Text: Debossed/Stamped Look -->
				<h2 class="text-[#1a120b] font-bold tracking-[0.2em] uppercase text-sm font-sans drop-shadow-[0_1px_0_rgba(255,255,255,0.1)] text-shadow-[0_-1px_0_rgba(0,0,0,0.5)] opacity-80 mix-blend-overlay">
					{lesson}
				</h2>

				<!-- Lives: Metallic Gems -->
				<div class="flex gap-1 bg-[#2d1b15] px-3 py-1 rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.5)] border-b border-[#4e342e]">
					<span class="text-[#ef5350] drop-shadow-[0_0_5px_rgba(239,83,80,0.5)]">❤</span>
					<span class="text-[#ef5350] drop-shadow-[0_0_5px_rgba(239,83,80,0.5)]">❤</span>
					<span class="text-[#4e342e]">❤</span>
				</div>
			</div>

			<!-- Progress Bar: Inlaid Brass Rail -->
			<div class="h-4 w-full bg-[#1a120b] rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.1)] p-0.5 border-b border-[#4e342e]">
				<div class="h-full rounded-full w-2/3 bg-gradient-to-b from-[#ffd700] via-[#b8860b] to-[#8b6508] shadow-[0_1px_2px_rgba(0,0,0,0.5)] relative overflow-hidden">
					<!-- Shine -->
					<div class="absolute top-0 left-0 w-full h-[1px] bg-white opacity-50"></div>
				</div>
			</div>
		</div>

		<!-- Content Area: The Parchment Sheet -->
		<!-- This looks like a physical piece of paper sitting ON TOP of the leather -->
		<div class="relative mx-4 mb-4 bg-[#f4ebd0] rounded-sm shadow-[0_2px_4px_rgba(0,0,0,0.3),0_10px_20px_rgba(0,0,0,0.1)] z-10 p-6 pb-24 transform rotate-[-0.5deg]">

			<!-- Paper Texture Overlay -->
			<div class="absolute inset-0 opacity-30 pointer-events-none rounded-sm" style="background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png'); mix-blend-mode: multiply;"></div>

			<!-- Ragged top edge simulation (subtle) -->
			<div class="absolute -top-1 left-2 right-2 h-2 bg-[#f4ebd0] rounded-[50%] opacity-50 blur-[1px]"></div>

			<!-- The Challenge Quote -->
			<div class="text-center mb-8 relative z-10">
				<div class="inline-block relative">
					<h1 class="text-3xl text-[#3e2723] font-bold leading-relaxed font-serif drop-shadow-sm">
						"{phrase}"
					</h1>
					<!-- Underline drawn with ink -->
					<svg class="absolute -bottom-2 left-0 w-full h-2 text-[#8A2323] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
						<path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="2" fill="none" />
					</svg>
				</div>
				<p class="text-sm italic text-[#5d4037] mt-4 font-serif opacity-80">Translate this phrase</p>
			</div>

			<!-- Options: Separate Slips of Paper -->
			<div class="space-y-4 relative z-10">

				<!-- Option 1 -->
				<button class="w-full text-left group relative transform transition-transform hover:-translate-y-0.5">
					<div class="absolute inset-0 bg-black/10 translate-y-1 rounded shadow-sm blur-[1px] group-active:translate-y-0"></div>
					<div class="relative bg-[#FDF6E3] border border-[#d7ccc8] p-4 flex items-center shadow-sm rounded-sm group-active:translate-y-1 transition-transform">
						<div class="w-8 h-8 rounded-full border-2 border-[#bcaaa4] flex items-center justify-center mr-4 text-[#8d6e63] font-bold font-sans text-xs bg-[#efebe9]">A</div>
						<span class="text-lg text-[#3e2723] font-medium font-serif">A star shines on our meeting</span>
					</div>
				</button>

				<!-- Option 2: Selected (Handwritten Circle effect) -->
				<button class="w-full text-left group relative transform transition-transform hover:-translate-y-0.5 scale-[1.02]">
					<div class="absolute inset-0 bg-black/20 translate-y-1 rounded shadow-md blur-[1px]"></div>
					<!-- "Ink" Selection Border -->
					<div class="absolute -inset-1 border-2 border-[#8A2323] rounded-sm opacity-60 pointer-events-none" style="border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;"></div>

					<div class="relative bg-[#fff8e1] border border-[#ffecb3] p-4 flex items-center shadow-sm rounded-sm">
						<div class="w-8 h-8 bg-[#8A2323] text-[#fff8e1] rounded-full flex items-center justify-center mr-4 font-bold font-sans text-xs shadow-inner">B</div>
						<span class="text-lg text-[#3e2723] font-bold font-serif">{translation}</span>
						<!-- Checkmark drawn in ink -->
						<svg class="w-6 h-6 text-[#8A2323] ml-auto" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
					</div>
				</button>

				<!-- Option 3 -->
				<button class="w-full text-left group relative transform transition-transform hover:-translate-y-0.5">
					<div class="absolute inset-0 bg-black/10 translate-y-1 rounded shadow-sm blur-[1px] group-active:translate-y-0"></div>
					<div class="relative bg-[#FDF6E3] border border-[#d7ccc8] p-4 flex items-center shadow-sm rounded-sm group-active:translate-y-1 transition-transform">
						<div class="w-8 h-8 rounded-full border-2 border-[#bcaaa4] flex items-center justify-center mr-4 text-[#8d6e63] font-bold font-sans text-xs bg-[#efebe9]">C</div>
						<span class="text-lg text-[#3e2723] font-medium font-serif">The sun rises on the West</span>
					</div>
				</button>

			</div>
		</div>

		<!-- Footer Action: The "Brass Plate" Button -->
		<div class="absolute bottom-6 left-0 right-0 px-8 z-20 flex justify-center">
			<button class="w-full max-w-sm group relative outline-none">
				<!-- Shadow -->
				<div class="absolute inset-0 bg-black/50 rounded-full blur-[2px] translate-y-1"></div>

				<!-- Button Body (Gold/Brass Gradient) -->
				<div class="relative bg-gradient-to-b from-[#f0e68c] via-[#daa520] to-[#b8860b] text-[#3e2723] font-bold text-lg uppercase tracking-widest py-4 px-6 rounded-full border border-[#8b6508] shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.3)] active:translate-y-1 transition-all flex items-center justify-center gap-2 font-sans">
					<!-- Inner Bevel -->
					<div class="absolute inset-[2px] rounded-full border border-[#fff8dc] opacity-30 pointer-events-none"></div>

					<span class="drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]">Continue</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-[0_1px_0_rgba(255,255,255,0.4)]"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</div>
			</button>
		</div>

	</div>
</div>

<style lang="postcss">
		@reference "tailwindcss";
</style>