## Як пачаць працаваць з гэтым?

### 0) Спампаваць праект
### 1) Зрабіць `npm install`
### 2) Пачакаць...
### 3) Зрабіць  `npm start`
### 4) Пачакаць...

Калі праблем не ўзьнікла, то можна прагледзець прает
[http://localhost:3000](http://localhost:3000)

## Як задэплоіць гэта?
Surge is one of the fastest ways to deploy frontend projects. Compared to other CLIs, it requires much less configuration, and you can create a Surge account directly from the terminal when using it for the first time.

To deploy the latest build of the project, run the following command in the project root directory.

npm run build
To install Surge CLI globally:

npm install -g surge
Run surge inside the build folder.

cd build
surge
Follow the prompts. First, you’ll be asked for an email and password.

Welcome to surge! (surge.sh)
Login (or create surge account) by entering email & password.
email: admin@ashusingh.me
password:
Before filling in any other prompts, it’s a good idea to confirm your Surge account.

Surge Email Verification
In the terminal, you’ll be asked to confirm your project directory. Hit enter.

You’ll see the domain of your project. Again, hit enter.

    project: D:\code\react-example-deploy\build\
    domain: tremendous-person.surge.sh 
This will publish your application.

Success! - Published to outstanding-scent.surge.sh
You might want to rename index.html to 200.html in your build folder before surging to support the HTML5 pushState API.

If you run into an aborted error, try to run the surge command again.

