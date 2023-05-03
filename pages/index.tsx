import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";


export default function Home() {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const [activeOption, setActiveOption] = useState<string>('tigerlosjen');
  const [activeDate, setActiveDate] = useState<Date | null>(null);



  useEffect(() => {
      setHydrated(true);
  }, []);
  if (!hydrated) {
      return null;
  }

  return (
    <>
      <div className="dark:dark:bg-slate-800 h-screen">
        <Navbar setActiveOption={setActiveOption}/>
        {activeOption === "tigerlosjen"? <Calendar activeDate={activeDate} setActiveDate={setActiveDate} /> : null }
      </div>
    </>
  );
}
