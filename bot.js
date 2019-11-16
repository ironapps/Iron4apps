$.ajax({
  type: 'POST',
  // The webhook URL.
  url: 'https://discordapp.com/api/webhooks/644686668237897769/4ufOP4BofAUxQOl1xgpysnpLooinsyzW4j0bQrWe8HUbktGMknnVPLHCcxmCs2edeZ-P',
  // Message data.
  data: JSON.stringify({
    // The username to be displayed.
    username: 'IronTheCoder Web Bot',
    // The avatar to be displayed.
    avatar_url: 'https://ironapps.github.io/Iron4apps/ironthecoder.png',
    // Contents of the message to be sent.
   
    // Embeds to be sent.
    embeds: [{
      // Embed title - link on 2nd row.
      title: 'Someone Has Loaded The Website',
      // Embed description - text on 3rd row.
      description: 'We hope they dont abuse the site messege sent in 0.0.1.3231.321.1 mili secounts',
      
      // Embed footer - icon next to text at bottom.
      footer: {
        text: 'Made Using Javascript',
        
      }
    }]
  }),
  // Content type.
  contentType: 'application/json',
  // Success callback.
  success: function (data) { },
  // Error callback.
  error: function (data) {
    alert(data.responseText);
  }
});
