# Git command

- cacen last commit but keep changes to worktree

  ```cmd
  git reset --soft HEAD~1
  ```

  

# Access github via ssh

github only supports ssh way to read&write the repo, although https way also displayed Read&Write.

## Generating an SSH key

An SSH key consists of a pair of files. One is the private key, which should never be shared with anyone. The other is the public key. The other file is a public key which allows you to log into the containers and VMs you provision. When you generate the keys, you will use `ssh-keygen` to store the keys in a safe location so you can bypass the login prompt when connecting to your instances.

To generate SSH keys in macOS, follow these steps:

1. Enter the following command in the Terminal window.

   ```
   ssh-keygen -t rsa
   ```

   This starts the key generation process. When you execute this command, the `ssh-keygen` utility prompts you to indicate where to store the key.

2. Press the ENTER key to accept the default location. The `ssh-keygen` utility prompts you for a passphrase.

3. Type in a passphrase. You can also hit the ENTER key to accept the default (no passphrase). However, this is not recommended.

![Warning!](https://docs.joyent.com/assets/images/icons/emoticons/warning.gif) You will need to enter the passphrase a second time to continue.

After you confirm the passphrase, the system generates the key pair.

```
Your identification has been saved in /Users/myname/.ssh/id_rsa.
Your public key has been saved in /Users/myname/.ssh/id_rsa.pub.
The key fingerprint is:
ae:89:72:0b:85:da:5a:f4:7c:1f:c2:43:fd:c6:44:38 myname@mymac.local
The key's randomart image is:
+--[ RSA 2048]----+
|                 |
|         .       |
|        E .      |
|   .   . o       |
|  o . . S .      |
| + + o . +       |
|. + o = o +      |
| o...o * o       |
|.  oo.o .        |
+-----------------+
```

Your private key is saved to the `id_rsa` file in the `.ssh` directory and is used to verify the public key you use belongs to the same Triton Compute Service account.

Your public key is saved to the `id_rsa.pub`;file and is the key you upload to your Triton Compute Service account. You can save this key to the clipboard by running this:

```
pbcopy < ~/.ssh/id_rsa.pub
```

## Importing your SSH key

Now you must import the copied SSH key to the portal.

1. After you copy the SSH key to the clipboard, return to [your account page](https://my.joyent.com/main/#!/account).
2. Choose to **Import Public Key** and paste your SSH key into the Public Key field.
3. In the **Key Name** field, provide a name for the key. **Note**: although providing a key name is optional, it is a best practice for ease of managing multiple SSH keys.
4. **Add** the key. It will now appear in your table of keys under SSH.



# Adding a project to Github Without Github

1. Open the command prompt

2. Change into the directory where your source code is located in the command prompt

3. Create a new repository in this directory

   ```
   git init
   ```

4. Add file to your repository. 

   ```
   git add .  // add all your files
   ```

5. Commit your changes 

   ```-
   git commit -m "adding files"
   ```

   [^-m]: let you add the commit message in line

6. Add a remote location -  the repository should be created in GitHub

   ```
   git remote origin https://github.com/yoourusername/your-repo-name.git
   ```

7. Push your commited files

   ```
   git push -u origin master
   ```

   

