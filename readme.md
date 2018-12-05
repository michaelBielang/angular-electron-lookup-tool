# Hochschul Active Directory Lookup Tool (HALT)

## Project members
- Bichlmeier Christoph [Master]: UI, Electron, Angular, LDAP, Auth
- Bielang Michael [Bachelor]: DB, ORM, API
- Schmid Steffen [Bachelor]: Testing, VPN


## Project description
A Tool to simplify the college LDAP search.

Users should not need to know long and complicated LDAP commands. This tool therefore will enable them to only type in e. g. a firstname, lastname, or the college email address or a combination of them to perform the actual lookup. This includes additional search limitations for study subject, faculty, gender, or degree (Bachelor or Master) as well as limitation onto a specific college or university. With given input, the tool will then automatically look for fitting identities in the Active Directories of a preset list of colleges and universities. If at first a connection is not possible or no search result was found, it will try to establish a vpn connections to said list of colleges and universities.


## Requirements
- Development with Unit-Tests
- integrated database driver
- included API
- automated vpn handling
- automated LDAP lookup
- simple installation binary
- A simple UI for users
- ...


## Used collaboration tools
- GitLab tickets
- draw.io (broken, sockets do no longer work)
- google docs
- discord
- teamspeak
- teamviewer
- whatsapp


## How to start this tool, How to use it
- simply run: `npm start`
- ...


## RoadMap

### week 1
- defining requirements
- research for fitting test suit
- init of project controlling and collaboration infrastructure
- mockup of DB model
- mockup of frontend
- creation of user journey/user stories
- angular-cli with electron project init
- ...

### week 2
- ...

### week 3
- ...

### week 4
- ...

### week 5
- ...

### week 6
- ...

### week 7
- ...

### week 8
- ...
- presentation of application/demo








# ADDITIONAL/OPTIONAL STUFF

## git prune old branches
http://erikaybar.name/git-deleting-old-local-branches/
```
git remote prune origin
git branch -vv | grep 'origin/.*: gone]' | awk '{print $1}' | xargs git branch -d
```

## .bashrc adjustment for Linux shell branch output
put this at the end:
```
export PS1="$PS1\033[1;34m\$(git branch 2>/dev/null | grep '^*' | colrm 1 2)\033[00m "
```

## Create a types definition
install following module globally and auto gen the .d.ts file
```
npm install -g dts-gen
dts-gen -m <your-module>
```
move the .d.ts file into the folder ./types

## Killing a windows process by name
```
taskkill /f /t /im openvpn.exe
```
