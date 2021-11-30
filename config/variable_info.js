const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URL: 'mongodb+srv://user:12345@cluster0.ybwgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  MONGOOSE_OPTION: {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  CORS_OPTIONS: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type', 'Origin'],
    credentials: true,
    optionsSuccessStatus: 200,
    maxAge: -1
  },
  FORBIDDEN_WORDS: ['hello', 'world'],
  SECRET: 'my_secret_key'
}

export default config;
