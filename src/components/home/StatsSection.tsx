
import { Heart, Users, Gift, Home } from "lucide-react";
import Section from "../shared/Section";
import AnimatedWrapper from "../shared/AnimatedWrapper";

const stats = [
  {
    icon: Home,
    value: "250+",
    label: "Živali najde svoj dom vsako leto",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    delay: 0,
  },
  {
    icon: Heart,
    value: "15+",
    label: "Let skrbi za zapuščene živali",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    delay: 150,
  },
  {
    icon: Users,
    value: "30+",
    label: "Aktivnih prostovoljcev",
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    delay: 300,
  },
  {
    icon: Gift,
    value: "100+",
    label: "Mesečnih donatorjev",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    delay: 450,
  },
];

export default function StatsSection() {
  return (
    <Section className="bg-gradient-soft-blue">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <AnimatedWrapper
            key={index}
            animation="zoom-in"
            delay={stat.delay}
          >
            <div className={`rounded-xl p-6 border ${stat.borderColor} ${stat.bgColor} flex flex-col items-center text-center glass`}>
              <div className={`p-3 rounded-full ${stat.color} bg-white mb-4 shadow-sm`}>
                <stat.icon size={24} />
              </div>
              <span className="text-3xl font-bold mb-2 font-display">{stat.value}</span>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          </AnimatedWrapper>
        ))}
      </div>
    </Section>
  );
}
