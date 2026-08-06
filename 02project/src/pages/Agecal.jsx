import { useEffect } from "react";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInWeeks,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";

function Agecal({ user, onAgeCalculated }) {
  useEffect(() => {
    if (!user?.dob) return;

    const updateAge = () => {
      const now = new Date();
      const dob = new Date(user.dob);

      onAgeCalculated({
        years: differenceInYears(now, dob),
        months: differenceInMonths(now, dob),
        days: differenceInDays(now, dob),
        weeks: differenceInWeeks(now, dob),
        hours: differenceInHours(now, dob),
        minutes: differenceInMinutes(now, dob),
        seconds: differenceInSeconds(now, dob),
      });
    };

    updateAge(); 

    const interval = setInterval(updateAge, 1000); 

    return () => clearInterval(interval);
  }, [user, onAgeCalculated]);

  return null;
}

export default Agecal;