'use client';
import { useState, useEffect, useRef } from 'react';

const commands = {
  help: 'Available commands: whoami, ls projects, exambuilder, contact, clear, exit',
  'ls projects': "Projects: ExamBuilder (New!), WebSlide Generator, EMSI Suite, Arduino Lab, Solar Explorer...",
  exambuilder: "Opening ExamBuilder: An AI-powered platform for teachers to generate exams using Google Gemini.",
  whoami: "Full Stack Engineer & Designer based in Rabat, Morocco. Focused on scalable Next.js and MERN stack applications.",
  contact: 'Opening contact form...',
  'enable claude sonnet 4.5': 'Error: 403 Forbidden. This portfolio runs on pure Aymane intelligence (and maybe some Gemini).',
};

const CLITerminal = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { type: 'info', content: 'AYMANE FAKIHI CLI [Version 1.0.0]' },
    { type: 'info', content: 'Type "help" for a list of commands.' },
  ]);
  const [input, setInput] = useState('');
  const historyEndRef = useRef(null);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (command) => {
    const cmd = command.toLowerCase();
    const output = commands[cmd];
    setHistory(prev => [...prev, { type: 'input', content: command }]);
    if (output) {
      if (cmd === 'contact') {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
        setHistory(prev => [...prev, { type: 'output', content: output }]);
      } else if (cmd === 'exit') {
        onClose();
        return;
      } else if (cmd === 'exambuilder') {
        document.getElementById('project-9')?.scrollIntoView({ behavior: 'smooth' });
        setHistory(prev => [...prev, { type: 'output', content: output }]);
      } else {
        setHistory(prev => [...prev, { type: 'output', content: output }]);
      }
    } else if (cmd === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, { type: 'error', content: `Error: Command not found: ${command}. Type "help".` }]);
    }
  };

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      executeCommand(input.trim());
      setInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black bg-opacity-80 flex items-center justify-center p-4">
      <div 
        className="w-full max-w-4xl h-3/4 bg-[#1e293b] text-white font-mono rounded-lg shadow-2xl flex flex-col border border-[#14b8a6]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="flex justify-between items-center bg-[#101827] p-2 border-b border-[#14b8a6]">
          <span className="text-sm">AymaneFakihi@Portfolio:~$</span>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            [X] Close
          </button>
        </div>

        {/* Output Area */}
        <div className="flex-1 overflow-y-auto p-4 text-sm whitespace-pre-wrap leading-relaxed">
          {history.map((line, index) => (
            <div key={index} className={line.type === 'error' ? 'text-red-400' : line.type === 'info' ? 'text-gray-400' : 'text-white'}>
              {line.type === 'input' && <span className="text-[#14b8a6]">AymaneFakihi:~$ </span>}
              {line.content}
            </div>
          ))}
          <div ref={historyEndRef} />
        </div>

        {/* Input Line */}
        <div className="p-4 border-t border-[#14b8a6] flex items-center bg-[#101827]">
          <span className="text-[#14b8a6] text-sm font-bold">AymaneFakihi:~$ </span>
          <input
            type="text"
            className="flex-1 bg-transparent border-none text-white outline-none ml-2 text-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleInput}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default CLITerminal;
