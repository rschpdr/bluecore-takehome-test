function toSeconds(time) {
  const [hours, minutes, seconds] = time.split(":");

  let total = Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600;

  return total;
}

function toTimeString(seconds) {
  seconds = Math.abs(seconds);
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;

  return `${hours} hours, ${minutes} minutes, and ${newSeconds} seconds`;
}

module.exports = function (racerTimes) {
  if (racerTimes.every((el) => el.time === "dnf")) {
    return "There is no winner";
  }

  const validTimes = racerTimes.filter((el) => el.time !== "dnf");
  if (validTimes.length === 1) {
    return `${validTimes[0].name} won by no contest`;
  }

  validTimes.sort((a, b) => {
    return toSeconds(a.time) - toSeconds(b.time);
  });

  const difference =
    toSeconds(validTimes[0].time) - toSeconds(validTimes[1].time);

  return `${validTimes[0].name} won by ${toTimeString(difference)}`;
};
