# hotel-reservation

**Guideline:** 

In order run this task, please follow these commands in Commandline console window:

```

git clone git@github.com:thuannhit/hotel-reservation.git

cd /hotel-reservation

npm install

npm start

```

Now we can see the result in the console. It shows whether the numer of rooms are now availble for the booking schedule or not.

In order to run the test of this code, just need to run this command:

```
npm test
```

***In oder to use the module: ***
Please take a look at index.js, It is showing on how to import the module and use it.

```
import { booker } from './roombooking/booker.js';
```
And then, we just need to transfer the input values to the function:
```
booker.isEnoughRoom(<Array of Arrivals>, <Array of Departure>, <Number of rooms>)
```

The test coverage is also shown in the command windows since I add alread ```nyc``` package

**Note**: We can change the input.txt file to test the result. But please follow strictly the format, because I assumed the input values are fixed and no need to validate.