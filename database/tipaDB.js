const fs = require("fs");

class TipaDB {
  contacts = [];
  currentId = 0;

  constructor() {
    this.contacts = require("./contacts.json");
    this.currentId = this.contacts[this.contacts.length - 1]?.id;
  }

  getAll() {
    return this.contacts;
  }

  getById(id) {
    return this.contacts.find((contact) => contact.id == id);
  }

  create(phoneDto) {
    if (phoneDto.name === undefined || phoneDto.phoneNumber === undefined) {
      return null;
    }

    const newContact = {
      id: ++this.currentId,
      name: phoneDto.name,
      phoneNumber: phoneDto.phoneNumber,
    };

    this.contacts.push(newContact);
    this.writeToFile();

    return newContact;
  }

  update(phoneDto) {
    const contact = this.contacts.find((contact) => contact.id == phoneDto.id);

    contact.name = phoneDto.name ? phoneDto.name : contact.name;
    contact.phoneNumber = phoneDto.phoneNumber
      ? phoneDto.phoneNumber
      : contact.phoneNumber;
    this.writeToFile();

    return contact;
  }

  delete(phoneDto) {
    const contact = this.contacts.find((contact) => contact.id == phoneDto.id);

    this.contacts.splice(this.contacts.indexOf(contact), 1);
    this.writeToFile();

    return contact;
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
