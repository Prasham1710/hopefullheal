type Rule = {
  patterns: RegExp[];
  responses: string[];
};

const rules: Rule[] = [
  // ── Greetings ──
  {
    patterns: [/\b(hi|hello|hey|namaste|hii|helo)\b/i],
    responses: [
      "Hello! 👋 I'm your Hopeful Heals AI assistant. I can answer questions about cancer types, symptoms, treatments, and help you navigate our platform. What would you like to know?",
      "Hi there! Welcome to Hopeful Heals. I'm here to help you with cancer-related queries. How can I assist you today?",
    ],
  },

  // ── How are you ──
  {
    patterns: [/how are you|how r u|how do you do/i],
    responses: [
      "I'm doing great and ready to help! How can I assist you with your cancer care queries today?",
    ],
  },

  // ── Thanks ──
  {
    patterns: [/\b(thank|thanks|thank you|ty|thx)\b/i],
    responses: [
      "You're welcome! 😊 Remember, you're not alone in this journey. Is there anything else I can help you with?",
      "Happy to help! Stay strong. Feel free to ask me anything else.",
    ],
  },

  // ── Bye ──
  {
    patterns: [/\b(bye|goodbye|see you|cya|good night|goodnight)\b/i],
    responses: [
      "Take care and stay strong! 💙 Remember — Cancer hi toh h, darna kya!! Visit us anytime you need support.",
    ],
  },

  // ── What is cancer ──
  {
    patterns: [/what is cancer|define cancer|cancer mean|cancer kya hai/i],
    responses: [
      "Cancer is a disease where cells in the body grow uncontrollably and spread to other parts. Normally, cells grow and die in a controlled way — but in cancer, this process breaks down. There are over 100 types of cancer, each named after the part of the body where it starts. Early detection greatly improves treatment outcomes. 🎗️",
    ],
  },

  // ── Cancer causes ──
  {
    patterns: [/cause[s]? of cancer|what causes cancer|cancer cause|cancer reason/i],
    responses: [
      "Cancer can be caused by several factors:\n• Genetic mutations (inherited or acquired)\n• Tobacco and alcohol use\n• Exposure to radiation or chemicals\n• Viral infections (HPV, Hepatitis B/C)\n• Obesity and poor diet\n• Age (risk increases with age)\n\nMany cases have no single identifiable cause. Regular screening helps catch it early!",
    ],
  },

  // ── Cancer prevention ──
  {
    patterns: [/prevent cancer|cancer prevention|avoid cancer|reduce cancer risk/i],
    responses: [
      "Here are proven ways to reduce your cancer risk:\n• ✅ Quit tobacco and limit alcohol\n• ✅ Maintain a healthy weight\n• ✅ Eat a balanced diet (fruits, vegetables, whole grains)\n• ✅ Exercise regularly\n• ✅ Get vaccinated (HPV, Hepatitis B)\n• ✅ Protect skin from UV rays\n• ✅ Go for regular cancer screenings\n• ✅ Limit exposure to harmful chemicals\n\nEarly screening saves lives!",
    ],
  },

  // ── Cancer symptoms ──
  {
    patterns: [/symptom[s]? of cancer|cancer symptom|sign[s]? of cancer|cancer sign/i],
    responses: [
      "Common warning signs of cancer (remember: CAUTION):\n• C — Change in bowel/bladder habits\n• A — A sore that doesn't heal\n• U — Unusual bleeding or discharge\n• T — Thickening or lump in body\n• I — Indigestion or difficulty swallowing\n• O — Obvious change in wart or mole\n• N — Nagging cough or hoarseness\n\nIf you notice any of these, please consult a doctor immediately. These could also have non-cancer causes.",
    ],
  },

  // ── Lung cancer ──
  {
    patterns: [/lung cancer|lungs cancer|pulmonary cancer/i],
    responses: [
      "Lung cancer is the leading cause of cancer deaths worldwide. Key facts:\n• Most common cause: Smoking (responsible for ~85% of cases)\n• Types: Non-small cell (most common) and Small cell lung cancer\n• Symptoms: Persistent cough, blood in sputum, chest pain, breathlessness\n• Screening: Low-dose CT scan recommended for high-risk individuals\n• Treatment: Surgery, chemotherapy, radiation, targeted therapy, immunotherapy\n\nYou can learn more on our Lung Cancer page. 🫁",
    ],
  },

  // ── Breast cancer ──
  {
    patterns: [/breast cancer|mammary cancer/i],
    responses: [
      "Breast cancer is the most common cancer in women globally. Key facts:\n• Symptoms: Lump in breast, change in size/shape, nipple discharge, skin dimpling\n• Screening: Monthly self-exam + annual mammogram (after age 40)\n• Risk factors: Family history, age, hormone levels, obesity\n• Treatment: Surgery (lumpectomy/mastectomy), chemotherapy, radiation, hormone therapy\n• Survival rate: Very high when caught early (95%+ in Stage 1)\n\nEarly detection saves lives — get screened regularly! 🎗️",
    ],
  },

  // ── Prostate cancer ──
  {
    patterns: [/prostate cancer/i],
    responses: [
      "Prostate cancer is the most common cancer in men over 50. Key facts:\n• Symptoms: Difficulty urinating, frequent urination at night, blood in urine/semen, erectile dysfunction\n• Screening: PSA blood test + digital rectal exam\n• Risk factors: Age, family history, African descent, diet\n• Treatment: Active surveillance, surgery, radiation, hormone therapy\n\nMany prostate cancers are slow-growing — consult an oncologist to understand your best treatment path.",
    ],
  },

  // ── Skin cancer ──
  {
    patterns: [/skin cancer|melanoma/i],
    responses: [
      "Skin cancer is the most diagnosed cancer overall. Key facts:\n• Types: Basal cell carcinoma, Squamous cell carcinoma, Melanoma (most dangerous)\n• Main cause: UV radiation from sun or tanning beds\n• Warning signs (ABCDE rule):\n  A — Asymmetry\n  B — Border irregularity\n  C — Colour variation\n  D — Diameter >6mm\n  E — Evolving size/shape\n• Prevention: Sunscreen SPF 30+, protective clothing, avoid tanning beds\n• Treatment: Excision, radiation, immunotherapy for advanced cases",
    ],
  },

  // ── Blood / Leukemia ──
  {
    patterns: [/leukemia|blood cancer|leukaemia/i],
    responses: [
      "Leukemia is a cancer of blood-forming tissues. Key facts:\n• Affects white blood cells — they grow abnormally and crowd out healthy cells\n• Types: ALL, AML, CLL, CML (classified by cell type and growth speed)\n• Symptoms: Fatigue, frequent infections, easy bruising/bleeding, bone pain, swollen lymph nodes\n• Treatment: Chemotherapy, targeted therapy, bone marrow transplant, immunotherapy\n• Most childhood leukemias (ALL) have very high cure rates (>90%)",
    ],
  },

  // ── Cervical cancer ──
  {
    patterns: [/cervical cancer|cervix cancer/i],
    responses: [
      "Cervical cancer is largely preventable. Key facts:\n• Main cause: Human Papillomavirus (HPV) — a sexually transmitted infection\n• Symptoms: Unusual vaginal bleeding, pelvic pain, pain during intercourse\n• Prevention: HPV vaccine (girls aged 9-14, most effective before sexual activity) + regular Pap smears\n• Screening: Pap test every 3 years (ages 21-65)\n• Treatment: Surgery, radiation, chemotherapy\n\nIndia has the second-highest burden of cervical cancer globally — early vaccination is crucial!",
    ],
  },

  // ── Chemotherapy ──
  {
    patterns: [/chemo(therapy)?|chemo treatment/i],
    responses: [
      "Chemotherapy (chemo) uses drugs to destroy cancer cells or stop them from growing. Here's what to know:\n• How it works: Targets fast-dividing cells (cancer cells divide rapidly)\n• Given as: IV infusion, oral pills, or injections\n• Common side effects: Nausea, fatigue, hair loss, infection risk, mouth sores\n• These side effects are usually temporary and manageable\n• Chemo can be used alone or combined with surgery, radiation, or immunotherapy\n\nTalk to your oncologist about what to expect during your specific chemo regimen.",
    ],
  },

  // ── Radiation therapy ──
  {
    patterns: [/radiation|radiotherapy|radiation therapy/i],
    responses: [
      "Radiation therapy uses high-energy rays to destroy cancer cells. Key facts:\n• Types: External beam radiation and internal radiation (brachytherapy)\n• Very precise — modern technology targets tumours while protecting healthy tissue\n• Common side effects: Skin irritation, fatigue (in the treated area)\n• Sessions: Usually 5 days/week for several weeks\n• Often used after surgery to kill remaining cancer cells, or before surgery to shrink tumours\n\nRadiation is painless during treatment — like getting an X-ray.",
    ],
  },

  // ── Immunotherapy ──
  {
    patterns: [/immunotherapy|immune therapy|checkpoint/i],
    responses: [
      "Immunotherapy boosts your own immune system to fight cancer. Key facts:\n• How it works: Removes the 'brakes' that cancer puts on immune cells, or enhances immune response\n• Types: Checkpoint inhibitors, CAR-T cell therapy, cancer vaccines, monoclonal antibodies\n• Benefits: Can work when other treatments fail; can have long-lasting responses\n• Side effects: Immune-related reactions (fatigue, rash, inflammation)\n• Particularly effective for: Melanoma, lung cancer, bladder cancer, certain lymphomas\n\nImmunotherapy has revolutionised cancer treatment in the last decade!",
    ],
  },

  // ── Surgery ──
  {
    patterns: [/surgery|surgical treatment|cancer surgery|tumor removal|tumour removal/i],
    responses: [
      "Surgery is often the primary treatment for solid tumours. Key facts:\n• Purpose: Remove the tumour, nearby tissue, or lymph nodes\n• Types: Open surgery, laparoscopic (keyhole), robotic-assisted\n• Often combined with chemo or radiation for best results\n• Recovery depends on the type and location of surgery\n• Biopsy (small tissue sample) is a minor surgical procedure to diagnose cancer\n\nYour oncologist will discuss whether surgery is right for your specific cancer type and stage.",
    ],
  },

  // ── Stages of cancer ──
  {
    patterns: [/stage[s]? of cancer|cancer stage|staging/i],
    responses: [
      "Cancer staging describes how far the cancer has spread:\n• Stage 0: Cancer cells present but haven't invaded nearby tissue (in-situ)\n• Stage 1: Cancer is small and localised — highest cure rates\n• Stage 2: Cancer has grown but hasn't spread far\n• Stage 3: Cancer has spread to nearby lymph nodes/tissues\n• Stage 4: Cancer has spread to distant organs (metastatic)\n\nStage determines treatment options and prognosis. Earlier stages generally have better outcomes. Regular screening catches cancer at lower stages!",
    ],
  },

  // ── Diagnosis ──
  {
    patterns: [/diagnos(is|e|ed)|biopsy|scan|mri|ct scan|pet scan|blood test for cancer/i],
    responses: [
      "Cancer is diagnosed through several methods:\n• 🩸 Blood tests: Check for tumour markers (PSA, CA-125, CEA, AFP)\n• 🔬 Biopsy: Removing a tissue sample to examine under a microscope — the most definitive test\n• 🖥️ Imaging: X-ray, CT scan, MRI, PET scan — show location and size of tumours\n• 🔍 Endoscopy: Camera examines inside body (colonoscopy, bronchoscopy)\n• 🧬 Genetic testing: Identifies cancer-causing gene mutations (BRCA1/2, etc.)\n\nIf you're concerned, book a consultation with one of our oncologists!",
    ],
  },

  // ── Pain management ──
  {
    patterns: [/pain|pain management|cancer pain|pain relief/i],
    responses: [
      "Cancer pain is manageable and you don't have to suffer. Options include:\n• Medications: Paracetamol, NSAIDs, opioids (prescribed by doctor)\n• Nerve blocks: Anaesthetic injected near pain-causing nerves\n• Radiation therapy: Can shrink tumours pressing on nerves\n• Physical therapy and relaxation techniques\n• Palliative care specialists focus specifically on pain and comfort\n\nAlways tell your doctor about your pain level — they can adjust your treatment. You can also browse our pain relief medications on the Medicines page.",
    ],
  },

  // ── Nutrition / Diet ──
  {
    patterns: [/diet|nutrition|food|eat|eating during cancer|cancer diet/i],
    responses: [
      "Good nutrition is vital during cancer treatment:\n• ✅ Eat protein-rich foods (eggs, legumes, fish, poultry) to maintain strength\n• ✅ Stay hydrated — 8-10 glasses of water daily\n• ✅ Small, frequent meals if you have nausea\n• ✅ Plenty of fruits and vegetables for antioxidants\n• ❌ Avoid processed foods, excess sugar, alcohol\n• ❌ Avoid raw/undercooked food if immune system is weak (during chemo)\n\nA registered dietitian specialising in oncology can create a personalised plan for you.",
    ],
  },

  // ── Mental health / Support ──
  {
    patterns: [/anxious|anxiety|depressed|depression|scared|fear|worried|mental health|emotional|cope|coping|sad|upset/i],
    responses: [
      "It's completely normal to feel anxious, scared, or overwhelmed when dealing with cancer. Your feelings are valid. 💙\n\nThings that can help:\n• Talk to a trusted friend, family member, or counsellor\n• Join a cancer support group (shared experiences are powerful)\n• Practice mindfulness, meditation, or gentle yoga\n• Focus on what you can control — your daily routine, nutrition, rest\n• Ask your oncologist about palliative care and mental health support\n\nRemember: Cancer hi toh h, darna kya!! You are stronger than you think. We are here for you. 🙏",
    ],
  },

  // ── Hair loss ──
  {
    patterns: [/hair loss|hair fall|alopecia|losing hair/i],
    responses: [
      "Hair loss (alopecia) is a common side effect of chemotherapy and radiation to the head. Here's what to know:\n• It's temporary — hair usually grows back 3-6 months after treatment ends\n• May come back with different texture or colour initially\n• Tips: Cut hair short before treatment, use gentle shampoo, consider wigs/scarves/hats\n• Cold cap therapy can reduce hair loss during some chemo regimens\n\nMany people find this emotionally difficult — that's completely understandable. Hair loss is temporary; your strength is not. 💪",
    ],
  },

  // ── Book appointment ──
  {
    patterns: [/book (an )?appointment|consult (a )?doctor|see (a )?doctor|appointment book|find doctor|oncologist|specialist/i],
    responses: [
      "You can book a consultation with our verified oncology specialists right here on Hopeful Heals! 🩺\n\n👉 Go to: /appointment/doctors\n\nOur doctors are available for video and chat consultations. You can select your preferred doctor, pick a date and time, and confirm your booking in just a few clicks.\n\nShall I help you with anything else?",
    ],
  },

  // ── Medicines ──
  {
    patterns: [/medicine[s]?|medication[s]?|drug[s]?|pharmacy|buy medicine|order medicine|prescription/i],
    responses: [
      "Hopeful Heals provides authentic, pharmacy-verified cancer medications delivered to your door! 💊\n\n👉 Browse medicines at: /doctor\n\nAll medications are:\n• 100% authentic and verified\n• Available with free delivery\n• Easy returns within 7 days\n• Prescription-ready\n\nDo you have a specific medication in mind?",
    ],
  },

  // ── Cost / Price ──
  {
    patterns: [/cost|price|fee|expensive|affordable|insurance|coverage/i],
    responses: [
      "Cancer treatment costs vary widely based on the type, stage, and treatment plan. Here's a general overview:\n• Surgery: ₹50,000 – ₹5,00,000+\n• Chemotherapy: ₹20,000 – ₹1,50,000 per cycle\n• Radiation: ₹1,00,000 – ₹5,00,000 for a full course\n• Targeted therapy: Can be expensive but many assistance programmes exist\n\nFinancial assistance options:\n• Government schemes: Ayushman Bharat (PM-JAY) covers cancer treatment\n• NGOs: Indian Cancer Society, Cancare Foundation\n• Hospital financial aid departments\n\nTalk to your oncologist's team about financial assistance options.",
    ],
  },

  // ── Hopeful heals / About platform ──
  {
    patterns: [/hopeful heals|about (this )?platform|what (can you|do you) do|what is this/i],
    responses: [
      "Hopeful Heals is India's trusted cancer care platform! 🎗️\n\nWe offer:\n• 🩺 Book appointments with 200+ verified oncologists\n• 💊 Buy authentic cancer medications online\n• 📚 Reliable information on 100+ cancer types\n• 🤖 24/7 AI chat support (that's me!)\n• 💰 Financial assistance guidance\n\nOur mission: Support. Educate. Advocate.\n\nHow can I help you today?",
    ],
  },

  // ── Lymphoma ──
  {
    patterns: [/lymphoma|hodgkin|non.hodgkin/i],
    responses: [
      "Lymphoma is cancer of the lymphatic system (part of the immune system). Key facts:\n• Two main types: Hodgkin lymphoma (HL) and Non-Hodgkin lymphoma (NHL)\n• Symptoms: Swollen lymph nodes (neck, armpits, groin), fever, night sweats, unexplained weight loss, fatigue\n• Hodgkin lymphoma is one of the most curable cancers when caught early\n• Treatment: Chemotherapy, radiation, immunotherapy, stem cell transplant\n• NHL is more common and includes many subtypes\n\nEarly diagnosis leads to excellent outcomes for most lymphoma types!",
    ],
  },

  // ── Pancreatic cancer ──
  {
    patterns: [/pancreatic cancer|pancreas cancer/i],
    responses: [
      "Pancreatic cancer is one of the more challenging cancers to treat, often diagnosed late. Key facts:\n• Symptoms: Jaundice (yellowing of skin/eyes), abdominal/back pain, weight loss, digestive issues\n• Often has no symptoms in early stages — making early detection difficult\n• Risk factors: Smoking, obesity, family history, chronic pancreatitis, diabetes\n• Treatment: Surgery (Whipple procedure), chemotherapy, radiation\n• Research is advancing rapidly — new targeted therapies are in trials\n\nRegular check-ups are important, especially if you have risk factors.",
    ],
  },

  // ── Colorectal cancer ──
  {
    patterns: [/colorectal|colon cancer|rectal cancer|bowel cancer/i],
    responses: [
      "Colorectal cancer affects the colon or rectum. Key facts:\n• 3rd most common cancer globally\n• Symptoms: Change in bowel habits, blood in stool, abdominal pain, unexplained weight loss, fatigue\n• Screening: Colonoscopy every 10 years from age 45 (or earlier if family history)\n• Risk factors: Age, red/processed meat diet, obesity, smoking, family history\n• Treatment: Surgery, chemotherapy, radiation, targeted therapy\n• Highly curable when caught early (Stage 1: 90%+ survival rate)\n\nScreening colonoscopy can prevent colorectal cancer by removing polyps before they become cancerous!",
    ],
  },

  // ── Thyroid cancer ──
  {
    patterns: [/thyroid cancer/i],
    responses: [
      "Thyroid cancer is highly treatable and has excellent outcomes. Key facts:\n• Most common type: Papillary thyroid carcinoma (very slow-growing)\n• Symptoms: Lump in neck, voice changes, difficulty swallowing, swollen lymph nodes\n• Diagnosis: Ultrasound, fine needle biopsy, thyroid function tests\n• Treatment: Surgery (thyroidectomy) + radioactive iodine therapy\n• Prognosis: Excellent — 10-year survival rate is 98%+ for well-differentiated types\n\nDon't let a thyroid cancer diagnosis scare you — most thyroid cancers are very treatable!",
    ],
  },

  // ── Emergency / Urgent ──
  {
    patterns: [/emergency|urgent|severe pain|can't breathe|cannot breathe|difficulty breathing|chest pain|collaps/i],
    responses: [
      "⚠️ This sounds like a medical emergency. Please:\n\n🚨 Call 108 (India Emergency Services) immediately\n🏥 Go to the nearest emergency room\n\nDo not wait — get immediate medical attention. I am an AI assistant and cannot provide emergency medical care.",
    ],
  },

  // ── Survival rate / Prognosis ──
  {
    patterns: [/survival rate|prognosis|how long|life expectancy|cure rate|can cancer be cured/i],
    responses: [
      "Cancer survival rates have improved dramatically with modern medicine. Important context:\n• Survival rates are statistics based on large populations — they don't predict individual outcomes\n• Early-stage cancers generally have much higher survival rates\n• Example survival rates (5-year):\n  - Thyroid cancer: 98%+\n  - Breast cancer (Stage 1): 99%+\n  - Prostate cancer (localised): 99%+\n  - Lung cancer (all stages): ~25% (improving with new therapies)\n  - Pancreatic cancer: ~12% (but improving)\n\nMany factors affect prognosis: age, overall health, treatment response, cancer type. Your oncologist can give you personalised information.",
    ],
  },

  // ── Second opinion ──
  {
    patterns: [/second opinion|another doctor|different doctor/i],
    responses: [
      "Seeking a second opinion is completely normal and encouraged in cancer care! 👍\n\nReasons to get a second opinion:\n• Confirm the diagnosis\n• Explore different treatment options\n• Access specialised expertise\n• Peace of mind\n\nHow to get one:\n• Ask your current oncologist for a referral\n• Book with a different specialist on Hopeful Heals\n\n👉 Visit /appointment/doctors to book with another specialist\n\nGood doctors welcome second opinions — they're part of good care.",
    ],
  },
];

// Fallback responses
const fallbacks = [
  "That's a great question! While I don't have specific information on that topic, I'd recommend consulting one of our oncologists for personalised guidance. You can book at /appointment/doctors 🩺",
  "I'm not sure about that specific topic. For accurate medical advice, please consult a qualified oncologist. Our specialists at Hopeful Heals can help — book at /appointment/doctors",
  "For detailed and personalised medical information on that, I'd recommend speaking with one of our cancer specialists. Book a consultation at /appointment/doctors 🎗️",
  "That's something best answered by a medical professional. Our oncologists at Hopeful Heals are here to help — visit /appointment/doctors to book a consultation.",
];

function pick(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getBotResponse(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "Please type a question and I'll do my best to help!";

  for (const rule of rules) {
    if (rule.patterns.some((p) => p.test(trimmed))) {
      return pick(rule.responses);
    }
  }

  return pick(fallbacks);
}
