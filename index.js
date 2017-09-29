const fs = require('fs-extra');

const dir = 'tamp';

// fs.pathExists(dir)
//   .then(exists => {
//     if (exists) {
//       fs.remove(dir)
//         .then(() => {
//           console.log('Le dossier ', dir, 'existe déjà ! Il a donc été supprimé!');
//         })
//     }
//   })
//   fs.ensureDir(dir)
//   .then(() => {
//     console.log('Le dossier ', dir, 'n\'existait pas. Il a donc été créé !');
//   })
//   .catch(err => console.log('attendu', err))

  // fs.pathExists(dir)
  // .then((statut) => {fs.remove(dir); console.log('remove statut :', statut)})
  // .then((statut) => {setTimeout(()=>{fs.ensureDir(dir); console.log('creation statut :', statut)}, 1000)})
  // .catch(err => console.log('attendu', err))

  fs.pathExists(dir).then(statut => deleteDir(statut, dir)).then(addDir(dir)).catch(err => console.error('erreur catch', err))
  
  function deleteDir(statut, dir){
    if (statut){
      console.log('Le dossier existe (statut :', statut, '), on le supprime !' );
      return fs.remove(dir);
    }
    else {
      console.log('Le dossier n\'existe pas (statut :', statut, '), pas besoin de le supprimer' );
      return Promise.resolve();
      
    }
  }

  function addDir(dir){
    console.log('création du dossier !' );
    return fs.ensureDir(dir);
  }