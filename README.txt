HONEST MISTAKE — FIRST LOOK SURVEY
===================================

PUT IT ONLINE (free, ~2 minutes)
1. Go to app.netlify.com and sign up (free plan).
2. On the "Sites" page, drag this whole folder (hm-survey) onto the drop area
   that says "drag and drop your project folder here".
3. Netlify gives you a link like https://something-random.netlify.app
   You can rename it under Site configuration > Change site name
   (e.g. honestmistake-firstlook.netlify.app).
4. Open the link on your phone and do the survey once yourself to test.

SEE THE ANSWERS
- In Netlify: open the site > "Forms" > "hm-survey".
  Every submission shows there. Use "Download as CSV" for a spreadsheet.
- If Forms says it isn't enabled: Forms > "Enable form detection",
  then drag the folder in again (Deploys > drag and drop).

EDIT CONTENT
- Everything editable is in data.js:
  price ranges, piece names, descriptions, photos, Instagram link.
- After editing, drag the folder onto Deploys again to update the same link.

WHAT EACH ANSWER COLUMN MEANS
- p01 ... p12 = the 12 pieces in order (Bangle 1 ... Ring 5).
- pXX_reaction: like_would_wear / like_wouldnt_wear / dont_like
- pXX_whynot + pXX_whynot_note: only filled when they didn't pick "would wear"
- pXX_material: silver / plated
- pXX_price_silver or pXX_price_plated: the range they chose
- favourites: their 2-3 favourite pieces
- instagram / email: only if they asked for early access
