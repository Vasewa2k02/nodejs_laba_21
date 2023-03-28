const fs = require("fs");

class TipaDB {
  constructor() {
    this.contacts = require("./contacts.json");
    this.currentId = this.contacts[this.contacts.length - 1]?.id || 0;
  }

  getAll() {
    return this.contacts;
  }

  getById(id) {
    return this.contacts.find((contact) => contact.id == id);
  }

  create(phoneDto) {
    if (
      phoneDto.name === undefined ||
      phoneDto.name === "" ||
      phoneDto.phoneNumber === undefined ||
      phoneDto.phoneNumber === ""
    ) {
      return;
    }

    this.contacts.push({
      id: ++this.currentId,
      name: phoneDto.name,
      phoneNumber: phoneDto.phoneNumber,
    });

    this.writeToFile();
  }

  update(phoneDto) {
    const contact = this.contacts.find((contact) => contact.id == phoneDto.id);

    contact.name = phoneDto.name ? phoneDto.name : contact.name;
    contact.phoneNumber = phoneDto.phoneNumber
      ? phoneDto.phoneNumber
      : contact.phoneNumber;

    this.writeToFile();
  }

  delete(phoneDto) {
    this.contacts.splice(
      this.contacts.indexOf(
        this.contacts.find((contact) => contact.id == phoneDto.id)
      ),
      1
    );
    this.writeToFile();
  }

  writeToFile() {
    fs.writeFile(
      __dirname + "/contacts.json",
      JSON.stringify(this.contacts),
      (err) => {
        console.log(err);
        return null;
      }
    );
  }
}

module.exports.TipaDB = TipaDB;
