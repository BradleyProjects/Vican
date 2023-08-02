// Form Wizard / Stepper


var linearStepper = document.querySelector('#linearStepper');
var linearStepperInstace = new MStepper(linearStepper, {
    firstActive: 0,
    showFeedbackPreloader: true,
    // Auto generation of a form around the stepper.
    autoFormCreation: true,
    // Function to be called everytime a nextstep occurs. It receives 2 arguments, in this sequece: stepperForm, activeStepContent.
    // validationFunction: defaultValidationFunction, // more about this default functions below
    // Enable or disable navigation by clicking on step-titles
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});

linearStepperInstace.resetStepper();

var linearStepper1 = document.querySelector('#linearStepper1');
var linearStepperInstace1 = new MStepper(linearStepper1, {
    firstActive: 0,
    showFeedbackPreloader: true,
    // Auto generation of a form around the stepper.
    autoFormCreation: true,
    // Function to be called everytime a nextstep occurs. It receives 2 arguments, in this sequece: stepperForm, activeStepContent.
    // validationFunction: defaultValidationFunction, // more about this default functions below
    // Enable or disable navigation by clicking on step-titles
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});

linearStepperInstace1.resetStepper();

var linearStepperTwo = document.querySelector('#linearStepperTwo');
var linearStepperInstaceTwo = new MStepper(linearStepperTwo, {
    firstActive: 0,
    showFeedbackPreloader: true,
    // Auto generation of a form around the stepper.
    autoFormCreation: true,
    // Function to be called everytime a nextstep occurs. It receives 2 arguments, in this sequece: stepperForm, activeStepContent.
    // validationFunction: defaultValidationFunction, // more about this default functions below
    // Enable or disable navigation by clicking on step-titles
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});

linearStepperInstaceTwo.resetStepper();

var linearStepperThree = document.querySelector('#linearStepperThree');
var linearStepperInstaceThree = new MStepper(linearStepperThree, {
    firstActive: 0,
    showFeedbackPreloader: true,
    // Auto generation of a form around the stepper.
    autoFormCreation: true,
    // Function to be called everytime a nextstep occurs. It receives 2 arguments, in this sequece: stepperForm, activeStepContent.
    // validationFunction: defaultValidationFunction, // more about this default functions below
    // Enable or disable navigation by clicking on step-titles
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});

linearStepperInstaceThree.resetStepper();

var linearStepperFour = document.querySelector('#linearStepperFour');
var linearStepperInstaceFour = new MStepper(linearStepperFour, {
    firstActive: 0,
    showFeedbackPreloader: true,
    // Auto generation of a form around the stepper.
    autoFormCreation: true,
    // Function to be called everytime a nextstep occurs. It receives 2 arguments, in this sequece: stepperForm, activeStepContent.
    // validationFunction: defaultValidationFunction, // more about this default functions below
    // Enable or disable navigation by clicking on step-titles
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});

linearStepperInstaceFour.resetStepper();

var linearStepperFive = document.querySelector('#linearStepperFive');
var linearStepperInstaceFive = new MStepper(linearStepperFive, {
    firstActive: 0,
    showFeedbackPreloader: true,
    // Auto generation of a form around the stepper.
    autoFormCreation: true,
    // Function to be called everytime a nextstep occurs. It receives 2 arguments, in this sequece: stepperForm, activeStepContent.
    // validationFunction: defaultValidationFunction, // more about this default functions below
    // Enable or disable navigation by clicking on step-titles
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});

linearStepperInstaceFive.resetStepper();

var linearStepperSix = document.querySelector('#linearStepperSix');
var linearStepperInstaceSix = new MStepper(linearStepperSix, {
    firstActive: 0,
    showFeedbackPreloader: true,
    // Auto generation of a form around the stepper.
    autoFormCreation: true,
    // Function to be called everytime a nextstep occurs. It receives 2 arguments, in this sequece: stepperForm, activeStepContent.
    // validationFunction: defaultValidationFunction, // more about this default functions below
    // Enable or disable navigation by clicking on step-titles
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});

linearStepperInstaceSix.resetStepper();

var horizStepper = document.querySelector('#horizStepper');
var horizStepperInstace = new MStepper(horizStepper, {
    // options
    firstActive: 0,
    showFeedbackPreloader: true,
    autoFormCreation: true,
    // validationFunction: defaultValidationFunction,
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});

horizStepperInstace.resetStepper();

var nonLinearStepper = document.querySelector('#nonLinearStepper');
var nonLinearStepperInstace = new MStepper(nonLinearStepper, {
    // options
    firstActive: 0,
    showFeedbackPreloader: true,
    autoFormCreation: true,
    validationFunction: defaultValidationFunction,
    stepTitleNavigation: true,
    feedbackPreloader: '<div class="spinner-layer spinner-blue-only">...</div>'
});


function validationFunction(stepperForm, activeStepContent) {
    // You can use the 'stepperForm' to valide the whole form around the stepper:
    someValidationPlugin(stepperForm);
    // Or you can do something with just the activeStepContent
    //someValidationPlugin(activeStepContent);
    // Return true or false to proceed or show an error
    return true;
}


function defaultValidationFunction(stepperForm, activeStepContent) {
    var inputs = activeStepContent.querySelectorAll('input, textarea, select');
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) return false;
    }
    return true;
}

$('.btn-reset').on('click', function () {
    horizStepperInstace.openStep(0);
    linearStepperInstace.openStep(0);
    linearStepperInstace1.openStep(0);
    linearStepperInstaceTwo.openStep(0);
    nonLinearStepperInstace.openStep(0);
})