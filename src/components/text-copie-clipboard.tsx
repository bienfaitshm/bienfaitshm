"use client";
import React from "react";
import { TypographyP } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Copy } from "lucide-react";
import { copyText } from "@/lib/utils";

interface CopieClipboardTextProps {
  text: string;
}
export const CopieClipboardText: React.FC<CopieClipboardTextProps> = ({
  text,
}) => {
  const handlerCopyValue = () => {
    copyText(text);
  };
  return (
    <div className="relative flex items-center gap-2">
      <TypographyP className="text-neutral-300">{text}</TypographyP>
      <div className="">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="rounded-full"
                variant="ghost"
                size="icon"
                onClick={handlerCopyValue}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
