import { useState, useEffect } from "react";

function useAbuDhabiTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const abuDhabiTime = new Date(
    time.toLocaleString("en-US", { timeZone: "Asia/Dubai" })
  );
  const year = abuDhabiTime.getFullYear();
  const month = abuDhabiTime.toLocaleString("default", { month: "long" });
  const day = abuDhabiTime.getDate();
  const hour = abuDhabiTime.getHours();
  const minute = abuDhabiTime.getMinutes();
  const second = abuDhabiTime.getSeconds();
  const formattedHour = hour > 12 ? hour - 12 : hour;
  const amPM = hour >= 12 ? "PM" : "AM";
  const formattedMinute = minute < 10 ? `0${minute}` : minute;
  const formattedSecond = second < 10 ? `0${second}` : second;

  return {
    year,
    month,
    day,
    formattedHour,
    formattedMinute,
    formattedSecond,
    amPM,
  };
}

export default useAbuDhabiTime;
