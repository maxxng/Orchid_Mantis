# OrchidMantis
A simple form filler, up to you how you use it.

## Setup (Basic)
1. Install TamperMonkey, a chrome extention, on your chrome browswer. https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en
2. Create a new userScript on TamperMonkey.
3. Download or copy the autotemp.js script into that new userScript. \n
4a. (For mac) go to terminal and type:  

```(crontab -l 2>/dev/null; echo "1 12 * * * open https://myaces.nus.edu.sg/htd") | crontab -```

4b. (For windows) go to command line and type:

```schtasks /create /tn TempDeclaration /tr C:\Program Files\Internet Explorer\iexplore.exe "https://myaces.nus.edu.sg/htd" /sc daily /st 13:00:00```

4c. (For windows if 4b don't work) Check out https://windowsloop.com/open-webpage-on-schedule-task-scheduler/ for more info.

