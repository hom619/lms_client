import React from "react";
import { CustomCarousel } from "@components/customCarousel/CustomCarousel";
import { JustInSection } from "@components/pageSection/JustInSection";
import { BestReadSection } from "@components/pageSection/BestReadSection";
import { RecommendationSection } from "@components/pageSection/RecommendationSection";

export const HomePage = () => {
  return (
    <div className="m-4">
      {/* Hero Section */}
      <CustomCarousel></CustomCarousel>
      {/* Just In Section */}
      <JustInSection />
      {/* Best Read Section */}
      <BestReadSection />
      {/* Recommendation Section */}
      <RecommendationSection />
    </div>
  );
};
