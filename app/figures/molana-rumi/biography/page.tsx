'use client';

import Image from 'next/image';
import { nastaleeq } from '@/app/font';

// ── Types ────────────────────────────────────────────────────────────────────

interface TimelineEvent {
    year: string;
    description: string;
    image?: string;
}

interface TimelineSection {
    title: string;
    events: TimelineEvent[];
}

// ── Data ─────────────────────────────────────────────────────────────────────

const timelineSections: TimelineSection[] = [
    {
        title: 'Early Life and Migration',
        events: [
            { year: '1207', description: 'Maulana Jalaluddin Rumi was born on September 30 in Balkh (modern-day Afghanistan) to Sultan-ul-Ulema Bahauddin Walad and Mumina Khatun.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1213', description: 'At the age of six, Jalaluddin Rumi and his family left Balkh due to the rising threat of Mongol invasions in Central Asia. (Balkh was eventually destroyed by the Mongols in 1221).', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1214', description: 'While passing through Neyshabur, Maulana Rumi met the famous mystic Fariduddin Attar, who blessed him and gifted him his book, Asrar-nameh.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1215', description: 'The family stayed in Baghdad for a year, where he met Sheikh Shahabuddin Suhrawardi. They then traveled through Kufa to Hejaz to perform the Hajj pilgrimage.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
        ],
    },
    {
        title: 'Settling in Anatolia',
        events: [
            { year: '1217', description: 'After the pilgrimage, the family settled briefly in Malatya. Later on, they moved to Akşehir (Philomelium) at the invitation of Governor Malik Fakhruddin, staying there for several years.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1221', description: 'After the death of Malik Fakhruddin, Bahauddin Walad moved the family to Larenda (modern-day Karaman), where they lived for seven years.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1225', description: 'Maulana Rumi married Gowhar Khatun in Larenda.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1227', description: "Maulana Rumi's eldest son, Sultan Walad, born in Larenda.", image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1228', description: 'At the invitation of the Seljuk Sultan Alaudin Keykubad, the family permanently settled in Konya (Iconium).', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1231', description: "Death of Rumi's father, Bahauddin Walad.", image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
        ],
    },
    {
        title: 'An Educational Journey',
        events: [
            { year: '1232', description: "Sayyid Burhanuddin Tirmidhi, a disciple of Maulana Rumi's father, arrived in Konya to take over Maulana Rumi's spiritual education.", image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1233', description: 'Maulana Rumi traveled to Aleppo to study at Madrasa al-Halawiyya, staying for one year.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1234', description: 'Later, Maulana Rumi traveled to Damascus for higher education at Madrasa al-Muqadasiyya. During this period, he encountered muslim scholars and mystics, including Ibn Arabi, Sa\'aduddin Hamwi, Sheikh Usman, Awhad al-Din Kermani, and Sadruddin Qunawi.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1238', description: 'Maulana Rumi returned back to Konya to teach. Burhanuddin Tirmidhi settled in Kayseri.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1240', description: "Burhanuddin Tirmidhi passed away. Rumi visited Kayseri to pay his final respects at his mentor's grave.", image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
        ],
    },
    {
        title: 'The Spiritual Journey',
        events: [
            { year: '1244', description: 'In December, Maulana Rumi met the dervish Shams-i-Tabriz, a meeting that transformed his whole spiritual world and whole life.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1246', description: 'Shams-i-Tabriz disappeared for the first time in February but returned a few months later.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1247', description: 'Shams-i-Tabriz disappeared for the second and final time.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1247–1249', description: 'Maulana Rumi traveled to Damascus and Aleppo multiple times in a search for Shams, eventually realizing that Shams lived within him.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1258', description: "Death of Salahuddin Zarkoob, Maulana Rumi's close spiritual companion.", image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1260', description: 'Maulana Rumi began dictating the Masnavi-I Ma\'navi at the request of his loyal disciple, Husamuddin Celebi.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
            { year: '1273', description: 'Maulana Rumi passed away on December 17 in Konya.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
        ],
    },
];

const coupletsInPersian = [
    {
        persian: "من بندهٔ قرآنم اگر جان دارم",
    },
    {
        persian: "من خاکِ درِ محمّدِ مُختارم",
    },
    {
        persian: "گر نقل کند جُز این کس از گُفتارم",
    },
    {
        persian: "بیزارم از او وز این سُخن بیزارم",
    },
];

const coupletsInUrdu = [
    {
        urdu: "جب تک میں زندہ ہوں میں قُرآن کا مطیع و تابع ہوں",
    },
    {
        urdu: "اور حضرت مُحمّدِ مُختار ﷺ کے در کی خاک ہوں",
    },
    {
        urdu: "اگر کوئی میرے کلام سے اِس کے سوا نقل کرے",
    },
    {
        urdu: "تو میں اُس سے اور اُس کے کلام سے بیزار ہوں۔",
    },
];

const coupletsInEnglish = [
    {
        english: "I am servant of Quran as long I'm alive;",
    },
    {
        english: "I am dust on the path of Muhammad, the chosen one.",
    },
    {
        english: "If anyone quotes me anything beyond this;",
    },
    {
        english: "I renounced him, and I renounce those words.",
    },
];

// ── Flatten into a renderable list with section headers ──────────────────────

type RenderItem =
    | { kind: 'section'; title: string }
    | { kind: 'event'; year: string; description: string; image?: string };

const renderItems: RenderItem[] = timelineSections.flatMap((section) => [
    { kind: 'section' as const, title: section.title },
    ...section.events.map((e) => ({ kind: 'event' as const, ...e })),
]);

// ── Component ────────────────────────────────────────────────────────────────

export default function Biography() {
    let eventIndex = 0; // track event position for alternating layout

    return (
        <section>
            {/* Hero Section */}
            <div className="relative">
                <Image
                    src="/Iqbal-bio-heroSection.jpeg"
                    alt="Molana Rumi"
                    width={2000}
                    height={1000}
                />
                <h1
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg ${nastaleeq.className}`}
                    dir="rtl"
                >
                    مولانا رومؒ
                </h1>
            </div>

            {/* Body */}
            <div className="min-h-screen py-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
                        Biography Timeline
                    </h1>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full" />
                </div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-10 sm:top-6 bottom-0 w-0.5 bg-red-500 md:-translate-x-1/2" />

                    {renderItems.map((item, idx) => {
                        if (item.kind === 'section') {
                            return (
                                <div
                                    key={`section-${idx}`}
                                    className="relative flex justify-center py-6"
                                >
                                    <span className="bg-red-800 text-white px-6 py-2 rounded-full text-lg font-bold z-10 shadow-lg whitespace-nowrap text-center">
                                        {item.title}
                                    </span>
                                </div>
                            );
                        }

                        const isLeft = eventIndex % 2 === 0;
                        eventIndex++;

                        return (
                            <div
                                key={`${item.year}-${idx}`}
                                className={`relative flex items-start mb-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } flex-row`}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 top-30 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-5 h-5 rounded-full bg-red-400 border-4 border-red-900 z-10" />

                                {/* Card */}
                                <div
                                    className={`ml-10 md:ml-0 w-[85%] md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                        }`}
                                >
                                    <div
                                        className="relative overflow-hidden shadow-xl border-2 border-red-700 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-red-900/60"
                                        style={{
                                            backgroundImage: "url('/islamic-geometric-pattern.jpeg')",
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}
                                    >
                                        {/* Dark overlay */}
                                        <div className="absolute inset-0 bg-red-950/80" />

                                        {/* Card content */}
                                        <div className="relative flex flex-col p-5 gap-2">
                                            {/* Portrait image — fixed height */}
                                            <div className="relative overflow-hidden flex-shrink-0">
                                                {item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt="Molana Rumi"
                                                        width={300}
                                                        height={100}
                                                        priority
                                                        className="object-cover object-top rounded-xl"
                                                    />
                                                )}
                                            </div>
                                            {/* Year */}
                                            <span className="text-red-300 font-extrabold text-xl tracking-widest">
                                                {item.year}
                                            </span>

                                            {/* Description */}
                                            <p className="text-white text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Couplets */}
                    <div className="pb-12 pt-0 w-full px-4">
                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl border border-red-700 p-8 text-center"
                            style={{
                                backgroundImage: "url('/islamic-geometric-pattern.jpeg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
                            <div className={`relative ${nastaleeq.className}`}>
                                {coupletsInPersian.map((couplet, index) => (
                                    <div key={index}>
                                        <p className="text-black text-xl md:text-2xl font-bold leading-relaxed" style={{ fontFamily: "Times New Roman, Times, serif" }}>
                                            {couplet.persian}
                                        </p>
                                        <p className="text-black text-lg md:text-xl leading-relaxed mt-1" style={{ fontFamily: "Times New Roman, Times, serif" }}>
                                            {coupletsInUrdu[index].urdu}
                                        </p>
                                        <p className="text-black font-bold tracking-widest mt-1 text-sm uppercase" style={{ fontFamily: "Times New Roman, Times, serif" }}>
                                            {coupletsInEnglish[index].english}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
