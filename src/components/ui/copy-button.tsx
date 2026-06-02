"use client";

import { Copy } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/button";

export default function CopyButton({ contactId }: { contactId: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contactId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button
      variant="default"
      onClick={handleCopy}
      className="flex items-center gap-2"
    >
      <span className="flex-1">
        {copied ? "已复制微信号" : "[ 扫码交流 / 复制微信号 ]"}
      </span>
      <span>{copied ? "✓" : <Copy size={16} />}</span>
    </Button>
  );
}
