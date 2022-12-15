function truncate(str, maxlength) {
<<<<<<< HEAD
    return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
=======
  let strLength = str.length;
  let exceedsMaxlength = strLength > maxlength;

  if (exceedsMaxlength) {
    let shortenStr = str.slice(0, maxlength - 1);

    return `${shortenStr}…`;
  }

  return str;
>>>>>>> 0574fb469a29949ef863d79dfe1b8dd0c5b181c6
}
