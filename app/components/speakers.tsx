import Image from "next/image"

const speakersData = [
  {
    name: "Dr. Javaid Iqbal",
    role: "Patron Chief, Dabistan e Iqbal",
    image: "/dr_javaid_iqbal.jpg",
  },
  {
    name: "Ahmed Javaid",
    role: "Scholar/Exective Member",
    image: "/ahmed_javaid.jpg",
  },
  {
    name: "Mian Iqbal Salahuddin",
    role: "President",
    image: "/mian_iqbal.jpg",
  },
  {
    name: "Dr. Atiya Syed",
    role: "Scholar/Exective Member",
    image: "/dr_atiya_syed.jpg",
  },
  {
    name: "Hassan Raza Iqbali",
    role: "Iqbal Scholar",
    image: "/hassan_raza_iqbali.jpg",
  }
];

export default function Speakers() {
    return (
        <section className="py-20 bg-gray-50">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
                    {speakersData.map((speaker, index) => (
                        <div 
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                        >
                            <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-200">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="p-5 text-center flex-grow flex flex-col justify-center bg-white border-t border-gray-100">
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-pink-900 transition-colors">
                                    {speaker.name}
                                </h3>
                                {speaker.role && (
                                    <p className="text-sm text-pink-700 mt-1 font-medium">
                                        {speaker.role}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}