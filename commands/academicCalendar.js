//this is a new comment update for assignment 0 part 1

const { Discord, MessageEmbed } = require("discord.js");

module.exports = async function(msg, args) {
  //can also do .setUrl("link"), .setImage("imageLink"), .setFooter("ending message") in there
  const newEmbed = new MessageEmbed()
    .setColor("#9bddff")
    .setTitle("Academic Calendar")
    .setDescription("Calendar for Spring and Summer 2021")
    .setURL("https://covid19.columbia.edu/content/academic-calendar-2020-21-0")
    .addFields(
      {
        name: "Spring 2021 Term",
        value:
          "Classes Begin:	Monday, January 11\n Martin Luther King Jr. Day, University Holiday:	Monday, January 18\nExams for Immersive Courses:	Tuesday, February 23-Friday, February 26\nSpring Break:	Monday, March 1-Friday, March 5\nClasses Resume;	Monday, March 8\nLast Day of Classes	Thursday, April 15NReading and Exam Days:	Friday, April 16-Friday, April 23\nSemester Ends:	Monday, April 26\nCommencement Week:	Tuesday, April 27-Friday, April 30"
      },
      {
        name: "Summer 2021 Term, A&B",
        value:
          "Classes Begin:	Monday, May 3\n Memorial Day, University Holiday:	Monday, May 31\nReading and Exam Days:	Tuesday, June 15-Friday, June 18\nBreak:	Monday, June 21-Friday, June 25\nClasses Resume:	Monday, June 28\nLast Day of Classes:	Friday, August 6\nReading and Exam Days:	Monday, August 9-Monday, August 16\nSemester Ends:	Monday, August 16"
      }
    );

  msg.channel.send(newEmbed);
};
