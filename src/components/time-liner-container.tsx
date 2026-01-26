import React from "react";
import { Timeline } from "@/components/ui/timeline";
import projects from "@/data/projects.json"
export function TimelineContainer() {
  return (
    <div className="w-full">
      <Timeline data={projects} />
    </div>
  );
}
