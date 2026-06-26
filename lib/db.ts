import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const dataDir = path.join(process.cwd(), "data");
const dbFile = path.join(dataDir, "site.db");

function createDataDirectory() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

function initializeDatabase() {
  createDataDirectory();
  const db = new Database(dbFile);

  db.exec(`
    CREATE TABLE IF NOT EXISTS site_info (
      id INTEGER PRIMARY KEY,
      company TEXT,
      city TEXT,
      clients TEXT,
      tagline TEXT,
      description TEXT
    );

    CREATE TABLE IF NOT EXISTS contact_info (
      id INTEGER PRIMARY KEY,
      company TEXT,
      address TEXT,
      phone TEXT,
      email TEXT
    );

    CREATE TABLE IF NOT EXISTS map_location (
      id INTEGER PRIMARY KEY,
      label TEXT,
      iframe_src TEXT
    );

    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY,
      title TEXT,
      description TEXT,
      location TEXT,
      status TEXT
    );
  `);

  const siteRow = db.prepare("SELECT COUNT(*) as count FROM site_info").get();
  if (siteRow.count === 0) {
    db.prepare(
      "INSERT INTO site_info (company, city, clients, tagline, description) VALUES (?, ?, ?, ?, ?)"
    ).run(
      "Bhoomi Infra Developers",
      "Mumbai region",
      "50+",
      "Construction that plans, builds, and delivers real spaces with confidence.",
      "Bhoomi Infra Developers is a trusted local construction company delivering residential, commercial, and renovation projects with strong planning, quality control, and customer communication."
    );
  }

  const contactRow = db.prepare("SELECT COUNT(*) as count FROM contact_info").get();
  if (contactRow.count === 0) {
    db.prepare(
      "INSERT INTO contact_info (company, address, phone, email) VALUES (?, ?, ?, ?)"
    ).run(
      "Bhoomi Infra Developers",
      "123 Bhoomi Nagar, Mumbai, Maharashtra",
      "+91 98765 43210",
      "contact@bhoomiinfra.com"
    );
  }

  const mapRow = db.prepare("SELECT COUNT(*) as count FROM map_location").get();
  if (mapRow.count === 0) {
    db.prepare(
      "INSERT INTO map_location (label, iframe_src) VALUES (?, ?)"
    ).run(
      "Bhoomi Infra Developers office location",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60251.71551800655!2d72.78605862574352!3d19.06298653893159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b4c6a0a4ad3f%3A0x4e3bb77b8d22463!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
    );
  }

  const projectRow = db.prepare("SELECT COUNT(*) as count FROM projects").get();
  if (projectRow.count === 0) {
    const projects = [
      [
        "Residential tower finish",
        "Structural completion and interior execution for a luxury apartment project.",
        "Andheri East, Mumbai",
        "In progress",
      ],
      [
        "Commercial office build",
        "Turnkey office fit-out and façade upgrade for a growing technology firm.",
        "Lower Parel, Mumbai",
        "In progress",
      ],
      [
        "Heritage renovation",
        "Careful restoration and upgrade of a century-old house with modern amenities.",
        "Colaba, Mumbai",
        "Site survey",
      ],
    ];

    const insert = db.prepare(
      "INSERT INTO projects (title, description, location, status) VALUES (?, ?, ?, ?)"
    );
    const insertMany = db.transaction((rows) => {
      for (const row of rows) insert.run(...row);
    });
    insertMany(projects);
  }

  return db;
}

let db;

function getDatabase() {
  try {
    if (!db) {
      db = initializeDatabase();
    }
    return db;
  } catch (error) {
    console.error("SQLite initialization failed:", error);
    return null;
  }
}

function fallbackData() {
  return {
    siteInfo: {
      company: "Bhoomi Infra Developers",
      city: "Mumbai region",
      clients: "50+",
      tagline: "Construction that plans, builds, and delivers real spaces with confidence.",
      description:
        "Bhoomi Infra Developers is a trusted local construction company delivering residential, commercial, and renovation projects with strong planning, quality control, and customer communication.",
    },
    contactInfo: {
      company: "Bhoomi Infra Developers",
      address: "123 Bhoomi Nagar, Mumbai, Maharashtra",
      phone: "+91 98765 43210",
      email: "contact@bhoomiinfra.com",
    },
    mapLocation: {
      label: "Bhoomi Infra Developers office location",
      iframe_src:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60251.71551800655!2d72.78605862574352!3d19.06298653893159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b4c6a0a4ad3f%3A0x4e3bb77b8d22463!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000",
    },
    projects: [
      {
        id: 1,
        title: "Residential tower finish",
        description: "Structural completion and interior execution for a luxury apartment project.",
        location: "Andheri East, Mumbai",
        status: "In progress",
      },
      {
        id: 2,
        title: "Commercial office build",
        description: "Turnkey office fit-out and façade upgrade for a growing technology firm.",
        location: "Lower Parel, Mumbai",
        status: "In progress",
      },
      {
        id: 3,
        title: "Heritage renovation",
        description: "Careful restoration and upgrade of a century-old house with modern amenities.",
        location: "Colaba, Mumbai",
        status: "Site survey",
      },
    ],
  };
}

export function getSiteInfo() {
  const database = getDatabase();
  if (!database) return fallbackData().siteInfo;

  return database.prepare("SELECT company, city, clients, tagline, description FROM site_info LIMIT 1").get();
}

export function getContactInfo() {
  const database = getDatabase();
  if (!database) return fallbackData().contactInfo;

  return database.prepare("SELECT company, address, phone, email FROM contact_info LIMIT 1").get();
}

export function getMapLocation() {
  const database = getDatabase();
  if (!database) return fallbackData().mapLocation;

  return database.prepare("SELECT label, iframe_src FROM map_location LIMIT 1").get();
}

export function getProjects() {
  const database = getDatabase();
  if (!database) return fallbackData().projects;

  return database.prepare("SELECT id, title, description, location, status FROM projects ORDER BY id").all();
}
