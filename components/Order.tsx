import formatDate from "../utils/formatDate";
import Vipps from "../public/vipps.svg";
import { use, useEffect, useState } from "react";

interface DateObj {
  date: Date | undefined;
  setActiveDate: (option: Date | null) => void;

}

 const Order: React.FC<DateObj>  = ({date, setActiveDate})=>{
  const [show, setShow] = useState(true);

  useEffect(()=>{
    setShow(true)
  }, [date])

 const handleNoShow = () =>{
  setShow(false)
  setActiveDate(null)
 }


  return (
    <div>
      {show ?  <div className="relative bg-slate-200 rounded-xl text-black justify-between flex flex-col h-96 w-64">
      <button onClick={handleNoShow} className="absolute right-1">x</button>
      <h2 className="mt-8 self-center">Book tigerlosjen {date ? formatDate(date):""}</h2>
      <h4 className=" self-center">200kr</h4>
      <button className="self-center">
        <Vipps />
      </button>
    </div> : <div></div>}
    </div>
  );
}

export default Order;