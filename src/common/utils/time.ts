export function convertToSeconds(time: string) {
  const [hour = "0", minutes = "0", seconds = "0"] = time.split(":");

  const hourinSeconds = Number(hour) * 3600;
  const minutesInSeconds = Number(minutes) * 60;

  return hourinSeconds + minutesInSeconds + Number(seconds);
}
