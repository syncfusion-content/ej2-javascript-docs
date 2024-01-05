var iconWithLabel = [
  { label: 'PowerPoint', iconCss: 'sf-icon-powerpoint' },
  { label: 'Presentation', iconCss: 'sf-icon-projector' },
  { label: 'Backup', iconCss: 'sf-icon-onedrive' }
];

var stepper = new ej.navigations.Stepper({
  activeStep: 1,
  steps: iconWithLabel,
  template: '<div class="template-content"><span class="${step.iconCss}"></span><br><span class="e-label">${step.label}</span></div>'
});
stepper.appendTo('#stepperTemplate');