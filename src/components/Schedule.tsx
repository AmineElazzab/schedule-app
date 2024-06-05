import React from "react";
import { Staff, Staffs, schedules } from "../data/scheduleData";

interface Shift {
  role: string;
  time: string;
  color: string;
}

const groupShifts = (shifts: Shift[]): Shift[][] => {
  const grouped: { [key: string]: Shift[] } = {};
  shifts.forEach((shift) => {
    const key = `${shift.role}-${shift.time}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(shift);
  });
  return Object.values(grouped);
};

const Schedule: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <div className="grid grid-cols-8 gap-2 text-center">
          <div className="col-span-1 grid grid-rows-2 ">
            <div className="border-b border-r mb-1 "></div>
            <div className="flex justify-center items-center border-r text-ms text-gray-500">
              day notes
            </div>
          </div>
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="col-span-1 border-r flex flex-col  border-gray-300"
            >
              <div className="text-lg font-semibold">{schedule.date}</div>
              <div className="mt-5 border-t p-5 flex justify-center items-center">
                {schedule.events &&
                  schedule.events.map((event, idx) => (
                    <div key={idx} className="text-xs text-gray-500">
                      {event}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-6">
        <StaffSchedule title="" staff={Staffs} />
      </div>
    </div>
  );
};
interface StaffScheduleProps {
  title: string;
  staff: Staff[];
}
const StaffSchedule: React.FC<StaffScheduleProps> = ({ title, staff }) => {
  return (
    <div className="flex flex-col justify-center text-center border-t ">
      <h2 className="text-xl font-bold">{title}</h2>
      {staff.map((person, personIndex) => (
        <div key={personIndex} className="border-b border-gray-200 text-">
          <div className="grid grid-cols-8 gap-2 items-center py-2 ">
            <div className="col-span-1 flex text-left pl-2 border-r gap-4 justify-start items-center">
              <div>
                <img src={person.avatar} className="w-9 h-9 rounded-full" />
              </div>
              <div>
                <div className="font-semibold ">{person.name}</div>
                <div className="text-sm text-gray-500 ">{person.hours} hrs</div>
              </div>
            </div>
            {schedules.map((schedule, index) => (
              <div
                key={index}
                className="col-span-1 border-r pr-2 text-center h-full flex flex-col"
              >
                <div className="h-full">
                  {person.shifts[schedule.date] &&
                    person.shifts[schedule.date].length > 0 && (
                      <div
                        className={`h-full rounded-lg p-1 text-start px-4 flex items-center  ${
                          person.shifts[schedule.date][0].color
                        }`}
                      >
                        <div className="w-1 h-5/6 bg-current rounded"></div>
                        <div className="text-xs flex flex-col w-full">
                          <p className="ml-2 flex w-full font-semibold">
                            {person.shifts[schedule.date][0].time}
                            {person.shifts[schedule.date].length > 1 && (
                              <div className="ml-auto text-xs ">
                                +{person.shifts[schedule.date].length - 1}
                              </div>
                            )}
                          </p>
                          <p className="ml-2 font-medium text-[10px] ">
                            {person.shifts[schedule.date][0].role}
                          </p>
                        </div>
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Schedule;
