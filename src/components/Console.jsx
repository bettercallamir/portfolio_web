import React, { useEffect, useState } from 'react'


const codes = [
  `const developer = {
  name: "Amir",
  stack: ["React", "Node.js", "ESP32"],
  available: true
}`,

  `function createWebsite() {
  return {
    fast: true,
    modern: true,
    responsive: true
  }
}`,

  `const skills = [
  "React",
  "Tailwind",
  "Node.js",
  "Python"
]`,
];

const getTypingDelay = (char)=>{
  if (char === "\n") return 180;
  if (char === " ") return 25;

  if (["{", "}", "[", "]"].includes(char)) {
    return 120 + Math.random() * 100;
  }

  if ([",", ":", "="].includes(char)) {
    return 100 + Math.random() * 120;
  }

  if (Math.random() < 0.06) {
    return 250 + Math.random() * 400;
  }

  return 35 + Math.random() * 45;
}

export default function Console() {
  const [code,setCode] = useState("");
  const [codeIndex,setCodeIndex] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);

  useEffect(()=>{
    const currentCode = codes[codeIndex];

    let speed;

    if (!isDeleting) {

      if (code.length < currentCode.length) {
        const nextChar = currentCode[code.length];

        speed = getTypingDelay(nextChar);

        const timer = setTimeout(() => {
          setCode(currentCode.slice(0, code.length + 1));
        }, speed);

        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);

      return () => clearTimeout(timer);
    }

    if (code.length > 0) {
      speed = 25 + Math.random() * 20;

      const timer = setTimeout(() => {
        setCode(currentCode.slice(0, code.length - 1));
      }, speed);

      return () => clearTimeout(timer);
    }


    setIsDeleting(false);
    setCodeIndex((prev) => (prev + 1) % codes.length);
  },[code,isDeleting,codeIndex])
  return (
    <div className={`w-[300px] h-[40dvh] bg-gray-700 rounded-3xl bg-gradient-to-b from-[#11206C] to-[#080616]`}>
            {/* dots */}
      <div className="flex gap-2 mb-5 mt-5 ml-5">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
      </div>

      {/* code */}
      <pre
        dir="ltr"
        className="font-mono text-[14px] leading-6 whitespace-pre-wrap ml-5"
      >
        <code>
          {code}
          <span className="inline-block w-[7px] h-[16px] bg-white ml-1 animate-pulse align-middle" />
        </code>
      </pre>
    </div>
  )
}
