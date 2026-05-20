import { SectionTitle } from "@components/sectionTitle/SectionTitle";
import React from "react";
import { CustomCard } from "@components/customCard/CustomCard";
export const BestReadSection = () => {
  return (
    <div className="mt-5">
      <SectionTitle title="Best Reads" />
      <div className="d-flex gap-2 justify-content-center flex-wrap">
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
    </div>
  );
};
