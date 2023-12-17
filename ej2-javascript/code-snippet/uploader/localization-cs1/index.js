ej.base.enableRipple(true);
    ej.base.L10n.load({
        "fr-CH": {
            "uploader": {
                "invalidMinFileSize": "La taille du fichier est trop petite! S'il vous plaît télécharger des fichiers avec une taille minimale de 10 Ko",
                "invalidMaxFileSize": "La taille du fichier dépasse 28 Mo",
                "invalidFileType": "Le type de fichier n'est pas autorisé",
                "Browse": "Feuilleter",
                "Clear": "Clair",
                "Upload": "Télécharger",
                "dropFilesHint": "ou Déposer des fichiers ici",
                "uploadFailedMessage": "Impossible d'importer le fichier",
                "uploadSuccessMessage": "Fichier téléchargé avec succès",
                "removedSuccessMessage": "Fichier supprimé avec succès",
                "removedFailedMessage": "Le fichier n'a pas pu être supprimé",
                "inProgress": "Téléchargement",
                "readyToUploadMessage": "Prêt à télécharger",
                "remove": "Retirer",
                "cancel": "Annuler",
                "delete": "Supprimer le fichier",
                "totalFiles": "Total des fichiers",
                "size": "taille"
            }
        }
    });
    var dropElement = document.getElementsByClassName('control-fluid')[0];
    var uploadObj = new ej.inputs.Uploader({
        autoUpload: false,
        asyncSettings: {
            saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
        },
        dropArea: dropElement,
        locale: 'fr-CH'
    });
    uploadObj.appendTo('#fileupload');
    


