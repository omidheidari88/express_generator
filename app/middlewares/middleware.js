const bodyParser = require('body-parser');
const session = require('express-session');
// const sessionFileStore = require('session-file-store')(session);
module.exports = (app) => {
	const ROOT_PATH = path.dirname(require.main.filename);
	const APP_PATH = path.join(ROOT_PATH, 'app');
	app.engine(
		'hbs',
		hbs({
			extname: 'hbs',
			layoutsDir: path.join(APP_PATH, '/views/layouts/'),
		}),
	);
	app.set('views', path.join(__dirname, '../../views'));
	app.set('view engine', 'hbs');
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(
		session({
			secret: process.env.SESSION_SECRET,
			resave: false,
			saveUninitialized: false,
			// store: new sessionFileStore({})
		}),
	);
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));
	// app.use(cookieParser());
};
