// Aries
// April 13 – May 14
// Taurus
// May 15 – June 13
// Gemini
// June 14 – July 14
// Cancer
// July 15 – Aug 15
// Leo
// Aug 16 – Sept 15
// Virgo
// Sept 16 – Oct 15
// Libra
// Oct 16 – Nov 15
// Scorpio
// Nov 16 – Dec 14
// Sagittarius
// Dec 15 – Jan 12
// Capricorn 
// Jan 13 – Feb 11
// Aquarius
// Feb 12 – March 13
// Pisces 
// Mar 14 – Apr 12

function getSign(month, day) {
  if ((month === 4 && day >= 13) || (month === 5 && day <= 14)) return "Aries";
  if ((month === 5 && day >= 15) || (month === 6 && day <= 13)) return "Taurus";
  if ((month === 6 && day >= 14) || (month === 7 && day <= 14)) return "Gemini";
  if ((month === 7 && day >= 15) || (month === 8 && day <= 15)) return "Cancer";
  if ((month === 8 && day >= 16) || (month === 9 && day <= 15)) return "Leo";
  if ((month === 9 && day >= 16) || (month === 10 && day <= 15)) return "Virgo";
  if ((month === 10 && day >= 16) || (month === 11 && day <= 15)) return "Libra";
  if ((month === 11 && day >= 16) || (month === 12 && day <= 14)) return "Scorpio";
  if ((month === 12 && day >= 15) || (month === 1 && day <= 12)) return "Sagittarius";
  if ((month === 1 && day >= 13) || (month === 2 && day <= 11)) return "Capricorn";
  if ((month === 2 && day >= 12) || (month === 3 && day <= 13)) return "Aquarius";
  if ((month === 3 && day >= 14) || (month === 4 && day <= 12)) return "Pisces";
}

const btn = document.getElementById('check');
const result = document.getElementById('result');

btn.addEventListener('click', () => {
  let dateValue = document.getElementById('date').value;
  if (!dateValue) {
    result.textContent = "Please select a date!";
    return;
  }

  let dateEntered = new Date(dateValue);
  let month = dateEntered.getMonth() + 1;
  let day = dateEntered.getDate() + 1;

  let zodiac = getSign(month, day);
  result.textContent = `${zodiac}`;
});

// Shawn Holmes & Justin Joshi helped me