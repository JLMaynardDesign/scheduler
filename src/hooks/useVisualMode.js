import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {

    setMode(newMode);
    

    if (replace) {
      let newHistory = [...history];
      setHistory(newHistory.splice(newHistory.length-1, 1, newMode));
    } else {
      let newHistory = [...history, mode];
      setHistory(newHistory);
    }
    
  };

  function back() {

    if (history.length >= 1) { 
      let newHistory = [...history];
      newHistory = newHistory.slice(0,-1);
      setHistory(newHistory);
      setMode(history[history.length-1]);
    }
  }

  return { mode, transition , back};
} 