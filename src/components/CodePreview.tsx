
import React from 'react';
import { Button } from "@/components/ui/button";

interface CodePreviewProps {
  title: string;
  code: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({ title, code }) => {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800">
        <p className="text-white text-sm font-medium">{title}</p>
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-white text-sm font-mono">
          <code>{code}</code>
        </pre>
      </div>
      <div className="bg-slate-800 px-4 py-3 flex justify-between items-center">
        <span className="text-white/50 text-xs">Resultado ao vivo</span>
        <Button size="sm" variant="outline" className="bg-lovable-blue hover:bg-lovable-blue/90 text-white border-none">
          Visualizar
        </Button>
      </div>
    </div>
  );
};

export default CodePreview;
