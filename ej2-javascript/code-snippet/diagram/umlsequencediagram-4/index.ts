import { Diagram, UmlSequenceDiagramModel, UmlSequenceMessageType, UmlSequenceFragmentType, SnapConstraints } from "@syncfusion/ej2-diagrams";

// Define the UML Sequence Diagram model
const model: UmlSequenceDiagramModel = {
  // Define the space between participants
  spaceBetweenParticipants: 300,
  participants: [
    { id: "Customer", content: "Customer", isActor: true,},
    { id: "OrderSystem", content: "Order System", isActor: false,},
    { id: "PaymentGateway", content: "Payment Gateway", isActor: false,}
  ],
  // Define the messages passed between participants
  messages: [
    {
      id: "MSG1", content: "Place Order", fromParticipantID: "Customer", toParticipantID: "OrderSystem",
      type: UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG2", content: "Check Stock Availability", fromParticipantID: "OrderSystem", toParticipantID: "OrderSystem",
      type: UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG3", content: "Stock Available", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
      type: UmlSequenceMessageType.Reply
    },
    {
      id: "MSG4", content: "Process Payment", fromParticipantID: "OrderSystem", toParticipantID: "PaymentGateway",
      type: UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG5", content: "Payment Successful", fromParticipantID: "PaymentGateway", toParticipantID: "OrderSystem",
      type: UmlSequenceMessageType.Reply
    },
    {
      id: "MSG6", content: "Order Confirmed and Shipped", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
      type: UmlSequenceMessageType.Reply
    },
    {
      id: "MSG7", content: "Payment Failed", fromParticipantID: "PaymentGateway", toParticipantID: "OrderSystem",
      type: UmlSequenceMessageType.Reply
    },
    {
      id: "MSG8", content: "Retry Payment", fromParticipantID: "OrderSystem", toParticipantID: "Customer",
      type: UmlSequenceMessageType.Reply
    }
  ],
  // Define fragments for conditional visual representation
  fragments: [
    // Child Fragment 1 (Optional)
    {
      id: 1,
      type: UmlSequenceFragmentType.Optional,
      conditions: [
        {
          content: "if item is in stock",
          messageIds: ["MSG4"]
        }
      ]
    },
    // Child Fragment 2 (Alternative)
    {
      id: 2,
      type: UmlSequenceFragmentType.Alternative,
      conditions: [
        {
          content: "if payment is successful",
          messageIds: ["MSG5", "MSG6"]
        },
        {
          content: "if payment fails",
          messageIds: ["MSG7", "MSG8"]
        }
      ]
    },
    // Parent Fragment (Loop)
    {
      id: 3,
      type: UmlSequenceFragmentType.Loop,
      conditions: [
        {
          content: "while attempts less than 3",
          // Use IDs of child fragments for nested conditions
          fragmentIds: ['1', '2'],
        }
      ]
    },
  ],
};

// Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Specifies the model for the diagram
  model: model,
  snapSettings: {constraints: SnapConstraints.None}
});
// Append the diagram to the specified HTML element
diagram.appendTo("#element");

