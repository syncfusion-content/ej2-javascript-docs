

import { L10n } from '@syncfusion/ej2-base';
import { ImageEditor } from '@syncfusion/ej2-image-editor';

L10n.load({
    'de-DE': {
        'image-editor': {
            'Browse': 'Durchsuche',
            'Crop': 'Ernte',
            'ZoomIn': 'Hineinzoomen',
            'ZoomOut': 'Rauszoomen',
            'Transform': 'Verwandeln',
            'Annotation': 'Anmerkung',
            'Text': 'Text hinzufügen',
            'Pen': 'Stift',
            'Reset': 'Zurücksetzen',
            'Save': 'Speichern',
            'Select': 'Auswählen',
            'RotateLeft': 'Nach links drehen',
            'RotateRight': 'Drehe nach rechts',
            'HorizontalFlip': 'Horizontaler Flip',
            'VerticalFlip': 'Vertikaler Flip',
            'OK': 'OK',
            'Cancel': 'Absagen',
            'FillColor': 'Füllfarbe',
            'StrokeColor': 'Strichfarbe',
            'StrokeWidth': 'Strichbreite',
            'FontFamily': 'Schriftfamilie',
            'FontStyle': 'Schriftstil',
            'FontSize': 'Schriftgröße',
            'FontColor': 'Schriftfarbe',
            'Pan': 'Pfanne',
            'Move': 'Bewegen',
            'Custom': 'Brauch',
            'Square': 'Quadrat',
            'Circle': 'Kreis',
            'Rectangle': 'Rechteck',
            'Line': 'Linie',
            'Default': 'Standard',
            'Bold': 'Fett gedruckt',
            'Italic': 'Kursiv',
            'BoldItalic': 'Fett Kursiv',
        }
    }
});

//Image Editor items definition

 new ImageEditor({
    locale: 'de-DE',
    width: '550px',
    height: '350px',
    }, '#imageeditor');


