const pool = require('./pool')

const initDb = async()=>{

try {
   
    await pool.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);

    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        u_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        bio TEXT
      );
    `);

   
    await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        post_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        u_id UUID REFERENCES users(u_id) ON DELETE CASCADE,
        author_name TEXT NOT NULL,
        text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    console.log('Tables created/ensured successfully');
  } catch (err) {
    console.error('Error creating tables:', err);
  }

}

module.exports = initDb