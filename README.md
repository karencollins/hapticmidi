# hapticmidi
Midi to Haptic web demo

This simple demo was built to demonstrate how MIDI to haptics could work. It came out of work done at Project Bar-B-Q. The write up for that work is found here: https://www.projectbarbq.com/reports/bbq19/bbq19r4.htm  This present work is just a proof-of-concept demo.

The demo uses the web vibration API. Users must have vibration enabled on their phone. The API does not currently work on iPhone. 

This demo allows a user to upload their own MIDI file, which is parsed using JSON. The note C3 is used to drive the vibration motor.
