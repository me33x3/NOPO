import mysql from 'mysql2'
import * as config from './config.js'

/** @type {mysql.Pool} */
let pool

export function getDB() {
  if (!pool) {
    throw new Error('Must call after initDatabase()')
  }

  return pool.promise()
}

/**
 * @param {mysql.ConnectionOptions} options
 */
export function initDatabase(options = {}) {
  if (pool) {
    throw new Error('Database already initialized')
  }

  pool = mysql.createPool({
    ...config.mysql,
    ...options,
  })

  console.log('init!!!')
}

export function closeDatabaseAsync() {
  if (!pool) {
    throw new Error('Database was not initialized')
  }

  return new Promise((resolve, reject) => {
    pool.end(err =>
      err ?  reject(err): resolve())
  }).finally(() => pool = null)
}
