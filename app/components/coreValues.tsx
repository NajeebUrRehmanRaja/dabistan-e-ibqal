const values = [
    {
        title: "Ishq",
        subtitle: "Passion",
        description: "Transformational Passion for God, the Prophet, Community and Humanity ",
        gradient: "from-pink-900 to-rose-700"
    },
    {
        title: "Faqr",
        subtitle: "Selflessness",
        description: "Living in the World without Attachment to it ",
        gradient: "from-purple-900 to-indigo-800"
    },
    {
        title: "Jur'rat",
        subtitle: "Courage",
        description: "The courage to live by truth",
        gradient: "from-blue-900 to-cyan-800"
    },
    {
        title: "Hur'riyat",
        subtitle: "Freedom",
        description: "Freedom beyond all forms of slavery",
        gradient: "from-emerald-900 to-teal-700"
    }
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-2">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-pink-900 tracking-tight">
                        Core Values
                    </h1>
                    <div className="h-1 w-24 bg-pink-900 mx-auto rounded-full"></div>
                    <p className="text-gray-600 text-lg pt-4 max-w-2xl mx-auto">
                        The philosophical pillars that define Dabistan-e-Iqbal
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div 
                            key={index} 
                            className={`group relative p-8 rounded-2xl bg-gradient-to-br ${value.gradient} text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
                        >
                            {/* Decorative Background Element */}
                            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="mb-4">
                                    <h2 className="text-2xl font-bold tracking-wide">
                                        {value.title}
                                    </h2>
                                    <span className="text-sm font-medium opacity-80 uppercase tracking-widest">
                                        {value.subtitle}
                                    </span>
                                </div>
                                
                                <p className="text-white/90 leading-relaxed text-sm flex-grow">
                                    {value.description}
                                </p>

                                <div className="mt-6 pt-6 border-t border-white/20">
                                    <div className="w-8 h-1 bg-white/50 group-hover:w-16 transition-all duration-300"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}