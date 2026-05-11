'use client';

import Image from 'next/image';
import { nastaleeq } from '@/app/font';

interface TimelineEvent {
    year: string;
    description: string;
    image: string;
}

const timelineEvents: TimelineEvent[] = [
    { year: '1924', description: 'Born on October 5 in Sialkot, British India, to Allama Muhammad Iqbal and Sardar Begum.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1935', description: 'His mother passed away when he was 11 years old.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1937', description: 'Admitted to the Central Model School, Lahore.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1938', description: 'His father, Allama Iqbal, passed away when he was 14.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1944', description: 'Earned his BA (Honors) from Government College, Lahore.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1948', description: 'Completed his MA in English and an MA in Philosophy (Gold Medalist) from Government College, Lahore.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1954', description: 'Awarded a PhD in Philosophy from the University of Cambridge, UK.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1956', description: 'Called to the Bar at Lincoln’s Inn, London (Barrister-at-Law).', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1956–1970', description: 'Practiced law at the Lahore High Court and served as a Visiting Lecturer at Punjab University Law College.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1959', description: 'Published his first major work, Ideology of Pakistan.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1960–1962', description: 'Served as a delegate of Pakistan to the United Nations General Assembly.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1962', description: 'Served as a Visiting Professor for Islamic Culture at the University of Mexico.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1964', description: 'Married Justice Nasira Javid (the first woman to be appointed to the Lahore High Court).', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1965', description: 'Supported the democratic movement as a polling agent for Fatima Jinnah during the presidential election.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1968–1969', description: 'Elected President of the Lahore High Court Bar Association.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1970', description: 'Run for a National Assembly seat against Zulfikar Ali Bhutto on a Pakistan Muslim League ticket.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1971', description: 'Appointed as a Judge of the Lahore High Court.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1977', description: 'Served again as a UN Delegate; presented his influential paper "Iqbal and Tasawwuf" at University of California Berkeley.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1982', description: 'Appointed Chief Justice of the Lahore High Court (March 8).', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1984', description: 'Published Zinda Rood, the definitive three-volume biography of Allama Iqbal.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1986', description: 'Elevated to the Supreme Court of Pakistan as a Senior Justice (October 5); Appointed as lifetime Vice-President of Iqbal Academy, Lahore.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1989', description: 'Retired from the Supreme Court (October 4); received an Honorary Doctorate (Doctor of Humane Letters) from Villanova University, USA.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1992', description: 'Awarded an Honorary Doctorate from Seljuk University, Turkey.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1994', description: 'Published Afkar-e-Iqbal and Pakistan and the Islamic Liberal Movement.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1994–1999', description: 'Elected as a Member of the Senate of Pakistan (upper house) on a technocrat seat; Served as the Chairman of the Senate Standing Committee on Culture, Sports, Tourism, and Youth Affairs.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1997', description: 'Received an honorary degree from Yarmouk University, Jordan.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '1999', description: 'Served his third and final term as a delegate to the UN General Assembly.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '2002', description: 'Published his acclaimed autobiography, Apna Greban Chaak.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '2004', description: 'Conferred the Hilal-i-Imtiaz (Crescent of Distinction) by the President of Pakistan.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '2012', description: 'Established Dabistan-e-Iqbal, an educational institution dedicated to promoting Iqbal’s philosophy.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '2014', description: 'A significant collection of his papers and lectures, Khutbat-e-Iqbal, saw renewed academic focus in his final years.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
    { year: '2015', description: 'Passed away on October 3 at the age of 90 in Lahore, following treatment for cancer.', image: '/dr-javid-bio-pics/dr_javaid_iqbal.jpg' },
];

export default function Biography() {
    return (
        <section>
            {/* Hero Section */}
            <div className="relative">
                <Image
                    src="/dr-javid-bio-heroSection.jpg"
                    alt="Dr Javid Iqbal"
                    width={2000}
                    height={1000}
                />
                <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg ${nastaleeq.className}`}
                    dir="rtl">ڈاکٹر جاوید اقبال</h1>
            </div>
            <div className="min-h-screen py-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <h1 className="text-2xl md:text-5xl font-extrabold text-black tracking-tight">Biography Timeline</h1>
                    <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full" />
                </div>

                {/* Timeline + Couplets wrapper — vertical line spans both */}
                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 md:left-1/2 top-30 mt-10 mb-10 bottom-0 w-0.5 bg-red-500 md:-translate-x-1/2 z-0 shadow-sm" />

                    {/* Timeline events */}
                    <div className="relative">
                        {timelineEvents.map((event, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={event.year}
                                    className={`relative mb-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                        } flex-row`}
                                >
                                    {/* Mobile: dot on the left; Desktop: dot in center */}
                                    <div className="absolute left-4 sm:left-4 top-30 mt-10 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-5 h-5 rounded-full bg-red-400 border-4 border-red-900 z-10 shadow-md" />

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
                                            {/* Dark overlay for readability */}
                                            <div className="absolute inset-0 bg-red-950/80" />

                                            {/* Card content — vertical column layout */}
                                            <div className="relative flex flex-col items-center px-2 py-3">
                                                {/* Portrait image — fixed height */}
                                                <div className="relative overflow-hidden flex-shrink-0">
                                                    {event.image && (
                                                        <Image
                                                            src={event.image}
                                                            alt="Dr Javid Iqbal"
                                                            width={300}
                                                            height={100}
                                                            priority
                                                            className="object-cover object-top rounded-xl"
                                                        />
                                                    )}
                                                    <div className="flex flex-col gap-2">
                                                        {/* Year */}
                                                        <span className="text-red-300 font-extrabold text-xl self-start">
                                                            {event.year}
                                                        </span>

                                                        {/* Description */}
                                                        <p className="text-white text-sm leading-relaxed w-full">
                                                            {event.description}
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

                    {/* Couplets */}
                    <div className="pb-12 pt-0 px-4">
                        <div
                            className={`relative overflow-hidden rounded-2xl shadow-xl border border-red-700 p-6 text-center ${nastaleeq.className}`}
                            style={{
                                backgroundImage: "url('/islamic-geometric-pattern.jpeg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
                            <div className="relative">
                                <div className="mb-1">
                                    <p className="text-black text-2xl font-bold">
                                        <strong>"</strong> Think like Iqbal and Act like Jinnahqbal <strong>"</strong>
                                    </p>
                                    <p className="text-black text-xl">
                                        Dr. Javid Iqbal
                                    </p>
                                    <p className="text-black text-xl">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}