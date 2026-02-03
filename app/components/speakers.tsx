"use client"
import { useState } from "react";
import ErrorBoundary from "@/app/ErrorBoundary/ErrorBoundary";
import Image from "next/image"

const speakersData = [
  {
    name: "Dr. Javaid Iqbal",
    role: "Patron Chief, Dabistan e Iqbal",
    image: "/dr_javaid_iqbal.jpg",
    bio: "Dr. Javid Iqbal, Patron in Chief of Dabistan e Iqbal, Son of Allama Iqbal. He contributed scholarly work on Iqbal and encapsulated the core themes of Iqbal's Thought and Philosophy."
  },
  {
    name: "Mian Iqbal Salahuddin",
    role: "President, Dabistan e Iqbal",
    image: "/mian_iqbal.jpg",
    bio: "Iqbal Salahuddin, President of Dabistan e Iqbal and Maternal Grandson of Allama Iqbal. He engages with Young Generation of Pakistan and teaches them the core message of Iqbal through the teachings of Islam."
  },
  {
    name: "Ahmed Javaid",
    role: "Scholar/Exective Member",
    image: "/ahmed_javaid.jpg",
    bio: "Ahmad Javaid, reknowned scholar of ethics, religion, literature and philosophy. He is one of the founding fathers of Dabistan e Iqbal."
  },
  {
    name: "Dr. Atiya Syed",
    role: "Scholar/Exective Member",
    image: "/dr_atiya_syed.jpg",
    bio: "Dr. Atiya Syed, an executive member of Dabistan e Iqbal. She is reknowned for keen interest in Philosophy and Literature. She has written books on the Philosophy of Iqbal."
  },
  {
    name: "Brig (R) Taimur Afzal Khan",
    role: "Scholar/Exective Member",
    image: "/brig_taimur.jpg",
    bio: "Brig (r) Taimoor Afzal Khan, an executive member of Dabistan e Iqbal. He translated Dr Javid Iqbal's book Afkaar e Iqbal and also compiled the biography of Quaid e Azam."
  },
  {
    name: "Hassan Raza Iqbali",
    role: "Iqbal Scholar",
    image: "/hassan_raza_iqbali.jpg",
    bio: "Dr. Hasan Raza Iqbali, a young Iqbal Scholar who has sagacity on Kalam e Iqbal, urdu and persian with scholarly insight."
  }
];

const SpeakerPopup = ({ speaker, isOpen, onClose }: { speaker: typeof speakersData[0], isOpen: boolean, onClose: (e: React.MouseEvent) => void }) => {
    if (!speaker.bio) return null;

    return (
        <>
            {/* Backdrop for Mobile */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm md:hidden transition-opacity"
                    onClick={onClose}
                />
            )}
            
            <div className={`
                ${isOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 translate-y-4'}
                md:group-hover:opacity-100 md:group-hover:visible md:group-hover:scale-100 md:group-hover:translate-y-0
                fixed md:absolute 
                top-1/2 md:top-auto md:-top-12
                left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-y-0
                w-[90vw] max-w-sm md:w-92
                bg-white rounded-2xl shadow-2xl p-6 md:p-8
                transition-all duration-300 z-[70] md:z-50
                pointer-events-auto
                border border-gray-100
            `}>
                {/* Close Button Mobile */}
                <button 
                    onClick={onClose}
                    className="md:hidden absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-900 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="flex flex-col gap-5 items-center">
                    <div className="relative w-28 h-28 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-pink-50 shadow-md">
                        <Image 
                            src={speaker.image} 
                            alt={speaker.name} 
                            fill 
                            className="object-cover" 
                        />
                    </div>
                    <div className="space-y-3 text-center">
                        <h4 className="font-bold text-gray-900 text-xl md:text-lg">{speaker.name}</h4>
                        <p className="text-gray-600 text-sm md:text-sm leading-relaxed">
                            {speaker.bio}
                        </p>
                    </div>
                </div>
                {/* Arrow - only visible on Desktop */}
                <div className="hidden md:block absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-b border-r border-gray-100"></div>
            </div>
        </>
    );
};

export default function Speakers() {
    const [selectedSpeaker, setSelectedSpeaker] = useState<number | null>(null);

    const handleMobileToggle = (index: number) => {
        if (window.innerWidth < 768) {
            setSelectedSpeaker(selectedSpeaker === index ? null : index);
        }
    };

    return (
       <ErrorBoundary>
         <section className="py-20 px-5 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16 space-y-2">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-pink-900 tracking-tight">
                        Our Speakers
                    </h1>
                    <div className="h-1 w-24 bg-pink-900 mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-lg pt-4 max-w-2xl mx-auto">
                        Distinguished scholars and visionaries of Dabistan-e-Iqbal
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 justify-center px-5">
                    {speakersData.map((speaker, index) => (
                        <div 
                            key={index}
                            onClick={() => handleMobileToggle(index)}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col hover:z-50 cursor-pointer md:cursor-default"
                        >
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200 rounded-t-2xl">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="md:hidden absolute bottom-2 right-2 p-1 bg-white/20 backdrop-blur-md rounded-full shadow-sm">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </div>
                            </div>

                            <SpeakerPopup 
                                speaker={speaker} 
                                isOpen={selectedSpeaker === index}
                                onClose={(e) => {
                                    e.stopPropagation();
                                    setSelectedSpeaker(null);
                                }}
                            />
                            
                            <div className="p-5 text-center flex-grow flex flex-col justify-center bg-white border-t border-gray-100 rounded-b-2xl">
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-900 transition-colors line-clamp-2">
                                    {speaker.name}
                                </h3>
                                {speaker.role && (
                                    <p className="text-xs text-pink-700 mt-1 font-medium line-clamp-2">
                                        {speaker.role}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
       </ErrorBoundary>
    )
}