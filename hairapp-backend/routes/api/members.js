const express = require("express");
const router = express.Router();
const members = require("../../Members");
const uuid = require("uuid");

//get all the members
router.get("/", (req, res) => res.json(members));

//get single member
router.get("/:email", (req, res) => {
  const found = members.some((member) => member.email === req.params.email);
  // const found = res.json(
  //   members.filter((member) => member.email === parseInt(req.params.email))
  // );

  if (found) {
    res.json(members.filter((member) => member.email === req.params.email));
  } else {
    res.status(400).json({ msg: `No result with ${req.params.email}` });
  }
});

// Create a new member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",

    gender: req.body.gender,
    length: req.body.length,
    texture: req.body.texture,
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "Please include an email and name" });
  }

  members.push(newMember);
  console.log(members);
  res.json(members);
});

// Update Gender Pref
router.put("/:id", (req, res) => {
  const found = res.json(
    members.filter((member) => member.id === parseInt(req.params.id))
  );

  if (found) {
    const updateMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.gender = updateMember.gender
          ? updateMember.gender
          : member.gender;
        member.length = updateMember.length
          ? updateMember.length
          : member.length;
        member.texture = updateMember.texture
          ? updateMember.texture
          : member.texture;

        res.json({ msg: "Member updated", member });
      }
    });
  } else {
    res.status(400).json({ msg: `No result with ${req.params.id}` });
  }
});

module.exports = router;
