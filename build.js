"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.hex("#FF48C4").bold("             ◄ Gil Creque"),
  handle: chalk.hex("2BD1FC").bold("gilcreque ▶"),
  work: chalk.bgHex("#FF48C4").hex("#000000")(
    "Senior Software Engineer at Codecraft Works"
  ),
  twitter: chalk.bgHex("#2BD1FC").hex("#000000")(
    "https://twitter.com/gilcreque"
  ),
  npm: chalk.bgHex("#FF3F3F").hex("#000000")("https://npmjs.com/~gilcreque"),
  github: chalk.bgHex("#c04df9").hex("#000000")("https://github.com/gilcreque"),
  linkedin: chalk.bgHex("#f3ea5f").hex("#000000")(
    "https://linkedin.com/in/gilcreque"
  ),
  web: chalk.bgHex("#FF48C4").hex("#000000")("https://gilcreque.com"),
  npx: chalk.hex("#FF3F3F")("npx") + " " + chalk.white.bold("gilcreque"),
  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:")
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  twittering +
  newline + // data.labelTwitter + data.twitter
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  npming +
  newline + // data.labelnpm + data.npm
  webing +
  newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
