const { Discord, MessageEmbed } = require("discord.js");

module.exports = async function(msg, args) {
  //can also do .setUrl("link"), .setImage("imageLink"), .setFooter("ending message") in there
  const newEmbed = new MessageEmbed()
    .setColor("#9bddff")
    .setTitle("Academics")
    .setDescription(
      "This shows possible commands for academic resources. Small caps only please."
    )
    .addFields(
      {
        name: "academics",
        value: "academicCalendar \n academicConcernsComplaintsGrievances"
      },
      {
        name: "Academics - Help",
        value: "academicSupport \n contactLibrarySubjectSpecialistLiason"
      }
    );
  //   const embed = new MessageEmbed()
  //     // Set the title of the field
  //     .setTitle("A slick little embed")
  //     // Set the color of the embed
  //     .setColor(0xff0000)
  //     // Set the main content of the embed
  //     .setDescription("Hello, this is a slick embed!");
  //   // Send the embed to the same channel as the message
  //   msg.channel.send(embed);

  msg.channel.send(newEmbed);
};
