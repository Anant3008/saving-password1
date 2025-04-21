document.addEventListener('DOMContentLoaded', function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? parseInt(cookie.split('=')[1]) : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
  }

  // 1. Get the value of the 'count' cookie
  let count = getCookie('count');

  // 2. If it doesn't exist, set it to 1. Otherwise, increment it.
  if (count === null) {
    count = 1;
  } else {
    count += 1;
  }

  // 3. Set the updated value back to the cookie
  setCookie('count', count, 7); // expires in 7 days

  // 4. Display the count on the page if the countDisplay element exists
  const display = document.getElementById('countDisplay');
  if (display) {
    display.textContent = `You have visited ${count} times.`;
  }
});
