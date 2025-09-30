import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const TemplateShowcase = () => {
  return (
    <section id="templates" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">
              Professional Templates
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of expertly designed templates, each
            optimized for different industries and career levels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {["Modern Executive", "Creative Designer", "Tech Professional"].map(
            (template, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform group-hover:scale-105 transition-all duration-300 group-hover:shadow-2xl">
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-700">
                        {template}
                      </h4>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{template}</h3>
                    <p className="text-gray-600 text-sm">
                      Perfect for professionals looking to make a strong
                      impression.
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="text-center">
          <Button className="btn-xl btn-gradient">View All Templates</Button>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
