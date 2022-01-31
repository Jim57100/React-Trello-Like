type List = {
  title   :string,
  isAdded :boolean
}

type TodoListsContainer = {
  title   :string,
  isAdded :boolean,
  List    :Object
}

type Task = {
  text        :string,
  complete    :boolean,
  description :string,
  priority    :string,
  assignedTo  :string,
}

type handleConfirmUpdate = (event: React.MouseEvent<HTMLButtonElement>) => void;

// type AddTitle       = (newTask :string) => void;

// type AddList        = (newList :List) => void;

// type CreateTask     = (newTask :string) => void;

// type ToggleComplete = (selectedTask: Task) => void;

// type DeleteTask     = (selectedTask :Task) => void;

// type UpdateTask     = (selectedTask :Task) => void;