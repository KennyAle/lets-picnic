import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState("00 : 00 : 00");

  const getNextThursdayMidnight = () => {
    const now = new Date();
    const day = now.getDay(); 
    let daysUntilThursday = (4 - day + 7) % 7;
    if (daysUntilThursday === 0 && now.getHours() >= 0) {
      daysUntilThursday = 7;
    }
    const nextThursday = new Date(now);
    nextThursday.setDate(now.getDate() + daysUntilThursday);
    nextThursday.setHours(0, 0, 0, 0);
    return nextThursday;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const nextThursday = getNextThursdayMidnight();
      const diff = nextThursday.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft("Promotion expired");
        clearInterval(interval);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      const formattedTime = `${String(hours).padStart(2, "0")} : ${String(
        minutes
      ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`

      setTimeLeft(formattedTime);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 items-center text-red-400 font-mono tracking-tighter font-semibold text-base">
      <FaRegClock />
      {timeLeft}
    </div>
  );
};

export default Timer;
