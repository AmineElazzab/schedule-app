import React from "react";
import {
  schedules,
  Staffs,
  Staff,
  Schedule as ScheduleInterface, // Rename the imported interface
} from "../data/scheduleData";

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
          <div className="col-span-1"></div>
          {schedules.map((schedule, index) => (
            <div key={index} className="col-span-1 border-r border-gray-300">
              <div className="text-lg font-semibold">{schedule.date}</div>
              {schedule.events &&
                schedule.events.map((event, idx) => (
                  <div key={idx} className="text-xs text-gray-500">
                    {event}
                  </div>
                ))}
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
    <div className="flex flex-col justify-center text-center ">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {staff.map((person, personIndex) => (
        <div key={personIndex} className="border-b border-gray-200 mb-4">
          <div className="grid grid-cols-8 gap-2 items-center py-2 ">
            <div className="col-span-1 text-left pl-2 border-r">
              <div className="font-semibold">{person.name}</div>
              <div className="text-sm text-gray-500 ">{person.hours} hrs</div>
            </div>
            {schedules.map((schedule, index) => (
              <div key={index} className="col-span-1 border-r pr-2 text-center flex flex-col">
                <div
                  style={{ height: "" /* Adjust the height as needed */ }}
                >
                  {person.shifts[schedule.date] &&
                    person.shifts[schedule.date].length > 0 && (
                      <div
                        className={`h-full rounded p-1 ${
                          person.shifts[schedule.date][0].color
                        }`}
                      >
                        <div className="text-xs">
                          {person.shifts[schedule.date][0].time}
                        </div>
                        <div className="text-xs">
                          {person.shifts[schedule.date][0].role}
                        {person.shifts[schedule.date].length > 1 && (
                          <div className="text-xs">
                            +{person.shifts[schedule.date].length - 1}
                          </div>
                        )}
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
