import { useState } from "react";
import CalendarComp from "react-calendar";
import Order from "./Order";

interface CalendarProps {
  activeDate: Date | null;
  setActiveDate: (option: Date | null) => void;
}
const Calendar: React.FC<CalendarProps> = ({ activeDate, setActiveDate }) => {
  const onDateChange = (date: Date) => {
    setActiveDate(date);
  };

  const currentDate = new Date();
  const threeDaysFromNow = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3);
  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month" && date.getTime() === threeDaysFromNow.getTime()) {
      return "react-calendar__tile--booked";
    }
    return "";
  };

  return (
    <>
      <div className="flex">
        <div className="grid h-screen place-items-center ml-40">
          <CalendarComp
            minDate={new Date()}
            view="month"
            value={activeDate}
            onClickDay={onDateChange}
            tileClassName={tileClassName}
          />
        </div>
        {activeDate ? (
          <div className="grid h-screen place-items-center ml-20">
            <Order date={activeDate} setActiveDate={setActiveDate} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default Calendar;
