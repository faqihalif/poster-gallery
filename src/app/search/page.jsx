"use client"

import Link from 'next/link'
import { useState, useEffect, useRef } from "react"
import PosterDialog from "./components/poster-dialog"

export default function Home() {
    const data = [
        {
            "id": 1,
            "poster_id": "EP-01",
            "title": "A Comparative Network Meta Analysis of Effectiveness of Diverse Therapies for Amblyopia: from Patching to Interactive Binocular",
            "author": "Ahmad Azhar Marzuqi",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 2,
            "poster_id": "EP-02",
            "title": "Subthreshold Micropulse Laser versus Oral Mineralocorticoid Antagonist for Chronic Central Serous Chorioretinopathy: A Systematic Review and Meta-analysis",
            "author": "Ichsan Fauzi Triyoga",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 3,
            "poster_id": "EP-03",
            "title": "Clinical Efficacy and Safety Profile of Bimatoprost-Timolol Fixed Combination Versus Other Fixed Combination for Open-Angle Glaucoma in Elderly Population: A Meta-Analysis of Randomized Controlled Trials",
            "author": "Ni Putu Kostarika Melia Daradila",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 4,
            "poster_id": "EP-04",
            "title": "Sensitivity and Specificity of Artificial Intelligence-Assisted Imaging in Diagnosis of Optic Neuropathies: A Systematic Review and Meta-Analysis",
            "author": "Angelina Patricia Chandra",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 5,
            "poster_id": "EP-06",
            "title": "Intra- and Post-operative Clinical Outcome and Safety Profile of Small-Gauge Vitrectomy with Pre-operative Intravitreal Ranibizumab for Proliferative Diabetic Retinopathy: A Meta-Analysis of Retrospective and Prospective Studies",
            "author": "Komang Diah Kurnia Kesumaputri",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 6,
            "poster_id": "EP-07",
            "title": "Excellent Outcome of Branch Retinal Artery Occlusion Treatment in Adult Patient",
            "author": "Nurizki Meutiarani",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 7,
            "poster_id": "EP-08",
            "title": "Breaking Down Ocular Toxoplasmosis: Recent Insights for Ocular Toxoplasmosis Therapy: A Systematic Review and Network Meta-Analysis",
            "author": "Muhammad Zacky Hafiyyan Maulana",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 8,
            "poster_id": "EP-11",
            "title": "The Analysis Study of Effectiveness of Vitamin D Supplementation for Prevention of Open Angle Glaucoma: A Comprehensive Systematic Review",
            "author": "Cintya Ristimawarni",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 9,
            "poster_id": "EP-13",
            "title": "TOPICAL CYCLOPENTOLATE INTOXICATION IN ROUTINE PEDIATRIC EYE EXAMINATION",
            "author": "Melissa Marselina",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 10,
            "poster_id": "EP-14",
            "title": "Voriconazole for the Treatment of Fungal Keratitis progressing to Endophthalmitis: A Systematic Review",
            "author": "Adelia Rizka Amila",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 11,
            "poster_id": "EP-15",
            "title": "Improvement of Stereoacuity in Amblyopic Patients Using Virtual Reality Head Mounted Display Devices: A Systematic Review and Meta-Analysis",
            "author": "Angelina Riadi Alim Suprapto",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 12,
            "poster_id": "EP-16",
            "title": "Impact of Obesity on Ocular Parameters in Children: A Meta-Analysis",
            "author": "Keneysha Naomi Mataniari",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 13,
            "poster_id": "EP-17",
            "title": "Treatment Results for Age-Related Macular Degeneration with Aflibercept and Faricimab: A Systematic Review",
            "author": "NURUL AINUN AZIZI",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 14,
            "poster_id": "EP-18",
            "title": "Efficacy and Safety of Treatments for Ocular Surface Squamous Neoplasia: A Systematic Review and Network Meta-Analysis",
            "author": "Christina Wunardi",
            "subspecialties": "Orbit And Tumor",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 15,
            "poster_id": "EP-19",
            "title": "Surprising Refractive Surprise in Patient with Primary Angle Closure Glaucoma: A Late Recognized Refractive Surprise Case",
            "author": "Yelsi Khairani",
            "subspecialties": "Cataract And Refractive Surgery",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 16,
            "poster_id": "EP-21",
            "title": "Efficacy of Cyclosporine 0.05% Eye Drops Compared to Conventional Therapies on Postrefractive Surgery Dry Eye Syndrome: A Systematic Review and Meta-Analysis",
            "author": "Regan Elbert",
            "subspecialties": "Cataract And Refractive Surgery",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 17,
            "poster_id": "EP-22",
            "title": "Efficacy of Intravitreal Ranibizumab or Aflibercept After Bevacizumab Therapy for Diabetic Macular Edema : A Systematic Review and Meta-analysis",
            "author": "Fahrayhansyah Muhammad Faqih",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 18,
            "poster_id": "EP-23",
            "title": "Estimation of Childhood Myopia Progression Using Web-based Calculator: A Case Series",
            "author": "Rizki Adi Santosa",
            "subspecialties": "Myopia",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 19,
            "poster_id": "EP-24",
            "title": "Comparative Efficacy of Platelet-Rich Plasma and Serum Plasma for Treating Dry eyes Disease : A Systematic Review and Meta-Analysis",
            "author": "Vitria Sari Dewi",
            "subspecialties": "Dry Eye",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 20,
            "poster_id": "EP-25",
            "title": "Machine Learning in Predicting the Metastasis and Survival of Patients with Uveal Melanoma: A Systematic Review and Meta-Analysis",
            "author": "Rivaldo Steven Heriyanto",
            "subspecialties": "Artificial Intelligence",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 21,
            "poster_id": "EP-26",
            "title": "Retinopathy of Prematurity in Infants With Congenital Heart Disease: A Systematic Review and Meta-analysis",
            "author": "Sakina Oktavianti",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 22,
            "poster_id": "EP-27",
            "title": "Old Drug, New Perspective: Efficacy of Metformin in Age Related Macular Degeneration - A Dose Response Meta Analysis",
            "author": "Alfiani Zukhruful Fitri Rifa'i",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 23,
            "poster_id": "EP-28",
            "title": "Reversible Ethambutol-Induced Optic Neuropathy: A Case Report on Early Diagnosis and Treatment",
            "author": "Fasya Radilia",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 24,
            "poster_id": "EP-29",
            "title": "Beyond the Lens: The Destructive Impact of Phacolytic Glaucoma Due to Morgagnian Cataract",
            "author": "Prika Maulina Agaristi",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 25,
            "poster_id": "EP-30",
            "title": "Comparative Analysis of Multifocal and Monofocal Intraocular Lenses in Juvenile Cataract Management: A Systematic Review",
            "author": "JANE FRAMITA",
            "subspecialties": "Cataract And Refractive Surgery",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 26,
            "poster_id": "EP-32",
            "title": "Rho Kinase Inhibitors as Novel Therapeutic Approach for Diabetic Macular Edema : A Meta-analysis of Controlled Studies",
            "author": "Tifanni Excelinda",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 27,
            "poster_id": "EP-35",
            "title": "Tailoring Treatment: A Systematic Review and Meta-Analysis of Sclerotherapy Agents for Orbital Venous Malformations",
            "author": "Andintia Aisyah Santoso",
            "subspecialties": "Orbit And Tumor",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 28,
            "poster_id": "EP-36",
            "title": "A 56 -years- old Woman with Conjunctival Dirofilariasis : A Rare Case Report",
            "author": "Ikka Nur Ariantika",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 29,
            "poster_id": "EP-37",
            "title": "Refractive Outcome and High Order Abberation Changes after ReLEX SMILE in the First 100 Eyes in Makassar",
            "author": "IKA PUSPITA",
            "subspecialties": "Cataract And Refractive Surgery",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 30,
            "poster_id": "EP-38",
            "title": "Anti-VEGF Monotherapy versus in Combination with Dexamethasone Implant for Macular Edema Secondary to Retinal Vein Occlusion: A Systematic Review and Meta-analysis",
            "author": "Ichsan Fauzi Triyoga",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 31,
            "poster_id": "EP-39",
            "title": "GLOBE AVULSION WITH OPTIC NERVE TRANSECTION DUE TO OCCUPATIONAL TRAUMA: A CASE REPORT",
            "author": "Muhammad Mubarak Hazazi",
            "subspecialties": "Ocular Trauma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 32,
            "poster_id": "EP-41",
            "title": "EFFECTIVENESS OF LOW-DOSE (0.01%) ATROPINE FOR PREVENTING MYOPIA IN PRE-MYOPIC CHILDREN : A SYSTEMATIC REVIEW",
            "author": "Alfia Chairunnisa",
            "subspecialties": "Myopia",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 33,
            "poster_id": "EP-43",
            "title": "Visual Outcome and Bleeding Risk Associated with Pre-operative Intravitreal Aflibercept or Ziv-Aflibercept Combined with Small-Gauge Vitrectomy for Proliferative Diabetic Retinopathy: A Meta-Analysis of Randomized Controlled Trials",
            "author": "Komang Diah Kurnia Kesumaputri",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 34,
            "poster_id": "EP-46",
            "title": "Efficacy and Safety of Ahmed, Baerveldt, and Molteno Glaucoma Drainage Devices: A Literature Review",
            "author": "Michaela Kemuning",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 35,
            "poster_id": "EP-49",
            "title": "Beyond the Surface: Tear Inflammatory Markers for Retinopathy of Prematurity Screening - A Systematic Review",
            "author": "Andintia Aisyah Santoso",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 36,
            "poster_id": "EP-50",
            "title": "Anatomical and Visual Recovery in a Macular Hole Treated with the Inverted Internal Limiting Membrane Flap Technique: A Case Report",
            "author": "Reynaldo",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 37,
            "poster_id": "EP-51",
            "title": "Unmasking Tubercular Serpiginous-Like Choroiditis (TB SLC): A Diagnostic Challenge with Vision-Saving Outcomes",
            "author": "Maria Valentina Wibawa",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 38,
            "poster_id": "EP-52",
            "title": "Unraveling the Diagnostic Puzzle: Endogenous Endophthalmitis or Panuveitis?",
            "author": "Ulifna Alfiya Sifyana",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 39,
            "poster_id": "EP-53",
            "title": "Efficacy and Safety Profile of Laser-Assisted In-Situ Keratomileusis and Photorefractive Keratectomy for Correction of Myopia: A Systematic Review and Meta-Analysis",
            "author": "dr. Irfan Bari Cahyoputra",
            "subspecialties": "Cataract And Refractive Surgery",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 40,
            "poster_id": "EP-54",
            "title": "The Effectiveness of Using Peek Acuity for Visual Acuity Screening in Junior High School Students in the Uabau Community Health Center Working Area",
            "author": "Gede Agung Widya Iswara",
            "subspecialties": "Myopia",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 41,
            "poster_id": "EP-55",
            "title": "INTRAVITREAL BEVACIZUMAB IN MANAGING MACULAR HEMORRHAGE FROM PURTSCHER-LIKE RETINOPATHY : A CASE REPORT",
            "author": "Nadilla Garyudanefi",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 42,
            "poster_id": "EP-56",
            "title": "X-linked Retinoschisis in Young Adult Male: A Case Report.",
            "author": "dr. Naura Hasna Salsabila",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 43,
            "poster_id": "EP-57",
            "title": "The Role of Virna Glaucoma Implant in Managing Late Diagnosed Primary Congenital Glaucoma",
            "author": "Tiara Azriena Dzulkarnain",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 44,
            "poster_id": "EP-58",
            "title": "CHARACTERISTICS OF PATIENTS WITH OCULAR SURFACE FOREIGN BODIES IN THE EMERGENCY ROOM AT SERANG CITY REGIONAL EYE HOSPITAL IN 2024",
            "author": "Diryati Widyantari",
            "subspecialties": "Ocular Trauma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 45,
            "poster_id": "EP-59",
            "title": "Isolated Foveal Hypoplasia � A Case Report",
            "author": "Adela Widi Etania",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 46,
            "poster_id": "EP-60",
            "title": "THERAPY IN PATIENT WITH ANTERIOR UVEITIS ; A CASE REPORT AND REVIEW OF CURRENT MANAGEMENT",
            "author": "Salma Nabillah Gunawan",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 47,
            "poster_id": "EP-61",
            "title": "PRESEPTAL CELLULITIS WITH MACULAR SCARS IN ADULT: A CASE REPORT",
            "author": "Raudhah Salwati",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 48,
            "poster_id": "EP-62",
            "title": "Optimizing Repair for Bilateral Isolated Upper Eyelid Colobomas: Lessons from a Rare Case",
            "author": "Andi Marsa Nadhira",
            "subspecialties": "Oculoplasty",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 49,
            "poster_id": "EP-64",
            "title": "Astigmatism Correction with Spherical Orthokeratology: A Case Series",
            "author": "Luh Gede Anggasari Dewi, MD",
            "subspecialties": "Contact Lens",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 50,
            "poster_id": "EP-65",
            "title": "Clinical Progression from Acute Glaucoma to Primary Angle-Closure Glaucoma: A Case Report",
            "author": "Clevia Levana Herryawan",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 51,
            "poster_id": "EP-66",
            "title": "A Case Series of Ocular Cicatricial Pemphigoid: Does Oral Mucosal Biopsy Play a Role?",
            "author": "Aurilia Afia Bharata",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 52,
            "poster_id": "EP-67",
            "title": "Case Study: Surgical Correction of Congenital Restrictive Esotropia with Combined Myectomy and Resection Technique",
            "author": "Dessy Vinoricka Andriyana",
            "subspecialties": "Strabismus",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 53,
            "poster_id": "EP-68",
            "title": "Artificial Intelligence in Ophthalmic Disease Screening and Diagnosis : Investigating AI accuracy and efficiency in detecting diabetic retinopathy, glaucoma, and AMD.",
            "author": "Bella Puspita",
            "subspecialties": "Artificial Intelligence",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 54,
            "poster_id": "EP-69",
            "title": "Management of Chronic Panuveitis Following Cataract Surgery In Ocular Tuberculosis : A Misdiagnosed Case Report",
            "author": "Ni Made Widya Mahayani",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 55,
            "poster_id": "EP-70",
            "title": "Management of Retinal Redetachment and Vitreous Hemorrhage Following Combined Iris-Fixated Phakic Intraocular Lens Explantation and Cataract Surgery with Silicone Oil Removal � A Challenging Case Report",
            "author": "Monica Rizky Wigianita",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 56,
            "poster_id": "EP-71",
            "title": "X-Linked Hereditary Congenital Nystagmus: A Case Series of Three Siblings with Refractive Amblyopia",
            "author": "Othe Ahmad Syarifuddin",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 57,
            "poster_id": "EP-72",
            "title": "Sudden onset of Eales manifestation with history of congenital toxoplasmosis : A rare case",
            "author": "Regina Vika Maharani",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 58,
            "poster_id": "EP-73",
            "title": "Diagnostic Challenges in Dandy-Walker Syndrome",
            "author": "Ghea Ananta",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 59,
            "poster_id": "EP-74",
            "title": "Evaluation of the Role of Outdoor Time and Myopia Prevalence : A Comparison of Urban and Rural Primary School Children in Indonesia",
            "author": "Wikan Tamara Tyasning",
            "subspecialties": "Myopia",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 60,
            "poster_id": "EP-75",
            "title": "Exploring The Risk and Visual Outcomes of Post-Injection Endophthalmitis in Anti-VEGF Therapy: A Systematic Review and Meta-Analysis",
            "author": "Angelina Patricia Chandra",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 61,
            "poster_id": "EP-76",
            "title": "Predicting Diabetic Macular Edema Outcomes Using Baseline Optical Coherence Tomography Biomarkers: A Systematic Review and Meta-Analysis",
            "author": "Vitria Sari Dewi",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 62,
            "poster_id": "EP-77",
            "title": "Chronic Ocular Stevens-Johnson Syndrome: A Case Series Using the Sotozono Grading Score and Immunosuppressive Treatment Outcomes",
            "author": "Desy Kusumaningrum",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 63,
            "poster_id": "EP-78",
            "title": "Surgical Management of Secondary Angle Closure in an Infant with Congenital Fibrovascular Pupillary Membrane",
            "author": "nisaa.aprilani@gmail.com",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 64,
            "poster_id": "EP-79",
            "title": "Panuveitis Toxoplasmosis in Immunocompetent Patient: A case report",
            "author": "Adelia Rizka Amila",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 65,
            "poster_id": "EP-81",
            "title": "Ectopia Lentis In Marfan Syndrome with Yamane Technique Surgery: A Case Report",
            "author": "Fitria Adelita",
            "subspecialties": "Cataract And Refractive Surgery",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 66,
            "poster_id": "EP-82",
            "title": "Preoperative Intralesional Injection of Triamcinolone Acetonide (TA) and 5-Fluorouracil (5-FU) for Optimizing Eyelid Cicatrix Reconstruction",
            "author": "Ferdy Iskandar",
            "subspecialties": "Oculoplasty",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 67,
            "poster_id": "EP-85",
            "title": "Behind the Swelling: Extracting a Buried Wooden Foreign Body in Orbital Trauma",
            "author": "Carennia Paramita",
            "subspecialties": "Oculoplasty",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 68,
            "poster_id": "EP-86",
            "title": "Canaliculitis: A Subtle Malady with a Stubborn Fight",
            "author": "Florentina Priscilia",
            "subspecialties": "Oculoplasty",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 69,
            "poster_id": "EP-87",
            "title": "The Refractory Aggressive Hypopyon : It's Not Just an Ulcer.",
            "author": "stevie kresentia",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 70,
            "poster_id": "EP-88",
            "title": "Subhyaloid Hemorrhage Triggered by Valsalva Retinopathy: Rapid Resolution with Laser Hyaloidotomy",
            "author": "Erik Reza Parwidi",
            "subspecialties": "Surgical Retina",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 71,
            "poster_id": "EP-89",
            "title": "Headache as Primary Symptoms of Phacomorphic Glaucoma in Emergency Unit Setting",
            "author": "Rizto Wisuda Senuari",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 72,
            "poster_id": "EP-90",
            "title": "Managing Phacomorphic Glaucoma Caused by Cataract in a Patient with Comorbidities: A Case Report",
            "author": "Nursyifa Dewi Afifah",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 73,
            "poster_id": "EP-91",
            "title": "Disparities of Myopia Prevalence amongst Rural and Urban Elementary School Students in Jakarta : A comparative study.",
            "author": "Samuel Manurung",
            "subspecialties": "Myopia",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 74,
            "poster_id": "EP-92",
            "title": "Cluster headache-like symptoms in Acute Glaucoma Patient in Emergency Department",
            "author": "Rizto Wisuda Senuari",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 75,
            "poster_id": "EP-93",
            "title": "DEMOGRAPHIC PROFILE OF OPHTHALMOLOGY SYMPTOMS AMONG DIABETES MELITUS TYPE 2 PATIENTS: STUDY FROM SINGLE PRIMARY HEALTH CARE",
            "author": "Salma Nabillah Gunawan",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 76,
            "poster_id": "EP-94",
            "title": "Advancing Glaucoma Care: Efficacy and Safety of Bimatoprost Sustained-Release Implants",
            "author": "Narendra Lintang Yudhisthira",
            "subspecialties": "Glaucoma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 77,
            "poster_id": "EP-95",
            "title": "Clear Lens Phacoemulsification in Myopia Gravior : A Case Report",
            "author": "Dina Agliana Savira",
            "subspecialties": "Myopia",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 78,
            "poster_id": "EP-96",
            "title": "Staged Surgical Reconstruction of Giant Periorbital Intradermal Nevus with Multiple Grafting Techniques: A Case Report",
            "author": "viona",
            "subspecialties": "Orbit And Tumor",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 79,
            "poster_id": "EP-97",
            "title": "A RARE CONGENITAL PUPILLARY ABNORMALITY: UNILATERAL MICROCORIA CASE REPORT",
            "author": "Rizki Luthfia Wardhani",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 80,
            "poster_id": "EP-98",
            "title": "Fungal Intrigue: Overcoming the Diagnostic and Management Challenges of Candida Endophthalmitis",
            "author": "Rianti Wulandari Pratiwi",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 81,
            "poster_id": "EP-99",
            "title": "Management of Globe Rupture with Aphakia in Resource-Constrained Facility: A Case Report",
            "author": "dr. Safirah Khairuna",
            "subspecialties": "Ocular Trauma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 82,
            "poster_id": "EP-101",
            "title": "Is Ophthalmic Manifestation in Relapsed Acute Lymphoblastic Leukemia Still Relevant as a Prognostic Marker? A Case Report",
            "author": "Devina Juanita",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 83,
            "poster_id": "EP-102",
            "title": "Phacoemulsification with Low-Power Intraocular Lens Implantation for High Myopia and Senile Cataract: A Case Report of Visual and Refractive Outcomes",
            "author": "Nafiisah",
            "subspecialties": "Cataract And Refractive Surgery",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 84,
            "poster_id": "EP-103",
            "title": "A Case Report of Retinitis Pigmentosa: Clinical Insights into Progressive Vision Loss and Management",
            "author": "Nafiisah",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 85,
            "poster_id": "EP-107",
            "title": "A case report: The Role of Vitrectomy as a Treatment in ocular trauma patient.",
            "author": "Hengki Prasetia",
            "subspecialties": "Ocular Trauma",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 86,
            "poster_id": "EP-108",
            "title": "Management of combined administration of gram-positive and gram-negative antibiotics in patients with suspected bacterial corneal ulcers in the peripheral area",
            "author": "siti bulkis ashari",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 87,
            "poster_id": "EP-109",
            "title": "DIFFUSE OCULAR SURFACE SQUAMOUS NEOPLASIA (OSSN) SUCCESSFULLY TREATED WITH TOPICAL MITOMYCIN-C (MMC) CHEMOTHERAPY",
            "author": "Delfitri Lutfi, dr., Sp.M(K)",
            "subspecialties": "Orbit And Tumor",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 88,
            "poster_id": "EP-110",
            "title": "Management of Le Fort Type 2 Fracture and Traumatic Optic Neuropathy: a case report",
            "author": "Regina Ivanovna",
            "subspecialties": "Oculoplasty",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 89,
            "poster_id": "EP-111",
            "title": "Congenital Cataract as The Manifestation of Congenital Rubella Syndrome: A Case Report",
            "author": "nadhira rahma augustria",
            "subspecialties": "Pediatric",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 90,
            "poster_id": "EP-112",
            "title": "AN INTERESTING CASE PRESENTATION OF PRESEPTAL CELLULITIS FOLLOWED BY DENTAL EXTRACTION",
            "author": "Faiz Murfid Gunawan, MD",
            "subspecialties": "Infection And Immunology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        },
        {
            "id": 91,
            "poster_id": "EP-114",
            "title": "Prevalence Visual Impairment & Causes In Surgery Hospital Hasta Husada 2023-2024",
            "author": "NURUL AINUN AZIZI",
            "subspecialties": "Neuro-Ophthalmology",
            "file": "/poster/69-925.jpeg",
            "created_at": null,
            "updated_at": null
        }
    ]

    const [query, setQuery] = useState('')
    const [poster, setPoster] = useState('')
    const [posters, setPosters] = useState(data)
    const [showPosterDialog, setShowPosterDialog] = useState(false)
    const excludeColumns = ['id', 'poster_id', 'file', 'created_at', 'updated_at']

    const handleChangeQuery = value => {
        setQuery(value)
        filterData(value)
    }

    // Show Dialog
    const handleShowPosterDialog = id => {
        let a = data.find(file => {
            return file.id == id
        })
        setPoster(a)
        setShowPosterDialog(true)
    }

    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim()
        if (!lowerCaseValue) {
            setPosters(data)
        } else {
            const filteredData = data.filter(item => {
                return Object.keys(item).some(key => {
                    return excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCaseValue)
                })
            })
            setPosters(filteredData)
        }
    }

    return (
        <div className="overflow-hidden py-20 px-4 space-y-12">
            <div className="absolute inset-0 self-center w-full -z-10">
                <img src="/shape.png" alt="JECIM 2025" className="mx-auto" style={{ width: "1369", height: "1297" }} />
            </div>
            <img src="/logo-jecim.png" alt="JECIM 2025" className="mx-auto" style={{ width: "277.25", height: "203" }} />
            <p className="text-center text-5xl font-bold text-white">E-Poster</p>

            <div className="max-w-xl mx-auto">
                <div className="bg-white relative rounded px-4 py-2 flex items-center space-x-2 shadow-lg">
                    <input type="text" className="w-full outline-0 text-lg" placeholder="Search by title, author, or subspecialties" value={query} onChange={e => handleChangeQuery(e.target.value)} />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 overflow-auto max-h-[1150px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        posters.map((poster, index) => (
                            <div className="cursor-pointer rounded-lg" key={index} onClick={() => handleShowPosterDialog(poster.id)}>
                                <div style={{ backgroundImage: `url(${poster.file}` }} className="w-full h-[500px] bg-center bg-no-repeat bg-cover relative rounded-lg">
                                    <div className="absolute bottom-0 left-0 p-4 bg-purple-dark space-y-2 rounded-b-lg w-full">
                                        <div className="absolute bottom-28 right-0 py-1 px-3 rounded-full bg-purple-light m-3">
                                            <p className="text-xs font-semibold text-white">{poster.subspecialties}</p>
                                        </div>
                                        <p className="font-semibold line-clamp-2 text-green-500">{poster.title}</p>
                                        <p className="font-bold text-blue-500">{poster.author}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-center">
                <Link href="/" className="inline-flex items-center justify-center bg-white rounded-md space-x-2 shadow-xl font-medium px-4 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span>Home</span>
                </Link>
            </div>
            {
                showPosterDialog && <PosterDialog
                    show={showPosterDialog}
                    setShow={setShowPosterDialog}
                    poster={poster}
                />
            }
        </div>
    )
}
