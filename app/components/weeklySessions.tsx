import FacebookSDK from "./ui/facebookSDK";
import { MessageSquare, Calendar, Users, Radio } from "lucide-react";

const sessionFeatures = [
  // {
  //   title: "Live Interaction",
  //   description: "Engage directly with Mian Iqbal Salahuddin during our weekly live streams.",
  //   icon: Radio,
  // },
  {
    title: "Weekly Schedule",
    description: "Join us every week for deep dives into Iqbal's philosophy.",
    icon: Calendar,
  },
  // {
  //   title: "Expert Scholar",
  //   description: "Learn from distinguished thinker and subject matter expert.",
  //   icon: Users,
  // },
  {
    title: "Open Discussions",
    description: "Participate in thought-provoking Q&A sessions.",
    icon: MessageSquare,
  },
];

export default function WeeklySessions() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24 px-5">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 hidden h-full w-1/3 translate-x-20 skew-x-[-12deg] bg-gray-50 -z-10 lg:block" />

      <div className="container mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 space-y-3 text-center lg:mb-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-pink-900 sm:text-4xl lg:text-5xl">
            Interactive Sessions
          </h1>

          <div className="mx-auto h-1.5 w-20 rounded-full bg-pink-900 lg:w-24" />

          <p className="mx-auto max-w-2xl px-2 pt-2 text-base font-medium text-gray-600 sm:text-lg">
            Join our community of thinkers as we explore the profound depths of
            Iqbal's thought and Islamic philosophy.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col items-center space-y-8 text-center lg:items-start lg:text-left">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-800 sm:text-3xl">
                Stay Connected with{" "}
                <span className="text-pink-900">Dabistan-e-Iqbal</span>
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                Our interactive sessions bridge classical wisdom with modern
                challenges. Stay connected and be part of the dialogue.
              </p>
            </div>

            {/* Features */}
            <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-6">
              {sessionFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group flex flex-col gap-4 rounded-xl p-4 transition-colors hover:bg-pink-50 sm:flex-row"
                >
                  <div className="flex justify-center sm:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-100 text-pink-900 shadow-sm transition-all group-hover:bg-pink-900 group-hover:text-white">
                      <feature.icon size={22} />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 transition-colors group-hover:text-pink-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="https://linktr.ee/dabistaneiqbal"
                target="_blank"
                // rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-pink-900 px-7 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-pink-800 hover:shadow-pink-900/20 sm:px-8 sm:py-4 sm:text-base"
              >
                Visit Official Pages
                <Radio size={18} className="animate-pulse" />
              </a>
            </div>
          </div>

          {/* Right Column – Facebook Feed */}
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-pink-900/5 blur-2xl" />

            <div className="flex min-h-[500px] flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl sm:min-h-[600px]">
              {/* Header */}
              <div className="flex items-center justify-between bg-pink-900 p-3 text-white sm:p-4">
                <span className="flex items-center gap-2 text-sm font-bold sm:text-base">
                  <Radio size={18} className="animate-pulse" />
                  Live Update
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-80 sm:text-xs">
                  Official Page
                </span>
              </div>

              {/* Feed */}
              <div className="flex-grow w-full overflow-hidden">
                <FacebookSDK />
                <div
                  className="fb-page w-full h-full"
                  data-href="https://www.facebook.com/DabistaneIqbal/"
                  data-tabs="timeline"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                  data-width="500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}