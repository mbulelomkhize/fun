// ============================================
// LIFE SCIENCES VISUALIZER - JAVASCRIPT
// ============================================

// ============================================
// PROCESS DATA
// ============================================
const processes = {
    photosynthesis: {
        title: 'Photosynthesis',
        description: 'Light-dependent & light-independent reactions in chloroplasts',
        steps: [
            {
                title: 'Light Absorption',
                description: 'Chlorophyll in thylakoid membranes absorbs photons',
                diagram: 'Light energy excites electrons in chlorophyll molecules',
                color: '#FFD700'
            },
            {
                title: 'Light-Dependent Reactions',
                description: 'Occurs in thylakoid membrane; produces ATP and NADPH',
                diagram: 'Water is split (photolysis): 2H₂O → O₂ + 4H⁺ + 4e⁻',
                color: '#87CEEB'
            },
            {
                title: 'Electron Transport Chain',
                description: 'Electrons move through photosystem II and I',
                diagram: 'Energy pumps H⁺ ions creating proton gradient',
                color: '#90EE90'
            },
            {
                title: 'ATP & NADPH Production',
                description: 'Chemiosmosis drives ATP synthesis; NADP⁺ reduced to NADPH',
                diagram: 'ADP + Pi → ATP via ATP synthase',
                color: '#FFB6C1'
            },
            {
                title: 'Calvin Cycle (Light-Independent)',
                description: 'Occurs in stroma; fixes CO₂ into glucose',
                diagram: '3 stages: Carbon fixation, Reduction, Regeneration of RuBP',
                color: '#DDA0DD'
            },
            {
                title: 'Glucose Synthesis',
                description: 'G3P molecules combine to form glucose (C₆H₁₂O₆)',
                diagram: 'Net equation: 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂',
                color: '#98FB98'
            }
        ]
    },
    respiration: {
        title: 'Cellular Respiration',
        description: 'Aerobic breakdown of glucose to release energy',
        steps: [
            {
                title: 'Glycolysis',
                description: 'Glucose broken down in cytoplasm',
                diagram: 'C₆H₁₂O₆ → 2 Pyruvate; Produces 2 ATP (net), 2 NADH',
                color: '#FF6347'
            },
            {
                title: 'Pyruvate Oxidation',
                description: 'Pyruvate converted to Acetyl-CoA in mitochondrial matrix',
                diagram: 'Pyruvate + CoA + NAD⁺ → Acetyl-CoA + NADH + CO₂',
                color: '#FFA500'
            },
            {
                title: 'Citric Acid Cycle (Krebs Cycle)',
                description: 'Acetyl-CoA oxidized in mitochondrial matrix',
                diagram: 'Produces: 2 CO₂, 3 NADH, 1 FADH₂, 1 ATP per turn',
                color: '#FF8C00'
            },
            {
                title: 'Electron Transport Chain',
                description: 'NADH and FADH₂ transfer electrons through inner membrane',
                diagram: 'Electrons move from complex I through IV to oxygen',
                color: '#DC143C'
            },
            {
                title: 'Oxidative Phosphorylation',
                description: 'Proton gradient drives ATP synthesis',
                diagram: 'ADP + Pi → ATP via chemiosmosis (32-34 ATP total)',
                color: '#C71585'
            },
            {
                title: 'Water Formation',
                description: 'Final electron acceptor (oxygen) accepts electrons',
                diagram: '4e⁻ + 4H⁺ + O₂ → 2H₂O',
                color: '#4169E1'
            }
        ]
    },
    proteinSynthesis: {
        title: 'Protein Synthesis',
        description: 'Translation of mRNA into polypeptide chains',
        steps: [
            {
                title: 'Transcription (DNA → mRNA)',
                description: 'mRNA is synthesized from DNA template in nucleus',
                diagram: 'RNA polymerase reads DNA and creates complementary mRNA strand',
                color: '#9932CC'
            },
            {
                title: 'mRNA Processing',
                description: '5\' cap and 3\' poly-A tail added; introns removed',
                diagram: 'mRNA is modified and exported from nucleus to cytoplasm',
                color: '#BA55D3'
            },
            {
                title: 'Ribosome Binding',
                description: 'Small ribosomal subunit attaches to mRNA at start codon',
                diagram: 'Start codon: AUG codes for methionine (first amino acid)',
                color: '#DDA0DD'
            },
            {
                title: 'Initiation Complex Formation',
                description: 'Large ribosomal subunit joins small subunit',
                diagram: 'tRNA with methionine in P site, ribosome ready for elongation',
                color: '#EE82EE'
            },
            {
                title: 'Elongation (Codon by Codon)',
                description: 'tRNA molecules bring amino acids; peptide bonds form',
                diagram: 'Each codon read; tRNA delivers amino acid; ribosome moves along mRNA',
                color: '#DA70D6'
            },
            {
                title: 'Termination',
                description: 'Stop codon signals end of translation',
                diagram: 'Release factors cause polypeptide chain to be released',
                color: '#800080'
            }
        ]
    },
    dnaReplication: {
        title: 'DNA Replication',
        description: 'Semi-conservative copying of DNA before cell division',
        steps: [
            {
                title: 'DNA Unwinding',
                description: 'Helicase breaks hydrogen bonds between base pairs',
                diagram: 'Double helix separates into two single strands (replication fork)',
                color: '#1E90FF'
            },
            {
                title: 'Primer Synthesis',
                description: 'Primase synthesizes short RNA primers on template strands',
                diagram: 'RNA primers provide 3\'-OH group for DNA polymerase to begin',
                color: '#4169E1'
            },
            {
                title: 'DNA Polymerase III Activity',
                description: 'Adds nucleotides to growing DNA strand',
                diagram: 'Leading strand (continuous); Lagging strand (Okazaki fragments)',
                color: '#0047AB'
            },
            {
                title: 'Okazaki Fragment Formation',
                description: 'Multiple short DNA segments on lagging strand',
                diagram: 'Each fragment 1000-2000 nucleotides in prokaryotes, 100-200 in eukaryotes',
                color: '#00008B'
            },
            {
                title: 'Primer Removal & Ligation',
                description: 'DNA polymerase I removes primers; DNA ligase seals nicks',
                diagram: 'Phosphodiester bonds form continuous DNA backbone',
                color: '#191970'
            },
            {
                title: 'Semi-Conservative Result',
                description: 'Two identical DNA molecules, each with one old and one new strand',
                diagram: 'Each daughter DNA = original strand + newly synthesized strand',
                color: '#000080'
            }
        ]
    },
    digestion: {
        title: 'Digestive System',
        description: 'Mechanical and chemical breakdown of food',
        steps: [
            {
                title: 'Ingestion & Mastication',
                description: 'Food enters mouth; chewed by teeth',
                diagram: 'Saliva (amylase) begins starch digestion',
                color: '#8B4513'
            },
            {
                title: 'Esophageal Transport',
                description: 'Bolus pushed down esophagus by peristalsis',
                diagram: 'Muscular contractions move food to stomach',
                color: '#A0522D'
            },
            {
                title: 'Gastric Digestion',
                description: 'Stomach churns; HCl and pepsin work on proteins',
                diagram: 'Chyme forms; fats largely unaffected; some nutrient absorption',
                color: '#CD853F'
            },
            {
                title: 'Small Intestine Entry',
                description: 'Chyme released gradually into small intestine',
                diagram: 'Pyloric sphincter controls release; duodenum receives chyme',
                color: '#DAA520'
            },
            {
                title: 'Pancreatic & Bile Enzymes',
                description: 'Pancreas secretes enzymes; liver secretes bile',
                diagram: 'Lipases break fats; proteases finish proteins; amylases digest carbs',
                color: '#FFD700'
            },
            {
                title: 'Nutrient Absorption',
                description: 'Villi absorb glucose, amino acids, fatty acids, vitamins',
                diagram: 'Nutrients enter bloodstream for distribution to cells',
                color: '#F0E68C'
            }
        ]
    },
    circulation: {
        title: 'Circulatory System',
        description: 'Transport of oxygen, nutrients, and waste throughout body',
        steps: [
            {
                title: 'Deoxygenated Blood to Heart',
                description: 'Blood returns from body tissues via superior/inferior vena cava',
                diagram: 'Blood enters right atrium (low oxygen, high CO₂)',
                color: '#8B0000'
            },
            {
                title: 'Right Ventricle Contraction',
                description: 'Deoxygenated blood pumped to lungs',
                diagram: 'Pulmonary artery carries blood to lungs (right and left)',
                color: '#A52A2A'
            },
            {
                title: 'Lung Gas Exchange',
                description: 'CO₂ released; O₂ picked up by hemoglobin',
                diagram: 'Oxygenated blood returns via pulmonary veins',
                color: '#DC143C'
            },
            {
                title: 'Left Atrium & Ventricle',
                description: 'Oxygenated blood enters left atrium',
                diagram: 'Left ventricle pumps blood throughout body via aorta',
                color: '#FF0000'
            },
            {
                title: 'Systemic Circulation',
                description: 'Oxygenated blood distributed to all body tissues',
                diagram: 'Arteries → Arterioles → Capillaries for nutrient/waste exchange',
                color: '#FF6347'
            },
            {
                title: 'Capillary Exchange',
                description: 'Oxygen and nutrients diffuse into cells; CO₂ diffuses out',
                diagram: 'Blood becomes deoxygenated; cycle repeats',
                color: '#FFA07A'
            }
        ]
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================
let currentProcess = 'photosynthesis';
let currentStep = 0;
let isPlaying = false;
let viewMode = 'interactive';
let autoPlayTimer = null;

// ============================================
// DOM ELEMENTS
// ============================================
const processBtns = document.querySelectorAll('.process-btn');
const modeBtns = document.querySelectorAll('.mode-btn');
const processTitle = document.getElementById('processTitle');
const processDescription = document.getElementById('processDescription');
const diagramArea = document.getElementById('diagramArea');
const stepTitle = document.getElementById('stepTitle');
const stepDescription = document.getElementById('stepDescription');
const stepEquation = document.getElementById('stepEquation');
const stepCounter = document.getElementById('stepCounter');
const stepPercentage = document.getElementById('stepPercentage');
const progressFill = document.getElementById('progressFill');
const stepsGrid = document.getElementById('stepsGrid');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playBtn');
const resetBtn = document.getElementById('resetBtn');

// ============================================
// INITIALIZATION
// ============================================
function init() {
    console.log('Initializing Life Sciences Visualizer...');
    renderSteps();
    updateDisplay();
    attachEventListeners();
    console.log('Initialization complete!');
}

// ============================================
// EVENT LISTENERS
// ============================================
function attachEventListeners() {
    // Process selector buttons
    processBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            processBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentProcess = e.target.dataset.process;
            currentStep = 0;
            isPlaying = false;
            updatePlayButton();
            updateDisplay();
            renderSteps();
            console.log('Switched to process:', currentProcess);
        });
    });

    // View mode buttons
    modeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            modeBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            viewMode = e.target.dataset.mode;
            console.log('View mode changed to:', viewMode);
        });
    });

    // Control buttons
    prevBtn.addEventListener('click', previousStep);
    nextBtn.addEventListener('click', nextStep);
    playBtn.addEventListener('click', togglePlay);
    resetBtn.addEventListener('click', reset);

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
function handleKeyboard(e) {
    if (e.key === 'ArrowLeft') previousStep();
    if (e.key === 'ArrowRight') nextStep();
    if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
    }
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================
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
    
    if (isPlaying) {
        autoPlay();
        console.log('Autoplay started');
    } else {
        clearTimeout(autoPlayTimer);
        console.log('Autoplay stopped');
    }
}

function reset() {
    currentStep = 0;
    isPlaying = false;
    clearTimeout(autoPlayTimer);
    updatePlayButton();
    updateDisplay();
    console.log('Reset to initial state');
}

// ============================================
// AUTO-PLAY FUNCTION
// ============================================
function autoPlay() {
    if (!isPlaying) return;
    
    nextStep();
    autoPlayTimer = setTimeout(autoPlay, 2500);
}

// ============================================
// UPDATE DISPLAY
// ============================================
function updateDisplay() {
    const processData = processes[currentProcess];
    const stepData = processData.steps[currentStep];

    // Update header
    processTitle.textContent = processData.title;
    processDescription.textContent = processData.description;

    // Update diagram content
    stepTitle.textContent = stepData.title;
    stepDescription.textContent = stepData.description;
    stepEquation.textContent = stepData.diagram;
    
    // Update diagram colors
    diagramArea.style.backgroundColor = `${stepData.color}20`;
    diagramArea.style.borderLeftColor = stepData.color;
    stepEquation.style.backgroundColor = `${stepData.color}30`;
    stepEquation.style.borderColor = stepData.color;
    stepEquation.style.color = stepData.color;

    // Update progress bar
    const progress = ((currentStep + 1) / processData.steps.length) * 100;
    stepCounter.textContent = `Step ${currentStep + 1} of ${processData.steps.length}`;
    stepPercentage.textContent = Math.round(progress) + '%';
    progressFill.style.width = progress + '%';

    // Update step cards
    updateStepCards();

    console.log(`Updated to step ${currentStep + 1}/${processData.steps.length}`);
}

// ============================================
// UPDATE STEP CARDS
// ============================================
function updateStepCards() {
    const cards = document.querySelectorAll('.step-card');
    cards.forEach((card, idx) => {
        if (idx === currentStep) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

// ============================================
// RENDER STEPS GRID
// ============================================
function renderSteps() {
    const processData = processes[currentProcess];
    stepsGrid.innerHTML = '';

    processData.steps.forEach((step, idx) => {
        const card = document.createElement('div');
        card.className = 'step-card';
        if (idx === currentStep) {
            card.classList.add('active');
        }

        card.innerHTML = `
            <div class="step-number">Step ${idx + 1}</div>
            <div class="step-name">${step.title}</div>
        `;

        // Add click event to jump to step
        card.addEventListener('click', () => {
            currentStep = idx;
            isPlaying = false;
            clearTimeout(autoPlayTimer);
            updatePlayButton();
            updateDisplay();
            console.log('Jumped to step:', idx + 1);
        });

        // Add hover effect
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });

        stepsGrid.appendChild(card);
    });
}

// ============================================
// UPDATE PLAY BUTTON
// ============================================
function updatePlayButton() {
    if (isPlaying) {
        playBtn.classList.add('playing');
        playBtn.innerHTML = '<span class="icon">⏸</span><span>Pause</span>';
    } else {
        playBtn.classList.remove('playing');
        playBtn.innerHTML = '<span class="icon">▶</span><span>Play</span>';
    }
}

// ============================================
// START APPLICATION
// ============================================
document.addEventListener('DOMContentLoaded', init);
