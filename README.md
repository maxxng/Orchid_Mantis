# OrchidMantis
A simple form filler, the use cases are up to you

## Warning
1. If your computer is not on at the specified time, the script will not run.

## Setup (Basic)
1. Install TamperMonkey, a chrome extention, on your chrome browswer. https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
2. Create a new userScript on TamperMonkey.
3. Download or copy the autotemp.js script into that new userScript.

4a. (For mac) go to terminal and type:  

For declaring once a day:```(crontab -l 2>/dev/null; echo "1 12 * * * open https://myaces.nus.edu.sg/htd") | crontab -```

For declaring twice a day:```(crontab -l 2>/dev/null; echo "57 11 * * * open https://myaces.nus.edu.sg/htd \n 1 12 * * * open https://myaces.nus.edu.sg/htd") | crontab -```

4b. (For windows) Check out this website on how to schedule tasks on your computer automatically https://windowsloop.com/open-webpage-on-schedule-task-scheduler/

