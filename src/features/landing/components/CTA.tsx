import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to Land Your Dream Job?
        </h2>
        <p className="text-xl text-orange-50 mb-10 leading-relaxed">
          Join thousands of professionals who've successfully landed their dream
          jobs with Resumify. Start building your perfect resume today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-xl btn-outline group">
            Create Your Resume Now
            <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
