// TODO: snake_case to camelCase conversion (either when parsing in ide code or when sending in cli code) to follow typescript naming conventions

/**
 * Attributes shared by raw course data and parsed courses
 */
interface CourseBase {
  /**
   * Name of the course.
   */
  name: string

  /**
   * ID of the course.
   */
  id: number

  /**
   * The course's virtual path in TIM.
   */
  path: string
}

/**
 * Represents raw data coming from cli
 */
export interface CourseDataRaw extends CourseBase {
  /**
   * List of task sets that are defined as part of the course in TIM (without local modifications).
   */
  tasks: Array<TaskSetBase>
}

export type CourseStatus = 'active' | 'hidden'

/**
 * Represents a course in the extensions context
 */
export interface Course extends CourseBase {
  /**
   * List of task sets that are defined as part of the course in TIM.
   */
  taskSets: Array<TaskSet>

  /**
   * User specific status for the course.
   */
  status: CourseStatus
}

/**
 * Represents a task set data
 */
export interface TaskSetBase {
  /**
   * Name of the task.
   */
  name: string

  /**
   * ID of the document containing the task/csPlugin.
   */
  doc_id: number

  /**
   * Task set's virtual path in TIM.
   */
  path: string
}

/**
 * Represents a task set with tasks resolved
 */
export interface TaskSet extends TaskSetBase {
  /**
   * Download path of the taskset
   */
  downloadPath: string | undefined

  /**
   * Tasks of the taskset
   */
  tasks: Array<Task>
}

/**
 * Represents a single task
 */
export interface Task {
  doc_id: number
  ide_task_id: string
  path: string
  // TODO: what data belongs here? Data coming from
  // Following is printed by CLI tool:
  //
  // doc_id:
  // 639244
  // header:
  // null
  // ide_task_id:
  // 't8'
  // path:
  // 'kurssit/tie/ohj2/2024k/demot/DemoC1'
  // stem:
  // null
  // task_files:
  // (1) [{…}]
  // type:
  // 'c++/comtest'
}

/**
 * Data included in .timdata
 */
export interface TimData {
  doc_id: number
  header: string | null
  ide_task_id: string
  max_points: number | null
  path: string
  stem: string | null
  task_files: TaskFile[]
  type: string
}

export interface TaskFile {
  content: string
  file_name: string
  source: string
  task_id_ext: string
  user_args: string
  user_input: string
}

/**
 * Data associated with logged in user
 */
export interface LoginData {
  isLogged: boolean
}

export interface TaskPoints {
  current_points: number
}

/**
 * Messages sent between panels and webviews
 */
export interface WebviewMessage {
  type: MessageType
  value: any
}

/**
 * "type" values for messages sent between panels and webviews
 */
export type MessageType =
  | 'CourseData'
  | 'DownloadTaskSet'
  | 'Login'
  | 'LoginData'
  | 'Logout'
  | 'OnError'
  | 'OnInfo'
  | 'OpenSettings'
  | 'OpenWorkspace'
  | 'RefreshCourseData'
  | 'RequestLoginData'
  | 'ResetExercise'
  | 'ResetNoneditableAreas'
  | 'SetCourseStatus'
  | 'SetDownloadPath'
  | 'SetDownloadPathResult'
  | 'ShowCourses'
  | 'ShowOutput'
  | 'SubmitTask'
  | 'TaskPoints'
  | 'UpdateTaskPoints'
  | 'UpdateTimData'
  | 'UpdateWorkspaceName'
