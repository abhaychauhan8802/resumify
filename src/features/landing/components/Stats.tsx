import { Award, Briefcase, FileText, TrendingUp } from "lucide-react";

const stats = [
  {
    number: "50K+",
    label: "Resumes Created",
    icon: <FileText className="w-8 h-8" />,
  },
  {
    number: "95%",
    label: "Interview Rate",
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    number: "4.9/5",
    label: "User Rating",
    icon: <Award className="w-8 h-8" />,
  },
  {
    number: "2x",
    label: "Faster Job Search",
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

const Stats = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="size-16 bg-secondary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <div className="text-primary group-hover:text-white transition-colors duration-300">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
