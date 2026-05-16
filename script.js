// ============================================
// COMPLETE GRADE 12 LIFE SCIENCES VISUALIZER
// All topics from Paper 2
// ============================================

const processes = {
    meiosis: {
        title: 'Meiosis & Chromosomes',
        description: 'Reduction cell division producing haploid gametes | Location: Reproductive organs',
        steps: [
            { title: 'Karyotype Structure', description: '46 chromosomes in 23 pairs', details: 'Each chromosome has 2 chromatids held by centromere. 23 pairs = 46 total. 22 pairs autosomes + 1 pair sex chromosomes (XY males, XX females). X larger than Y. Arranged largest to smallest.', diagram: '🧬 KARYOTYPE:\n📊 46 CHROMOSOMES (23 pairs)\n   22 autosomes + 1 sex pair\n👨 Males: XY\n👩 Females: XX\n🔗 Each = 2 chromatids + centromere', color: '#1E90FF', location: 'Cell nucleus' },
            { title: 'Prophase I - Crossing Over', description: 'Homologous pairs align; genetic exchange occurs', details: 'Chromosomes condense. Homologous pairs align (synapsis). Bivalents form with 4 chromatids. At chiasma, non-sister chromatids exchange DNA segments. Creates new allele combinations - major genetic variation source.', diagram: '🔄 PROPHASE I:\n1️⃣ Homologous pairs align (synapsis)\n2️⃣ Non-sister chromatids meet at chiasma\n3️⃣ Genetic material exchanges\n   ABC ↔ abc → Abc, aBC\n4️⃣ NEW combinations created', color: '#0047AB', location: 'Nucleus' },
            { title: 'Metaphase I - Random Arrangement', description: 'Chromosome pairs randomly aligned at equator', details: 'Bivalents positioned at cell equator. Each pair attaches to spindle fibers. Random orientation crucial - 2²³ = 8+ million combinations possible. Independent assortment major variation source.', diagram: '⚡ METAPHASE I:\n📍 Pairs at equator\n🎲 Random orientation:\n   M|P or P|M\n🧬 2²³ = 8,388,608 combos!\n↳ Unique gamete formation', color: '#00008B', location: 'Cell equator' },
            { title: 'Anaphase & Telophase I', description: 'Homologous pairs separate to opposite poles', details: 'Spindle fibers shorten. Homologous pairs separate. Each chromosome (2 chromatids) moves to opposite pole. Reduction division begins. Cell divides. Result: 2 cells with 23 chromosomes each (dyads).', diagram: '↔️ SEPARATION:\n🔝 Pairs → opposite poles\n📊 Start: 2n=46 → Each: n=23\n🧬 Still dyads (2 chromatids)\n👥 2 daughter cells', color: '#191970', location: 'Cell poles' },
            { title: 'Meiosis II', description: 'Sister chromatids separate forming gametes', details: 'Resembles mitosis. 2 cells from Meiosis I divide. Sister chromatids separate at centromere. Move to opposite poles. Result: 4 haploid gametes, 23 chromosomes each (monads).', diagram: '📋 MEIOSIS II:\n1️⃣ 2 cells align at metaphase\n2️⃣ Sister chromatids separate\n3️⃣ 4 haploid cells form\n👥 4 GAMETES (n=23)', color: '#4B0082', location: 'Cell cytoplasm' },
            { title: 'Down Syndrome', description: 'Non-disjunction produces trisomy 21', details: 'Non-disjunction: chromosome 21 pair fails to separate. One gamete: 24 chromosomes (2×21), other: 22 (0×21). Fertilization: 24+23=47, 3 copies position 21 = Down Syndrome.', diagram: '❌ NON-DISJUNCTION:\n🧬 Chr 21 fails to separate\n🔴 Gamete: 24 (2×21)\n⚪ Gamete: 22 (0×21)\n🤝 24+23=47, 3×21\n= DOWN SYNDROME', color: '#FF6B6B', location: 'Meiosis I or II' }
        ]
    },

    geneticVariation: {
        title: 'Genetic Variation & Mutations',
        description: 'Sources creating diversity in populations',
        steps: [
            { title: 'Crossing Over', description: 'DNA exchange between homologous chromosomes', details: 'Prophase I: non-sister chromatids overlap at chiasma. DNA strands break and rejoin, swapping segments. Creates recombinant chromosomes with new allele combinations. Exchange location and amount random.', diagram: '🔗 CROSSING OVER:\nMaternal: A-B-C\nPaternal: a-b-c\n    ↓ (exchange)\nNew: A-b-c, a-B-C\n✓ New combinations', color: '#9932CC', location: 'Prophase I nucleus' },
            { title: 'Random Assortment', description: 'Independent chromosome distribution', details: 'Metaphase I: each pair randomly orients. 2²³ = 8+ million combinations. Independent assortment - genes dont influence each other. Major variation source.', diagram: '🎲 ASSORTMENT:\nEach pair: 2 orientations\n23 pairs: 2²³ combos\n= 8,388,608 unique gametes!\n↳ Everyone genetically unique', color: '#BA55D3', location: 'Metaphase I' },
            { title: 'Gene Mutations', description: 'DNA base sequence changes', details: 'Change in nitrogenous bases. Types: substitution (base replaced), insertion (base added), deletion (base removed), inversion (bases reversed). Occur spontaneously (~1 per 10⁹ bases) or induced by radiation/chemicals. If in gametes, inherited.', diagram: '🧬 MUTATIONS:\n1️⃣ SUBSTITUTION: A-T-C→A-T-G\n2️⃣ INSERTION: A-T-C→A-T-C-C\n3️⃣ DELETION: A-T-C→A-C\n4️⃣ INVERSION: A-T-C→C-T-A\n↳ New alleles created', color: '#DDA0DD', location: 'DNA during replication' },
            { title: 'Chromosome Mutations', description: 'Large-scale structural/numerical changes', details: 'Structural: duplication, deletion, inversion, translocation. Numerical: aneuploidy (odd number - monosomy/trisomy), euploidy (complete sets). Result from non-disjunction. If in gametes, inherited.', diagram: '📍 MUTATIONS:\nSTRUCTURAL:\n• Duplication: ABC-BC-D\n• Deletion: A-D (B-C lost)\n• Inversion: A-CBA-D\n• Translocation: moves segment\n\nNUMERICAL:\n• Aneuploidy: 2n±1\n• Euploidy: 3n, 4n', color: '#EE82EE', location: 'Chromosomes' },
            { title: 'Variation in Populations', description: 'How mutations increase diversity', details: 'Within organism: crossing over, random assortment, fertilization. Within population: different mutations, different alleles, different phenotypes. Combined creates virtually unlimited variation - raw material for natural selection.', diagram: '🌈 VARIATION:\n✓ Crossing over\n✓ Random assortment\n✓ Mutations\n✓ Random fertilization\n= Unique gametes/individuals\n= Evolution possible', color: '#DA70D6', location: 'Population level' }
        ]
    },

    dnaStructure: {
        title: 'DNA: Structure & Function',
        description: 'Double helix hereditary material | Nucleus and mitochondria',
        steps: [
            { title: 'DNA Location & Structure', description: 'Found in nucleus (chromosomes) and mitochondria', details: 'DNA = deoxyribonucleic acid. NUCLEUS: organized in 46 chromosomes with proteins (histones). MITOCHONDRIA: circular DNA, maternal inheritance. Double-stranded helix - 2 complementary strands twisted. Built from nucleotides.', diagram: '🧬 DNA LOCATIONS:\n📍 NUCLEUS:\n  • 46 chromosomes\n  • DNA + histones\n  • Genes code proteins\n⚛️ MITOCHONDRIA:\n  • Circular DNA\n  • 16,569 base pairs\n  • Maternal inheritance', color: '#FFD700', location: 'Nucleus/mitochondria' },
            { title: 'Nucleotide Structure', description: 'Three components: sugar, phosphate, base', details: 'Nucleotide building block. Components: (1) nitrogenous base (A,T,C,G); (2) deoxyribose sugar; (3) phosphate group. Purines (A,G) 2 rings, Pyrimidines (T,C) 1 ring. Base pairing: A-T (2 bonds), G-C (3 bonds).', diagram: '🧬 NUCLEOTIDE:\n     BASE (A,T,C,G)\n      |\n  SUGAR-phosphate\n\nBase types:\nPurines: A, G (large)\nPyrimidines: T, C (small)\n\nPairing:\nA≡T (2 bonds)\nG≡C (3 bonds)', color: '#FFA500', location: 'DNA molecule' },
            { title: 'DNA vs RNA', description: 'Structural differences', details: 'DNA: double-stranded, deoxyribose sugar, thymine, helix, longer, paired bases. RNA: single-stranded, ribose sugar, uracil, straight, shorter, unpaired bases. DNA stable, RNA temporary.', diagram: '🔄 DNA vs RNA:\nDNA: double, deoxyribose, T\nRNA: single, ribose, U\nDNA: helix, longer, stable\nRNA: straight, shorter, temporary\nDNA: nucleus\nRNA: cytoplasm', color: '#FF8C00', location: 'Nucleus/cytoplasm' },
            { title: 'DNA Replication', description: 'Semi-conservative accurate copying', details: 'S-phase: helix unwinds, hydrogen bonds break, each strand template, free nucleotides attach complementary (A-T, C-G), DNA polymerase adds, 2 identical molecules form - each with 1 original + 1 new strand = semi-conservative.', diagram: '🔄 REPLICATION:\n1️⃣ Unwind & unzip\n2️⃣ Each strand = template\n3️⃣ Free NTs attach\n4️⃣ Complementary pairing\n   A-T, C-G\n= 2 identical DNA\n  Each: old + new strand', color: '#DC143C', location: 'Nucleus S-phase' },
            { title: 'DNA Extraction', description: 'Laboratory isolation procedure', details: 'Materials: tissue source, dishwashing liquid (breaks membranes), salt (precipitates DNA), enzyme (breaks histone proteins), hot water (speeds breakdown), alcohol (DNA insoluble). DNA appears as white stringy mass.', diagram: '🔬 EXTRACTION:\n1️⃣ Grate tissue\n2️⃣ Add liquid+salt+enzyme\n3️⃣ Heat (60°C)\n4️⃣ Filter\n5️⃣ Add cold alcohol\n= WHITE STRINGY DNA', color: '#C71585', location: 'Lab procedure' }
        ]
    },

    proteinSynthesis: {
        title: 'Protein Synthesis',
        description: 'DNA → mRNA → Protein | Nucleus & ribosomes',
        steps: [
            { title: 'Transcription', description: 'DNA to mRNA in nucleus', details: 'DNA unwinds. RNA polymerase binds promoter. Hydrogen bonds break. RNA nucleotides complementary to template (A→U, T→A, C→G, G→C). mRNA strand grows 5\'→3\'. Continues until terminator. mRNA released = complementary copy of DNA.', diagram: '📝 TRANSCRIPTION:\nDNA template: 3\'-T-A-G-C-5\'\n              ↓\nmRNA formed: 5\'-A-U-A-C-G-3\'\nEach codon = 3 bases\nCodes 1 amino acid', color: '#9932CC', location: 'Nucleus' },
            { title: 'Translation at Ribosome', description: 'mRNA to protein in cytoplasm', details: 'mRNA enters ribosome. Ribosome reads codon (3 bases) per cycle. tRNA anticodon matches mRNA codon. Brings amino acid. Amino acids bonded by peptide bonds. Forms polypeptide chain. Stop codon ends translation. Specific protein created.', diagram: '🔡 TRANSLATION:\nmRNA: 5\'-AUG-CAU-GUA-3\'\n          ↓\n      Start Met\nCodon CAU → His\nCodon GUA → Leu\nCodon end → Stop\n= Protein: Met-His-Leu', color: '#BA55D3', location: 'Ribosome cytoplasm' },
            { title: 'Gene Mutation Effects', description: 'DNA change → protein change', details: 'Mutation changes DNA sequence. Transcription copies mutation to mRNA. Changes codon. Different tRNA/amino acid. Different protein structure. Silent (no change), missense (different aa), nonsense (premature stop). Example: sickle cell - Glu→Val.', diagram: '🧬 MUTATION EFFECTS:\nOriginal DNA: G-A-A\nmRNA: C-U-U → Leucine\n\nMutant DNA: G-T-G\nmRNA: C-A-C → Histidine\n\n✓ Silent: same AA\n? Missense: different AA\n✗ Nonsense: STOP', color: '#DDA0DD', location: 'DNA-protein' },
            { title: 'DNA Profiling', description: 'Identification using DNA analysis', details: 'Uses specific DNA sequences for identification. Forensics (crime scenes), paternity testing, genetic disorders, organ transplants, victim identification. Methods: STRs (short tandem repeats), mtDNA (maternal), SNPs. Highly specific, small samples.', diagram: '🔬 DNA PROFILING:\n✓ Forensics\n✓ Paternity\n✓ Genetic screening\n✓ Organ matching\n✓ Victim ID\n\nAdvantages:\n• Highly specific\n• Small sample\n• Can exonerate', color: '#EE82EE', location: 'Lab analysis' }
        ]
    },

    genetics: {
        title: 'Genetics - Mendel\'s Laws',
        description: 'Inheritance patterns and ratios',
        steps: [
            { title: 'Law of Dominance', description: 'Dominant masks recessive in heterozygotes', details: 'Homozygous contrasting crosses: F1 all show dominant phenotype. Dominant allele (capital) determines phenotype in heterozygotes. Recessive only shows if homozygous.', diagram: '👨‍🔬 DOMINANCE:\nTT (tall) × tt (short)\n↓\nF1: ALL Tt (tall)\nT masks t in Tt', color: '#228B22', location: 'DNA alleles' },
            { title: 'Law of Segregation', description: 'Alleles separate during meiosis', details: 'Two alleles on homologous chromosomes separate during anaphase I. Each gamete gets one allele. F2 ratio: 1 dominant homozygous : 2 heterozygous : 1 recessive = 3 dominant phenotype : 1 recessive.', diagram: '👨‍🔬 SEGREGATION:\nTt parent\n↓ (anaphase I)\nT | t\nGametes: 50% T, 50% t\n\nF2: TT (25%), Tt (50%), tt (25%)\n3 dominant : 1 recessive', color: '#32CD32', location: 'Anaphase I' },
            { title: 'Law of Independent Assortment', description: 'Genes assort independently', details: 'Different genes don\'t influence each other. Each chromosome pair aligns randomly (metaphase I). Different genes end up in different gamete combinations. RrYy = 4 gamete types: RY, Ry, rY, ry.', diagram: '👨‍🔬 ASSORTMENT:\nRrYy parent\n4 gamete types:\nRY, Ry, rY, ry (1:1:1:1)\n\nDihybrid F2: 9:3:3:1\n9 R_Y_ : 3 R_yy : \n3 rrY_ : 1 rryy', color: '#00FA9A', location: 'Metaphase I' },
            { title: 'Incomplete Dominance', description: 'Neither allele completely dominant', details: 'Heterozygote shows blend phenotype. Example: red × white flowers → pink. RR (red) × WW (white) = RW (pink). Neither allele masks.', diagram: '🌸 INCOMPLETE:\nRR (red) × WW (white)\n↓\nRW (PINK - blend)', color: '#90EE90', location: 'Allele interaction' },
            { title: 'Co-dominance', description: 'Both alleles equally expressed', details: 'Heterozygote shows both phenotypes simultaneously. Example: AB blood type. IᴬIᴮ = both A and B antigens. No dominance.', diagram: '🩸 CO-DOMINANCE:\nIᴬIᴮ = Type AB\nBoth A and B antigens\nBoth phenotypes visible', color: '#98FB98', location: 'Alleles' }
        ]
    },

    sexLinked: {
        title: 'Sex-Linked & Genetic Disorders',
        description: 'Traits on sex chromosomes; inheritance patterns',
        steps: [
            { title: 'Sex Determination', description: 'Male gamete determines offspring sex', details: 'Males XY, females XX. Female always provides X. Male provides X (→female) or Y (→male). Females XX × Males XY: 50% XX (female), 50% XY (male).', diagram: '👨‍👩‍👧‍👦 SEX DETERMINATION:\nFemale: XX (provides X)\nMale: XY (provides X or Y)\n\nX sperm + X egg = XX (♀)\nY sperm + X egg = XY (♂)\n\nRatio: 1:1 male:female', color: '#FF69B4', location: 'Sex chromosomes' },
            { title: 'Color Blindness Pattern', description: 'More males than females affected', details: 'Sex-linked recessive. Males: one Xᵇ allele causes color blindness (Xᵇ Y). Females need two recessive (Xᵇ Xᵇ). Xᴴ Xʰ females carrier, not color blind.', diagram: '🔴 COLOR BLINDNESS:\nMales: Xᵇ Y → color blind\nFemales: Xᵇ Xᵇ → color blind\n         Xᴴ Xʰ → carrier\n\n♂ Xᵇ Y × ♀ Xᴴ Xʰ\n↓\nSons: 50% Xᵇ Y (blind)\nDaughters: 50% Xᴴ Xʰ (carrier)', color: '#DC143C', location: 'X chromosome' },
            { title: 'Haemophilia Inheritance', description: 'Recessive sex-linked disorder', details: 'X-linked recessive. Males: Xʰ Y = haemophiliac. Females: Xʰ Xʰ = haemophiliac, Xᴴ Xʰ = carrier. Xᴴ Y male × Xʰ Xʰ female: all sons haemophiliac.', diagram: '🩸 HAEMOPHILIA:\n♀ Xʰ Xʰ × ♂ Xᴴ Y\n↓\nSons: ALL Xʰ Y (hemophiliac)\nDaughters: ALL Xᴴ Xʰ (carrier)\n\nMore males affected than females', color: '#C71585', location: 'X chromosome' },
            { title: 'Hemophiliac Female Risk', description: 'Why females rarely affected', details: 'Females need TWO recessive alleles (Xʰ Xʰ) - rare. Xᴴ Xʰ females carrier but not affected (dominant masks recessive). Males need only ONE (Xʰ Y) - more common.', diagram: '🧬 FEMALE PROTECTION:\nFemales: 2 X chromosomes\nNeed 2 recessive = rare\n\nMales: 1 X chromosome  \nNeed 1 recessive = common\n\nXᴴ Xʰ female:\n✓ Xᴴ masks Xʰ\n✗ Still carrier', color: '#8B008B', location: 'Sex chromosomes' }
        ]
    },

    evolution: {
        title: 'Evolution - Theories',
        description: 'Lamarck vs Darwin mechanisms',
        steps: [
            { title: 'Lamarckism', description: 'Use/disuse; acquired traits inherited', details: 'Organisms change characteristics during lifetime. Structures used more develop better. Unused reduce/disappear. Acquired characteristics inherited. Example: stretched proboscis becomes longer → offspring inherit longer proboscis.', diagram: '🔨 LAMARCKISM:\nElephant proboscis evolution:\n1️⃣ Stretched to reach leaves\n2️⃣ Became longer (use)\n3️⃣ Offspring inherited longer\n4️⃣ Over generations → trunk\n\n⚠️ Disproved: acquired traits not inherited', color: '#8B4513', location: 'Organism body' },
            { title: 'Darwinism', description: 'Variation, competition, survival, reproduction', details: 'Large numbers offspring. Variation exists. Environmental change/competition. Favorable traits survive. Reproduce, pass traits. Next generation higher proportion favorable traits. Natural selection mechanism.', diagram: '🧬 DARWINISM:\n1️⃣ Variation (long/short proboscis)\n2️⃣ Environmental change\n3️⃣ Favorable (long) survive\n4️⃣ Reproduce\n5️⃣ Next generation more long\n= NATURAL SELECTION', color: '#A0522D', location: 'Population' },
            { title: 'Natural vs Artificial Selection', description: 'Different selective forces', details: 'Natural: environment is selective force, responds to suitability, within species. Artificial: humans selective force, responds to human needs, may cross-breed.', diagram: '⚙️ SELECTION:\nNATURAL: Environment, suitability\nARTIFICIAL: Humans, needs\n\nExample (artificial):\nWild wolf → dog breeds\nWild wheat → grain', color: '#CD853F', location: 'Population level' },
            { title: 'Gradualism vs Punctuated Equilibrium', description: 'Rates of change', details: 'Gradualism: slow continuous change, many transitions. Punctuated: long stasis, rapid changes, few transitions. Different interpretations of fossil record.', diagram: '📈 RATES:\nGRADUALISM: ━━━━━╱ (slow)\nPUNCTUATED: ─────╱╱╱─ (rapid bursts)', color: '#DAA520', location: 'Geological time' }
        ]
    },

    speciation: {
        title: 'Speciation - Formation of New Species',
        description: 'How populations become separate species',
        steps: [
            { title: 'Geographic Isolation', description: 'Physical barrier separates populations', details: 'Sea, mountain, or land barrier prevents gene flow. Populations isolated. Independent evolution. Different environmental conditions in each location.', diagram: '🗻 ISOLATION:\nOriginal population splits\n↓ (geographic barrier: sea, mountain)\n↙️ Population 1   ↘️ Population 2\nDifferent conditions\nNo gene flow', color: '#1E90FF', location: 'Different locations' },
            { title: 'Independent Natural Selection', description: 'Different selection in each population', details: 'Each population faces unique environmental conditions. Natural selection occurs independently. Populations diverge genotypically and phenotypically.', diagram: '🎯 SELECTION:\nPopulation 1: Select for trait A\nPopulation 2: Select for trait B\n↓ (generations)\nBecame different', color: '#4169E1', location: 'Separate populations' },
            { title: 'Anole Lizard Example', description: 'Caribbean island species diversification', details: 'Original species separated by sea into different islands. Different food/climate each island. Natural selection independent in each. Became genotypically/phenotypically different. Would not interbreed if reunited.', diagram: '🦎 ANOLE EXAMPLE:\nOriginal species → sea separates\n↙️ Island 1   ↘️ Island 2\n  Dry           Wet\n  Small trees   Large trees\n     ↓             ↓\n  Small       Large\n  species     species\n  Different food/climate', color: '#0047AB', location: 'Caribbean islands' },
            { title: 'Reproductive Isolation', description: 'Prevents interbreeding between species', details: 'Mechanisms: different breeding times, specific courtship behavior, different pollinators, infertile offspring, prevention of fertilization. Gene pool isolated.', diagram: '🔒 ISOLATION:\n• Breeding times differ\n• Courtship behavior differs\n• Different pollinators\n• Infertile offspring\n• Fertilization prevented\n= Cannot interbreed', color: '#00008B', location: 'Between populations' },
            { title: 'Population vs Species', description: 'Definitions', details: 'Species: organisms that interbreed, fertile offspring. Population: same species, same habitat, same time.', diagram: '📍 DEFINITIONS:\nSPECIES: Can interbreed\n         Fertile offspring\nPOPULATION: Same species\n            Same habitat\n            Same time', color: '#191970', location: 'Biological classification' }
        ]
    },

    modernEvolution: {
        title: 'Modern Evolution - Evolution Today',
        description: 'Natural selection happening now',
        steps: [
            { title: 'Mutations & Variation', description: 'Source of genetic variation', details: 'Random mutations produce different alleles. Some provide resistance advantages. Population has variation - some resistant, some not. Basis for selection.', diagram: '🧬 VARIATION:\nMutations ↓\nDifferent alleles\n✓ Resistant variants\n✗ Non-resistant variants\n= Selection can occur', color: '#FF6347', location: 'Population DNA' },
            { title: 'Antibiotic Resistance', description: 'Bacteria evolving resistance', details: 'Bacteria population has variation - some naturally resistant to antibiotic. Non-resistant die when antibiotic applied. Resistant survive, reproduce. Population shifts to resistant. Evolution observed in real time.', diagram: '💊 RESISTANCE:\n1️⃣ Population variation\n2️⃣ Antibiotic applied\n3️⃣ Non-resistant die\n4️⃣ Resistant survive\n5️⃣ Reproduce\n= Next generation resistant', color: '#FFA500', location: 'Bacterial population' },
            { title: 'DDT Resistance in Mosquitoes', description: 'Pesticide resistance evolution', details: 'Mosquito population varied - some resistant to DDT. Non-resistant die when DDT sprayed. Resistant survive, reproduce, pass allele. Number resistant mosquitoes increases over generations.', diagram: '🦟 DDT EXAMPLE:\n1️⃣ Variation (resistance allele)\n2️⃣ DDT application\n3️⃣ Non-resistant die\n4️⃣ Resistant survive\n5️⃣ Allele frequency ↑\n= Population becomes resistant', color: '#FF8C00', location: 'Mosquito population' },
            { title: 'HIV Drug Resistance', description: 'Virus evolving antiretroviral resistance', details: 'HIV population has variation due to high mutation rate. Some variants resistant to antiretroviral drugs. Non-resistant die when drugs used. Resistant strains survive, multiply. Population shifts to resistant.', diagram: '🦠 HIV RESISTANCE:\nMutations ↓\nSome strains resist drugs\nAntiretrovirals ↓\nNon-resistant die\nResistant survive\n= Population resistant', color: '#DC143C', location: 'HIV population' },
            { title: 'Role of Variation in Selection', description: 'Why variation essential for evolution', details: 'Population variation allows selection. Different traits. Different fitness. Favorable survive. Variation = raw material. Without variation, selection cannot occur. Evolution requires variation.', diagram: '🔄 VARIATION ROLE:\nVariation exists\n↓\nSelection pressure\n↓\nFavorable traits survive\n↓\nAlele frequency changes\n↓\nEVOLUTION\n\nNo variation = No selection', color: '#C71585', location: 'Population level' }
        ]
    },

    humanEvolution: {
        title: 'Human Evolution',
        description: 'Anatomical changes from ape-like ancestors',
        steps: [
            { title: 'Shared Ape Characteristics', description: 'Features humans share with African apes', details: 'Large brain relative to body. Binocular/color vision. Freely rotating arms. Long upper arms. 5 digits/limb. Flat nails. Opposable thumbs. Sexual dimorphism.', diagram: '🦍 SHARED:\n🧠 Large brain/cranium\n👀 Binocular vision\n🎨 Color vision\n🦾 Rotating arms\n🖐️ 5 digits\n💅 Flat nails\n👍 Opposable thumbs', color: '#8B4513', location: 'Anatomy' },
            { title: 'Human Anatomical Differences', description: 'Features distinguishing humans from apes', details: 'Large cranium (>1400 cm³ vs <500). Small brow ridges. S-curved spine. Wide short pelvis. Small canines. Small jaws. No cranial ridges. Forward foramen magnum.', diagram: '👤 HUMAN:\nLarge brain\nSmall brow ridges\nS-curved spine\nWide short pelvis\nSmall teeth/jaws\nNo cranial ridges\nForward foramen magnum', color: '#A0522D', location: 'Skeleton' },
            { title: 'Bipedalism Evolution', description: 'Shift to upright walking', details: 'Forward foramen magnum = head balanced. Wide short pelvis = vertical support. S-curved spine = stability. Indicates bipedal adaptation. Advantages: arms free, better vision, efficient travel.', diagram: '🚶 BIPEDALISM:\nForamen magnum forward\nPelvis wide/short\nSpine S-curved\n= Upright posture\n✓ Frees arms\n✓ Better vision', color: '#CD853F', location: 'Skeletal' },
            { title: 'Brain Size Increase', description: 'Larger cranium advantages', details: 'Humans >1400 cm³, apes <500. Larger brain: speech, communication, higher intelligence, complex behavior, information processing, memory.', diagram: '🧠 BRAIN SIZE:\nSmall brain (ape)\nLarge brain (human)\n= Speech\n= Intelligence  \n= Complex behavior\n= Culture', color: '#DAA520', location: 'Cranium' },
            { title: 'Diet Evolution - Cooked Food', description: 'Raw food → cooked food anatomical changes', details: 'Apes: large teeth, jaws, cranial ridges (raw food processing). Humans: small teeth, jaws, no ridges (cooked food). Cooking allows pre-processing, reduced chewing demands.', diagram: '🍖 DIET CHANGE:\nAPE: Large teeth/jaws\n     Raw food\n     Heavy chewing\n\nHUMAN: Small teeth/jaws\n       Cooked food\n       Light chewing\n\n✓ More brain development', color: '#FFD700', location: 'Dentition/jaw' }
        ]
    },

    outOfAfrica: {
        title: 'Out of Africa Hypothesis',
        description: 'Evidence humans originated in Africa',
        steps: [
            { title: 'Fossil Evidence', description: 'Oldest human remains in Africa', details: 'Oldest Ardipithecus, Australopithecus, Homo habilis, H. erectus fossils found ONLY in Africa/Rift Valley. Oldest H. sapiens fossils in Africa. Shows African origin.', diagram: '💀 FOSSIL EVIDENCE:\nArdipithecus: Africa only\nAustralop ithecus: Africa only\nHomo habilis: Africa only\nHomo erectus: Africa first\nHomo sapiens: Africa first\n↳ Origin in Africa proven', color: '#8B4513', location: 'Africa/Rift Valley' },
            { title: 'mtDNA Evidence', description: 'Maternal DNA traces to Africa', details: 'mtDNA inherited maternally only. Analysis shows all humans trace back to ancestral female in Africa = "Mitochondrial Eve". All modern humans descended from Africa.', diagram: '🧬 mtDNA:\nInherited from MOTHER only\nAll humans analyze\n↓\nTraces to Africa\n= Mitochondrial Eve\n= African origin', color: '#A0522D', location: 'Mitochondria' },
            { title: 'Y Chromosome Evidence', description: 'Paternal DNA analysis', details: 'Y chromosome inherited paternally. Analysis shows male lineage origin in Africa. Tracks paternal ancestry. Supports Out of Africa hypothesis.', diagram: '🧬 Y-CHROMOSOME:\nInherited from FATHER only\nMale lineage analysis\n↓\nOrigin in Africa\n= African paternal root', color: '#CD853F', location: 'Y chromosome' },
            { title: 'Cultural Evidence', description: 'Oldest artifacts from Africa', details: 'Most primitive tools, cutlery, art found ONLY in Africa. Supports African origin hypothesis. Shows earliest human behavior.', diagram: '🏺 ARTIFACTS:\nOldest tools: Africa\nOldest art: Africa\nOldest cutlery: Africa\n↳ Africa = origin', color: '#DAA520', location: 'Archaeological sites' }
        ]
    },

    geneticEng: {
        title: 'Genetic Engineering & Biotechnology',
        description: 'Gene modification applications and ethics',
        steps: [
            { title: 'Genetic Modification', description: 'Transfer genes between organisms', details: 'Remove useful gene from one organism. Insert into another organism. Produces beneficial characteristics. Example: bacterial insulin production, disease-resistant crops.', diagram: '🧬 MODIFICATION:\nGene from organism A\n↓ Remove\n↓ Insert into organism B\n= New trait\n= Beneficial characteristic', color: '#FF6347', location: 'DNA level' },
            { title: 'Medical Applications', description: 'Producing medications cheaply', details: 'Insulin produced by engineered bacteria. Growth hormone produced in labs. Reduced cost, easier production, consistent supply.', diagram: '💊 MEDICAL:\nBacteria engineered\n↓ Produce insulin\nInexpensive\nLarge scale\nConsistent quality', color: '#FFA500', location: 'Bioreactors' },
            { title: 'Agricultural Benefits', description: 'Improving crops', details: 'Pest control genes inserted. Drought resistance. Disease resistance. Increased shelf-life. Increased crop yields = food security.', diagram: '🌾 AGRICULTURE:\n✓ Pest resistance\n✓ Drought resistant\n✓ Disease resistant\n✓ Better shelf-life\n= More food\n= Food security', color: '#FFD700', location: 'Crops' },
            { title: 'Ethical Concerns', description: 'Arguments against genetic engineering', details: 'Unknown long-term health effects. Biodiversity damage. Moral opposition - interfering with nature. Expensive initially. Not affordable all countries. Research funding debates.', diagram: '⚠️ CONCERNS:\n✗ Unknown effects\n✗ Biodiversity loss\n✗ Moral issues\n✗ Cost\n✗ Accessibility\n✗ Funding debates', color: '#FF6B6B', location: 'Ethical discussion' }
        ]
    },

    cloning: {
        title: 'Cloning & Stem Cells',
        description: 'Reproductive cloning and therapeutic applications',
        steps: [
            { title: 'Somatic Cell Nuclear Transfer', description: 'Cloning procedure using body cell nucleus', details: 'Take nucleus from somatic (body) cell. Remove nucleus from ovum. Insert somatic nucleus. Stimulate division. Forms embryo genetically identical to donor.', diagram: '🧬 CLONING:\n1️⃣ Take nucleus from body cell\n2️⃣ Remove ovum nucleus\n3️⃣ Insert somatic nucleus\n4️⃣ Stimulate division\n= Identical embryo', color: '#1E90FF', location: 'Cell nucleus' },
            { title: 'Embryo Development', description: 'Cloned embryo develops', details: 'Stimulated nucleus begins dividing. Forms embryo. Genetically identical to donor. Ready for implantation.', diagram: '📋 DEVELOPMENT:\nCloned nucleus\n↓ Stimulation\n↓ Divides (cleavage)\n↓ Embryo forms\n↓ Ready implant', color: '#4169E1', location: 'Cell division' },
            { title: 'Implantation & Birth', description: 'Surrogate mother carries clone', details: 'Embryo implanted into surrogate mother uterus. Develops normally. Baby born genetically identical to DNA donor.', diagram: '👶 BIRTH:\nEmbryo → implant\n↓ Surrogate mother\n↓ Normal development\n= Baby genetically identical', color: '#0047AB', location: 'Uterus' },
            { title: 'Stem Cells', description: 'Undifferentiated therapeutic cells', details: 'Undifferentiated cells - can become any tissue type. Can differentiate into specialized cells. Can self-renew. Sources: umbilical cord, embryos, bone marrow.', diagram: '🧬 STEM CELLS:\nUndifferentiated\n↓ Can become:\n• Nerve cells\n• Muscle cells\n• Blood cells\n• Any tissue type\n\nSources: cord, embryo, marrow', color: '#9932CC', location: 'Various tissues' },
            { title: 'Therapeutic Uses', description: 'Medical applications of stem cells', details: 'Spinal cord regeneration (paralysis treatment). Pancreatic cells (diabetes treatment). Heart tissue repair. Potential to replace damaged/diseased tissue.', diagram: '💉 THERAPY:\n✓ Spinal cord damage → repair\n✓ Diabetes → pancreatic cells\n✓ Heart disease → heart tissue\n✓ Organ regeneration\n= Cure diseases', color: '#DDA0DD', location: 'Damaged tissues' }
        ]
    }
};

// STATE & DOM
let currentProcess = 'meiosis';
let currentStep = 0;
let isPlaying = false;
let viewMode = 'interactive';
let autoPlayTimer = null;

const processBtns = document.querySelectorAll('.process-btn');
const modeBtns = document.querySelectorAll('.mode-btn');
const processTitle = document.getElementById('processTitle');
const processDescription = document.getElementById('processDescription');
const diagramArea = document.getElementById('diagramArea');
const stepTitle = document.getElementById('stepTitle');
const stepDescription = document.getElementById('stepDescription');
const stepEquation = document.getElementById('stepEquation');
const stepDetails = document.getElementById('stepDetails');
const stepLocation = document.getElementById('stepLocation');
const stepCounter = document.getElementById('stepCounter');
const stepPercentage = document.getElementById('stepPercentage');
const progressFill = document.getElementById('progressFill');
const stepsGrid = document.getElementById('stepsGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playBtn');
const resetBtn = document.getElementById('resetBtn');

// INIT
function init() {
    renderSteps();
    updateDisplay();
    attachEventListeners();
}

function attachEventListeners() {
    processBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            processBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentProcess = e.target.dataset.process;
            currentStep = 0;
            isPlaying = false;
            updatePlayButton();
            updateDisplay();
            renderSteps();
        });
    });

    modeBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            modeBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            viewMode = e.target.dataset.mode;
        });
    });

    prevBtn.addEventListener('click', previousStep);
    nextBtn.addEventListener('click', nextStep);
    playBtn.addEventListener('click', togglePlay);
    resetBtn.addEventListener('click', reset);
    document.addEventListener('keydown', handleKeyboard);
}

function handleKeyboard(e) {
    if (e.key === 'ArrowLeft') previousStep();
    if (e.key === 'ArrowRight') nextStep();
    if (e.key === ' ') { e.preventDefault(); togglePlay(); }
}

function nextStep() {
    const maxSteps = processes[currentProcess].steps.length;
    currentStep = (currentStep + 1) % maxSteps;
    updateDisplay();
}

function previousStep() {
    const maxSteps = processes[currentProcess].steps.length;
    currentStep = (currentStep - 1 + maxSteps) % maxSteps;
    updateDisplay();
}

function togglePlay() {
    isPlaying = !isPlaying;
    updatePlayButton();
    if (isPlaying) autoPlay();
    else clearTimeout(autoPlayTimer);
}

function reset() {
    currentStep = 0;
    isPlaying = false;
    clearTimeout(autoPlayTimer);
    updatePlayButton();
    updateDisplay();
}

function autoPlay() {
    if (!isPlaying) return;
    nextStep();
    autoPlayTimer = setTimeout(autoPlay, 3500);
}

function updateDisplay() {
    const processData = processes[currentProcess];
    const stepData = processData.steps[currentStep];

    processTitle.textContent = processData.title;
    processDescription.textContent = processData.description;
    stepTitle.textContent = stepData.title;
    stepDescription.textContent = stepData.description;
    stepEquation.textContent = stepData.diagram;
    stepDetails.textContent = stepData.details;
    stepLocation.textContent = '📍 Location: ' + stepData.location;
    
    diagramArea.style.backgroundColor = `${stepData.color}15`;
    diagramArea.style.borderLeftColor = stepData.color;
    diagramArea.style.borderTopColor = stepData.color;
    stepEquation.style.backgroundColor = `${stepData.color}25`;
    stepEquation.style.borderColor = stepData.color;
    stepEquation.style.color = stepData.color;

    const progress = ((currentStep + 1) / processData.steps.length) * 100;
    stepCounter.textContent = `Step ${currentStep + 1} of ${processData.steps.length}`;
    stepPercentage.textContent = Math.round(progress) + '%';
    progressFill.style.width = progress + '%';

    updateStepCards();
}

function updateStepCards() {
    const cards = document.querySelectorAll('.step-card');
    cards.forEach((card, idx) => {
        if (idx === currentStep) card.classList.add('active');
        else card.classList.remove('active');
    });
}

function renderSteps() {
    const processData = processes[currentProcess];
    stepsGrid.innerHTML = '';
    processData.steps.forEach((step, idx) => {
        const card = document.createElement('div');
        card.className = 'step-card';
        if (idx === currentStep) card.classList.add('active');
        card.innerHTML = `<div class="step-number">Step ${idx + 1}</div><div class="step-name">${step.title}</div>`;
        card.addEventListener('click', () => {
            currentStep = idx;
            isPlaying = false;
            clearTimeout(autoPlayTimer);
            updatePlayButton();
            updateDisplay();
        });
        stepsGrid.appendChild(card);
    });
}

function updatePlayButton() {
    if (isPlaying) {
        playBtn.classList.add('playing');
        playBtn.innerHTML = '<span class="icon">⏸</span><span>Pause</span>';
    } else {
        playBtn.classList.remove('playing');
        playBtn.innerHTML = '<span class="icon">▶</span><span>Play</span>';
    }
}

document.addEventListener('DOMContentLoaded', init);
