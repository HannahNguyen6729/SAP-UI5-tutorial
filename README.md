1.  hello world
    npm i -D @ui5/cli
    ui5 init
    npm start
2.  bootstrap
    Bootstrapping is the process of loading and initializing SAPUI5
    Load the SAPUI5 framework from the webserver provided by UI5 Tooling and initialize the core module
    Commands:
    ui5 use OpenUI5
    ui5 add sap.ui.core sap.m themelib_sap_horizon
3.  Control
    Controls are used to define appearance and behavior of parts of the screen.
    In SAP UI5, a Control is the fundamental building block for creating user interfaces. It represents a visible UI element on the screen, such as a button, label, input field, or container. Controls can be nested within each other to form complex UI hierarchies
4.  XMLView
    In SAP UI5, XML Views are the primary way to define the user interface (UI) of your application. They use XML syntax to declaratively describe the layout and structure of your UI, including the controls and their properties.
5.  Controllers
    Controllers act as the central components coordinating the logic behind your application's user interface (UI). They bridge the gap between the visual elements (Controls) defined in XML Views and the application's data and business logic.

    Key Responsibilities of Controllers:

        Handle User Interactions: Controllers react to user events triggered by Control interactions (e.g., button clicks, input changes). They process these events and perform actions accordingly, such as updating the UI, fetching data from a server, or triggering navigation.
        Manage Data Binding: Controllers establish connections between Controls and data models. They ensure Controls display and manipulate data effectively.

    Control Lifecycle Management: Controllers can hook into the lifecycle events of Controls (e.g., initialization, destruction). This allows them to perform specific actions at different stages of a Control's existence.
    Business Logic Implementation: Controllers encapsulate the core application logic, such as data validation, calculations, and business rule execution. They determine how the application reacts to user input and data changes.
    Communication with External Services: Controllers can interact with external services (e.g., servers, APIs) to fetch or manipulate data required by the application.

6.  Modules
