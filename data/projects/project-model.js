// adding resources.
//   - [ ] retrieving a list of resources.
//   - [ ] adding projects.
//   - [ ] retrieving a list of projects.
//   - [ ] adding tasks.
//   - [ ] retrieving a list of tasks

const db = require('../../data/dbConfig');

module.exports = {
    findProjects,
    findPById,
    addProjects,
    findResources,
    addTask,
    findTasks,
    findPResources,
    addResource,
    findRById
}

function findProjects(){
    return db('projects')
}
function findPById(id){
    return db('projects')
        .where({id})
        .first();
}
function addProjects(project){
    return db('projects')
      .insert(project, 'id')
      .then(ids => {
          const [id] = ids;
          return findById(id);
      });
}

function findResources(){
    return db('resources')
}

function addTask(task){
    return db('tasks')
    .insert(task)
    .then(ids => ({id: ids[0]}));
}
function findTasks(project_id){
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select('t.id', 't.task_description', 't.notes', 't.completed', 'p.proj_name')
    .where('t.project_id', project_id);
}

function findPResources(project_id){
    return db('resources as r')
    .join('projects as p', 'p.id', 'r.project_id')
    .select('r.id', 'r.resource_name', 'r.description', 'p.proj_name')
    .where('r.project_id', project_id);
}

function addResource(resource){
    return db('resources')
      .insert(resource, 'id')
      .then(ids => {
    const [id] = ids;
      return findRById(id);
  });
}

function findRById(id){
    return db('resources')
        .where({id})
        .first();
}