
import { Heart, Users, Gift, Home } from "lucide-react";
import Section from "../shared/Section";
import AnimatedWrapper from "../shared/AnimatedWrapper";

const stats = [
  {
    icon: Home,
    value: "250+",
    label: "Živali najde svoj dom vsako leto",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    delay: 0,
  },
  {
    icon: Heart,
    value: "15+",
    label: "Let skrbi za zapuščene živali",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    delay: 150,
  },
  {
    icon: Users,
    value: "5+",
    label: "Aktivnih prostovoljcev",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    delay: 300,
  },
  {
    icon: Gift,
    value: "100+",
    label: "Mesečnih donatorjev",
    color: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    delay: 450,
  },
];

export default function StatsSection() {
  return (
    <Section className="bg-gradient-to-b from-[#dcebe9]/80 to-[#d9e9e7]/80">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <AnimatedWrapper
            key={index}
            animation="zoom-in"
            delay={stat.delay}
          >
            <div className={`rounded-xl p-6 border border-teal-500/20 bg-white/70 backdrop-blur-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300`}>
              <div className={`p-3 rounded-full ${stat.color} bg-teal-100/80 mb-4 shadow-sm`}>
                <stat.icon size={24} />
              </div>
              <span className="text-3xl font-bold mb-2 font-display text-teal-800">{stat.value}</span>
              <p className="text-teal-700">{stat.label}</p>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Section>
  );
}
