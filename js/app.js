// const tasksService = new TasksService();
// const todo = new ToDo(tasksService);

const charactersService = new CharactersService();
const characterList = new CharacterList(charactersService);

characterList.init();