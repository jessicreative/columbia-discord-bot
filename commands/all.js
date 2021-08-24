const { Discord, MessageEmbed } = require("discord.js");

module.exports = async function(msg, args) {
  //can also do .setUrl("link"), .setImage("imageLink"), .setFooter("ending message") in there
  const newEmbed = new MessageEmbed()
    .setColor("#9bddff")
    .setTitle("All Commands")
    .setDescription(
      "Just type one you want. Careful about capitalization. Incomplete as of now"
    )
    .addFields(
      {
        name: "academics",
        value:
          "academicsHelp\nacademicsLibraryResearch\nacademicsSpecialPrograms\n..."
      },
      {
        name: "administrationFaculty",
        value:
          "AcademicPlanningAdministrationStaff\nathleticsStaff\nberickCenterForStudentAdvisingStaff\n..."
      },
      {
        name: "advising",
        value:
          "careerAdvising\ncolumbiaCollegeAdvising\npeerAdvisingOfficeOfGlobalPrograms\n..."
      },
      {
        name: "artsOnCampus",
        value:
          "AlternativeSpringBreak\nArtsInitiative\nColumbiaArtsExperience\n..."
      },
      {
        name: "campusNews",
        value:
          "Bwog\nColumbiaCollegeEventsColumbiaCollegeNewsUpdates\nColumbiaDailySpectator\n..."
      },
      {
        name: "campusServices",
        value:
          "campusMaps\ncampusTransportation\ncolumbiaUniversityBookstore\n..."
      },
      {
        name: "communities",
        value:
          "communityPrinciples\ndiversityEducatioTraining\nfraternitySorority\nInternationalStudentsAndScholarsOffice\n..."
      },
      {
        name: "connectToTheCollege",
        value:
          "admissionsRecruitmentCommittees\ncolumbiaCollegeSeniorFund\nColumbiaCollegeToday\n..."
      },
      {
        name: "coreCurriculum",
        value: "..."
      },
      {
        name: "diningServices",
        value: "..."
      },
      {
        name: "exploreNYC",
        value: "..."
      },
      {
        name: "financialServices",
        value: "..."
      },
      {
        name: "getInvolved",
        value: "..."
      },
      {
        name: "goGlobal",
        value: "..."
      },
      {
        name: "health",
        value: "..."
      },
      {
        name: "housingResidentialLife",
        value: "..."
      },
      {
        name: "importantContacts",
        value: "..."
      },
      {
        name: "jobsCareers",
        value: "..."
      },
      {
        name: "onlineServices",
        value: "..."
      },
      {
        name: "policiesProcedures",
        value: "..."
      },
      {
        name: "safety",
        value: "..."
      },
      {
        name: "studentGovernment",
        value: "..."
      },
      {
        name: "studentGroupResources",
        value: "..."
      }
    );

  msg.channel.send(newEmbed);
};
