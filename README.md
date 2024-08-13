# PLEASE READ THIS DOCUMENTATION FOR BETTER PROJECT UNDERSTAND

# * Impelementation:

    1. Using AngularCLI to create an Angular project.

    2. Generating form component inside home folder which is nested inside pages folder the whole inside the app for good hierarchy and easy tracking.. 

    3. A form was created using bootstrap package to style the UI and to enhance the user experiance.

    4. Import essensial modules to perform model-driven form like (FormBuilder, FormGroup, ReactiveFormsModule).

    5. Impelment the logic for undo/redo buttons functionality.

# * Explanation:

    1. Form Setup:

        FormBuilder: Used to create the form and its controls.
        FormGroup: Represents the form and its controls.

    2. State Management:

        formHistory: Array to store the history of form states.
        undoneHistory: Array to store the states that can be redone.

    3. Tracking Changes:

        valueChanges (Observable): Tracks changes to the form and updates the formHistory array. Clears the undoneHistory array when a new change is made.

    4. Undo/Redo Functions:

        undo(): Reverts to the previous state and stores the current state in the undoneHistory array.
        redo(): Reapplies the last undone state and stores it back in the formHistory array.

    5. canUndo/canRedo Functions:

        canUndo(): To check formHistroy array lenght that indicateds the possiability to take the undo action. Also for visual feedback to activate or disable the undo button.
        canRedo(): the same logic for undoneHistory Array and redo button.

# * Testing:

    1. Make sure that both undo/redo buttons are disabled when form is first loaded.

    2. Make a change to any of excisting inputs.

    3. The undo button should be activated, click on undo button to undo the change.

    4. Now, the redo button should be activated, you can redo the previous change by clicking on redo button.

    5. If any change happens in between it means that the redo array is erased and the button becomes deactivated. you can't return any of the previous changes.
