const oracledb = require('oracledb');
const dbConfig = require('../config/database.js');

async function initialize() {
  await oracledb.createPool(dbConfig.hrPool);
}

module.exports.initialize = initialize;

async function close() {
  await oracledb.getPool().close();
}

module.exports.close = close;

let connection, myContent, json, result;
async function run() {
  try {
    connection = await oracledb.getConnection(
      {user: "system", password: "123456", connectString: "ORCL"});
      result = await connection.execute(
      'insert into PRUEBAMATERIALES(ID, NAME, APELLIDO) values (:id, :name, :apellidos)',
      { id: 6, name: 'lorena', apellidos: 'ibañez' },
      { autoCommit: true}
      ); 
    console.log('Rows inserted: ' + result.rowsAffected);
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
await connection.close();
      } catch (err) {
console.error(err);
      }
    }
  }
}
run();

// oracledb.getConnection(
//       {
//         user          : 'system',
//         password      : '123456',
//         connectString : dbConfig.connectString
//       },
//       function(err, connection) {
//         if(err) {
//           console.log(err.message);
//           return;
//         }
//         connection.execute (

//           // "SELECT * from PRUEBAMATERIALES",
//         'insert into PRUEBAMATERIALES(ID, NAME, APELLIDO) values (:id, :name, :apellidos)',
//         { id: 6, name: 'Lorena', apellidos: 'fernandez' },
//         { autoCommit: true},  
//           // "SELECT * from PRUEBAMATERIALES",
//           // "SELECT * from SYSTEM.AQ$_QUEUE_TABLES",

//           function(err, result) {
//             console.log(result, 'result')
//             if(err) {
//               console.log(err.message);
//               doRelease(connection);
//               return;
//             }
//             console.log(result.metaData);
//             console.log(result.rows);
//             doRelease(connection)
//           }
//         );
//       });

      // function doRelease(connection) {
      //   connection.close(
      //     function(err) {
      //       if(err) {
      //         console.log(err.message);
      //       }
      //     });
      //   }


  

        // let connection, myContent, json, result;
        // async function run() {
        //   try {
        //     connection = await oracledb.getConnection(
        //       {user: "system", password: "123456", connectString: "ORCL"});
        //     myContent = {name: "WENDY", address: {city: "SANTA ANITA"}};
        //     json = JSON.stringify(myContent);
        //     result = await connection.execute(
        //       'insert into mytab (k, c) values (:kbv, :cbv)',
        //       { kbv: 1, cbv: json },
        //       { autoCommit: true}
        //       ); 
        //     console.log('Rows inserted: ' + result.rowsAffected);
        //   } catch (err) {
        //     console.error(err);
        //   } finally {
        //     if (connection) {
        //       try {
        // await connection.close();
        //       } catch (err) {
        // console.error(err);
        //       }
        //     }
        //   }
        // }
        // run();