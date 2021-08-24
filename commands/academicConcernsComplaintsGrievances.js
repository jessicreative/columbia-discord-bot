const { Discord, MessageEmbed } = require("discord.js");

module.exports = async function(msg, args) {
  //can also do .setUrl("link"), .setImage("imageLink"), .setFooter("ending message") in there
  const newEmbed = new MessageEmbed()
    .setColor("#9bddff")
    .setTitle("Academic Concerns and Grievances")
    .setDescription("Resources for academic concerns and grievances")
    .setURL("http://www.college.columbia.edu/academics/academicpolicies")
    .addFields(
      {
        name: "Resource Link",
        value: "http://www.college.columbia.edu/academics/academicpolicies"
      },
      {
        name: "What's on the site?",
        value:
          "Concerns Regarding a Grade\nConcerns Regarding the Experience and/or the Conduct of a Class\nOther Resources for Student Concerns"
      }
    );

  msg.channel.send(newEmbed);
};
