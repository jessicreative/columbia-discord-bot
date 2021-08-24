const hello = require("./commands/hello.js");
const gif = require("./commands/gif.js");
const academics = require("./commands/academics.js");
const academicCalendar = require("./commands/academicCalendar.js");
const academicConcernsComplaintsGrievances = require("./commands/academicConcernsComplaintsGrievances.js");
const all = require("./commands/all.js");

const commands = {
  all,
  hello,
  gif,
  academics,
  academicCalendar,
  academicConcernsComplaintsGrievances
};

module.exports = async function(msg) {
  if (msg.author.bot) {
    return;
  }
  if (msg.channel.id == process.env.GENERALCHANNEL) {
    let tokens = msg.content.split(" ");
    //  tokens = tokens.forEach(function(item, index) {
    //    item.toLowerCase();
    //  });
    let command = tokens.shift();
    commands[command](msg, tokens);
  }
};
