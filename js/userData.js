function userList() {
  var user_data = [];

  for (var i = 0; i < list.length; i++) {
    var entry = list[i];

    var checkVerify = false;
    var verifier = "";
    if (entry.author.split("[").length != 2) {
      verifier = entry.author;
    } else {
      verifier = entry.author.split("[")[1].replace("]", "");
    }
    for (var b = 0; b < user_data.length; b++) {
      if (user_data[b].name.toUpperCase() == verifier.toUpperCase()) {
        checkVerify = true;
      }
    }

    var p = roundNumber(
      getUserPoint(i + 1, 100, entry.percentToQualify, "144hz") * 1,
      3
    );
    if (checkVerify == true) {
      for (var b = 0; b < user_data.length; b++) {
        var user_name = user_data[b].name.toUpperCase();
        var data_name = verifier.toUpperCase();
        if (user_name == data_name) {
          user_data[b].point = user_data[b].point + p;
          user_data[b].verified.push(i + 1);
        }
      }
    } else {
      var prog = [];
      var verified = [];
      verified.push(i + 1);

      user_data.push({
        name: verifier,
        highest: "null",
        progress: prog,
        point: p,
        verified: verified,
      });
    }

    for (var a = 0; a < entry.vids.length; a++) {
      var entry2 = entry.vids[a];
      var isLoot = false;
      for (var b = 0; b < user_data.length; b++) {
        if (user_data[b].name.toUpperCase() == entry2.user.toUpperCase()) {
          isLoot = true;
        }
      }
      var p = getUserPoint(
        i + 1,
        entry2.percent,
        entry.percentToQualify,
        entry2.hz
      );
      if (isLoot == true) {
        for (var b = 0; b < user_data.length; b++) {
          var user_name = user_data[b].name.toUpperCase();
          var data_name = entry2.user.toUpperCase();
          if (user_name == data_name) {
            user_data[b].point = user_data[b].point + p;

            if (
              user_data[b].highest == "null" &&
              parseInt(entry2.percent) == 100
            ) {
              user_data[b].highest = entry.name;
            }
            user_data[b].progress.push({
              map: entry.name.toString(),
              progress: entry2.percent.toString(),
              link: entry2.link,
              score: roundNumber(p, 3),
              rank: i + 1,
              hz: entry2.hz != null ? entry2.hz : "144hz",
            });
          }
        }
      } else {
        var map = entry.name.toString();
        if (parseInt(entry2.percent) != 100) {
          map = "null";
        }

        var prog = [];
        prog.push({
          map: entry.name.toString(),
          progress: entry2.percent.toString(),
          link: entry2.link,
          score: roundNumber(p, 3),
          rank: i + 1,
          hz: entry2.hz != null ? entry2.hz : "144hz",
        });

        user_data.push({
          name: entry2.user,
          highest: map,
          progress: prog,
          point: p,
          verified: [],
        });
      }
    }
  }
  return user_data;
}

function getUserData(index) {
  var userData = userList();
  var user = userData[index];
  
  var progressHTML = "";
  if (user.progress.length > 0) {
    progressHTML = "<h4>Progress on Challenges:</h4>";
    for (let i = 0; i < user.progress.length; i++) {
      let prog = user.progress[i];
      progressHTML += `<div style="margin: 0.5em 0; padding: 0.5em; background: rgba(255,255,255,0.1); border-radius: 0.3em;">
        <strong>${prog.map}</strong>: ${prog.progress}% - ${prog.score} points (${prog.hz})
        <br><a href="${prog.link}" target="_blank" style="color: #9595E2;">Watch Video</a>
      </div>`;
    }
  }

  var verifiedHTML = "";
  if (user.verified.length > 0) {
    verifiedHTML = `<p><strong>Verified Challenges:</strong> ${user.verified.join(", ")}</p>`;
  }

  Swal.fire({
    title: user.name,
    html: `
      <div style="text-align: left; color: #333;">
        <p><strong>Total Points:</strong> ${user.point}</p>
        <p><strong>Highest Completion:</strong> ${user.highest === "null" ? "None yet" : user.highest}</p>
        ${verifiedHTML}
        ${progressHTML}
      </div>
    `,
    color: "#333",
    background: "linear-gradient(135deg, rgba(149, 149, 226, 0.3) 0%, rgba(255, 134, 134, 0.3) 100%)",
    confirmButtonColor: "#9595E2",
  });
}

function roundNumber(num, scale) {
  if (!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale) + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = "";
    if (+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}