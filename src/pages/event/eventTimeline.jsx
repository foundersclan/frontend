import { Calendar, MapPin, Users } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
/* eslint-disable react/prop-types */
export function EventTimeline({ events, showCTA, onCTAClick }) {
  // Create a reference to the timeline container to scope the scroll tracking
  const containerRef = useRef(null);

  // Track the scroll progress of this specific container section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Scale the height of the yellow line container from 0% to 100%
  const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#050505] text-white py-24 px-6 overflow-x-hidden z-0"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {showCTA === true ? (
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl tracking-tight mb-4">
                INSIDE <span className="text-[#FDB913]">THE CLAN</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                An Open Look At Our Pursuit Of Radical Community Growth
              </p>
            </motion.div>
          </div>
        ) : (
          <div className="mb-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl tracking-tight mb-4">
                CHAPTERS <span className="text-[#FDB913]">OF GROWTH</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Where Raw Skill Transforms Into Business Authority
              </p>
            </motion.div>
          </div>
        )}
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - Fixed mobile positioning to line up with the dots */}
          <div className="absolute left-2.5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#fdbb1365] via-gray-800 to-transparent transform md:-translate-x-1/2" />
          <motion.div
            style={{
              scaleY: scaleY,
              originY: 0,
            }}
            className="absolute left-2.5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FDB913] via-[#FDB913] to-amber-500 transform md:-translate-x-1/2 pointer-events-none z-10"
          />
          {/* Events */}
          <div className="space-y-24">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${isEven ? "" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Year indicator */}
                  <div className="hidden md:block absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-10 z-10">
                    <div className="relative">
                      {/* Dot */}
                      <div className="w-5 h-5 bg-[#FDB913] rounded-full border-4 border-black" />

                      {/* Year badge */}
                      <div
                        className={`absolute  top-1/2 -translate-y-1/2 bg-[#FDB913] text-black px-4 py-1 rounded-full tracking-wider whitespace-nowrap left-5 md:left-auto ${isEven ? "right-5" : "translate-x-5"
                          }`}
                      >
                        {event.year}
                      </div>
                    </div>
                  </div>

                  {/* Content - Left side on desktop */}
                  <div
                    className={`${isEven
                      ? "md:text-right md:pr-16"
                      : "md:col-start-2 md:pl-16"
                      } pl-8 md:pl-0`}
                  >
                    <div className="space-y-4">
                      {/* mobile Dot  */}
                      {/* <div className=" inline-block md:hidden w-5 h-5 bg-[#FDB913] rounded-full border-4  -translate-x-8 translate-y-5 border-black" />  */}

                      {/* mobile year indicator */}
                      <div className="inline-block md:hidden bg-[#FDB913] text-black px-3 py-0.5 rounded-full text-xs font-bold tracking-wider mb-1">
                        {event.year}
                      </div>

                      <h3 className="text-3xl tracking-tight">{event.title}</h3>

                      <div className="flex flex-col gap-2 text-gray-400 text-sm">
                        <div
                          className={`flex items-center gap-2 ${isEven ? "md:justify-end" : ""}`}
                        >
                          <Calendar className="w-4 h-4 text-[#FDB913]" />
                          <span>{event.date}</span>
                        </div>
                        <div
                          className={`flex items-center gap-2 ${isEven ? "md:justify-end" : ""}`}
                        >
                          <MapPin className="w-4 h-4 text-[#FDB913]" />
                          <span>{event.location}</span>
                        </div>
                        <div
                          className={`flex items-center gap-2 ${isEven ? "md:justify-end" : ""}`}
                        >
                          <Users className="w-4 h-4 text-[#FDB913]" />
                          <span>{event.attendees} Attendees</span>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Image - Right side on desktop */}
                  <div
                    className={`${isEven
                      ? "md:col-start-2 md:pl-16"
                      : "md:col-start-1 md:pr-16 md:row-start-1"
                      } pl-8 md:pl-0`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="max-h-[400px] w-full h-auto object-contain"
                        />
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Yellow border accent */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FDB913] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer CTA */}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-32 text-center"
          >
            <p className="text-gray-400 mb-6">
              Want to be part of our next event?
            </p>
            <button
              onClick={onCTAClick}
              className="bg-[#FDB913] text-black font-semibold px-8 py-4 rounded-full hover:bg-[#ba880c]/90 transition-colors duration-300"
            >
              View Upcoming Events
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
