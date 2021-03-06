# HowTo LDAP
Der Hochschul "Lightweight Directory Access Protocol" (LDAP) Server ermöglicht einen ressourcensparenden Zugriff auf das Active Directory.
Dieser Zugriff kann zur Authentisierung oder Abfrage nach bestimmten Personen genutzt werden.
Dabei ist zu beachten, dass der LDAP ausschließlich aus dem internen LAN der Hochschule, entweder über das "eduroam" oder "", erreichbar ist.

LDAP der Hochschule:
```
$ldapserver = 'ldap1.fh-augsburg.de';
$ldaptree = 'ou=People,dc=FH-Augsburg,dc=DE';
```

Auflistung aller Einträge des AD in einer Console, z. B. Cygwin auf Windows:
```
ldapsearch -H ldap://ldap1.fh-augsburg.de -x -LLL -b "ou=People,dc=FH-Augsburg,dc=DE" "(objectClass=*)"
```

Nach spezieller Person suchen:
-> zunächst das ldap in ein Textdokument dumpen
```
ldapsearch -H ldap://ldap1.fh-augsburg.de -x -LLL -b "ou=People,dc=FH-Augsburg,dc=DE" "(objectClass=*)" | tee hs-ldap.dump
```
-> im Textdokument nach Personen mittels Strg+F suchen

Direkt im LDAP nach Person suchen:
```
ldapsearch -H ldap://ldap1.fh-augsburg.de -x -LLL -b "ou=People,dc=FH-Augsburg,dc=DE" "cn=<SEARCH_PARAM>"
ldapsearch -H ldap://ldap1.fh-augsburg.de -x -LLL -b "ou=People,dc=FH-Augsburg,dc=DE" "uid=<SEARCH_PARAM>"
```

HowTo Cygwin - Installation
Cygwin neu installieren, bei Paketwahl auf View=Full und Search=openldap.
Daraufhin openldap auswählen für clients
