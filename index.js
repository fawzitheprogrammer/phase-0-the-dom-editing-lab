// Check if the document contains an <h1> tag
const hasH1Tag = document.querySelector('h1') !== null;

// Check if the document contains a <p> tag
const hasPTag = document.querySelector('p') !== null;

// Check if there is a <p> tag containing a <strong> tag
const hasStrongTagInsidePTag = document.querySelector('p strong') !== null;

// Check if there is a <p> tag containing an <em> tag
const hasEmTagInsidePTag = document.querySelector('p em') !== null;

// Check if there is a <p> tag containing an <a> tag
const hasATagInsidePTag = document.querySelector('p a') !== null;

// Check if the document contains a <table> tag within the <body>
const hasTableInBody = document.querySelector('body table') !== null;
