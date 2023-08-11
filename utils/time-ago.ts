export function timeAgo(date: string): string {
  const now = new Date();
  const diffInMS = now.getTime() - new Date(date).getTime();

  const diffInSecs = Math.round(diffInMS / 1000);
  const diffInMins = Math.round(diffInSecs / 60);
  const diffInHrs = Math.round(diffInMins / 60);
  const diffInDays = Math.round(diffInHrs / 24);
  if (diffInSecs < 60) {
    return diffInSecs + "s";
  } else if (diffInMins < 60) {
    return diffInMins + "m";
  } else if (diffInHrs < 24) {
    return diffInHrs + "h";
  } else if (diffInDays === 1) {
    return "Yesterday";
  } else {
    return diffInDays + "days";
  }
}
