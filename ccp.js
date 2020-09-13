/*************** Begin Mod Area ***************/

/* Edit the instanceName below with your instance alias */
var instanceName = "jwelborn-sugar";

/*************** End Mod Area ***************/
connect.core.initCCP(document.getElementById('containerDiv'), {
    ccpUrl:"https://" + instanceName + ".awsapps.com/connect/ccp-v2/",
    loginPopup: true,
    loginOptions: {
    },
    loginPopupAutoClose: true,
    softphone: {
        allowFramedSoftphone: true
    },
});
connect.contact(function(contact) {
    contact.onConnecting(function(contact) {
        var attributeMap = contact.getAttributes();
        var baseURL = attributeMap.screenPopURL.value;
        var searchString = attributeMap.screenPopValue.value;
        var screenpopURL = baseURL + searchString;
        window.open(screenpopURL)
    });

    contact.onAccepted(function(contact) {
        console.log(contact.getContactId());
        console.log(contact.getType());
        console.log(contact.isSoftphoneCall());
        console.log(contact.isInbound());
        console.log(contact.getConnections());
    });
});

connect.agent(function(agent) {
    agent.onConnecting(function(agent) {
        console.log(agent.getContacts());
        console.log(agent.getConfiguration());
        console.log(agent.getContacts());
    })
});
