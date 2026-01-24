"use client";

import React, { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy, Check } from "lucide-react";
import { copyText } from "@/lib/utils";

interface CopieClipboardTextProps {
  text: string;
  showText?: boolean;
  className?: string;
}

export const CopieClipboardText: React.FC<CopieClipboardTextProps> = ({
  text,
  showText = false,
  className,
}) => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await copyText(text);
      setHasCopied(true);
      // Feedback visuel pendant 2 secondes (standard UX)
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  }, [text]);

  return (
    <div className={cn("inline-flex items-center gap-2 group/copy", className)}>
      {showText && (
        <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400 truncate max-w-[200px]">
          {text}
        </span>
      )}

      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 rounded-lg transition-all duration-200",
                hasCopied
                  ? "text-green-500 bg-green-50 dark:bg-green-900/20 hover:text-green-600 hover:bg-green-100"
                  : "text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              )}
              onClick={handleCopy}
              aria-label={hasCopied ? "Copied!" : "Copy to clipboard"}
            >
              {hasCopied ? (
                <Check className="h-4 w-4 animate-in zoom-in duration-300" />
              ) : (
                <Copy className="h-4 w-4 transition-transform group-hover/copy:scale-110" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" className="text-xs font-medium">
            {hasCopied ? "Copied to clipboard!" : "Click to copy"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};