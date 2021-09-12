OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Ha fallat en eliminar els mapatges",
    "Failed to delete the server configuration" : "Ha fallat en eliminar la configuració del servidor",
    "Invalid configuration: Anonymous binding is not allowed." : "Configuració no vàlida: no es permet l'enllaç anònim.",
    "Valid configuration, connection established!" : "Configuració vàlida, connexió establerta!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Configuració vàlida, però no s'ha pogut enllaçar. Comproveu la configuració del servidor i les credencials.",
    "Invalid configuration. Please have a look at the logs for further details." : "Configuració no vàlida. Feu un cop d'ull als registres per obtenir més informació.",
    "No action specified" : "No heu especificat cap acció",
    "No configuration specified" : "No heu especificat cap configuració",
    "No data specified" : "No heu especificat cap dada",
    " Could not set configuration %s" : "No s'ha pogut establir la configuració %s",
    "Action does not exist" : "L'acció no existeix",
    "LDAP user and group backend" : "Usuari LDAP i grup de suport",
    "Renewing …" : "Renovant ...",
    "Very weak password" : "Contrasenya massa feble",
    "Weak password" : "Contrasenya feble",
    "So-so password" : "Contrasenya passable",
    "Good password" : "Contrasenya bona",
    "Strong password" : "Contrasenya forta",
    "The Base DN appears to be wrong" : "El DN de base sembla estar equivocat",
    "Testing configuration…" : "Probant configuració...",
    "Configuration incorrect" : "Configuració incorrecte",
    "Configuration incomplete" : "Configuració incompleta",
    "Configuration OK" : "Configuració correcte",
    "Select groups" : "Selecciona els grups",
    "Select object classes" : "Seleccioneu les classes dels objectes",
    "Please check the credentials, they seem to be wrong." : "Comproveu les credencials, semblen estar equivocades.",
    "Please specify the port, it could not be auto-detected." : "Especifiqueu el port, no s'ha pogut detectar automàticament.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Base DN no es pot detectar automàticament, reviseu les credencials, l'amfitrió i el port.",
    "Could not detect Base DN, please enter it manually." : "No s'ha pogut detectar Base DN, introduïu-lo manualment.",
    "{nthServer}. Server" : "{nthServer}. Servidor",
    "No object found in the given Base DN. Please revise." : "No s'ha trobat cap objecte a la Base DN donada. Reviseu.",
    "More than 1,000 directory entries available." : "Hi ha més de 1.000 entrades de directoris disponibles.",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Hi ha hagut un error. Comproveu la base DN, així com la configuració de connexió i les credencials.",
    "Do you really want to delete the current Server Configuration?" : "Voleu eliminar la configuració actual del servidor?",
    "Confirm Deletion" : "Confirma l'eliminació",
    "Mappings cleared successfully!" : "S'han netejat les assignacions amb èxit!",
    "Error while clearing the mappings." : "S'ha produït un error en eliminar les assignacions.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "L'enllaç anònim no està permès. Proporcioneu un DN d'usuari i contrasenya.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Error d'operacions LDAP. L'enllaç anònim no es pot permetre.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "S'ha produït un error en desar. Assegureu-vos que la base de dades està en Operació. Torneu a carregar abans de continuar.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Si canvieu el mode, activareu les consultes LDAP automàtiques. Depenent de la vostra mida LDAP, poden trigar una estona. Voleu canviar el mode?",
    "Mode switch" : "Canvia el mode",
    "Select attributes" : "Seleccioneu els atributs",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Usuari no trobat. Comproveu els vostres atributs d'inici de sessió i el vostre nom d'usuari. Filtre eficaç (per copiar i enganxar per a la validació de la línia de comandaments):<br/>",
    "User found and settings verified." : "S'ha trobat l'usuari i s'ha verificat la configuració.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Penseu a reduir la vostra cerca, ja que ha inclòs molts usuaris, només el primer dels quals podrà iniciar sessió.",
    "An unspecified error occurred. Please check log and settings." : "S'ha produït un error no especificat. Verifiqueu el registre i la configuració.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "El filtre de cerca no és vàlid, probablement a causa de problemes de sintaxi com el nombre impar de parèntesis oberts i tancats. Reviseu.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "S'ha produït un error de connexió a LDAP / AD, consulteu l'amfitrió, el port i les credencials.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Falta el marcador d'identitat. Es reemplaçarà amb el nom d'usuari quan consulteu LDAP / AD.",
    "Please provide a login name to test against" : "Proporcioneu un nom d'inici de sessió per provar-ho",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "El quadre del grup s'ha desactivat, perquè el servidor LDAP / AD no admet memberOf.",
    "Password change rejected. Hint: " : "El canvi de contrasenya s'ha rebutjat. Pista:",
    "Please login with the new password" : "Inicieu sessió amb la nova contrasenya",
    "Your password will expire tomorrow." : "La contrasenya caducarà demà.",
    "Your password will expire today." : "La contrasenya caducarà avui.",
    "LDAP / AD integration" : "Integració LDAP / AD",
    "_%s group found_::_%s groups found_" : ["S'ha trobat %s grup","S'han trobat %s grups"],
    "_%s user found_::_%s users found_" : ["S'ha trobat %s usuari","S'han trobat %s usuaris"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "No s'ha pogut detectar l'atribut del nom de visualització de l'usuari. Si us plau, especifiqueu-vos a la configuració LDAP avançada.",
    "Could not find the desired feature" : "La característica desitjada no s'ha trobat",
    "Invalid Host" : "Ordinador central no vàlid",
    "Test Configuration" : "Comprovació de la configuració",
    "Help" : "Ajuda",
    "Groups meeting these criteria are available in %s:" : "Els grups que compleixen aquests criteris estan disponibles a %s:",
    "Only these object classes:" : "Només aquestes classes d'objectes:",
    "Only from these groups:" : "Només d'aquests grups:",
    "Search groups" : "Buscar grups",
    "Available groups" : "Grups disponibles",
    "Selected groups" : "Grups seleccionats",
    "Edit LDAP Query" : "Editeu la consulta LDAP",
    "LDAP Filter:" : "Filtre LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "El filtre especifica quins grups LDAP haurien de tenir accés a la instància %s.",
    "Verify settings and count the groups" : "Comprova la configuració i compta els grups",
    "Other Attributes:" : "Altres atributs:",
    "Verify settings" : "Comprova la configuració",
    "%s. Server:" : "%s. Servidor:",
    "Delete the current configuration" : "Esborra la configuració actual",
    "Host" : "Equip remot",
    "Port" : "Port",
    "Detect Port" : "Detecta port",
    "User DN" : "DN Usuari",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "La DN de l'usuari client amb la que s'haurà de fer, per exemple uid=agent,dc=exemple,dc=com. Per un accés anònim, deixeu la DN i la contrasenya en blanc.",
    "Password" : "Contrasenya",
    "For anonymous access, leave DN and Password empty." : "Per un accés anònim, deixeu la DN i la contrasenya en blanc.",
    "One Base DN per line" : "Una DN Base per línia",
    "You can specify Base DN for users and groups in the Advanced tab" : "Podeu especificar DN Base per usuaris i grups a la pestanya Avançat",
    "The filter specifies which LDAP users shall have access to the %s instance." : "El filtre especifica quins usuaris LDAP haurien de tenir accés a la instància %s",
    "Saving" : "Desant...",
    "Back" : "Enrera",
    "Continue" : "Continua",
    "Cancel" : "Cancel·la",
    "Server" : "Servidor",
    "Users" : "Usuaris",
    "Groups" : "Grups",
    "Expert" : "Expert",
    "Advanced" : "Avançat",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Avís:</b> El mòdul PHP LDAP no està instal·lat, el dorsal no funcionarà. Demaneu a l'administrador del sistema que l'instal·li.",
    "Connection Settings" : "Paràmetres de connexió",
    "Configuration Active" : "Configuració activa",
    "When unchecked, this configuration will be skipped." : "Si està desmarcat, aquesta configuració s'ometrà.",
    "Backup (Replica) Host" : "Màquina de còpia de serguretat (rèplica)",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Afegiu una màquina de còpia de seguretat opcional. Ha de ser una rèplica del servidor LDAP/AD principal.",
    "Backup (Replica) Port" : "Port de la còpia de seguretat (rèplica)",
    "Disable Main Server" : "Desactiva el servidor principal",
    "Only connect to the replica server." : "Connecta només al servidor rèplica.",
    "Turn off SSL certificate validation." : "Desactiva la validació de certificat SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "No es recomana, useu-ho només com a prova! Importeu el certificat SSL del servidor LDAP al servidor %s només si la connexió funciona amb aquesta opció.",
    "Cache Time-To-Live" : "Memòria cau Time-To-Live",
    "in seconds. A change empties the cache." : "en segons. Un canvi buidarà la memòria cau.",
    "Directory Settings" : "Configuracio de carpetes",
    "User Display Name Field" : "Camp per mostrar el nom d'usuari",
    "The LDAP attribute to use to generate the user's display name." : "Atribut LDAP a usar per generar el nom a mostrar de l'usuari.",
    "Base User Tree" : "Arbre base d'usuaris",
    "One User Base DN per line" : "Una DN Base d'Usuari per línia",
    "User Search Attributes" : "Atributs de cerca d'usuari",
    "Optional; one attribute per line" : "Opcional; Un atribut per línia",
    "Group Display Name Field" : "Camp per mostrar el nom del grup",
    "The LDAP attribute to use to generate the groups's display name." : "Atribut LDAP a usar per generar el nom a mostrar del grup.",
    "Base Group Tree" : "Arbre base de grups",
    "One Group Base DN per line" : "Una DN Base de Grup per línia",
    "Group Search Attributes" : "Atributs de cerca de grup",
    "Group-Member association" : "Associació membres-grup",
    "Nested Groups" : "Grups imbricats",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Quan està activat, els grups que contenen grups estan permesos. (Només funciona si l'atribut del grup membre conté DNs.)",
    "Paging chunksize" : "Mida de la pàgina",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Mida usada per cerques LDAP paginades que podrien retornar respostes de volcat com enumeració d'usuari o grup. (Establint-ho a 0 desactiva les cerques LDAP paginades en aquestes situacions.)",
    "Special Attributes" : "Atributs especials",
    "Quota Field" : "Camp de quota",
    "Quota Default" : "Quota per defecte",
    "Email Field" : "Camp de correu electrònic",
    "User Home Folder Naming Rule" : "Norma per anomenar la carpeta arrel d'usuari",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Deixeu-ho buit pel nom d'usuari (per defecte). Altrament, especifiqueu un atribut LDAP/AD.",
    "Internal Username" : "Nom d'usuari intern",
    "Internal Username Attribute:" : "Atribut nom d'usuari intern:",
    "Override UUID detection" : "Sobrescriu la detecció UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Per defecte, owncloud autodetecta l'atribut UUID. L'atribut UUID s'utilitza per identificar usuaris i grups de forma indubtable. També el nom d'usuari intern es crearà en base a la UUIS, si no heu especificat res diferent a dalt. Podeu sobreescriure l'arranjament i passar l'atribut que desitgeu. Heu d'assegurar-vos que l'atribut que escolliu pot ser recollit tant pels usuaris com pels grups i que és únic. Deixeu-ho en blanc si preferiu el comportament per defecte. els canvis s'aplicaran als usuaris i grups LDAP mapats de nou (afegits).",
    "UUID Attribute for Users:" : "Atribut UUID per Usuaris:",
    "UUID Attribute for Groups:" : "Atribut UUID per Grups:",
    "Username-LDAP User Mapping" : "Mapatge d'usuari Nom d'usuari-LDAP",
    "Clear Username-LDAP User Mapping" : "Elimina el mapatge d'usuari Nom d'usuari-LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Elimina el mapatge de grup Nom de grup-LDAP",
    " entries available within the provided Base DN" : "les entrades disponibles a la Base DN proporcionada"
},
"nplurals=2; plural=(n != 1);");
