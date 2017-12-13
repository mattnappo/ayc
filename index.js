var website;
var origin = ["google.com", "wikipedia.com","michales.com","businessindider.com","kickstarter.com","nbc.com","cnn.com","abc.com","huffpost.com","dailymeal.com","washingtonpost.com","instagram.com","pintrest.com","flicker.com","reddit.com","tumbler.com","Googleplus.com","dailymotion.com","Googlevideo.com","vevo.com","indegogo.com","arreva.com"];
var redir = ["bing.com", "infoplease.com","esty.com","cnet.com","gofundme.com","cbs.com","bbc.com","fox.com","Yahoonews.com","theguardian.com","wallstreet.com","myspace.com","myspace.com","myspace.com","myspace.com","myspace.com","myspace.com","liveleak.com","vine.com","viewster.com","fundly.com","crowdrise.com"];
for(var i = 0; i < origin.length; i++) {
  origin[i] = "https://" + origin[i];
  redir[i] = "https://" + redir[i];
}
const webview = document.querySelector('webview')
function redirect(next) {
  document.querySelector('webview').src = next;
}
function throttle(website) {
  for(var i = 0; i < origin.length; i++) {
    if(origin[i] == website) {
      redirect(redir[i]);
    }
  }
}
function go() {
  website = document.getElementById("website").value;
  throttle(website);
}
