import { useState,useEffect } from "react";

const roles = ['Frontend Developer', 'React Native Developer', 'Full Stack Learner', 'CS Student @ AEU', 'Mobile App Builder'];
export default function Typing(){
    
const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);
  return (
    <h2>
        <span className="typing">
      {text}</span>
    </h2>
  );

}
