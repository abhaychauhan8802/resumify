import { Clock, Download, Palette, Shield, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Zap className="size-8" />,
    title: "AI-Powered Content",
    description:
      "Smart suggestions and auto-complete help you write compelling bullet points and descriptions that showcase your skills.",
  },
  {
    icon: <Shield className="size-8" />,
    title: "ATS-Optimized",
    description:
      "All our templates are designed to pass through Applicant Tracking Systems, ensuring your resume reaches human eyes.",
  },
  {
    icon: <Palette className="size-8" />,
    title: "Beautiful Templates",
    description:
      "Choose from dozens of professional, modern templates designed by hiring experts and loved by recruiters.",
  },
  {
    icon: <Download className="size-8" />,
    title: "Multiple Formats",
    description:
      "Export your resume in PDF, Word, or plain text formats. Perfect for any application requirement.",
  },
  {
    icon: <Clock className="size-8" />,
    title: "Real-time Preview",
    description:
      "See your changes instantly with our live preview. What you see is exactly what you get.",
  },
  {
    icon: <Users className="size-8" />,
    title: "Expert Support",
    description:
      "Get help from our career experts and join a community of successful job seekers.",
  },
];

const FeaturesOverview = () => {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose
            <span className="text-gradient"> Resumify?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our powerful features help you create resumes that get noticed by
            recruiters and pass ATS systems with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br  hover:shadow-xl from-gray-50 to-white border-gray-200 border transition-all duration-300 transform hover:-translate-y-2 select-none"
            >
              <div
                className={`size-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:via-indigo-500 group-hover:to-purple-500 transition-transform duration-300`}
              >
                <div className="text-primary group-hover:text-gray-200">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverview;
