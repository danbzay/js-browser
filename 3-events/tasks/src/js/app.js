import { TaskList } from "../components/task-list/task-list";
import { FilterWidget } from "../components/filter-widget/filter-widget";

const taskList = new TaskList('.app');
const filterWidget = new FilterWidget('.filter-widget', 
  taskList.filterHandler, taskList.submitHandler);

