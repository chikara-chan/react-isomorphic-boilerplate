/**
 * Created at 16/4/11.
 * @Author Ling.
 * @Email i@zeroling.com
 */
import path from 'path'

const rootPath = path.join(__dirname, '../../..')
export default {
  rootPath,
  publicPath: '/public',
  staticPath: '/public/static',
  port: 3000,
  db: {
    dialect: 'sqlite',
    username: '',
    password: '',
    database: 'main',
    storage: 'path/to/db.sqlite'
  }
}
