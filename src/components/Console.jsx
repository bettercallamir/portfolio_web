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



export default function Console() {
  const [code,setCode] = useState("");
  const [codeIndex,setCodeIndex] = useState(0);
  const [isDeleting,setIsDeleting] = useState(false);

  useEffect(()=>{
    const currentCode = codes[codeIndex];
    const speed = isDeleting ? 25:45;

    const timer = setTimeout(()=>{
      if (!isDeleting){
        setCode(currentCode.substring(0, code.length+1));

        if (code.length === currentCode.length) {
          setTimeout(()=> setIsDeleting(true), 1800);
        }
      } else {
        setCode(currentCode.substring(0, code.length - 1));
        if (code.length === 0) {
          setIsDeleting(false);
          setCodeIndex((prev) => (prev + 1) % codes.length);
        }
      }
    },speed)
    return () => clearTimeout(timer);
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
