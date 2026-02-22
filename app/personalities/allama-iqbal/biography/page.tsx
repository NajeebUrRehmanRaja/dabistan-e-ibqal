'use client';

import Image from 'next/image';
import { nastaleeq } from '@/app/font';

interface TimelineEvent {
  year: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  { year: '1877', description: 'Birth of Iqbal in Sialkot on November 9th at Iqbal Manzil.' },
  { year: '1883', description: "Iqbal's admission to the Scotch Mission School for modern education." },
  { year: '1893', description: "Iqbal done with his matriculation and his first marriage to Karim Bibi." },
  { year: '1895', description: "Iqbal done with F.A. Examination and joined Government College, Lahore to study Philosophy, English Literature and Arabic Language." },
  { year: '1897', description: "Iqbal completed his B.A. in English Literature and Arabic." },
  { year: '1899', description: "Iqbal completed his M.A. in Philosophy and joined the administration of Anjuman-e-Himayat-e-Islam." },
  { year: '1900', description: "Iqbal's recognition as poet started through his Initial Poetry." },
  { year: '1903', description: 'Iqbal\'s first book "Ilm-ul-Iqtisad" published.' },
  { year: '1905', description: "Iqbal left Lahore to study Abroad and enrolled at Trinity College (Cambridge) and at Lincoln's Inn for Bar at Law." },
  { year: '1907', description: "Iqbal left for Germany to pursue PhD at University of Munich." },
  { year: '1908', description: "Iqbal joined All India Muslim League (London Branch) and came back to Lahore." },
  { year: '1909', description: "Iqbal elected as a General Secretary of Anjuman-e-Himayat-e-Islam." },
  { year: '1910', description: "Iqbal's marriage to Sardar Begum but delayed consummation." },
  { year: '1913', description: "Iqbal's marriage to Mukhtar Begum and consummation of Sardar Begum." },
  { year: '1914', description: "Iqbal's mother, Imam Bibi passed away." },
  { year: '1915', description: "Iqbal's main thought Asrar-e-Khudi published in Persian." },
  { year: '1918', description: "Persian book Ramooz-e-Bekhudi published." },
  { year: '1919', description: "Iqbal appointed Dean, Oriental Faculty at the University of Punjab and elected again as a General Secretary of Anjuman-e-Himayat-e-Islam." },
  { year: '1921', description: "Iqbal's first visit to Kashmir to plead a legal case." },
  { year: '1923', description: "Iqbal's Persian anthology Payam-e-Mashriq published." },
  { year: '1924', description: "Iqbal's Urdu anthology Bang-e-Dara published and Javid Iqbal born." },
  { year: '1925', description: "Iqbal presented paper on Ijtehad in Islam." },
  { year: '1926', description: "Iqbal elected as a member of legislative assembly." },
  { year: '1927', description: "Iqbal's Persian anthology Zbur-i-Ajam published." },
  { year: '1928', description: "Iqbal visited Delhi for medical treatment." },
  { year: '1929', description: "Iqbal visited Delhi to attend All India Muslim Conference and then visited Madras, Bangalore and Hyderabad, met ruling Nizam and delivered his lectures which were later published as The Reconstruction of Religious Thought in Islam." },
  { year: '1930', description: "Iqbal's daughter Munira Bano born, Iqbal's father Nur Muhammad died and Iqbal delivered presidential address at Allahabad." },
  { year: '1931', description: "Iqbal visited England for 2nd round table conference and met Muhammed Ali Jinnah. Then, he visited Rome, Italy where he met deposed King of Afghanistan Ameer Amanullah and Bennito Mussolini. He visited Al-Cairo, Egypt and met Muslim Scholars, he visited Jerusalem, Palestine for Islamic Conference." },
  { year: '1932', description: "Iqbal's Persian magnum opus Javid nameh published. He left Lahore for 3rd round table conference London and visited Paris, France met Henri Bergson." },
  { year: '1933', description: "Iqbal arrived in Spain and visited Cordova, Granada, Seville and Madrid. Then he visited Afghanistan on the Invitation of King Nadir Shah on educational reforms along with Sir Rass Massoud and Syed Shibli Noumani. He visited Kabul, Ghazna and Qandhar." },
  { year: '1934', description: "Iqbal visited Sirhind with son Javid Iqbal. He elected as President of Anjuman-e-Himayat-e-Islam. His Persian verses Musafir (Travelogue) published." },
  { year: '1935', description: "Iqbal's Urdu anthology Baal-i-Jibril published. Iqbal visited Bhopal for electrotherapy. He shifted in Javid Manzil and his wife Sardar Begum died." },
  { year: '1936', description: "Muhammad Ali Jinnah met Iqbal at Javid Manzil. He elected president of the Punjab Muslim League. His Urdu anthology Zarb-i-Kaleem and Persian anthology Pas chey bayad Kard published." },
  { year: '1937', description: "Iqbal's Illnesses became serious." },
  { year: '1938', description: "Iqbal died in Lahore on April 21st. His last work Urdu and Persian Armughan-e-Hijaz published." },
];

const coupletsInPersian = [
  {
    persian: "سرود رفتہ باز آید کہ ناید؟",
  },
  {
    persian: "نسیمے از حجاز آید کہ ناید؟",
  },
  {
    persian: "سر آمد روز گار ایں فقیرے",
  },
  {
    persian: "دگر دانائے راز آید کہ ناید؟",
  },
];

const coupletsInUrdu = [
  {
    urdu: "نجانے عظمت رفتہ واپس آئے یا نہ آئے؟",
  },
  {
    urdu: "حجاز سے وہی پیام دوبارہ آئے یا نہ آئے؟",
  },
  {
    urdu: "اس فقیر کے دنیا سے جانے وقت آگیا ہے",
  },
  {
    urdu: "اب ایسا راز کو جاننے والا آئے یا نہ آئے؟",
  },
];

const coupletsInEnglish = [
  {
    english: "Will The Glory of Past Return or Not?",
  },
  {
    english: "Will The Breeze from Hijaz Blow again or Not?",
  },
  {
    english: "Time is up for this faqir (Iqbal)",
  },
  {
    english: "Will Another Knower of the Secrets Come or Not?",
  },
];

export default function Biography() {
  return (
    <section>
      <div className="min-h-screen py-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <div className="flex justify-center">
            <Image
              src="/iqbal.jfif"
              alt="Allama Iqbal"
              width={120}
              height={100}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Allama Iqbal
          </h1>
          <p className="text-black mt-2 text-lg">Biography Timeline</p>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-red-500 md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={event.year}
                className={`relative flex items-start mb-10 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
              >
                {/* Mobile: dot on the left; Desktop: dot in center */}
                <div className="absolute left-4 top-30 md:left-1/2 md:-translate-x-1/2 flex-shrink-0 w-5 h-5 rounded-full bg-red-400 border-4 border-red-900 z-10 " />

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
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-red-950/80" />

                    {/* Card content — vertical column layout */}
                    <div className="relative flex flex-col items-center p-4 gap-3">
                      {/* Portrait image — fixed height */}
                      <div className="relative w-full h-48 overflow-hidden flex-shrink-0">
                        <Image
                          src="/iqbal.jfif"
                          alt="Allama Iqbal"
                          fill
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Year */}
                      <span className="text-red-300 font-extrabold text-xl tracking-widest self-start">
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
            );
          })}
        </div>
        <div className={`flex flex-col justify-center items-center ${nastaleeq.className}`}>
          <div className='py-10'>
            {coupletsInPersian.map((couplet, index) => (
              <div key={index}>
                <p className="text-center text-2xl font-bold">
                  {couplet.persian}
                </p>
                <p className="text-center text-xl">
                  {coupletsInUrdu[index].urdu}
                </p>
                <p className="text-center text-xl">
                  {coupletsInEnglish[index].english.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}