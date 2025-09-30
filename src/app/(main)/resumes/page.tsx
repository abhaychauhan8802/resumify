import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your Resumes",
};

const Resumes = () => {
  return (
    <section>
      <Button asChild className="btn-xl">
        <Link href="/editor">
          <Plus /> Create New Resume
        </Link>
      </Button>
    </section>
  );
};

export default Resumes;
