container.contentChange = function (args) {
    if (connections) {
        connections.sendActionToServer(args.operations);
    }
}