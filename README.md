MK-rhythm-id-widget
===================

A widget for MusiKata's rhythm identification exercise.

Running the app
---------------

This widget was built on Express (which, in retrospect, was not necessary). Fork the repository, and then run `npm install`. If this triggers lots of errors, then instead run `sudo npm install`. Then, run `supervisor app`. (You may first have to `sudo apt-get install supervisor`.) Finally, navigate your browser to `localhost:3000` to access the widget.

Because there is no audio playback implemented yet, the correct answer is displayed above. Sixteenth notes are represented by a lowercase "s," eighth notes by an "e," and quarter notes by a "q."
