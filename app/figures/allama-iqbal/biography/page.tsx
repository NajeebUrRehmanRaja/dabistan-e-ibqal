'use client';

import Image from 'next/image';
import { nastaleeq } from '@/app/font';

interface TimelineEvent {
  year: string;
  description: string;
  image: string;
}

const timelineEvents: TimelineEvent[] = [
  { year: '1877', description: 'Birth of Iqbal in Sialkot on November 9th at Iqbal Manzil.', image: '/allama-bio-pics/1877 - Iqbal Manzil.png' },
  { year: '1883', description: "Iqbal's admission to the Scotch Mission School for modern education.", image: '/allama-bio-pics/1883 - Scotch Mission School.png' },
  { year: '1893', description: "Iqbal completed his matriculation and his first marriage to Karim Bibi.", image: '/allama-bio-pics/1893 - Karim Bibi.png' },
  { year: '1895', description: "Iqbal completed F.A. Examination and joined Government College, Lahore to study Philosophy, English Literature and Arabic Language.", image: '/allama-bio-pics/1895 - F.A Exam.png' },
  { year: '1897', description: "Iqbal completed B.A. in English Literature and Arabic.", image: '/allama-bio-pics/1897 B.A in English.png' },
  { year: '1899', description: "Iqbal completed M.A. in Philosophy and joined the administration in Anjuman-e-Himayat-e-Islam.", image: '/allama-bio-pics/1899 Anjuman Himayat-i-Islam.jpeg' },
  { year: '1900', description: "Iqbal's recognition as poet had started through his Initial Poetry.", image: '/allama-bio-pics/1900 - Recognition as poet.jpeg' },
  { year: '1903', description: 'Iqbal\'s first book "Ilm-ul-Iqtisad" had published.', image: '/allama-bio-pics/1903 - Ilm-ul-Iqtisad.jpg' },
  { year: '1905', description: "Iqbal left Lahore to study Abroad and enrolled at Trinity College (Cambridge). Later on, at Lincoln's Inn for Bar at Law.", image: '/allama-bio-pics/1905 - Trinity College.jpg' },
  { year: '1907', description: "Iqbal left for Germany to pursue PhD at University of Munich.", image: '/allama-bio-pics/1907 - University of Munich.jpg' },
  { year: '1908', description: "Iqbal joined All India Muslim League (London Branch) and came back to Lahore.", image: '/allama-bio-pics/1908 - All India Muslim League.jpg' },
  { year: '1909', description: "Iqbal elected as a General Secretary of Anjuman-e-Himayat-e-Islam.", image: '/allama-bio-pics/1909 - General Secretary.jpg' },
  { year: '1910', description: "Iqbal's marriage to Sardar Begum but delayed consummation.", image: '/allama-bio-pics/1910 - Sardar Begum.jpg' },
  { year: '1913', description: "Iqbal's marriage to Mukhtar Begum and consummation of Sardar Begum.", image: '/allama-bio-pics/1913 - Mukhtar Begum.jpg' },
  { year: '1914', description: "Iqbal's mother, Imam Bibi passed away.", image: '/allama-bio-pics/1914 - Imam Bibi.jpg' },
  { year: '1915', description: "Iqbal's main thought Asrar-e-Khudi had published in Persian.", image: '/allama-bio-pics/1915 - Asrar-e-Khudi.jpg' },
  { year: '1918', description: "Persian book Ramooz-e-Bekhudi had published.", image: '/allama-bio-pics/1918 - Ramooz-e-Bekhudi.jpg' },
  { year: '1919', description: "Iqbal appointed as Dean, Oriental Faculty at the University of Punjab and elected again as a General Secretary of Anjuman-e-Himayat-e-Islam.", image: '/allama-bio-pics/1919 - Dean Oriental Faculty.jpg' },
  { year: '1921', description: "Iqbal's first visit to Kashmir to plead a legal case.", image: '/allama-bio-pics/1921 - Kashmir Visit.jpg' },
  { year: '1923', description: "Iqbal's Persian anthology Payam-e-Mashriq had published.", image: '/allama-bio-pics/1923 - Payam-e-Mashriq.jpg' },
  { year: '1924', description: "Iqbal's Urdu anthology Bang-e-Dara had published and Javid Iqbal was born.", image: '/allama-bio-pics/1924 - Bang-e-Dara.jpg' },
  { year: '1925', description: "Iqbal presented paper on Ijtehad in Islam.", image: '/allama-bio-pics/1925 - Ijtehad in Islam.jpg' },
  { year: '1926', description: "Iqbal elected as a member of legislative assembly.", image: '/allama-bio-pics/1926 - Legislative Assembly.jpg' },
  { year: '1927', description: "Iqbal's Persian anthology Zbur-i-Ajam had published.", image: '/allama-bio-pics/1927 - Zbur-i-Ajam.jpg' },
  { year: '1928', description: "Iqbal visited Delhi for medical treatment.", image: '/allama-bio-pics/1928 - Medical Treatment.jpg' },
  { year: '1929', description: "Iqbal visited Delhi to attend All India Muslim Conference and then visited Madras, Bangalore and Hyderabad, met ruling Nizam and delivered his lectures which were later published as The Reconstruction of Religious Thought in Islam.", image: '/allama-bio-pics/1929 - Muslim Conference.jpg' },
  { year: '1930', description: "Iqbal's daughter Munira Bano was born, Iqbal's father Noor Muhammad died and Iqbal delivered his presidential address at Allahabad.", image: '/allama-bio-pics/1930 - Munira Bano.jpg' },
  { year: '1931', description: "Iqbal visited England for 2nd round table conference and met Muhammed Ali Jinnah. Then, he visited Rome, Italy where he met deposed King of Afghanistan Ameer Amanullah, then he met Bennito Mussolini. He visited Al-Cairo, Egypt and met Muslim Scholars. Then he visited Jerusalem, Palestine for Islamic Conference.", image: '/allama-bio-pics/1931 - Round Table Conference.jpg' },
  { year: '1932', description: "Iqbal's Persian magnum opus Javid nameh had published. He left Lahore for 3rd round table conference London and then visited Paris, France met with Henri Bergson.", image: '/allama-bio-pics/1932 - Javid Nameh.jpg' },
  { year: '1933', description: "Iqbal arrived in Spain and visited Cordova, Granada, Seville and Madrid. Then he visited Afghanistan on the Invitation of King Nadir Shah on educational reforms along with Sir Rass Massoud and Syed Sulaiman Nadawi. He visited Kabul, Ghazna and Qandhar.", image: '/allama-bio-pics/1933 - Spain Visit.jpg' },
  { year: '1934', description: "Iqbal visited Sirhind with son Javid Iqbal. He elected as President of Anjuman-e-Himayat-e-Islam. His Persian verses Musafir (A travelogue) had published.", image: '/allama-bio-pics/1934 - Sirhind Visit.jpg' },
  { year: '1935', description: "Iqbal's Urdu anthology Baal-i-Jibril had published. Iqbal visited Bhopal for electrotherapy. He shifted in Javid Manzil and his wife Sardar Begum died.", image: '/allama-bio-pics/1935 - Baal-i-Jibril.jpg' },
  { year: '1936', description: "Muhammad Ali Jinnah met Iqbal at Javid Manzil. He elected as a president of the Punjab Muslim League. His Urdu anthology Zarb-i-Kaleem and Persian anthology Pas chey bayad Kard had published.", image: '/allama-bio-pics/1936 - Zarb-i-Kaleem.jpg' },
  { year: '1937', description: "Iqbal's Illnesses became serious.", image: '/allama-bio-pics/1937 - Illnesses became serious.jpg' },
  { year: '1938', description: "Iqbal died in Lahore on April 21st. Later on, in November, his last work in Urdu and Persian Armughan-e-Hijaz had published.", image: '/allama-bio-pics/1938 - Armughan-e-Hijaz.jpg' },
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

// const coupletsForDisplay = [
//   {
//     urdu: "جوانوں کو مری آہِ سحر دے",
//   },
//   {
//     urdu: "پھر ان شاہین بچوں کو بال و پر دے",
//   },
//   {
//     urdu: "خدایا آرزو میری یہی ہے",
//   },
//   {
//     urdu: "مرا نورِ بصیرت عام کر دے",
//   },
// ];
export default function Biography() {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative">
        <Image
          src="/Iqbal-bio-heroSection.jpeg"
          alt="Allama Iqbal"
          width={2000}
          height={1000}
        />
        <h1 className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg ${nastaleeq.className}`}
          dir="rtl">علامہ محمد اقبال</h1>
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {coupletsForDisplay.map((couplet, index) => (
            <p key={index} className={`flex justify-center text-black text-4xl font-bold ${nastaleeq.className}`}>
              {couplet.urdu}
            </p>
          ))}
        </div> */}
      </div>
      <div className="min-h-screen py-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          {/* <div className="flex justify-center">
            <Image
              src="/iqbal.jfif"
              alt="Allama Iqbal"
              width={120}
              height={100}
            />
          </div> */}
          {/* <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Allama Iqbal
          </h1> */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">Biography Timeline</h1>
          <div className="h-1 w-24 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline + Couplets wrapper — vertical line spans both */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-30 bottom-0 w-0.5 bg-red-500 md:-translate-x-1/2" />

          {/* Timeline events */}
          <div className="relative">
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
                        <div className="relative overflow-hidden flex-shrink-0">
                          {event.image && (
                            <Image
                              src={event.image}
                              alt="Allama Iqbal"
                              width={300}
                              height={100}
                              priority
                              className="object-cover object-top rounded-xl"
                            />
                          )}
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
                {coupletsInPersian.map((couplet, index) => (
                  <div key={index} className="mb-1">
                    <p className="text-black text-2xl font-bold">
                      {couplet.persian}
                    </p>
                    <p className="text-black text-xl">
                      {coupletsInUrdu[index].urdu}
                    </p>
                    <p className="text-black text-xl">
                      {coupletsInEnglish[index].english.toUpperCase()}
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