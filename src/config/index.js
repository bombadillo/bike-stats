const isProd = process.env.NODE_ENV === 'production'

let config = {}

if (isProd) {
  config = {
    env: 'prod'
  }
} else {
  config = {
    env: 'dev'
  }
}

export default config
