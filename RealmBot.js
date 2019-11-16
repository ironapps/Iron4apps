$.ajax({
  type: 'POST',
  // The webhook URL.
  url: 'https://discordapp.com/api/webhooks/645057421164806155/W2dBlb8kSvWTvtQfmfdF7AO7kP2Yx5BK4Kpm6HgKVowfyGjLq1irO677PkZVrDLvXQ-L',
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
      title: 'Someone Has Joined The Realm',
      // Embed description - text on 3rd row.
      description: 'We hope they are nice (messege sent in 0.0.1.3231.321.1 mili secounts)',
      
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
