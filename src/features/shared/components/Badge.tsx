import { formatCategory, formatTag } from "@/utils/helpers";
import React from "react";

interface BadgeProps {
  categoryId: number;
  tagId?: number;
}

const Badge = ({ categoryId, tagId }: BadgeProps) => {
  return (
    <>
      <span className="flex items-center bg-[#ffe6e6] text-[#8b0000] font-semibold px-2 py-0.5 rounded">
        {formatCategory(categoryId)}
      </span>
      <span className="flex items-center bg-[#f0e6ff] text-[#5a2ca0] font-semibold px-2 py-0.5 rounded">
        {formatTag(tagId || 1)}
      </span>
    </>
  );
};

export default Badge;
