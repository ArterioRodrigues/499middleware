const Pool = require('pg').Pool
const pool = new Pool({
  user: 'christopherwu',
  host: 'localhost',
  database: 'exercise_db',
  password: '',
  port: 5432,
});

const deleteUser = (aId) => {
    return new Promise(function(resolve, reject) {
      //const id = parseInt(request.params.id)
      let User_Id1 = parseInt(aId);
      pool.query('DELETE FROM user_list WHERE user_id = $1', [User_Id1], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`User deleted with ID: ${id}`)
      })
    })
  }


  function getUser1(testid){
    return new Promise(function(resolve, reject) {
      const id = parseInt(testid)
      //resolve(id);
      console.log(id);
      pool.query('select * from "user_list" WHERE "user_id" = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    })
  }
  const loginUser = (body) => {
    return new Promise(function(resolve, reject) {
      //const { User_Id,Exercise,Rating,Set,Reps,Date } = body
      let Username1 = body.username;
      let Password1= body.password;
      console.log(Username1,'ahahahaahah');
      console.log(Password1);

      pool.query('select user_id from "user_list" where "username" = ($1) and "password" = ($2)', [Username1,Password1], (error, results) => {
        if (error) {
          reject(error)
        }
        console.log(results.rows);
        resolve(results.rows);
      })
      pool.end
    })
  }
  

  const createUser = (body) => {
    return new Promise(function(resolve, reject) {
      //const { User_Id,Exercise,Rating,Set,Reps,Date } = body
      let User_Id1 = body.user_id;
      let Username1 = body.username;
      let Password1= body.password;
      let Exercise_category1 = body.exercise_category;
      let Difficulty1 = body.difficulty;
      let Location1= body.location;
      let Name1 = body.Name;
      console.log(body,User_Id1, Username1,Password1,Exercise_category1,Difficulty1,Location1);

      pool.query('INSERT INTO "user_list" ("user_id","username","password","exercise_category","difficulty","location","Name) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *', [User_Id1, Username1,Password1,Exercise_category1,Difficulty1,Location1,Name1], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new merchant has been added added: ${results.rows[0]}`)
      })
      pool.end
    })
  }
  module.exports = {
    deleteUser,
    getUser1,
    createUser,
    loginUser
  }





