const articles = [
  {
    _id: {
      $oid: "67000b8395cad52961401df6",
    },
    date: "2024-10-03",
    title: "Video Doorbell Hum Issue",
    issue: "Video doorbell emitting a strange hum noise.",
    steps_to_resolve: {
      step_1: "Investigate possible causes of the hum.",
      step_2:
        "Hum was caused by crosstalk due to different kinds of data being transmitted down the same cable.",
      step_3:
        "Reorganize the cable setup or use dedicated lines for different data types to reduce crosstalk.",
    },
    imgPath: "Ring.jpg",
  },
  {
    _id: {
      $oid: "67000b8395cad52961401df7",
    },
    date: "2024-10-03",
    title: "DSC Control4 Not Communicating",
    issue:
      "Alarm system not communicating with Control4 due to malfunctioning IR port.",
    steps_to_resolve: {
      step_1:
        "Replaced the IT-100 after shutting down the system and putting it into test mode with central station.",
      step_2:
        "Power cycled the system and confirmed IT-100 communication with alarm control panel.",
      step_3:
        "Identified that the IR port on the Control4 controller was malfunctioning due to lightning damage.",
      step_4:
        "Adjusted inputs on the back of the EA3 controller to use interchangeable IR and serial ports.",
    },
    imgPath: "DSC.jpeg",
  },
  {
    _id: {
      $oid: "67016d1eaf33a551e9af8b2c",
    },
    date: "2024-10-03",
    title: "IT-100 Installation",
    issue: "Installing a new IT-100 module to link DSC with Control4",
    steps_to_resolve: {
      step_1: "Call central station and put the system in test mode.",
      step_2: "Power off the system at the panel and disconnect IT-100.",
      step_3:
        "Use same wiring configuration to connect new IT-100 to panel and power cycle system.",
      step_4:
        "At DSC keypad, enter Section 902 (wait 1 minute) folowed by Section 903.",
      step_5: "IT-100 will show up as Keypad 8",
    },
    imgPath: "it-100.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f69",
    },
    date: "2024-10-09",
    title: "Frozen Video Feed",
    issue: "The video feed is frozen, how can I fix it?",
    steps_to_resolve: {
      step_1: "Check if the network connection is stable.",
      step_2: "Restart the video conferencing software or application.",
      step_3: "Ensure the camera is not in use by another program.",
      step_4: "Try disconnecting and reconnecting the camera.",
      step_5: "Update or reinstall the video drivers.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f6a",
    },
    date: "2024-10-09",
    title: "No Sound from Speakers",
    issue: "There is no sound from the speakers, what should I check?",
    steps_to_resolve: {
      step_1:
        "Ensure the speakers are properly plugged into the computer or audio source.",
      step_2:
        "Check that the volume is turned up on both the system and the speakers.",
      step_3:
        "Verify that the correct audio output device is selected in the system settings.",
      step_4: "Update the audio drivers.",
      step_5: "Try restarting the system.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f6b",
    },
    date: "2024-10-09",
    title: "Screen Flickering",
    issue: "The screen is flickering, what could be the cause?",
    steps_to_resolve: {
      step_1:
        "Check if the screen refresh rate is set correctly in display settings.",
      step_2: "Ensure that all cables are securely connected.",
      step_3: "Update the display drivers.",
      step_4:
        "Test the monitor on a different device to rule out hardware failure.",
      step_5: "Disable hardware acceleration in applications if applicable.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f6c",
    },
    date: "2024-10-09",
    title: "Microphone Not Picking Up Sound",
    issue: "My microphone isn't picking up any sound, how do I resolve this?",
    steps_to_resolve: {
      step_1: "Ensure the microphone is properly connected to the computer.",
      step_2:
        "Check the microphone settings in the operating system and ensure it is not muted.",
      step_3: "Ensure that the correct microphone is selected in the software.",
      step_4: "Update or reinstall the audio drivers.",
      step_5:
        "Test the microphone on another device to rule out hardware issues.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f6d",
    },
    date: "2024-10-09",
    title: "Choppy Video Playback",
    issue: "The video is choppy, what can I do to smooth it out?",
    steps_to_resolve: {
      step_1: "Check if the network connection is strong and stable.",
      step_2:
        "Close any background applications that might be using system resources.",
      step_3: "Lower the video quality settings in the application.",
      step_4: "Ensure the video drivers are up to date.",
      step_5:
        "Test the video on another system to ensure it's not a file issue.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f6e",
    },
    date: "2024-10-09",
    title: "Static from Speakers",
    issue: "I'm hearing static from the speakers, what could be the problem?",
    steps_to_resolve: {
      step_1:
        "Check the speaker wires and connections for any damage or loose cables.",
      step_2:
        "Ensure that no electronic devices are causing interference near the speakers.",
      step_3: "Update the audio drivers.",
      step_4: "Try a different audio source to rule out interference.",
      step_5: "Test the speakers with another device.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f6f",
    },
    date: "2024-10-09",
    title: "Poor Video Quality",
    issue: "The video quality is poor, how can I improve it?",
    steps_to_resolve: {
      step_1: "Check the network connection to ensure it’s stable.",
      step_2:
        "Close any bandwidth-hogging applications running in the background.",
      step_3:
        "Increase the resolution and bitrate settings in the video application.",
      step_4: "Update the video drivers.",
      step_5: "Test the video on another platform or device.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f70",
    },
    date: "2024-10-09",
    title: "Audio/Video Out of Sync",
    issue: "The audio is out of sync with the video, how do I fix that?",
    steps_to_resolve: {
      step_1: "Try restarting the video player or application.",
      step_2: "Check the video and audio drivers for updates.",
      step_3:
        "Adjust the audio delay in the video player settings if available.",
      step_4: "Lower the video resolution to reduce system strain.",
      step_5:
        "Try playing the video on another device to see if the issue persists.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f71",
    },
    date: "2024-10-09",
    title: "Microphone Echo Issue",
    issue: "I'm getting an echo on my microphone, how do I stop it?",
    steps_to_resolve: {
      step_1: "Ensure that the microphone is not too close to the speakers.",
      step_2: "Use headphones to prevent sound feedback from the speakers.",
      step_3: "Lower the microphone sensitivity in the system settings.",
      step_4: "Mute all unnecessary audio sources.",
      step_5:
        "Check the application settings to disable any echo-cancellation features.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f72",
    },
    date: "2024-10-09",
    title: "Webcam Not Detected",
    issue: "My webcam isn't being detected, what should I try?",
    steps_to_resolve: {
      step_1: "Ensure the webcam is properly connected.",
      step_2: "Check if another application is using the webcam.",
      step_3: "Update or reinstall the webcam drivers.",
      step_4:
        "Check the camera privacy settings to ensure the app has permission to use it.",
      step_5: "Test the webcam on another device.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706b991145f8158594a2f73",
    },
    date: "2024-10-09",
    title: "Muffled Sound",
    issue: "The sound is muffled, what can be done to improve it?",
    steps_to_resolve: {
      step_1: "Check if the speakers or headphones are obstructed.",
      step_2:
        "Adjust the audio equalizer settings in the operating system or application.",
      step_3: "Ensure the audio drivers are up to date.",
      step_4: "Try using a different set of speakers or headphones.",
      step_5:
        "Check if any sound enhancements are enabled and disable them if necessary.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f74",
    },
    date: "2024-10-09",
    title: "Control4 Lighting Not Responding",
    issue: "My Control4 lighting system isn't responding, what should I do?",
    steps_to_resolve: {
      step_1:
        "Ensure that the Control4 system is powered on and connected to the network.",
      step_2: "Check the Control4 app for any system errors or alerts.",
      step_3: "Try restarting the lighting control module.",
      step_4:
        "Verify that the lighting devices are properly configured in the Control4 software.",
      step_5:
        "If the problem persists, update the Control4 firmware or contact support.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f75",
    },
    date: "2024-10-09",
    title: "Crestron System Not Connecting to WiFi",
    issue: "The Crestron system can't connect to WiFi, what could be wrong?",
    steps_to_resolve: {
      step_1:
        "Check if the WiFi network is functioning properly by testing other devices.",
      step_2: "Restart the Crestron router or access point.",
      step_3:
        "Ensure the Crestron control system is within the range of the WiFi network.",
      step_4: "Verify the network credentials in the Crestron settings.",
      step_5: "Reboot the Crestron processor and attempt to reconnect.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f76",
    },
    date: "2024-10-09",
    title: "Savant Home Theater Setup Issue",
    issue:
      "I’m having trouble setting up my Savant home theater, how do I resolve it?",
    steps_to_resolve: {
      step_1:
        "Ensure all components (receiver, TV, speakers) are properly connected to the Savant system.",
      step_2: "Check that the HDMI cables are secure and working.",
      step_3: "Run the Savant setup wizard again to detect all devices.",
      step_4:
        "Ensure the latest firmware is installed on the Savant controller.",
      step_5:
        "Contact Savant support if devices are not detected after multiple attempts.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f77",
    },
    date: "2024-10-09",
    title: "Control4 Audio Zones Not Syncing",
    issue:
      "My Control4 audio zones are out of sync, what steps can I take to fix it?",
    steps_to_resolve: {
      step_1: "Check that all zones are using the same audio source.",
      step_2:
        "Verify the network connection between the zones and the Control4 controller.",
      step_3: "Restart the audio matrix and Control4 controller.",
      step_4: "Adjust the audio delay settings in the Control4 app.",
      step_5: "Reconfigure the audio zones in the Control4 system setup.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f78",
    },
    date: "2024-10-09",
    title: "Crestron Touch Panel Not Responding",
    issue:
      "The Crestron touch panel is not responding to inputs, how can I resolve this?",
    steps_to_resolve: {
      step_1:
        "Check if the touch panel is powered on and connected to the network.",
      step_2:
        "Restart the touch panel by holding the reset button or through the Crestron software.",
      step_3:
        "Verify the connection between the touch panel and the control processor.",
      step_4: "Ensure the touch panel firmware is up to date.",
      step_5: "Replace the panel if it continues to malfunction.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f79",
    },
    date: "2024-10-09",
    title: "Savant App Not Controlling Devices",
    issue: "The Savant app is not controlling any devices, what can I do?",
    steps_to_resolve: {
      step_1:
        "Check the network connection of the Savant system and the mobile device.",
      step_2: "Restart the Savant controller and mobile app.",
      step_3: "Ensure the devices are properly configured in the Savant app.",
      step_4: "Update the Savant app to the latest version.",
      step_5: "Uninstall and reinstall the Savant app if the issue persists.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f7a",
    },
    date: "2024-10-09",
    title: "Control4 Thermostat Not Adjusting",
    issue:
      "My Control4 thermostat isn’t adjusting the temperature, what should I try?",
    steps_to_resolve: {
      step_1:
        "Ensure the thermostat is powered and connected to the Control4 system.",
      step_2:
        "Check the Control4 app for any alerts related to the thermostat.",
      step_3:
        "Verify that the thermostat is not set to a preset mode or schedule.",
      step_4: "Restart the Control4 controller and the thermostat.",
      step_5: "Update the thermostat firmware and recheck the settings.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f7b",
    },
    date: "2024-10-09",
    title: "Crestron Shades Not Working",
    issue:
      "My Crestron automated shades are not functioning, how do I fix this?",
    steps_to_resolve: {
      step_1: "Check the power connection to the Crestron shade controller.",
      step_2:
        "Ensure the shades are properly paired with the Crestron control system.",
      step_3: "Test the manual controls to ensure the shades aren't jammed.",
      step_4:
        "Re-sync the shades with the control system through the Crestron app.",
      step_5:
        "Update the Crestron firmware or contact support if the issue persists.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f7c",
    },
    date: "2024-10-09",
    title: "Savant Lights Delayed Response",
    issue:
      "The Savant lighting system has a delayed response, what should I do?",
    steps_to_resolve: {
      step_1: "Check if the network connection is stable and not congested.",
      step_2: "Restart the Savant controller and the lighting control module.",
      step_3:
        "Ensure the lighting devices are configured correctly in the Savant app.",
      step_4: "Update the Savant controller firmware.",
      step_5: "Recalibrate the lighting zones in the app to reduce delay.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bc1a145f8158594a2f7d",
    },
    date: "2024-10-09",
    title: "Control4 Remote Not Working",
    issue:
      "My Control4 remote is not functioning, what are the troubleshooting steps?",
    steps_to_resolve: {
      step_1: "Replace the batteries in the Control4 remote.",
      step_2: "Ensure the remote is paired with the Control4 system.",
      step_3: "Restart the Control4 controller and the remote.",
      step_4: "Update the firmware on both the remote and the Control4 system.",
      step_5: "Contact Control4 support if the remote still doesn't function.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f7e",
    },
    date: "2024-10-09",
    title: "Changing Master Code on DSC Alarm",
    issue: "How do I change the master code on my DSC alarm system?",
    steps_to_resolve: {
      step_1:
        "Enter programming mode using the installer code (default is usually 5555).",
      step_2: "Press * 5 followed by the current master code.",
      step_3: "Enter the user slot number (usually 40 for the master code).",
      step_4: "Enter the new 4-digit master code.",
      step_5: "Press # to exit programming mode and test the new master code.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f7f",
    },
    date: "2024-10-09",
    title: "Resetting Installer Code on DSC Alarm",
    issue: "I forgot my installer code, how can I reset it?",
    steps_to_resolve: {
      step_1:
        "Power down the alarm system by removing AC power and disconnecting the battery.",
      step_2: "Wait for 10 seconds and then reconnect the battery.",
      step_3:
        "Within 30 seconds of powering up, press and hold the * and # keys simultaneously.",
      step_4:
        "You will enter the programming mode, where you can reset the installer code.",
      step_5: "Enter section 006, then input a new 4-digit installer code.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f80",
    },
    date: "2024-10-09",
    title: "Programming Zone Types in DSC System",
    issue: "How can I program zone types in my DSC alarm system?",
    steps_to_resolve: {
      step_1:
        "Enter programming mode by pressing *8 followed by the installer code.",
      step_2: "Enter section 001 to start programming zone definitions.",
      step_3: "Select the zone number you want to program.",
      step_4:
        "Enter the 2-digit zone type code (e.g., 01 for delay, 03 for instant).",
      step_5: "Press # to save the settings and exit programming.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f81",
    },
    date: "2024-10-09",
    title: "DSC Alarm Not Arming",
    issue: "My DSC alarm system is not arming, how can I fix this?",
    steps_to_resolve: {
      step_1:
        "Check if the system is in programming mode. If so, press # to exit.",
      step_2: "Ensure all zones are closed. Open zones will prevent arming.",
      step_3:
        "Check the status of the system to see if there are any system trouble conditions.",
      step_4:
        "Ensure the correct arming code (master or user code) is entered.",
      step_5:
        "Test the system with the default arming method by entering the 4-digit code and pressing away or stay.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f82",
    },
    date: "2024-10-09",
    title: "Setting Exit Delay Time on DSC Panel",
    issue: "How do I change the exit delay time on my DSC alarm system?",
    steps_to_resolve: {
      step_1:
        "Enter programming mode by pressing *8 followed by the installer code.",
      step_2: "Go to section 005, which controls entry/exit delay times.",
      step_3: "Select the zone where you want to modify the exit delay.",
      step_4:
        "Enter the new exit delay time in seconds (e.g., 030 for 30 seconds).",
      step_5: "Press # to save and exit the programming mode.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f83",
    },
    date: "2024-10-09",
    title: "Bypassing Zones on DSC Alarm System",
    issue: "How can I bypass zones on my DSC alarm system?",
    steps_to_resolve: {
      step_1: "Press *1 on the keypad to enter the zone bypass menu.",
      step_2: "Enter the 2-digit number of the zone you wish to bypass.",
      step_3: "Press # to confirm and bypass the zone.",
      step_4: "Repeat the steps for any additional zones you need to bypass.",
      step_5: "Once all zones are bypassed, arm the system as usual.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f84",
    },
    date: "2024-10-09",
    title: "Resetting After Alarm Event",
    issue: "What steps should I take to reset the system after an alarm event?",
    steps_to_resolve: {
      step_1: "Press *2 on the keypad to check for any trouble conditions.",
      step_2: "If no trouble is present, press # to clear the alarm memory.",
      step_3: "Enter your 4-digit master code to reset the system.",
      step_4: "If the system doesn’t reset, check if any zones remain open.",
      step_5:
        "Ensure that the installer code or master code is being used correctly.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f85",
    },
    date: "2024-10-09",
    title: "Setting Entry Delay Time",
    issue: "How can I adjust the entry delay time on my DSC system?",
    steps_to_resolve: {
      step_1:
        "Enter programming mode by pressing *8 followed by the installer code.",
      step_2: "Go to section 005 to modify entry/exit delay settings.",
      step_3:
        "Select the zone you wish to change and enter the desired delay time (e.g., 060 for 60 seconds).",
      step_4: "Press # to save the changes.",
      step_5:
        "Exit programming mode and test the new entry delay by arming the system.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f86",
    },
    date: "2024-10-09",
    title: "Programming User Codes",
    issue: "How do I add or change user codes in my DSC alarm system?",
    steps_to_resolve: {
      step_1: "Enter programming mode using the master code by pressing *5.",
      step_2: "Select the user slot you want to program (e.g., 02 for user 2).",
      step_3: "Enter a new 4-digit user code.",
      step_4: "Repeat for any additional user codes.",
      step_5: "Press # to exit programming and test the new user code.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bcd4145f8158594a2f87",
    },
    date: "2024-10-09",
    title: "Activating Chime Mode",
    issue: "How can I activate chime mode on my DSC alarm?",
    steps_to_resolve: {
      step_1: "Enter your 4-digit master code.",
      step_2: "Press *4 on the keypad to enable or disable chime mode.",
      step_3: "Test by opening a door or window to hear the chime sound.",
      step_4:
        "If the chime doesn’t activate, check the programming settings for the zones.",
      step_5: "Ensure that the zones are set to trigger chime events.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f88",
    },
    date: "2024-10-09",
    title: "SnapAV OvrC Device Not Connecting",
    issue:
      "My OvrC-enabled device is not connecting to the network, what should I do?",
    steps_to_resolve: {
      step_1: "Ensure the device is powered on and connected to the network.",
      step_2: "Check the router or switch for connectivity issues.",
      step_3: "Restart the OvrC device and the network equipment.",
      step_4:
        "Log into the OvrC web portal to check for any device status or error messages.",
      step_5: "If the issue persists, try re-adding the device in OvrC.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f89",
    },
    date: "2024-10-09",
    title: "SnapAV WattBox Power Cycling Issue",
    issue:
      "The SnapAV WattBox is power cycling continuously, how can I fix it?",
    steps_to_resolve: {
      step_1:
        "Check the power supply to ensure the WattBox is receiving stable power.",
      step_2:
        "Log into the OvrC portal to check if a power cycle is scheduled or triggered.",
      step_3:
        "Verify that no devices connected to the WattBox are causing overload.",
      step_4:
        "Reset the WattBox by pressing the reset button or power cycling the device.",
      step_5:
        "Update the WattBox firmware through OvrC if the issue continues.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f8a",
    },
    date: "2024-10-09",
    title: "SnapAV Luma Camera Not Displaying Video",
    issue: "My Luma camera is not displaying video, what could be the issue?",
    steps_to_resolve: {
      step_1: "Ensure the camera is powered and connected to the network.",
      step_2:
        "Check the NVR or DVR settings to confirm the camera is detected.",
      step_3:
        "Try resetting the camera to factory settings and reconfigure it.",
      step_4:
        "Update the camera firmware using the Luma Surveillance software.",
      step_5:
        "If the problem persists, inspect the network cables and replace them if necessary.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f8b",
    },
    date: "2024-10-09",
    title: "SnapAV Episode Speaker Not Working",
    issue:
      "One of my Episode speakers is not producing sound, what should I check?",
    steps_to_resolve: {
      step_1:
        "Verify that the speaker wires are properly connected and not damaged.",
      step_2:
        "Ensure that the amplifier or receiver is functioning and set to the correct input.",
      step_3:
        "Test the speaker on a different channel or with another audio source.",
      step_4: "Check for any blown fuses or overheating in the amplifier.",
      step_5: "Replace the speaker if it is defective after testing.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f8c",
    },
    date: "2024-10-09",
    title: "SnapAV Networking Device Not Accessible in OvrC",
    issue:
      "I can't access my networking device in the OvrC portal, how do I resolve this?",
    steps_to_resolve: {
      step_1:
        "Ensure the networking device is powered on and connected to the internet.",
      step_2:
        "Log into OvrC and verify that the device is listed under the correct site.",
      step_3: "Reboot the networking device and check for any IP conflicts.",
      step_4: "Try factory resetting the device and reconfigure it in OvrC.",
      step_5:
        "Contact SnapAV support if the issue persists after troubleshooting.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f8d",
    },
    date: "2024-10-09",
    title: "Crestron Control System Not Responding",
    issue: "My Crestron control system is not responding, how can I fix this?",
    steps_to_resolve: {
      step_1:
        "Check if the control processor is powered and properly connected to the network.",
      step_2: "Ensure that all cables are securely connected and not damaged.",
      step_3:
        "Restart the control processor and check for any error messages in the Crestron Toolbox.",
      step_4:
        "Update the firmware on the control processor using Crestron Toolbox.",
      step_5:
        "Re-upload the control system program and test the functionality.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f8e",
    },
    date: "2024-10-09",
    title: "Crestron Touch Panel Not Connecting to Processor",
    issue:
      "The Crestron touch panel is not connecting to the control processor, what steps should I take?",
    steps_to_resolve: {
      step_1:
        "Ensure the touch panel is connected to the same network as the control processor.",
      step_2:
        "Check the IP settings on the touch panel and ensure they match the control processor's network.",
      step_3: "Reboot both the touch panel and the control processor.",
      step_4:
        "Check the Crestron Toolbox for any communication errors or network issues.",
      step_5: "If the issue persists, try updating the touch panel firmware.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f8f",
    },
    date: "2024-10-09",
    title: "Crestron Room Scheduling Panel Not Syncing with Calendar",
    issue:
      "My Crestron room scheduling panel is not syncing with the calendar, how can I resolve this?",
    steps_to_resolve: {
      step_1: "Ensure the room scheduling panel is connected to the network.",
      step_2:
        "Check the calendar integration settings in the Crestron Fusion or XiO Cloud.",
      step_3:
        "Verify that the credentials for the calendar service are correct and up to date.",
      step_4: "Reboot the room scheduling panel and check for any sync errors.",
      step_5: "Reconfigure the calendar settings if the issue continues.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f90",
    },
    date: "2024-10-09",
    title: "Crestron Device Not Detected in Toolbox",
    issue:
      "I can't detect a Crestron device in Crestron Toolbox, what should I do?",
    steps_to_resolve: {
      step_1: "Ensure the device is powered on and connected to the network.",
      step_2:
        "Check the network settings and ensure the device is on the same subnet as the computer running Toolbox.",
      step_3:
        "Try connecting directly to the device using a USB or serial cable.",
      step_4: "Restart the device and check for any IP conflicts.",
      step_5: "Update the device firmware using Crestron Toolbox.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706bdc3145f8158594a2f91",
    },
    date: "2024-10-09",
    title: "Crestron Lighting System Not Controllable via App",
    issue:
      "The Crestron lighting system is not controllable via the Crestron app, what steps should I take?",
    steps_to_resolve: {
      step_1:
        "Ensure the lighting system is powered on and connected to the network.",
      step_2:
        "Verify that the mobile device is on the same network as the Crestron system.",
      step_3:
        "Restart the Crestron control processor and the lighting control module.",
      step_4:
        "Check the app settings to ensure the devices are properly configured.",
      step_5:
        "Reboot the mobile device and try reconnecting to the Crestron system.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f92",
    },
    date: "2024-10-09",
    title: "Sony TV Not Detecting HDMI Source",
    issue: "My Sony TV is not detecting the HDMI source, what should I do?",
    steps_to_resolve: {
      step_1:
        "Ensure the HDMI cable is securely connected to both the TV and the source device.",
      step_2: "Try a different HDMI input on the TV.",
      step_3: "Restart both the TV and the source device.",
      step_4:
        "Check if the HDMI cable is faulty by testing it with another device.",
      step_5:
        "Ensure the TV firmware is up to date by checking in the settings menu.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f93",
    },
    date: "2024-10-09",
    title: "Sony TV Audio Not Playing Through AV Receiver",
    issue:
      "The audio from my Sony TV is not playing through the AV receiver, what steps should I take?",
    steps_to_resolve: {
      step_1:
        "Ensure the HDMI ARC (Audio Return Channel) is enabled in the TV settings.",
      step_2: "Verify that the AV receiver is set to the correct input.",
      step_3:
        "Check if the HDMI cable supports ARC and replace it if necessary.",
      step_4:
        "Try using an optical cable for audio output if ARC is not working.",
      step_5:
        "Restart both the TV and the AV receiver to re-establish the connection.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f94",
    },
    date: "2024-10-09",
    title: "Samsung TV Not Connecting to Wi-Fi",
    issue: "My Samsung TV is not connecting to Wi-Fi, how do I resolve this?",
    steps_to_resolve: {
      step_1:
        "Check if the Wi-Fi network is functioning properly by testing other devices.",
      step_2: "Restart the TV and the router.",
      step_3:
        "Ensure the TV software is up to date by checking the settings menu.",
      step_4:
        "Reset the network settings on the TV and reconnect to the Wi-Fi.",
      step_5:
        "If the issue persists, try connecting the TV to the network using a wired Ethernet connection.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f95",
    },
    date: "2024-10-09",
    title: "Samsung TV Display Flickering",
    issue:
      "The display on my Samsung TV is flickering, what could be the issue?",
    steps_to_resolve: {
      step_1: "Ensure the HDMI cable is securely connected and not damaged.",
      step_2: "Try switching to a different HDMI input or cable.",
      step_3: "Restart the TV to refresh the display settings.",
      step_4:
        "Check if the TV's power-saving mode is enabled and disable it if necessary.",
      step_5: "Update the TV's firmware if an update is available.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f96",
    },
    date: "2024-10-09",
    title: "TCL Roku TV Remote Not Working",
    issue: "My TCL Roku TV remote is not responding, what should I do?",
    steps_to_resolve: {
      step_1: "Replace the batteries in the remote.",
      step_2:
        "Ensure the remote is pointed directly at the TV without obstructions.",
      step_3: "Restart the TV by unplugging it and then plugging it back in.",
      step_4:
        "Check if the Roku remote app can control the TV to determine if it's a remote issue.",
      step_5:
        "If the remote still doesn’t work, perform a factory reset on the TV.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f97",
    },
    date: "2024-10-09",
    title: "TCL TV Not Powering On",
    issue: "My TCL TV is not powering on, how do I fix this?",
    steps_to_resolve: {
      step_1: "Ensure the TV is plugged into a working power outlet.",
      step_2:
        "Press and hold the power button on the TV for 10 seconds to reset it.",
      step_3:
        "Check if the power cable is damaged and replace it if necessary.",
      step_4: "Test the TV with another power outlet or power strip.",
      step_5:
        "If the TV still doesn’t turn on, contact TCL support for further assistance.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f98",
    },
    date: "2024-10-09",
    title: "LG TV No Signal on HDMI",
    issue: "My LG TV shows 'No Signal' on HDMI, what steps should I take?",
    steps_to_resolve: {
      step_1:
        "Ensure the HDMI cable is properly connected to both the TV and the source device.",
      step_2: "Try switching the HDMI cable to a different input on the TV.",
      step_3:
        "Restart both the TV and the source device (e.g., Blu-ray player, gaming console).",
      step_4: "Replace the HDMI cable if the issue persists.",
      step_5:
        "Check if the TV requires a firmware update by visiting the settings menu.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f99",
    },
    date: "2024-10-09",
    title: "Vizio TV SmartCast Not Working",
    issue: "My Vizio TV’s SmartCast is not working, how do I resolve this?",
    steps_to_resolve: {
      step_1:
        "Ensure the TV is connected to the internet and test the connection on another device.",
      step_2:
        "Restart the TV by unplugging it from the power source for 10 seconds.",
      step_3: "Check for any available software updates in the TV's settings.",
      step_4:
        "Reset the SmartCast app by pressing the Menu button and selecting Reset & Admin > Reset TV to Factory Settings.",
      step_5:
        "If the issue persists, contact Vizio support for further assistance.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706be8d145f8158594a2f9a",
    },
    date: "2024-10-09",
    title: "Sharp TV Not Detecting Soundbar",
    issue: "My Sharp TV is not detecting the soundbar, what should I do?",
    steps_to_resolve: {
      step_1:
        "Ensure the soundbar is properly connected to the TV via HDMI ARC or optical cable.",
      step_2:
        "Check that the soundbar is powered on and set to the correct input.",
      step_3: "Restart both the TV and the soundbar.",
      step_4:
        "Try using a different cable or input if the TV still doesn’t detect the soundbar.",
      step_5:
        "Check the audio settings on the TV to ensure ARC or optical output is selected.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2f9b",
    },
    date: "2024-10-09",
    title: "No Sound from Wall-Mounted Speakers",
    issue:
      "My wall-mounted speakers are not producing sound, what should I check?",
    steps_to_resolve: {
      step_1:
        "Ensure the speaker wires are securely connected to both the speakers and the amplifier or receiver.",
      step_2: "Check if the amplifier or receiver is set to the correct input.",
      step_3:
        "Test the speakers on another channel or output to verify if the issue is with the wiring or the speaker.",
      step_4: "Inspect the speaker wires for any cuts or damage.",
      step_5:
        "Replace the speaker if it's found to be defective after testing.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2f9c",
    },
    date: "2024-10-09",
    title: "Ceiling Speaker Installation Not Level",
    issue:
      "The ceiling speakers are not installed level, what can I do to fix this?",
    steps_to_resolve: {
      step_1:
        "Check the mounting brackets or template used for the installation to ensure they are properly aligned.",
      step_2:
        "Loosen the screws holding the speakers and gently adjust the position until level.",
      step_3: "Use a level tool to ensure the speaker is correctly positioned.",
      step_4: "Tighten the screws to secure the speaker in place.",
      step_5:
        "If the speaker cannot be adjusted, consider reinstalling using a new template or bracket.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2f9d",
    },
    date: "2024-10-09",
    title: "Speaker Wires Exposed After Installation",
    issue:
      "The speaker wires are exposed after installation, how do I resolve this?",
    steps_to_resolve: {
      step_1:
        "Ensure the speaker wire is routed through the wall or ceiling properly and securely.",
      step_2:
        "Use wire management tools like conduits or wire covers to hide exposed wires.",
      step_3:
        "Check for any excess wire length and trim it if necessary, ensuring proper connections.",
      step_4:
        "Tuck the wires neatly behind the speaker or wall plate if possible.",
      step_5:
        "If the installation does not allow for wire concealment, consider hiring a professional to assist with routing.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2f9e",
    },
    date: "2024-10-09",
    title: "In-Wall Speaker Sound Distortion",
    issue:
      "My in-wall speakers are producing distorted sound, how can I fix this?",
    steps_to_resolve: {
      step_1:
        "Ensure that the speaker is properly connected to the amplifier and that no wires are loose.",
      step_2:
        "Check the amplifier or receiver settings to ensure they are appropriate for the speaker type.",
      step_3:
        "Reduce the volume to prevent overloading the speaker and causing distortion.",
      step_4:
        "Inspect the speaker for any physical damage to the cone or tweeter.",
      step_5:
        "Try the speaker on another amplifier or channel to verify if the distortion is caused by the speaker or the audio source.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2f9f",
    },
    date: "2024-10-09",
    title: "Mounting Brackets Not Securing Ceiling Speaker",
    issue:
      "The mounting brackets are not securely holding the ceiling speaker, what steps should I take?",
    steps_to_resolve: {
      step_1:
        "Ensure the mounting brackets are the correct size and type for the ceiling speaker.",
      step_2:
        "Check that the screws or bolts used for installation are tightly secured.",
      step_3:
        "Test the bracket’s load-bearing capacity to ensure it can support the weight of the speaker.",
      step_4:
        "Consider using additional support such as anchors or reinforcement plates if the ceiling material is weak.",
      step_5:
        "If the brackets are faulty or unsuitable, replace them with ones designed for your speaker model.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2fa0",
    },
    date: "2024-10-09",
    title: "Speakers Making Crackling Sounds",
    issue: "The speakers are making crackling sounds, what should I do?",
    steps_to_resolve: {
      step_1:
        "Check the speaker wire connections to ensure they are tight and free of corrosion.",
      step_2:
        "Test the speakers with another audio source to rule out the amplifier or receiver as the cause.",
      step_3:
        "Inspect the speaker wires for any damage or cuts and replace them if necessary.",
      step_4:
        "Try adjusting the volume or audio settings on the amplifier to see if the crackling persists.",
      step_5:
        "If the crackling continues, the speaker drivers may be damaged, and the speaker will need to be replaced.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2fa1",
    },
    date: "2024-10-09",
    title: "In-Ceiling Speakers Not Aligned with Room Layout",
    issue:
      "The in-ceiling speakers are not aligned with the room layout, how can this be corrected?",
    steps_to_resolve: {
      step_1:
        "Measure the room dimensions and the placement of each speaker before installation to ensure proper alignment.",
      step_2:
        "If already installed, consider repositioning the speakers by adjusting the ceiling mounts.",
      step_3:
        "Use in-ceiling speaker placement guidelines to ensure optimal sound distribution throughout the room.",
      step_4:
        "If the speakers are too far from their ideal locations, a new wiring route may be necessary to relocate them.",
      step_5:
        "Consult with a professional installer if major adjustments are needed.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2fa2",
    },
    date: "2024-10-09",
    title: "Wall-Mounted Speakers Rattling",
    issue: "My wall-mounted speakers are rattling, how can I fix this?",
    steps_to_resolve: {
      step_1:
        "Check if the speaker is securely mounted to the wall and tighten any loose screws.",
      step_2:
        "Ensure the wall bracket or mount is not damaged and can hold the speaker weight properly.",
      step_3:
        "Inspect the speaker to ensure the internal components (woofer, tweeter) are not loose or damaged.",
      step_4:
        "Test the speaker at lower volumes to determine if the rattling is caused by excessive vibrations.",
      step_5:
        "If the mounting bracket or speaker is faulty, replace them to resolve the issue.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c770145f8158594a2fa3",
    },
    date: "2024-10-09",
    title: "Ceiling Speaker Grills Not Fitting Properly",
    issue:
      "The ceiling speaker grills are not fitting properly, what should I do?",
    steps_to_resolve: {
      step_1:
        "Check if the speaker grill is the correct size and model for the installed speaker.",
      step_2:
        "Ensure that the speaker has been mounted flush with the ceiling to allow the grill to fit.",
      step_3:
        "Gently press the grill into place, ensuring it snaps into the mounting clips securely.",
      step_4:
        "If the grill is too loose or too tight, check for any obstructions or adjust the speaker mount.",
      step_5:
        "Consider using a magnetic or custom-fit grill if the original one does not fit properly.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c7d8145f8158594a2fa4",
    },
    date: "2024-10-09",
    title: "No Internet Connection on Araknis Network",
    issue:
      "My Araknis network has no internet connection, what should I check?",
    steps_to_resolve: {
      step_1:
        "Ensure the gateway or modem is powered on and properly connected to the Araknis router.",
      step_2:
        "Check the network status lights on the Araknis router to confirm if it's receiving a signal from the gateway.",
      step_3:
        "Restart both the gateway and the router by unplugging them for 30 seconds.",
      step_4:
        "Log into the router's web interface and check the WAN settings to ensure the correct IP and DNS settings are configured.",
      step_5:
        "If the issue persists, try connecting directly to the gateway to test if the internet is working.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c7d8145f8158594a2fa5",
    },
    date: "2024-10-09",
    title: "Wi-Fi Access Points Not Broadcasting Signal",
    issue:
      "My Wi-Fi access points are not broadcasting a signal, how can I resolve this?",
    steps_to_resolve: {
      step_1:
        "Check if the access points are powered on and connected to the Araknis switch or router.",
      step_2:
        "Log into the network management software (e.g., OvrC) and verify that the access points are online.",
      step_3:
        "Restart the access points by unplugging them or using the management software.",
      step_4:
        "Ensure the SSID (Wi-Fi network name) is enabled in the access point settings.",
      step_5:
        "Update the firmware on the access points to ensure they are running the latest software.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c7d8145f8158594a2fa6",
    },
    date: "2024-10-09",
    title: "Araknis Router Not Responding",
    issue: "My Araknis router is not responding, what should I do?",
    steps_to_resolve: {
      step_1:
        "Check that the router is receiving power and that all cables are securely connected.",
      step_2:
        "Restart the router by unplugging it for 30 seconds and then plugging it back in.",
      step_3:
        "Log into the router's web interface or OvrC to check for any system alerts or errors.",
      step_4:
        "Perform a factory reset on the router if it still does not respond, but ensure you have the necessary configuration settings backed up.",
      step_5:
        "Contact technical support if the router is still unresponsive after resetting.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c7d8145f8158594a2fa7",
    },
    date: "2024-10-09",
    title: "Araknis Switch Not Powering Devices",
    issue:
      "My Araknis switch is not powering connected devices, what should I check?",
    steps_to_resolve: {
      step_1:
        "Ensure the Araknis switch is connected to a working power outlet.",
      step_2:
        "Check if the PoE (Power over Ethernet) settings are enabled for the ports powering devices like access points or cameras.",
      step_3:
        "Test the connected devices by plugging them directly into a power source to rule out device issues.",
      step_4:
        "Restart the switch and check the port status lights to ensure each device is being detected.",
      step_5:
        "If the problem persists, log into the switch management interface to check for any port or power settings that need adjusting.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c7d8145f8158594a2fa8",
    },
    date: "2024-10-09",
    title: "Wi-Fi Dead Zones in Home",
    issue: "I have Wi-Fi dead zones in my home, how can I improve coverage?",
    steps_to_resolve: {
      step_1:
        "Ensure the access points are strategically placed to provide full coverage without interference.",
      step_2:
        "Check the signal strength of each access point using a network analyzer or OvrC.",
      step_3:
        "Consider adding additional access points in areas with weak signal coverage.",
      step_4:
        "Update the firmware on the access points to ensure optimal performance.",
      step_5:
        "Adjust the transmission power of the access points in the settings to cover more area, if necessary.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c7d8145f8158594a2fa9",
    },
    date: "2024-10-09",
    title: "Slow Internet Speeds on Araknis Network",
    issue:
      "My internet speeds are slow on the Araknis network, how do I fix this?",
    steps_to_resolve: {
      step_1:
        "Run a speed test directly from the gateway to determine if the issue is with the internet provider.",
      step_2:
        "Check the router settings for any bandwidth limiting or QoS (Quality of Service) rules that may be affecting speeds.",
      step_3:
        "Restart the router and switches to clear any network congestion or memory issues.",
      step_4:
        "Check for any devices on the network that may be consuming excessive bandwidth.",
      step_5:
        "Ensure all networking devices (router, switches, access points) have the latest firmware updates.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c7d8145f8158594a2faa",
    },
    date: "2024-10-09",
    title: "OvrC Not Detecting Araknis Devices",
    issue:
      "OvrC is not detecting my Araknis devices, what steps should I take?",
    steps_to_resolve: {
      step_1:
        "Ensure all Araknis devices are powered on and connected to the network.",
      step_2:
        "Log into OvrC and check if the devices are listed under the correct site.",
      step_3:
        "Restart the network devices and refresh the OvrC interface to see if they appear.",
      step_4:
        "Verify that the devices are connected to the network via the correct IP range or subnet.",
      step_5:
        "If the issue persists, try re-adding the devices manually in OvrC.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c7d8145f8158594a2fab",
    },
    date: "2024-10-09",
    title: "Araknis Switch Ports Not Functioning",
    issue:
      "Some of the ports on my Araknis switch are not functioning, what should I check?",
    steps_to_resolve: {
      step_1:
        "Ensure that the devices connected to the non-functioning ports are powered on.",
      step_2:
        "Check the port status lights to confirm if the switch is detecting the connected devices.",
      step_3:
        "Log into the switch's management interface to verify the port settings (e.g., VLAN, PoE, etc.).",
      step_4: "Restart the switch and test the ports again.",
      step_5:
        "If the ports are still not functioning, perform a factory reset and reconfigure the switch settings.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2fae",
    },
    date: "2024-10-09",
    title: "No Sound from AV Receiver",
    issue: "My AV receiver is not producing sound, what should I check?",
    steps_to_resolve: {
      step_1: "Ensure the speakers are properly connected to the AV receiver.",
      step_2: "Check if the receiver is set to the correct input source.",
      step_3: "Ensure the volume is not muted or too low.",
      step_4:
        "Verify that the speaker cables are connected to the correct terminals on the receiver.",
      step_5:
        "Try a different input source (e.g., Blu-ray player, game console) to rule out a source issue.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2faf",
    },
    date: "2024-10-09",
    title: "Audio Delays or Lip Sync Issues",
    issue:
      "There is an audio delay or lip sync issue in my AV setup, how do I fix this?",
    steps_to_resolve: {
      step_1:
        "Check the receiver’s audio delay settings and adjust the lip sync correction.",
      step_2:
        "Ensure the audio cables (HDMI or optical) are securely connected.",
      step_3: "Try lowering the video resolution to reduce processing delays.",
      step_4:
        "Update the firmware on both the AV receiver and the connected device.",
      step_5:
        "If using HDMI ARC, verify the settings in both the TV and the receiver for proper sync.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2fb0",
    },
    date: "2024-10-09",
    title: "Distorted Sound from Speakers",
    issue: "My speakers are producing distorted sound, what should I check?",
    steps_to_resolve: {
      step_1:
        "Ensure the speaker wires are properly connected to the receiver and speakers without any loose or crossed connections.",
      step_2:
        "Lower the volume to see if the distortion is caused by overdriving the speakers.",
      step_3:
        "Check the receiver’s equalizer settings and reset any excessive bass or treble adjustments.",
      step_4:
        "Test the speakers on a different amplifier or channel to rule out speaker damage.",
      step_5:
        "If the distortion persists, inspect the speakers for damage to the drivers or cones.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2fb1",
    },
    date: "2024-10-09",
    title: "Subwoofer Not Producing Bass",
    issue: "My subwoofer is not producing bass, what could be the issue?",
    steps_to_resolve: {
      step_1:
        "Ensure the subwoofer is powered on and connected to the receiver’s subwoofer output.",
      step_2:
        "Check the receiver’s speaker setup menu to confirm that the subwoofer is enabled.",
      step_3:
        "Adjust the crossover settings on both the receiver and subwoofer to ensure proper bass output.",
      step_4:
        "Increase the subwoofer’s volume on the receiver or directly on the subwoofer itself.",
      step_5:
        "Test the subwoofer with another audio source to rule out a receiver issue.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2fb2",
    },
    date: "2024-10-09",
    title: "No Surround Sound from AV Receiver",
    issue:
      "My AV receiver is not outputting surround sound, what should I check?",
    steps_to_resolve: {
      step_1:
        "Ensure the media source (e.g., Blu-ray, streaming service) supports surround sound.",
      step_2:
        "Check the receiver’s audio settings to confirm surround sound is enabled.",
      step_3:
        "Verify that all surround speakers are properly connected to the receiver.",
      step_4:
        "Select the correct surround sound mode (e.g., Dolby Digital, DTS) on the receiver.",
      step_5:
        "Test the speakers with a different surround sound source to ensure proper functionality.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2fb3",
    },
    date: "2024-10-09",
    title: "Receiver Keeps Shutting Off",
    issue: "My AV receiver keeps shutting off, how can I fix this?",
    steps_to_resolve: {
      step_1:
        "Check for any overheating by ensuring the receiver has adequate ventilation.",
      step_2:
        "Inspect the speaker wires for any shorts or loose connections that could cause the receiver to go into protection mode.",
      step_3:
        "Ensure the receiver is not overloaded by connecting too many speakers or high-powered devices.",
      step_4:
        "Reset the receiver to factory settings and reconfigure the setup.",
      step_5:
        "If the problem persists, contact technical support or consider servicing the receiver.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2fb4",
    },
    date: "2024-10-09",
    title: "No Signal to TV from AV Receiver",
    issue:
      "My TV is not receiving a signal from the AV receiver, what steps should I take?",
    steps_to_resolve: {
      step_1:
        "Ensure the HDMI cable is securely connected to both the receiver and TV.",
      step_2:
        "Verify that the receiver is set to the correct input source (e.g., HDMI 1, HDMI 2).",
      step_3:
        "Check the TV’s input settings to ensure the correct HDMI input is selected.",
      step_4:
        "Restart both the TV and the receiver to refresh the HDMI connection.",
      step_5:
        "Try using a different HDMI cable or port to rule out a faulty connection.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2fb5",
    },
    date: "2024-10-09",
    title: "Denon Receiver Remote Not Working",
    issue:
      "The remote for my Denon receiver is not working, what should I check?",
    steps_to_resolve: {
      step_1: "Replace the batteries in the remote with fresh ones.",
      step_2:
        "Ensure there are no obstructions between the remote and the receiver’s IR sensor.",
      step_3:
        "Check if the receiver is set to a mode that disables remote control functionality.",
      step_4: "Restart the receiver and try using the remote again.",
      step_5:
        "If the issue persists, consider using a universal remote or the Denon mobile app as a workaround.",
    },
    imgPath: "pic.jpg",
  },
  {
    _id: {
      $oid: "6706c885145f8158594a2fb6",
    },
    date: "2024-10-09",
    title: "Volume Too Low Even at Max Level",
    issue:
      "The volume on my AV receiver is too low even at the maximum level, what could be wrong?",
    steps_to_resolve: {
      step_1:
        "Ensure the speakers are properly connected and set up in the receiver’s speaker configuration menu.",
      step_2:
        "Check the receiver’s volume limiter settings to ensure no restrictions are in place.",
      step_3:
        "Verify that the input source’s volume is not too low (e.g., Blu-ray player, streaming box).",
      step_4:
        "Try increasing the receiver’s channel levels or recalibrating the speaker setup.",
      step_5: "Update the receiver’s firmware to ensure optimal performance.",
    },
    imgPath: "pic.jpg",
  },
];
export default articles;
