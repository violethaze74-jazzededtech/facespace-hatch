OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Failed to clear the mappings.",
    "Failed to delete the server configuration" : "Failed to delete the server configuration",
    "Invalid configuration: Anonymous binding is not allowed." : "Invalid configuration: Anonymous binding is not allowed.",
    "Valid configuration, connection established!" : "Valid configuration, connection established!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Valid configuration, but binding failed. Please check the server settings and credentials.",
    "Invalid configuration. Please have a look at the logs for further details." : "Invalid configuration. Please have a look at the logs for further details.",
    "No action specified" : "No action specified",
    "No configuration specified" : "No configuration specified",
    "No data specified" : "No data specified",
    " Could not set configuration %s" : " Could not set configuration %s",
    "Action does not exist" : "Action does not exist",
    "Renewing …" : "Renewing …",
    "Very weak password" : "Very weak password",
    "Weak password" : "Weak password",
    "So-so password" : "So-so password",
    "Good password" : "Good password",
    "Strong password" : "Strong password",
    "The Base DN appears to be wrong" : "The Base DN appears to be wrong",
    "Testing configuration…" : "Testing configuration…",
    "Configuration incorrect" : "Configuration incorrect",
    "Configuration incomplete" : "Configuration incomplete",
    "Configuration OK" : "Configuration OK",
    "Select groups" : "Select groups",
    "Select object classes" : "Select object classes",
    "Please check the credentials, they seem to be wrong." : "Please check the credentials, they seem to be wrong.",
    "Please specify the port, it could not be auto-detected." : "Please specify the port, it could not be auto-detected.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN could not be auto-detected, please revise credentials, host and port.",
    "Could not detect Base DN, please enter it manually." : "Could not detect Base DN, please enter it manually.",
    "{nthServer}. Server" : "{nthServer}. Server",
    "No object found in the given Base DN. Please revise." : "No object found in the given Base DN. Please revise.",
    "More than 1,000 directory entries available." : "More than 1,000 directory entries available.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} entry available within the provided Base DN","{objectsFound} entries available within the provided Base DN"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "An error occurred. Please check the Base DN, as well as connection settings and credentials.",
    "Do you really want to delete the current Server Configuration?" : "Do you really want to delete the current Server Configuration?",
    "Confirm Deletion" : "Confirm Deletion",
    "Mappings cleared successfully!" : "Mappings cleared successfully!",
    "Error while clearing the mappings." : "Error whilst clearing the mappings.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Anonymous bind is not allowed. Please provide a User DN and Password.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "LDAP Operations error. Anonymous bind might not be allowed.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Saving failed. Please make sure the database is in operation. Reload before continuing.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?",
    "Mode switch" : "Mode switch",
    "Select attributes" : "Select attributes",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>",
    "User found and settings verified." : "User found and settings verified.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in.",
    "An unspecified error occurred. Please check log and settings." : "An unspecified error occurred. Please check log and settings.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "The search filter is invalid, probably due to syntax issues like an uneven number of opened and closed brackets. Please revise.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "A connection error to LDAP / AD occurred, please check host, port and credentials.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD.",
    "Please provide a login name to test against" : "Please provide a login name to test against",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "The group box was disabled, because the LDAP / AD server does not support memberOf.",
    "Password change rejected. Hint: " : "Password change rejected. Hint: ",
    "Please login with the new password" : "Please login with the new password",
    "Your password will expire tomorrow." : "Your password will expire tomorrow.",
    "Your password will expire today." : "Your password will expire today.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Your password will expire within %n day.","Your password will expire within %n days."],
    "LDAP / AD integration" : "LDAP / AD integration",
    "_%s group found_::_%s groups found_" : ["%s group found","%s groups found"],
    "_%s user found_::_%s users found_" : ["%s user found","%s users found"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings.",
    "Could not find the desired feature" : "Could not find the desired feature",
    "Invalid Host" : "Invalid Host",
    "LDAP user and group backend" : "LDAP user and group backend",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "This application enables administrators to connect Nextcloud to an LDAP-based user directory.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation.",
    "Test Configuration" : "Test Configuration",
    "Help" : "Help",
    "Groups meeting these criteria are available in %s:" : "Groups meeting these criteria are available in %s:",
    "Only these object classes:" : "Only these object classes:",
    "Only from these groups:" : "Only from these groups:",
    "Search groups" : "Search groups",
    "Available groups" : "Available groups",
    "Selected groups" : "Selected groups",
    "Edit LDAP Query" : "Edit LDAP Query",
    "LDAP Filter:" : "LDAP Filter:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "The filter specifies which LDAP groups shall have access to the %s instance.",
    "Verify settings and count the groups" : "Verify settings and count the groups",
    "When logging in, %s will find the user based on the following attributes:" : "When logging in, %s will find the user based on the following attributes:",
    "LDAP / AD Username:" : "LDAP / AD Username:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected.",
    "LDAP / AD Email Address:" : "LDAP / AD Email Address:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed.",
    "Other Attributes:" : "Other Attributes:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"",
    "Test Loginname" : "Test Loginname",
    "Verify settings" : "Verify settings",
    "%s. Server:" : "%s. Server:",
    "Add a new configuration" : "Add a new configuration",
    "Copy current configuration into new directory binding" : "Copy current configuration into new directory binding",
    "Delete the current configuration" : "Delete the current configuration",
    "Host" : "Host",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "You can omit the protocol, unless you require SSL. If so, start with ldaps://",
    "Port" : "Port",
    "Detect Port" : "Detect Port",
    "User DN" : "User DN",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty.",
    "Password" : "Password",
    "For anonymous access, leave DN and Password empty." : "For anonymous access, leave DN and Password empty.",
    "Save Credentials" : "Save Credentials",
    "One Base DN per line" : "One Base DN per line",
    "You can specify Base DN for users and groups in the Advanced tab" : "You can specify Base DN for users and groups in the Advanced tab",
    "Detect Base DN" : "Detect Base DN",
    "Test Base DN" : "Test Base DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge.",
    "Manually enter LDAP filters (recommended for large directories)" : "Manually enter LDAP filters (recommended for large directories)",
    "Listing and searching for users is constrained by these criteria:" : "Listing and searching for users is constrained by these criteria:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "The filter specifies which LDAP users shall have access to the %s instance.",
    "Verify settings and count users" : "Verify settings and count users",
    "Saving" : "Saving",
    "Back" : "Back",
    "Continue" : "Continue",
    "Please renew your password." : "Please renew your password.",
    "An internal error occurred." : "An internal error occurred.",
    "Please try again or contact your administrator." : "Please try again or contact your administrator.",
    "Current password" : "Current password",
    "New password" : "New password",
    "Renew password" : "Renew password",
    "Wrong password." : "Wrong password.",
    "Cancel" : "Cancel",
    "Server" : "Server",
    "Users" : "Users",
    "Login Attributes" : "Login Attributes",
    "Groups" : "Groups",
    "Expert" : "Expert",
    "Advanced" : "Advanced",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it.",
    "Connection Settings" : "Connection Settings",
    "Configuration Active" : "Configuration Active",
    "When unchecked, this configuration will be skipped." : "When unchecked, this configuration will be skipped.",
    "Backup (Replica) Host" : "Backup (Replica) Host",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Give an optional backup host. It must be a replica of the main LDAP/AD server.",
    "Backup (Replica) Port" : "Backup (Replica) Port",
    "Disable Main Server" : "Disable Main Server",
    "Only connect to the replica server." : "Only connect to the replica server.",
    "Turn off SSL certificate validation." : "Turn off SSL certificate validation.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server.",
    "Cache Time-To-Live" : "Cache Time-To-Live",
    "in seconds. A change empties the cache." : "in seconds. A change empties the cache.",
    "Directory Settings" : "Directory Settings",
    "User Display Name Field" : "User Display Name Field",
    "The LDAP attribute to use to generate the user's display name." : "The LDAP attribute to use to generate the user's display name.",
    "2nd User Display Name Field" : "2nd User Display Name Field",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«.",
    "Base User Tree" : "Base User Tree",
    "One User Base DN per line" : "One User Base DN per line",
    "User Search Attributes" : "User Search Attributes",
    "Optional; one attribute per line" : "Optional; one attribute per line",
    "Group Display Name Field" : "Group Display Name Field",
    "The LDAP attribute to use to generate the groups's display name." : "The LDAP attribute to use to generate the group's display name.",
    "Base Group Tree" : "Base Group Tree",
    "One Group Base DN per line" : "One Group Base DN per line",
    "Group Search Attributes" : "Group Search Attributes",
    "Group-Member association" : "Group-Member association",
    "Dynamic Group Member URL" : "Dynamic Group Member URL",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)",
    "Nested Groups" : "Nested Groups",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)",
    "Paging chunksize" : "Paging chunksize",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)",
    "Enable LDAP password changes per user" : "Enable LDAP password changes per user",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server.",
    "(New password is sent as plain text to LDAP)" : "(New password is sent as plain text to LDAP)",
    "Default password policy DN" : "Default password policy DN",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling.",
    "Special Attributes" : "Special Attributes",
    "Quota Field" : "Quota Field",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute.",
    "Quota Default" : "Quota Default",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Override default quota for LDAP users who do not have a quota set in the Quota Field.",
    "Email Field" : "Email Field",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Set the user's email from their LDAP attribute. Leave it empty for default behaviour.",
    "User Home Folder Naming Rule" : "User Home Folder Naming Rule",
    "Internal Username" : "Internal Username",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users.",
    "Internal Username Attribute:" : "Internal Username Attribute:",
    "Override UUID detection" : "Override UUID detection",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "By default, the UUID attribute is automatically detected. The UUID attribute is used to unambiguously identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behaviour. Changes will have effect only on newly mapped (added) LDAP users and groups.",
    "UUID Attribute for Users:" : "UUID Attribute for Users:",
    "UUID Attribute for Groups:" : "UUID Attribute for Groups:",
    "Username-LDAP User Mapping" : "Username-LDAP User Mapping",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Usernames are used to store and assign metadata. In order to precisely identify and recognise users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage.",
    "Clear Username-LDAP User Mapping" : "Clear Username-LDAP User Mapping",
    "Clear Groupname-LDAP Group Mapping" : "Clear Groupname-LDAP Group Mapping"
},
"nplurals=2; plural=(n != 1);");
