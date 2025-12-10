<script>
	export let lesson = "Sindarin: Basics";
	export let phrase = "Elen síla lúmenn' omentielvo";
	export let translation = "A star shines on the hour of our meeting";
</script>

<!-- Outer container: The "Desk" surface -->
<div class="min-h-screen bg-[#2C241B] flex items-center justify-center p-4 font-serif text-[#2B2B2B]">

	<!-- Main App Container: A bound 3 or heavy journal -->
	<div class="w-full max-w-md bg-[#FDF6E3] rounded-xl shadow-2xl overflow-hidden border-2 border-[#1a1612] relative">

		<!-- Top Bar: Leather binding feel -->
		<div class="bg-[#1a1612] p-4 flex justify-between items-center border-b-4 border-[#3e342b] shadow-md relative z-20">
			<div class="flex items-center gap-3">
				<!-- Close Icon -->
				<button class="text-[#8A2323] hover:text-[#a83232] transition-colors">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
				</button>
				<!-- Progress Bar: Gold inlay -->
				<div class="h-3 w-32 bg-[#2c241b] rounded-full overflow-hidden border border-[#3e342b] shadow-inner">
					<div class="h-full bg-gradient-to-r from-[#C5A059] to-[#E6C985] w-2/3 shadow-[0_0_10px_rgba(197,160,89,0.5)]"></div>
				</div>
			</div>
			<div class="flex gap-2">
				<!-- Lives: Hearts represented as shields or gems -->
				<span class="text-[#8A2323] font-bold text-lg">❤❤❤</span>
			</div>
		</div>

		<!-- Content Area: Texture of heavy paper -->
		<div class="p-6 relative bg-[#FDF6E3]">
			<!-- Subtle grain texture overlay -->
			<div class="absolute inset-0 opacity-40 pointer-events-none" style="background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png');"></div>

			<!-- Lesson Header -->
			<h2 class="text-xs font-bold tracking-[0.2em] text-[#8A6A4B] uppercase mb-8 relative z-10 text-center font-sans border-b border-[#E5D9C0] pb-2">
				{lesson}
			</h2>

			<!-- The Challenge Card -->
			<div class="mb-8 relative z-10">
				<div class="bg-white border-2 border-[#E5D9C0] p-6 rounded-lg shadow-sm text-center transform rotate-1 hover:rotate-0 transition-transform duration-500">
					<p class="text-lg italic text-[#5c5c5c] mb-2 font-serif">Translate this quote:</p>
					<h1 class="text-2xl md:text-3xl text-[#8A2323] font-bold leading-relaxed font-serif">
						"{phrase}"
					</h1>
				</div>
			</div>

			<!-- Options: The "Relic" Structure with "Archivist" Skin -->
			<div class="space-y-3 relative z-10">

				<!-- Option 1: Default -->
				<button class="w-full text-left group">
					<div class="bg-[#F4EBD0] border-2 border-[#D6CBB0] border-b-[6px] rounded-lg p-4 flex items-center transition-all transform active:translate-y-[4px] active:border-b-2 hover:bg-[#eae0c0]">
						<div class="w-8 h-8 border-2 border-[#C5A059] rounded flex items-center justify-center mr-4 text-[#C5A059] font-bold font-sans bg-white/50">1</div>
						<span class="text-lg text-[#2B2B2B] font-medium font-serif">A star shines on our meeting</span>
					</div>
				</button>

				<!-- Option 2: Selected / Correct -->
				<button class="w-full text-left group">
					<div class="bg-[#2B2B2B] border-2 border-[#1a1612] border-b-[6px] rounded-lg p-4 flex items-center transition-all transform translate-y-[0px]">
						<div class="w-8 h-8 bg-[#C5A059] text-[#1a1612] rounded flex items-center justify-center mr-4 font-bold font-sans shadow-sm">2</div>
						<span class="text-lg text-[#FDF6E3] font-medium font-serif">{translation}</span>
					</div>
				</button>

				<!-- Option 3: Default -->
				<button class="w-full text-left group">
					<div class="bg-[#F4EBD0] border-2 border-[#D6CBB0] border-b-[6px] rounded-lg p-4 flex items-center transition-all transform active:translate-y-[4px] active:border-b-2 hover:bg-[#eae0c0]">
						<div class="w-8 h-8 border-2 border-[#C5A059] rounded flex items-center justify-center mr-4 text-[#C5A059] font-bold font-sans bg-white/50">3</div>
						<span class="text-lg text-[#2B2B2B] font-medium font-serif">The sun rises on the West</span>
					</div>
				</button>

			</div>
		</div>

		<!-- Footer: The Action Area -->
		<div class="p-4 bg-[#F4EBD0] border-t border-[#D6CBB0] relative z-20">
			<div class="flex justify-between items-center mb-4 px-2">
				<span class="text-[#8A2323] font-bold uppercase text-xs tracking-widest hidden md:block">Correct!</span>
			</div>

			<!-- Primary Action Button: "Wax Seal" Red, 3D Relic Shape -->
			<button class="w-full bg-[#8A2323] text-[#FDF6E3] font-bold text-xl uppercase tracking-widest py-4 rounded-lg border-b-[6px] border-[#5e1616] active:border-b-0 active:translate-y-[6px] hover:bg-[#9e2b2b] transition-all shadow-lg flex items-center justify-center gap-2 font-serif">
				<span>Continue</span>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
			</button>
		</div>

	</div>
</div>