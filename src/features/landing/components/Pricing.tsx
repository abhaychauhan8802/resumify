import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "1 Resume",
      "1 Cover Letter",
      "Free Forever",
      "Basic Templates",
      "PDF Download",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$3",
    period: "/month",
    features: [
      "Unlimited Resumes",
      "Premium Templates",
      "All Export Formats",
      "AI Content Suggestions",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Team",
    price: "$11",
    period: "/month",
    features: [
      "Everything in Pro",
      "Team Management",
      "Brand Customization",
      "Analytics Dashboard",
      "Dedicated Support",
    ],
    cta: "Comming Soon...",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent
            <span className="text-gradient"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your career journey. All plans include
            unlimited downloads and revisions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient text-white shadow-2xl scale-105"
                  : "bg-white shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.popular ? "text-orange-50" : "text-gray-600"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check
                      className={`w-5 h-5 mr-3 ${
                        plan.popular ? "text-orange-100" : "text-green-500"
                      }`}
                    />
                    <span
                      className={
                        plan.popular ? "text-orange-50" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular ? "btn-xl btn-outline" : "btn-xl btn-gradient"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
