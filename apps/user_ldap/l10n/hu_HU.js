OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Nem sikerült törölni a hozzárendeléseket.",
    "Failed to delete the server configuration" : "Nem sikerült törölni a szerver konfigurációját",
    "The configuration is invalid: anonymous bind is not allowed." : "A konfiguráció érvénytelen: a névtelen hozzáférés (anonymous bind) nem engedélyezett.",
    "The configuration is valid and the connection could be established!" : "A konfiguráció érvényes, és a kapcsolat létrehozható!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "A konfiguráció érvényes, de a kapcsolat nem hozható létre. Kérem ellenőrizze a szerver beállításait, és az elérési adatokat.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Érvénytelen konfiguráció. További információkért nézze meg a naplófájlokat!",
    "No action specified" : "Nincs megadva parancs",
    "No configuration specified" : "Nincs megadva konfiguráció",
    "No data specified" : "Nincs adat megadva",
    " Could not set configuration %s" : "A konfiguráció nem állítható be: %s",
    "Action does not exist" : "A művelet nem létezik",
    "The Base DN appears to be wrong" : "Úgy tűnik, a címtár gyökere (base DN) hibás",
    "Testing configuration…" : "Beállítások ellenőrzése...",
    "Configuration incorrect" : "Konfiguráió hibás",
    "Configuration incomplete" : "Konfiguráció nincs befejezve",
    "Configuration OK" : "Konfiguráció OK",
    "Select groups" : "Csoportok kiválasztása",
    "Select object classes" : "Objektumosztályok kiválasztása",
    "Please check the credentials, they seem to be wrong." : "Kérlek ellenőrizd az azonosítókat, hibásnak tűnnek.",
    "Please specify the port, it could not be auto-detected." : "Kérlek add meg a port számát, nem lehetett automatikusan detektálni.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "A címtár gyökerét (base DN) nem sikerült automatikusan felismerni, kérlek, ellenőrizd az azonosítókat, a kiszolgáló nevét és a portot.",
    "Could not detect Base DN, please enter it manually." : "Nem sikerült felismerni a címtár gyökerét (base DN), kérlek, add meg kézzel.",
    "{nthServer}. Server" : "{nthServer}. Szerver",
    "No object found in the given Base DN. Please revise." : "Nem találhatók objektumok a megadott címtár gyökérben (base DN). Kérlek, ellenőrizd.",
    "More than 1,000 directory entries available." : "Több mint 1000 címtár bejegyzés érhető el.",
    " entries available within the provided Base DN" : "a megadott címtár gyökér alatt elérhető bejegyzések",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Hiba törént. Kérlek, ellenőrizd a címtár gyökerét (base DN), a kapcsolat beállításait és az azonosítókat.",
    "Do you really want to delete the current Server Configuration?" : "Tényleg törölni szeretné a szerver beállításait?",
    "Confirm Deletion" : "A törlés megerősítése",
    "Mappings cleared successfully!" : "A hozzárendelések sikeresen törölve.",
    "Error while clearing the mappings." : "Hiba a leképzések törlése közben.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "A névtelen hozzáférés (anonymous bind) nem engedélyezett. Kérlek, add meg a felhasználó címtár-azonosítóját (DN) és jelszavát.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "A mentés sikertelen. Kérlek győződj meg róla, hogy az adatbázis működik. Töltsd újra a folytatás előtt.",
    "Mode switch" : "Üzemmód váltás",
    "Select attributes" : "Attribútumok kiválasztása",
    "User found and settings verified." : "Felhasználó megtalálva, beállítások ellenőrizve.",
    "An unspecified error occurred. Please check the settings and the log." : "Meghatározatlan hiba történt. Kérlek ellenőrizd a beállításokat és a naplót.",
    "Password change rejected. Hint: " : "Jelszó módosítás elutasítva. Tipp:",
    "LDAP / AD integration" : "LDAP / AD integráció",
    "_%s group found_::_%s groups found_" : ["%s csoport van","%s csoport van"],
    "_%s user found_::_%s users found_" : ["%s felhasználó van","%s felhasználó van"],
    "Could not find the desired feature" : "A kívánt funkció nem található",
    "Invalid Host" : "Érvénytelen gépnév",
    "Test Configuration" : "A beállítások tesztelése",
    "Help" : "Súgó",
    "Groups meeting these criteria are available in %s:" : "A %s szolgáltatás azon csoportok létezését veszi figyelembe, amik a következő feltételeknek felelnek meg:",
    "Only these object classes:" : "Csak ezek az objektumosztályok:",
    "Only from these groups:" : "Csak ezekből a csoportokból:",
    "Search groups" : "Csoport keresés",
    "Available groups" : "Elérhető csoportok",
    "Selected groups" : "Kiválasztott csoportok",
    "Edit LDAP Query" : "LDAP lekérdezés szerkesztés",
    "LDAP Filter:" : "LDAP szűrő:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "A szűrő meghatározza, hogy mely LDAP csoportok lesznek jogosultak %s elérésére.",
    "LDAP / AD Username:" : "LDAP / AD felhasználónév:",
    "LDAP / AD Email Address:" : "LDAP / AD e-mail cím:",
    "Other Attributes:" : "Más attribútumok:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Ez a szűrő érvényes a bejelentkezés megkísérlésekor. Ekkor az %%uid változó helyére a bejelentkezési név kerül. Például: \"uid=%%uid\"",
    "Verify settings" : "Beállítások ellenőrzése",
    "1. Server" : "1. Szerver",
    "%s. Server:" : "%s. szerver",
    "Delete the current configuration" : "Aktuális konfiguráció törlése",
    "Host" : "Kiszolgáló",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "A protokoll előtag elhagyható, kivéve, ha SSL-t kíván használni. Ebben az esetben kezdje így:  ldaps://",
    "Port" : "Port",
    "Detect Port" : "Port detektálás",
    "User DN" : "A kapcsolódó felhasználó DN-je",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Annak a felhasználónak a DN-je, akinek a nevében bejelentkezve kapcsolódunk a kiszolgálóhoz, pl. uid=agent,dc=example,dc=com. Bejelentkezés nélküli eléréshez ne töltse ki a DN és Jelszó mezőket!",
    "Password" : "Jelszó",
    "For anonymous access, leave DN and Password empty." : "Bejelentkezés nélküli eléréshez ne töltse ki a DN és Jelszó mezőket!",
    "One Base DN per line" : "Soronként egy DN-gyökér",
    "You can specify Base DN for users and groups in the Advanced tab" : "A Haladó fülre kattintva külön DN-gyökér állítható be a felhasználók és a csoportok számára",
    "Manually enter LDAP filters (recommended for large directories)" : "LDAP szűrők kézi beállitása (ajánlott a nagy könyvtáraknál)",
    "The filter specifies which LDAP users shall have access to the %s instance." : "A szűrő meghatározza, hogy mely LDAP felhasználók lesznek jogosultak %s elérésére.",
    "Saving" : "Mentés",
    "Back" : "Vissza",
    "Continue" : "Folytatás",
    "LDAP" : "LDAP",
    "Server" : "Szerver",
    "Users" : "Felhasználók",
    "Groups" : "Csoportok",
    "Expert" : "Profi",
    "Advanced" : "Haladó",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Figyelem:</b> a user_ldap és user_webdavauth alkalmazások nem kompatibilisek. Együttes használatuk váratlan eredményekhez vezethet. Kérje meg a rendszergazdát, hogy a kettő közül kapcsolja ki az egyiket.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Figyelmeztetés:</b> Az LDAP PHP modul nincs telepítve, ezért ez az alrendszer nem fog működni. Kérje meg a rendszergazdát, hogy telepítse!",
    "Connection Settings" : "Kapcsolati beállítások",
    "Configuration Active" : "A beállítás aktív",
    "When unchecked, this configuration will be skipped." : "Ha nincs kipipálva, ez a beállítás kihagyódik.",
    "Backup (Replica) Host" : "Biztonsági (replika) kiszolgáló",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Adjon meg egy opcionális biztonsági kiszolgálót. Ez a fő LDAP/AD szerver replikája kell legyen.",
    "Backup (Replica) Port" : "Biztonsági kiszolgáló (replika) portszáma",
    "Disable Main Server" : "A fő szerver kihagyása",
    "Only connect to the replica server." : "Csak a másodlagos (másolati) szerverhez kapcsolódjunk.",
    "Turn off SSL certificate validation." : "Ne ellenőrizzük az SSL-tanúsítvány érvényességét",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Használata nem javasolt (kivéve tesztelési céllal). Ha a kapcsolat csak ezzel a beállítással működik, akkor importálja az LDAP-szerver SSL tanúsítványát a(z) %s szerverre!",
    "Cache Time-To-Live" : "A gyorsítótár tárolási időtartama",
    "in seconds. A change empties the cache." : "másodpercen belül. A változtatás törli a gyorsítótár tartalmát.",
    "Directory Settings" : "Címtár beállítások",
    "User Display Name Field" : "A felhasználónév mezője",
    "The LDAP attribute to use to generate the user's display name." : "Ebből az LDAP attribútumból képződik a felhasználó megjelenítendő neve.",
    "Base User Tree" : "A felhasználói fa gyökere",
    "One User Base DN per line" : "Soronként egy felhasználói fa gyökerét adhatjuk meg",
    "User Search Attributes" : "A felhasználók lekérdezett attribútumai",
    "Optional; one attribute per line" : "Nem kötelező megadni, soronként egy attribútum",
    "Group Display Name Field" : "A csoport nevének mezője",
    "The LDAP attribute to use to generate the groups's display name." : "Ebből az LDAP attribútumból képződik a csoport megjelenítendő neve.",
    "Base Group Tree" : "A csoportfa gyökere",
    "One Group Base DN per line" : "Soronként egy csoportfa gyökerét adhatjuk meg",
    "Group Search Attributes" : "A csoportok lekérdezett attribútumai",
    "Group-Member association" : "A csoporttagság attribútuma",
    "Nested Groups" : "Egymásba ágyazott csoportok",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Amikor be van kapcsolva, akkor azokat a csoportokat is kezelni tudjuk, melyekben a személyek mellett csoportok is vannak. (Csak akkor működik, ha a csoportok \"member\" attribútuma DN-eket tartalmaz.)",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "A lapméret megadásával korlátozható az egy fordulóban kapott találatok száma, akkor is, ha az LDAP-keresés nagyon sok találatot ad, ha ezt az LDAP-kiszolgáló támogatja. (Ha 0-ra állítjuk, akkor ezáltal letiltjuk ezt a lapozó funkciót.)",
    "Special Attributes" : "Különleges attribútumok",
    "Quota Field" : "Kvóta mező",
    "Quota Default" : "Alapértelmezett kvóta",
    "in bytes" : "bájtban",
    "Email Field" : "E-mail mező",
    "User Home Folder Naming Rule" : "Felhasználói Home mappa elnevezési szabály",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Hagyja üresen, ha a felhasználónevet kívánja használni. Ellenkező esetben adjon meg egy LDAP/AD attribútumot!",
    "Internal Username" : "Belső felhasználónév",
    "Internal Username Attribute:" : "A belső felhasználónév attribútuma:",
    "Override UUID detection" : "Az UUID-felismerés felülbírálása",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Az UUID attribútum alapértelmezetten felismerésre kerül. Az UUID attribútum segítségével az LDAP felhasználók és csoportok egyértelműen azonosíthatók. A belső felhasználónév is azonos lesz az UUID-vel, ha fentebb nincs másként definiálva. Ezt a beállítást felülbírálhatja és bármely attribútummal helyettesítheti. Ekkor azonban gondoskodnia kell arról, hogy a kiválasztott attribútum minden felhasználó és csoport esetén lekérdezhető legyen és egyedi értékkel bír. Ha a mezőt üresen hagyja, akkor az alapértelmezett attribútum lesz érvényes. Egy esetleges módosítás csak az újonnan hozzárendelt (ill. létrehozott) felhasználókra és csoportokra lesz érvényes.",
    "UUID Attribute for Users:" : "A felhasználók UUID attribútuma:",
    "UUID Attribute for Groups:" : "A csoportok UUID attribútuma:",
    "Username-LDAP User Mapping" : "Felhasználó - LDAP felhasználó hozzárendelés",
    "Clear Username-LDAP User Mapping" : "A felhasználó - LDAP felhasználó hozzárendelés törlése",
    "Clear Groupname-LDAP Group Mapping" : "A csoport - LDAP csoport hozzárendelés törlése",
    "Settings verified, but one user found. Only the first will be able to login. Consider a more narrow filter." : "Beállítások ellenőrizve, de egy felhasználó található. Csak az első léphet be automatikusan. Próbálj egy pontosabb szűrőt."
},
"nplurals=2; plural=(n != 1);");
