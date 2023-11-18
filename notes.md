Install node.js (v.20) - see [deb.nodesource.com](https://deb.nodesource.com/), or their more detailed [installation instructions on github](https://github.com/nodesource/distributions#installation-instructions):

*(note: I already had the packages `ca-certificates` `curl` and `gnupg` installed, and `/etc/apt/keyrings` existed, so I simplified a little... :-)*

``` shell
$ curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
$ NODE_MAJOR=20
$ echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
$ sudo apt update
$ sudo apt install nodejs -y
$ nodejs --version
v20.9.0
$ npm --version
10.1.0
```

Note: `sudo apt update` will complain about `Skipping acquisition of configured file 'main/binary-i386/Packages', as repository 'https://deb.nodesource.com/node_20.x nodistro InRelease' doesn't support architecture 'i386'` - see here for details and solution: [askubuntu.com](https://askubuntu.com/a/741411):

``` shell
$ NODE_MAJOR=20
$ echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```

