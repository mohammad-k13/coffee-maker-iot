import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  const options: any = { 
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, // Get user's timezone
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric' 
  };

  return <>{time.toLocaleTimeString('en-US', options)}</>;
}

export default Clock;