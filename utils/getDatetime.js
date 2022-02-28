/**
 * 时间戳转换成日期时间
 * @param timestamp 待转换的时间戳
 * @author <a href="mailto:andylovesapple666@icloud.com">Andy Fang</a>
 */
export const getDatetime = (timestamp) => {
  const now = new Date(timestamp),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    day = now.getDate(),
    hours = now.getHours(),
    minutes = now.getMinutes(),
    seconds = now.getSeconds();
  return year + "-" +
    (month < 10 ? "0" + month : month) + "-" +
    (day < 10 ? "0" + day : day) + " " +
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}