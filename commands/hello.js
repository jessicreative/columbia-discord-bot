const replies = [
  "How are you?",
  "Hello to you too",
  "How's it going?",
  "Reply 4"
];

module.exports = function(msg, args) {
  const index = Math.floor(Math.random() * replies.length);
  msg.channel.send(replies[index]);
};
