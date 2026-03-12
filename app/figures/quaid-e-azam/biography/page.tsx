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
        title: 'The Formative Years (1876 – 1902)',
        events: [
            { year: '1876', description: 'Mohammad Ali Jinnah was born on December 25 in Karachi.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1883', description: 'Enrolled in Sind Madressah-tul-Islam, Karachi.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1886', description: 'The Jinnah family migrated from Karachi to Bombay.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1887', description: 'Returned to Karachi; admitted to Christian Missionary High School.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1892', description: 'Married Emibai. Traveled to England to pursue legal studies.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1893', description: 'Admitted to Lincoln\'s Inn, London.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1894', description: 'Suffered the personal loss of both his wife, Emibai, and his mother.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1897', description: 'Returned to India; enrolled as an Advocate of the Bombay High Court.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1900', description: 'Appointed as Presidency Magistrate in Bombay.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1902', description: 'Death of his father, Jinnahbhai Poonja.', image: '/venue/Mr. Jinnah.jpg' },
        ],
    },
    {
        title: 'The Rise in Politics (1906 – 1920)',
        events: [
            { year: '1906', description: 'Joined All India Congress.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1907', description: 'Became Vice-President of the Indian Muslim Association.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1910', description: 'Elected to the Legislative Assembly in Bombay.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1913', description: 'Joined the All India Muslim League; traveled to England with Gopal Krishna Gokhale and founded the London Indian Association.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1916', description: 'Presided over the 16th Bombay Provincial Conference and the Muslim League\'s Lucknow session; the historic Lucknow Pact was signed.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1918', description: 'Married Rattenbai (Rutti) in Calcutta.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1919', description: 'Birth of his daughter, Dina. Resigned from the Imperial Legislative Council in protest against the Rowlatt Act.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1920', description: 'Resigned from the Home Rule League and the All India Congress due to policy disagreements.', image: '/venue/Mr. Jinnah.jpg' },
        ],
    },
    {
        title: 'The Years of Struggle (1923 – 1938)',
        events: [
            { year: '1923', description: 'Elected to the Imperial Legislative Council.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1924', description: 'Presided over the Muslim League session in Lahore.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1927', description: 'Led the rejection of the Simon Commission.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1928', description: 'Death of his wife, Rattanbai.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1929', description: 'Formally rejected the Nehru Report and presented his famous Fourteen Points.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1930', description: 'Attended the First Round Table Conference in London.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1931', description: 'Temporarily withdrew from active political life, staying in England.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1934', description: 'Returned to India to reorganize the Muslim League; elected to the Central Legislative Assembly.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1937', description: 'Provincial elections held. Jinnah presided over the Lucknow session, transforming the League into a mass organization.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1938', description: 'Formally honored with the title Quaid-e-Azam (Great Leader) by the Muslims of India.', image: '/venue/Mr. Jinnah.jpg' },
        ],
    },
    {
        title: 'The Road to Pakistan (1940 – 1948)',
        events: [
            { year: '1940', description: 'The Lahore Resolution (Pakistan Resolution) was passed. Jinnah addressed a massive gathering, defining the destiny of the Muslims of the Subcontinent.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1942', description: 'Rejected British proposals during WWII, insisting on a guarantee for the Creation of Pakistan.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1944', description: 'Held the Jinnah-Gandhi talks; remained steadfast on the Two-Nation Theory.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1945', description: 'Participated in the Simla Conference; rejected the Wavell Plan for failing to recognize the League as the sole representative of Muslims.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1946', description: 'Rejected the Cabinet Mission Plan as it undermined the sovereign goal of Pakistan.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1947', description: 'August 14, Creation of Pakistan. Jinnah became the first Governor-General.', image: '/venue/Mr. Jinnah.jpg' },
            { year: '1948', description: 'Moved to Ziarat due to failing health. Returned to Karachi on September 11, where he passed away.', image: '/venue/Mr. Jinnah.jpg' },
        ],
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
                    alt="Quaid-e-Azam Mohammad Ali Jinnah"
                    width={2000}
                    height={1000}
                    className="w-full object-cover"
                    priority
                />
                <h1
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg text-center whitespace-nowrap ${nastaleeq.className}`}
                    dir="rtl"
                >
                    قائدِ اعظمؒ
                </h1>
            </div>

            {/* Body */}
            <div className="min-h-screen py-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-14 px-4">
                    <h1 className="text-2xl md:text-5xl font-extrabold text-black tracking-tight">
                        Biography Timeline
                    </h1>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full" />
                </div>

                {/* Timeline + Quote wrapper — vertical line spans both */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-10 mb-4 bottom-0 w-0.5 bg-red-500 md:-translate-x-1/2" />

                    {/* Timeline events */}
                    <div className="relative">

                        {renderItems.map((item, idx) => {
                            if (item.kind === 'section') {
                                return (
                                    <div
                                        key={`section-${idx}`}
                                        className="relative flex justify-center py-6"
                                    >
                                        <span className="bg-red-800 text-white px-2 py-1 rounded-full text-lg font-bold z-10 shadow-lg whitespace-nowrap text-center">
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
                                    <div className="absolute left-4 sm:left-4 top-30 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-5 h-5 rounded-full bg-red-400 border-4 border-red-900 z-10" />

                                    {/* Card */}
                                    <div
                                        className={`ml-10 md:ml-0 w-[85%] md:w-[45%] ${isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                                            }`}
                                    >
                                        <div
                                            className="relative overflow-hidden shadow-xl border-2 border-red-700 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-red-900/60 w-80"
                                            style={{
                                                backgroundImage: "url('/islamic-geometric-pattern.jpeg')",
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                            }}
                                        >
                                            {/* Dark overlay */}
                                            <div className="absolute inset-0 bg-red-950/80" />

                                            {/* Card content */}
                                            <div className="relative flex flex-col items-center px-2 py-3">
                                                {/* Portrait image */}
                                                <div className="relative overflow-hidden flex-shrink-0">
                                                    {item.image && (
                                                        <Image
                                                            src={item.image}
                                                            alt="Quaid-e-Azam Mohammad Ali Jinnah"
                                                            width={300}
                                                            height={100}
                                                            priority
                                                            className="object-cover object-top rounded-xl"
                                                        />
                                                    )}
                                                    <div className="flex flex-col gap-2">
                                                        {/* Year */}
                                                        <span className="text-red-300 font-extrabold text-xl self-start">
                                                            {item.year}
                                                        </span>

                                                        {/* Description */}
                                                        <p className="text-white text-sm leading-relaxed w-full">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Quote */}
                    <div className="pb-12 pt-0 px-4">
                        <div
                            className="relative overflow-hidden rounded-2xl shadow-xl border border-red-700 p-8 text-center"
                            style={{
                                backgroundImage: "url('/islamic-geometric-pattern.jpeg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
                            <div className="relative">
                                <p className={`text-black text-lg md:text-xl leading-relaxed font-bold mt-2`} style={{ fontFamily: "Times New Roman, Times, serif" }}>
                                    One God and the equality of manhood is one of the fundamental principles of Islam. In Islam there is no difference between man and man. The qualities of equality, liberty and fraternity are the fundamental principles of Islam.
                                </p>
                                <p className="text-black font-bold tracking-widest mt-4 text-sm uppercase" style={{ fontFamily: "Times New Roman, Times, serif" }}>
                                    Quaid-e-Azam <br /> Mohammad Ali Jinnah <br /> January 27, 1948
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
