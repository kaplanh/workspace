// Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// testconst strictEqual = require("chai").assert.strictEqual;

// describe('tests', function() {
//   it('should format correctly', function() {
//     strictEqual(humanReadable(0), '00:00:00', 'humanReadable(0)');
//     strictEqual(humanReadable(59), '00:00:59', 'humanReadable(59)');
//     strictEqual(humanReadable(60), '00:01:00', 'humanReadable(60)');
//     strictEqual(humanReadable(90), '00:01:30', 'humanReadable(90)');
//     strictEqual(humanReadable(3599), '00:59:59', 'humanReadable(3599)');
//     strictEqual(humanReadable(3600), '01:00:00', 'humanReadable(3600)');
//     strictEqual(humanReadable(45296), '12:34:56', 'humanReadable(45296)');
//     strictEqual(humanReadable(86399), '23:59:59', 'humanReadable(86399)');
//     strictEqual(humanReadable(86400), '24:00:00', 'humanReadable(86400)');
//     strictEqual(humanReadable(359999), '99:59:59', 'humanReadable(359999)');
//   });
// });

// *Türkcesi:
// Girdi olarak negatif olmayan bir tamsayı (saniye) alan ve zamanı insan tarafından okunabilir bir biçimde (SS:DD:SS) döndüren bir işlev yazın. HH = saat, 2 haneye kadar dolgulu, aralık: 00 - 99 MM = dakika, 2 haneye kadar dolgulu, aralık: 00 - 59 SS = saniye, 2 haneye kadar dolgulu, aralık: 00 - 59 Maksimum süre hiçbir zaman 359999'u geçmez (99:59:59) Test fikstürlerinde bazı örnekler bulabilirsiniz.

// *solution - 1
soru: function humanReadable(seconds) {
  let hours = parseInt(seconds / 3600)
    .toString()
    .padStart(2, "0");
  let min = parseInt((seconds / 60) % 60)
    .toString()
    .padStart(2, "0");
  let sec = parseInt(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${hours}:${min}:${sec}`;
}

// *solution - 2
// function humanReadable(seconds) {
//   let hour = Math.trunc(seconds / 3600);
//   let minute = Math.trunc((seconds / 3600 - hour) * 60);
//   let second = Math.round(((seconds / 3600 - hour) * 60 - minute) * 60);
//   if (second == 60) {
//     second = 00;
//     minute = minute + 1;
//   }
//   hour < 10 ? (hour = "0" + hour) : hour;
//   minute < 10 ? (minute = "0" + minute) : minute;
//   second < 10 ? (second = "0" + second) : second;
//   return hour + ":" + minute + ":" + second;
// }

// *solution - 3

// function humanReadable (seconds) {
//   const hour = parseInt(seconds / 3600);
//   const minute = parseInt(seconds % 3600 / 60);
//   const second = parseInt(seconds % 3600 % 60);
//   function modify(number) {
//     let stringNumber = String(number);
//     if(stringNumber.length == 1) {
//       stringNumber = '0'+stringNumber;
//     }
//     return stringNumber;
//   }
//   return modify(hour)+':'+modify(minute)+':'+modify(second);
