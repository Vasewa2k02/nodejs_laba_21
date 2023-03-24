const tipaDB = require("../database/tipaDB");
const tipaDBclient = new tipaDB.TipaDB();

exports.getIndexPage = async function (req, res) {
  res.render("index", {
    contacts: tipaDBclient.getAll(),
    isActive: true,
  });
};

exports.getAddForm = async function (req, res) {
  res.render("add", {
    contacts: tipaDBclient.getAll(),
    isActive: false,
    helpers: { refuse: () => "window.location.href='/'" },
  });
};

exports.getUpdateForm = async function (req, res) {
  res.render("update", {
    contacts: tipaDBclient.getAll(),
    contact: tipaDBclient.getById(req.params.id),
    isActive: false,
    helpers: { refuse: () => "window.location.href='/'" },
  });
};

exports.createContact = async function (req, res) {
  res.json(tipaDBclient.create(req.body));
};

exports.updateContact = async function (req, res) {
  res.json(tipaDBclient.update(req.body));
};

exports.deleteContact = async function (req, res) {
  res.json(tipaDBclient.delete(req.body));
};
