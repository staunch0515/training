# Change npm's default directory to another directory

1. Make a directory for global installations:

   ```
   mkdir ~/.npm-global
   ```

2. Configure npm to use the new directory path:

   ```
   npm config set prefix '~/.npm-global'
   ```

3. Open or create a ~/.profile file and add this line:

   ```
   exprot PATH=~./npm-global/bin:#PATH
   ```

4. Back on the command line, update your system variables:

   ```
   source ~/.profile
   ```

   Instead of steps 2-4, you can use the corresponding ENV variable:

   ```
   NPM_CONFIG_PREFIX=~/.npm-global
   ```

   # 